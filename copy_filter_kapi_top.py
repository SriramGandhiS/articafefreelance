import shutil
import os

def copy_image():
    src = 'C:/Users/iamra/.gemini/antigravity/brain/c55cbf97-7e5f-4721-836c-2c7bf80d016d/media__1780333288907.png'
    dest = 'public/filter_kapi_top.png'
    
    if os.path.exists(src):
        shutil.copy(src, dest)
        print(f"Successfully copied new PNG to {dest}")
    else:
        print(f"Error: {src} does not exist!")

if __name__ == '__main__':
    copy_image()
