import cv2
import numpy as np

def debug_alpha_row2(input_path):
    img = cv2.imread(input_path, cv2.IMREAD_UNCHANGED)
    if img is None:
        print("Error loading image")
        return
        
    alpha = img[:, :, 3]
    height, width = alpha.shape
    row_h = height // 2
    
    print("--- ROW 2 ALPHA COUNT ---")
    row2 = alpha[row_h:height, :]
    for x in range(0, width, 20):
        col_sum = np.sum(row2[:, x] > 20)
        print(f"x={x:04d}: {col_sum}")

if __name__ == '__main__':
    debug_alpha_row2('public/full-collection-transparent.png')
