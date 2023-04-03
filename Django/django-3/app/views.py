from django.shortcuts import render

# Create your views here.


def home(req):
    print(req)
    return render(req, "home.html")
