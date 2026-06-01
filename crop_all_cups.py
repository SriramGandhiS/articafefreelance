from PIL import Image
import os

def crop_all_cups(input_path):
    if not os.path.exists(input_path):
        print(f"Error: {input_path} does not exist.")
        return
        
    img = Image.open(input_path)
    # The image is 1536 x 1024. 5 columns, 2 rows.
    width, height = img.size
    print(f"Image dimensions: {width} x {height}")
    
    col_w = width / 5
    row_h = height / 2
    
    # We will slightly crop inwards to avoid adjacent cups bleeding in, if necessary.
    # But let's first crop them exactly to see, or with a tiny 2px inner margin.
    margin = 5
    
    # Crop all 10 cups
    # Row 1: Columns 1, 2, 3, 4, 5 -> cups 1, 2, 3, 4, 5
    # Row 2: Columns 1, 2, 3, 4, 5 -> cups 6, 7, 8, 9, 10
    
    # Map index to coordinates
    for row in range(2):
        for col in range(5):
            idx = row * 5 + col + 1
            left = col * col_w + margin
            top = row * row_h + margin
            right = (col + 1) * col_w - margin
            bottom = (row + 1) * row_h - margin
            
            box = (int(left), int(top), int(right), int(bottom))
            cropped = img.crop(box)
            
            output_name = f"public/cup{idx}.png"
            cropped.save(output_name)
            print(f"Saved {output_name} with box {box}")

if __name__ == '__main__':
    crop_all_cups('public/full-collection-transparent.png')
