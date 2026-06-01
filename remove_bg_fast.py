import cv2
import numpy as np

def make_transparent(input_path, output_path):
    # Read the image
    img = cv2.imread(input_path)
    
    # Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Threshold: anything brighter than 20 (almost black) becomes white (255)
    _, mask = cv2.threshold(gray, 20, 255, cv2.THRESH_BINARY)
    
    # Optional: slight blur on the mask to soften edges
    mask = cv2.GaussianBlur(mask, (3, 3), 0)
    
    # Split the original image into B, G, R
    b, g, r = cv2.split(img)
    
    # Merge with the new alpha channel
    rgba = cv2.merge([b, g, r, mask])
    
    # Save the result
    cv2.imwrite(output_path, rgba)
    print("Background removed via cv2!")

if __name__ == '__main__':
    make_transparent('public/full-collection.png', 'public/full-collection-cv2.png')
