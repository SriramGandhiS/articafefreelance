import cv2
import numpy as np
import os

def crop_twelve_cups(input_path, output_dir):
    img = cv2.imread(input_path, cv2.IMREAD_UNCHANGED)
    if img is None:
        print(f"Error: Could not load {input_path}")
        return
        
    height, width, channels = img.shape
    print(f"Loaded image: {width}x{height} with {channels} channels")
    
    # Exact coordinates for the 6 columns in Row 1 and Row 2
    # Row 1 (y: 0 to 512)
    row1_x_bounds = [
        (60, 270),    # Cup 1 (Signature Iced Coffee)
        (301, 510),   # Cup 2 (Matcha Green Latte)
        (538, 736),   # Cup 3 (Strawberry Milk)
        (752, 961),   # Cup 4 (Blue Lagoon)
        (1019, 1230), # Cup 5 (Watermelon Refresher)
        (1259, 1478)  # Cup 6 (Mint Mojito)
    ]
    
    # Row 2 (y: 512 to 1024)
    row2_x_bounds = [
        (36, 246),    # Cup 7 (Chocolate Frappe)
        (295, 471),   # Cup 8 (Caramel Cold Coffee)
        (526, 723),   # Cup 9 (Madurai Filter Kapi)
        (772, 991),   # Cup 10 (Mint Mojito Row 2)
        (1029, 1209), # Cup 11 (Workshop Special Part 1)
        (1241, 1500)  # Cup 12 (Workshop Special Part 2)
    ]
    
    os.makedirs(output_dir, exist_ok=True)
    
    # Crop Row 1 cups
    for idx, (x_start, x_end) in enumerate(row1_x_bounds):
        cup_idx = idx + 1
        crop_cup(img, 0, 512, x_start, x_end, cup_idx, output_dir)
        
    # Crop Row 2 cups
    for idx, (x_start, x_end) in enumerate(row2_x_bounds):
        cup_idx = idx + 7
        crop_cup(img, 512, 1024, x_start, x_end, cup_idx, output_dir)

def crop_cup(img, y_start, y_end, x_start, x_end, cup_idx, output_dir):
    alpha = img[y_start:y_end, x_start:x_end, 3]
    
    # Find bounding box in y-direction for tight crop
    y_active = np.where(np.sum(alpha > 10, axis=1) > 2)[0]
    if len(y_active) > 0:
        y_min = y_active[0]
        y_max = y_active[-1]
    else:
        y_min = 0
        y_max = y_end - y_start
        
    # Crop with safety margin
    crop_x_start = max(0, x_start - 10)
    crop_x_end = min(img.shape[1], x_end + 10)
    crop_y_start = max(y_start, y_start + y_min - 15)
    crop_y_end = min(y_end, y_start + y_max + 15)
    
    cropped = img[crop_y_start:crop_y_end, crop_x_start:crop_x_end]
    
    h_crop, w_crop = cropped.shape[:2]
    max_dim = max(h_crop, w_crop)
    
    # Create square canvas
    canvas = np.zeros((max_dim, max_dim, 4), dtype=np.uint8)
    
    # Center it
    x_off = (max_dim - w_crop) // 2
    y_off = (max_dim - h_crop) // 2
    canvas[y_off:y_off+h_crop, x_off:x_off+w_crop] = cropped
    
    # Resize to standard size (e.g. 500x500)
    standard_size = 500
    resized = cv2.resize(canvas, (standard_size, standard_size), interpolation=cv2.INTER_CUBIC)
    
    output_path = f"{output_dir}/cup{cup_idx}.png"
    cv2.imwrite(output_path, resized)
    print(f"Saved {output_path} (width={w_crop}, height={h_crop})")

if __name__ == '__main__':
    crop_twelve_cups('public/full-collection.png', 'public')
