from PIL import Image
import sys

def remove_white_bg(input_path, output_path, threshold=230):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    # Simple thresholding: if r, g, b are all > threshold, make transparent
    # To avoid jagged edges, we could use a slight alpha fade, but strict threshold is a start.
    for item in datas:
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            # White-ish pixel -> fully transparent
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    
    # We should also crop the image to its bounding box of non-transparent pixels
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")
    print(f"Saved transparent image to {output_path}")

if __name__ == "__main__":
    remove_white_bg("public/coffee-cup.png", "public/coffee-cup-transparent.png")
