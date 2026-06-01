import cv2
import numpy as np

def check_cv2():
    img = cv2.imread('public/full-collection-cv2.png', cv2.IMREAD_UNCHANGED)
    if img is None:
        print("Error loading full-collection-cv2.png")
        return
        
    alpha = img[:, :, 3]
    height, width = alpha.shape
    row_h = height // 2
    
    print("--- Row 2 Active Pixels in CV2 ---")
    row2 = alpha[row_h:height, :]
    for col_idx in range(5):
        x_start = col_idx * (width // 5)
        x_end = (col_idx + 1) * (width // 5)
        count = np.sum(row2[:, x_start:x_end] > 10)
        print(f"Column {col_idx+1} (x={x_start} to {x_end}): {count} active pixels")

if __name__ == '__main__':
    check_cv2()
