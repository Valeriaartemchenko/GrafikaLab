from PIL import Image
im = Image.open('/Users/valeria/Desktop/Grafika_komputerowa/Python/Lena.png')
rgb_im = im.convert('RGB')

x = 0
y = 0    
(width, height) = im.size

for x in range(width - 1):
    for y in range(height - 1):
          
        

        y +=1
    x +=1    

im.show()

'''
r, g, b = rgb_im.getpixel((x, y))
        r1, g1, b1 = rgb_im.getpixel((x, y+1))
        try:
            r2, g2, b2 = rgb_im.getpixel((x, y+2))
        except IndexError:
            pass

        r3, g3, b3 = rgb_im.getpixel((x+1, y))
        r4, g4, b4 = rgb_im.getpixel((x+1, y+1))
        try:
            r5, g5, b5 = rgb_im.getpixel((x+1, y+2))
        except IndexError:
            pass    
        
        try:
            r6, g6, b6 = rgb_im.getpixel((x+2, y))
            r7, g7, b7 = rgb_im.getpixel((x+2, y+1))
            r8, g8, b8 = rgb_im.getpixel((x+2, y+2))
        except IndexError:    
            r6, g6, b6 = rgb_im.getpixel((x+1, y))
            r7, g7, b7 = rgb_im.getpixel((x+1, y+1))
            r8, g8, b8 = rgb_im.getpixel((x+1, y+1))
        
        if r == 0 or r1 == 0 or r2 == 0 or r3 == 0 or r4 == 0 or r5 == 0 or r6 == 0 or r7 == 0 or r8 == 0:
            im.putpixel((x+1, y+1), (0, 0, 0))
        else:
            im.putpixel((x, y), (255, 255, 255))  '''