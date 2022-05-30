import requests
from PIL import Image

BASE = "http://127.0.0.1:5000"

im = Image.open("/Users/minhdinhtv_761/Documents/images.jpeg")

print(im)

res = requests.post(BASE + "/user/626672ef7117bd00f83c5bdc/user_food", {"foodName": "Bơ", "servingSizeWeight": 100, "servingSizeUnit": "g", "images": im, "calories": 240, "totalCarbohydrates": 12.8, "totalFat": 22.0, "protein": 3})

print(res)