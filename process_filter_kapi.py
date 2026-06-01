import cv2
import numpy as np

def make_white_transparent(input_path, output_path):
    img = cv2.imread(input_path)
    if img is None:
        print(f"Error: Could not load {input_path}")
        return
        
    print(f"Loaded image: {img.shape}")
    
    # Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Threshold: anything darker than 248 (not pure white) becomes active (255)
    # The background is white, so white pixels have high values (e.g. > 248)
    _, mask = cv2.threshold(gray, 248, 255, cv2.THRESH_BINARY_INV)
    
    # Optional: clean up the mask with some morphology
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
    mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel)
    mask = cv2.GaussianBlur(mask, (3, 3), 0)
    
    # Split BGR channels
    b, g, r = cv2.split(img)
    
    # Merge with the new alpha mask
    rgba = cv2.merge([b, g, r, mask])
    
    # Crop tightly to the non-transparent content
    non_zero = np.where(mask > 10)
    if len(non_zero[0]) > 0:
        y_min, y_max = np.min(non_zero[0]), np.max(non_zero[0])
        x_min, x_max = np.min(non_zero[1]), np.max(non_zero[1])
        
        # Add a 10px margin
        crop_y_start = max(0, y_min - 10)
        crop_y_end = min(img.shape[0], y_max + 10)
        crop_x_start = max(0, x_min - 10)
        crop_x_end = min(img.shape[1], x_max + 10)
        
        cropped = rgba[crop_y_start:crop_y_end, crop_x_start:crop_x_end]
        
        # Center in square canvas
        h_crop, w_crop = cropped.shape[:2]
        max_dim = max(h_crop, w_crop)
        canvas = np.zeros((max_dim, max_dim, 4), dtype=np.uint8)
        
        x_off = (max_dim - w_crop) // 2
        y_off = (max_dim - h_crop) // 2
        canvas[y_off:y_off+h_crop, x_off:x_off+w_crop] = cropped
        
        # Resize to standard 500x500
        resized = cv2.resize(canvas, (500, 500), interpolation=cv2.INTER_CUBIC)
        cv2.imwrite(output_path, resized)
        print(f"Saved transparent cropped image to {output_path}")
    else:
        cv2.imwrite(output_path, rgba)
        print("Warning: Bounding box search yielded empty mask. Saved standard transparency.")

if __name__ == '__main__':
    make_white_transparent(
        'C:/Users/iamra/.gemini/antigravity/brain/c55cbf97-7e5f-4721-836c-2c7bf80d016d/media__1780332457796.jpg',
        'public/filter_kapi.png'
    )
