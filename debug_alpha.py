import cv2
import numpy as np

def debug_alpha(input_path):
    img = cv2.imread(input_path, cv2.IMREAD_UNCHANGED)
    if img is None:
        print("Error loading image")
        return
        
    alpha = img[:, :, 3]
    height, width = alpha.shape
    row_h = height // 2
    
    print("--- ROW 1 ALPHA COUNT ---")
    row1 = alpha[0:row_h, :]
    for x in range(0, width, 20):
        col_sum = np.sum(row1[:, x] > 20)
        print(f"x={x:04d}: {col_sum}")

if __name__ == '__main__':
    debug_alpha('public/full-collection-transparent.png')
