from django.contrib import admin
from .models import Category, Product, Rating, OrderProduct, Order

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Rating)
admin.site.register(OrderProduct)
admin.site.register(Order)