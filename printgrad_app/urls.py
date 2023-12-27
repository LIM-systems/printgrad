from django.urls import path
from . import views


urlpatterns = [
    path('', views.display_main_page, name='main'),
    path('sks/', views.display_sks, name='sks'),
    path('outsrc/', views.display_outsrc, name='outsrc'),
    path('pks/', views.display_pks, name='pks'),
    path('about_us/', views.display_about_us, name='about_us'),
    path('partners/', views.display_partners, name='partners'),
]