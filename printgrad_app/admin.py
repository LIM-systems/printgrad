from django.contrib import admin
import printgrad_app.models as mdl

# Register your models here.
@admin.register(mdl.Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'date_time')
    list_filter = ('name', 'phone', 'date_time')