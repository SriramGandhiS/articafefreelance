import cv2
import numpy as np

def find_active_pixels():
    img = cv2.imread('public/full-collection-transparent.png', cv2.IMREAD_UNCHANGED)
    if img is None:
        print("Error loading image")
        return
        
    alpha = img[:, :, 3]
    height, width = alpha.shape
    row_h = height // 2
    
    print("--- Row 2 Active Pixels Search ---")
    row2 = alpha[row_h:height, :]
    non_zero = np.where(row2 > 10)
    
    if len(non_zero[0]) > 0:
        y_indices = non_zero[0] + row_h
        x_indices = non_zero[1]
        print(f"Row 2 active Y bounds: {np.min(y_indices)} to {np.max(y_indices)}")
        print(f"Row 2 active X bounds: {np.min(x_indices)} to {np.max(x_indices)}")
        
        # Let's count active pixels in columns in Row 2
        for col_idx in range(5):
            x_start = col_idx * (width // 5)
            x_end = (col_idx + 1) * (width // 5)
            count = np.sum(row2[:, x_start:x_end] > 10)
            print(f"Column {col_idx+1} (x={x_start} to {x_end}): {count} active pixels")
    else:
        print("No active pixels found in Row 2!")

if __name__ == '__main__':
    find_active_pixels()
