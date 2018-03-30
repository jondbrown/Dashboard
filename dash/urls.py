from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:cust_id>', views.cust, name='cust'),
    path('<int:cust_id>/<str:group>', views.custGroup, name='custGroup'),
    path('<int:cust_id>/<str:group>/<int:grade>', views.custGroupGrade, name='custGroupGrade'),
]
