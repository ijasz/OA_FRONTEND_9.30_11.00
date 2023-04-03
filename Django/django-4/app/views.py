from django.shortcuts import render

# Create your views here.

context = {
    "name":  [
        {
            'id': 1,
            'firstname': 'Emil',
            'lastname': 'Refsnes',
            'phone': 5551234,
            'joined_date': "2022, 1, 5"
        },
        {
            'id': 2,
            'firstname': 'Tobias',
            'lastname': 'Refsnes',
            'phone': 5557777,
            'joined_date': "2021, 4, 1"
        },
        {
            'id': 3,
            'firstname': 'Linus',
            'lastname': 'Refsnes',
            'phone': 5554321,
            'joined_date': "2021, 12, 24"
        },
        {
            'id': 4,
            'firstname': 'Lene',
            'lastname': 'Refsnes',
            'phone': 5551234,
            'joined_date': "2021, 5, 1"
        },
        {
            'id': 5,
            'firstname': 'Stalikken',
            'lastname': 'Refsnes',
            'phone': 5559876,
            'joined_date': "2022, 9, 29"
        }
    ]
}


def home(req):
    return render(req, "home.html", context)
