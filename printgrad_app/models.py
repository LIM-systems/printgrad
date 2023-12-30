from django.db import models

# Create your models here.


class Client(models.Model):
    name = models.CharField(max_length=120)
    phone = models.CharField(max_length=120)
    date_time = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Клиент'
        verbose_name_plural = 'Клиенты'

    def __str__(self):
        return self.name