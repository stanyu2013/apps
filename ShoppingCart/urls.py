"""OnlineStore URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from registration import views as registration_views
from django.contrib.auth import views as auth_views
from OnlineStore import views as store_views
from OnlineStore import settings
from django.contrib.staticfiles.urls import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls, name='admin'),
    path('register/', registration_views.register, name='register'),
    path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', auth_views.LoginView.as_view(template_name='logout.html'), name='logout'),
    path('', store_views.get_products, name='products'),
    #path('<slug:category_slug>', store_views.filter_products, name='filtered_products'),
    path('<int:category_id>', store_views.filter_products, name='filtered_products'),
    path('add/<int:product_id>', store_views.add_cart, name='add'),
    path('remove/<int:product_id>', store_views.remove_product, name='remove'),
    path('details/<int:product_id>', store_views.get_details, name='details'),
    path('cart', store_views.get_cart, name='cart'),
    path('add_rating/<int:pid>/<int:stars>', store_views.add_rating, name='add_rating'),
    path('add_one/<int:product_id>', store_views.add_one, name='add_one'),
    path('remove_one/<int:product_id>', store_views.remove_one, name='remove_one'),
    path('checkout/<str:total_price>', store_views.checkout, name='checkout'),
    path('add_new_one/', store_views.add_new_one, name='add_new_one'),
    path('add_one_ajax/<int:product_id>', store_views.add_one_ajax, name='add_one_ajax'),
    path('remove_one_ajax/<int:product_id>', store_views.remove_one_ajax, name='remove_one_ajax')
]
urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += (
    url(r'^convert/', include('lazysignup.urls')),
)