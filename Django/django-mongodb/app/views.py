from django.shortcuts import render
# from django.http import HttpResponse
import pymongo


client = pymongo.MongoClient(
    "mongodb+srv://root:4mHUTMKh3JixgQk3@realmcluster.zmek8.mongodb.net/?retryWrites=true&w=majority")
db = client["OA-PY-OCT-9-11"]

newuser = db["new-user"]

# data = [
#     {"username": "prabu", "age": 10, "location": "pondy"},
#     {"username": "rahul", "age": 10, "location": "chennai"},
#     {"username": "elamparuthi", "age": 10, "location": "coimbatore"},
#     {"username": "richard", "age": 10, "location": "karaikal"},
# ]

# data = [
#     {"profile": "https://cdna.artstation.com/p/assets/images/images/034/457/398/large/shin-min-jeong-.jpg?1612345160", "username": "prabu",
#         "designation": "developer", "location": "pondy"},
#     {"profile": "https://cdnb.artstation.com/p/assets/images/images/034/457/411/large/shin-min-jeong-.jpg?1612345193", "username": "brathesh",
#         "designation": "developer", "location": "chennai"},
#     {"profile": "https://cdnb.artstation.com/p/assets/images/images/034/457/389/large/shin-min-jeong-.jpg?1612345145", "username": "rahul",
#         "designation": "developer", "location": "coimbatore"},
#     {"profile": "https://cdnb.artstation.com/p/assets/images/images/034/457/405/large/shin-min-jeong-.jpg?1612345177", "username": "richard",
#         "designation": "developer", "location": "karaikal"},
#     {"profile": "https://cdnb.artstation.com/p/marketplace/presentation_assets/001/415/897/medium/file.jpg?1638968127", "username": "elamparuthi",
#         "designation": "developer", "location": "ooty"},
#     {"profile": "https://cdnb.artstation.com/p/assets/images/images/034/457/377/large/shin-min-jeong-.jpg?1612345121", "username": "rakshitha",
#         "designation": "developer", "location": "canada"},
# ]

# newuser.insert_many(data)
# newuser.insert_one(
#     {"profile": "https://cdnb.artstation.com/p/assets/images/images/034/457/377/large/shin-min-jeong-.jpg?1612345121", "username": "john",
#      "designation": "tester", "location": "canada"},
# )


# Create your views here.

data = []

for i in newuser.find():
    data.append(i)


def home(req):
    return render(req, "home.html", {"data":  data})
