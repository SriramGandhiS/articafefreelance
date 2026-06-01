import cv2
import numpy as np
import os

def crop_perfect_cups(input_path, output_dir):
    # Read the image with alpha channel
    img = cv2.imread(input_path, cv2.IMREAD_UNCHANGED)
    if img is None:
        print(f"Error: Could not load {input_path}")
        return
        
    print(f"Image shape: {img.shape}")
    
    # Check if there is an alpha channel
    if img.shape[2] < 4:
        print("Error: Image does not have an alpha channel.")
        return
        
    alpha = img[:, :, 3]
    
    # Find contours in the alpha channel
    contours, _ = cv2.findContours(alpha, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    print(f"Found {len(contours)} initial contours.")
    
    # Filter contours by area to ignore tiny noise dots
    min_area = 5000
    filtered_contours = [c for c in contours if cv2.contourArea(c) > min_area]
    print(f"Found {len(filtered_contours)} contours after area filtering.")
    
    # Get bounding boxes for each contour
    boxes = []
    for c in filtered_contours:
        x, y, w, h = cv2.boundingRect(c)
        boxes.append((x, y, w, h))
    
    # Sort boxes: first separate into two rows (top and bottom) based on y-coordinate
    # Since there are 2 rows of cups, the average height is 1024/2 = 512.
    # We can separate them by y < 450 (Row 1) and y >= 450 (Row 2).
    row1 = [b for b in boxes if b[1] < 450]
    row2 = [b for b in boxes if b[1] >= 450]
    
    # Sort each row horizontally (by x-coordinate)
    row1_sorted = sorted(row1, key=lambda b: b[0])
    row2_sorted = sorted(row2, key=lambda b: b[0])
    
    all_sorted_boxes = row1_sorted + row2_sorted
    print(f"Sorted boxes count: {len(all_sorted_boxes)}")
    
    os.makedirs(output_dir, exist_ok=True)
    
    # Crop each cup with some padding and center it
    for idx, box in enumerate(all_sorted_boxes):
        x, y, w, h = box
        print(f"Cup {idx+1}: x={x}, y={y}, w={w}, h={h}")
        
        # Crop the image at bounding box
        cropped = img[y:y+h, x:x+w]
        
        # We want to save it centered in a transparent square or uniform box
        # Let's find the max dimension
        max_dim = max(w, h)
        
        # Create a transparent square canvas
        canvas = np.zeros((max_dim, max_dim, 4), dtype=np.uint8)
        
        # Calculate offsets to center the cropped cup
        x_offset = (max_dim - w) // 2
        y_offset = (max_dim - h) // 2
        
        # Paste the cropped cup into the center of the canvas
        canvas[y_offset:y_offset+h, x_offset:x_offset+w] = cropped
        
        # Resize to standard size (e.g. 400x400) for uniform loading
        standard_size = 400
        resized = cv2.resize(canvas, (standard_size, standard_size), interpolation=cv2.INTER_AREA)
        
        output_path = os.path.join(output_dir, f"cup{idx+1}.png")
        cv2.imwrite(output_path, resized)
        print(f"Saved {output_path}")

if __name__ == '__main__':
    crop_perfect_cups('public/full-collection-transparent.png', 'public')
