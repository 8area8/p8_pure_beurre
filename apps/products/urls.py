"""Index urls."""

from django.urls import path

from apps.products import views


urlpatterns = [
    path('full_in_database', views.full_in_database, name='full_in_database'),
    path('research_product/<research>/',
         views.research_product, name='research_product'),
    path('results_list/<research>/', views.results_list, name='results_list'),
    path('informations/<product>/', views.informations, name='informations'),
    path('save_substitute/', views.save_substitute, name='save_substitute'),
    path('substitutes/', views.substitutes, name='substitutes'),
    path('del_substitute/', views.del_substitute, name='del_substitute'),
]
