import cv2
import numpy as np
import os

def crop_perfect_collection(input_path, output_dir):
    # Read the image with alpha channel
    img = cv2.imread(input_path, cv2.IMREAD_UNCHANGED)
    if img is None:
        print(f"Error: Could not load {input_path}")
        return
        
    height, width, channels = img.shape
    print(f"Image loaded: {width}x{height} with {channels} channels")
    
    if channels < 4:
        print("Error: Image does not have an alpha channel.")
        return
        
    alpha = img[:, :, 3]
    
    # We will slice into Row 1 (0 to 512) and Row 2 (512 to 1024)
    row_height = height // 2
    
    os.makedirs(output_dir, exist_ok=True)
    
    # Let's inspect each row and crop 5 cups per row
    for row_idx in range(2):
        y_start = row_idx * row_height
        y_end = (row_idx + 1) * row_height
        
        row_alpha = alpha[y_start:y_end, :]
        
        # Calculate vertical projection profile
        projection = np.sum(row_alpha > 10, axis=0)  # threshold alpha > 10
        
        # Find active segments. Use a higher active threshold (e.g. 50) to ignore small noises/floating beans
        active_threshold = 50
        active = projection > active_threshold
        
        # Find transition points
        diff = np.diff(active.astype(int))
        starts = np.where(diff == 1)[0] + 1
        ends = np.where(diff == -1)[0] + 1
        
        if active[0]:
            starts = np.insert(starts, 0, 0)
        if active[-1]:
            ends = np.append(ends, width)
            
        segments = list(zip(starts, ends))
        print(f"\n--- Row {row_idx+1} Bounding Segments ---")
        for i, (s, e) in enumerate(segments):
            print(f"Segment {i+1}: x={s} to {e} (width={e-s})")
            
        # Refine segments to split merged cups if they are too wide
        refined_segments = []
        for s, e in segments:
            w = e - s
            if w > 280:
                # Merge detected! Split into parts
                num_parts = round(w / 185)
                if num_parts > 1:
                    print(f"Splitting wide segment {s} to {e} (width {w}) into {num_parts} parts")
                    part_w = w / num_parts
                    for p in range(num_parts):
                        ps = int(s + p * part_w)
                        pe = int(s + (p + 1) * part_w)
                        refined_segments.append((ps, pe))
                else:
                    refined_segments.append((s, e))
            else:
                refined_segments.append((s, e))
                
        # Filter out noise (width < 40)
        refined_segments = [seg for seg in refined_segments if (seg[1] - seg[0]) > 40]
        
        # If we have less than 5 segments, let's fall back to manual centers or adjust threshold
        if len(refined_segments) != 5:
            print(f"Warning: Row {row_idx+1} has {len(refined_segments)} segments instead of 5. Using manual column slices.")
            # Manual fallback slices based on actual visual columns of the 1536x1024 sheet
            col_w = width // 5
            refined_segments = []
            for col_idx in range(5):
                # Squeeze the width slightly to 240px centered inside each 307px column to avoid adjacent cup bleeding
                center = col_idx * col_w + col_w // 2
                s = center - 110
                e = center + 110
                refined_segments.append((s, e))
                
        print(f"Refined Segments count: {len(refined_segments)}")
        for i, (s, e) in enumerate(refined_segments):
            print(f"Refined Segment {i+1}: x={s} to {e} (width={e-s})")
            
        # Crop each segment
        for col_idx, (x_start, x_end) in enumerate(refined_segments):
            cup_idx = row_idx * 5 + col_idx + 1
            if cup_idx > 10:
                break
                
            # Crop the bounding box of the cup in this row
            col_region = row_alpha[:, x_start:x_end]
            y_proj = np.sum(col_region > 10, axis=1)
            y_active = np.where(y_proj > 10)[0]
            
            if len(y_active) > 0:
                y_min = y_active[0]
                y_max = y_active[-1]
            else:
                y_min = 0
                y_max = row_height
                
            # Crop exact region from original RGBA image with safety padding
            crop_x_start = max(0, x_start - 5)
            crop_x_end = min(width, x_end + 5)
            crop_y_start = max(y_start, y_start + y_min - 10)
            crop_y_end = min(y_end, y_start + y_max + 10)
            
            cropped = img[crop_y_start:crop_y_end, crop_x_start:crop_x_end]
            
            # Make a transparent square canvas
            h_crop, w_crop = cropped.shape[:2]
            max_dim = max(h_crop, w_crop)
            canvas = np.zeros((max_dim, max_dim, 4), dtype=np.uint8)
            
            # Center the cup
            x_off = (max_dim - w_crop) // 2
            y_off = (max_dim - h_crop) // 2
            canvas[y_off:y_off+h_crop, x_off:x_off+w_crop] = cropped
            
            # Resize to standard size (e.g. 500x500 for crisp quality)
            standard_size = 500
            resized = cv2.resize(canvas, (standard_size, standard_size), interpolation=cv2.INTER_CUBIC)
            
            output_name = f"{output_dir}/cup{cup_idx}.png"
            cv2.imwrite(output_name, resized)
            print(f"Saved {output_name} (cropped bounding box: {w_crop}x{h_crop})")

if __name__ == '__main__':
    crop_perfect_collection('public/full-collection.png', 'public')
