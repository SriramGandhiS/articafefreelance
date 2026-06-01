import cv2
import numpy as np

def find_active_original():
    img = cv2.imread('public/full-collection.png', cv2.IMREAD_UNCHANGED)
    if img is None:
        print("Error loading original image")
        return
        
    alpha = img[:, :, 3] if img.shape[2] == 4 else None
    height, width = img.shape[:2]
    row_h = height // 2
    
    print("--- Original full-collection.png Search ---")
    if alpha is not None:
        row2 = alpha[row_h:height, :]
        for col_idx in range(5):
            x_start = col_idx * (width // 5)
            x_end = (col_idx + 1) * (width // 5)
            count = np.sum(row2[:, x_start:x_end] > 10)
            print(f"Column {col_idx+1} (x={x_start} to {x_end}): {count} active pixels")
    else:
        # If no alpha, just check average color or non-black pixels
        row2 = img[row_h:height, :, :]
        for col_idx in range(5):
            x_start = col_idx * (width // 5)
            x_end = (col_idx + 1) * (width // 5)
            # Count pixels that are not black (sum of BGR > 30)
            count = np.sum(np.sum(row2[:, x_start:x_end], axis=2) > 30)
            print(f"Column {col_idx+1} (x={x_start} to {x_end}): {count} non-black pixels")

if __name__ == '__main__':
    find_active_original()
