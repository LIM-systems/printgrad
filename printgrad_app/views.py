from django.shortcuts import render

# Create your views here.
def display_main_page(request):
    return render(request, 'main_page.html')


def display_sks(request):
    return render(request, 'sks.html')


def display_outsrc(request):
    return render(request, 'outsrc.html')


def display_pks(request):
    return render(request, 'pks.html')


def display_about_us(request):
    return render(request, 'about_us.html')


def display_partners(request):
    return render(request, 'partners.html')