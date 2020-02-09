from PIL import Image
im = Image.open('/Users/valeria/Desktop/Grafika_komputerowa/Python/Lena.png')
rgb_im = im.convert('RGB')
'''
Laplace mask = [-1, -1, -1
                -1, 8, -1
                -1, -1, -1]
'''
x = 0
y = 0    
(width, height) = im.size

colors_value = 100

dilatation_list = []

for x in range(width):
    for y in range(height):

        r, g, b = rgb_im.getpixel((x, y))

        if r >= colors_value and g >= colors_value and b >= colors_value: # create a black and white picture
            im.putpixel((x, y), (0, 0, 0))

        else:
            im.putpixel((x, y), (255, 255, 255))
        y +=1
    x +=1    

im.show()