from PIL import Image
import sys

def crop_cups(input_path):
    img = Image.open(input_path)
    # The image is 1536 x 1024. 5 columns, 2 rows.
    # We want Row 1, Column 1, 2, 3
    
    # We will slightly crop inwards to remove edges
    col_w = 1536 // 5
    row_h = 1024 // 2
    
    # Cup 1 (Iced Coffee)
    box1 = (0, 0, col_w, row_h)
    img.crop(box1).save('public/cup1.png')
    
    # Cup 2 (Matcha)
    box2 = (col_w, 0, col_w*2, row_h)
    img.crop(box2).save('public/cup2.png')
    
    # Cup 3 (Strawberry)
    box3 = (col_w*2, 0, col_w*3, row_h)
    img.crop(box3).save('public/cup3.png')

    print("Cropped cups successfully!")

if __name__ == '__main__':
    crop_cups('public/full-collection-transparent.png')
