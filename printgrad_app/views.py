from django.shortcuts import render
import printgrad_app.models as mdl
from django.http import JsonResponse
from printgrad_app.utils import send_email
import json

# Create your views here.
def display_main_page(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        phone = data.get('phone')
        message = f'''Имя: {name}
Телефон: {phone}
'''
        send_email('Новый отклик', message)
        mdl.Client.objects.create(name=name, phone=phone)
        return JsonResponse({'status': 'ok'})
    return render(request, 'main_page.html')


def display_sks(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        phone = data.get('phone')
        message = f'''Имя: {name}
Телефон: {phone}
'''
        send_email('Новый отклик', message)
        mdl.Client.objects.create(name=name, phone=phone)
        return JsonResponse({'status': 'ok'})
    return render(request, 'sks.html')


def display_outsrc(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        phone = data.get('phone')
        message = f'''Имя: {name}
Телефон: {phone}
'''
        send_email('Новый отклик', message)
        mdl.Client.objects.create(name=name, phone=phone)
        return JsonResponse({'status': 'ok'})
    return render(request, 'outsrc.html')


def display_pks(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        phone = data.get('phone')
        message = f'''Имя: {name}
Телефон: {phone}
'''
        send_email('Новый отклик', message)
        mdl.Client.objects.create(name=name, phone=phone)
        return JsonResponse({'status': 'ok'})
    return render(request, 'pks.html')


def display_about_us(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        phone = data.get('phone')
        message = f'''Имя: {name}
Телефон: {phone}
'''
        send_email('Новый отклик', message)
        mdl.Client.objects.create(name=name, phone=phone)
        return JsonResponse({'status': 'ok'})
    return render(request, 'about_us.html')


def display_partners(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        phone = data.get('phone')
        message = f'''Имя: {name}
Телефон: {phone}
'''
        send_email('Новый отклик', message)
        mdl.Client.objects.create(name=name, phone=phone)
        return JsonResponse({'status': 'ok'})
    return render(request, 'partners.html')


def display_po1(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        phone = data.get('phone')
        message = f'''Имя: {name}
Телефон: {phone}
'''
        send_email('Новый отклик', message)
        mdl.Client.objects.create(name=name, phone=phone)
        return JsonResponse({'status': 'ok'})
    return render(request, 'po1.html')


def display_po2(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        phone = data.get('phone')
        message = f'''Имя: {name}
Телефон: {phone}
'''
        send_email('Новый отклик', message)
        mdl.Client.objects.create(name=name, phone=phone)
        return JsonResponse({'status': 'ok'})
    return render(request, 'po2.html')