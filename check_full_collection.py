import cv2
import numpy as np

def check_images():
    for name in ['full-collection.png', 'full-collection-cv2.png', 'full-collection-transparent.png']:
        img = cv2.imread(f'public/{name}', cv2.IMREAD_UNCHANGED)
        if img is None:
            print(f"{name} could not be loaded")
            continue
            
        print(f"\n--- {name} ---")
        print(f"Shape: {img.shape}")
        
        # If it has an alpha channel
        if img.shape[2] == 4:
            alpha = img[:, :, 3]
            non_zero = np.where(alpha > 10)
            if len(non_zero[0]) > 0:
                y_min, y_max = np.min(non_zero[0]), np.max(non_zero[0])
                x_min, x_max = np.min(non_zero[1]), np.max(non_zero[1])
                print(f"Alpha active bounds: Y={y_min} to {y_max}, X={x_min} to {x_max}")
            else:
                print("Alpha channel is completely transparent!")
        else:
            print("No alpha channel (3 channels BGR)")

if __name__ == '__main__':
    check_images()
