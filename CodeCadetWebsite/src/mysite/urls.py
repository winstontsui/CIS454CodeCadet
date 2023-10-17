"""
URL configuration for mysite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
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
from django.contrib.auth.views import LogoutView
from django.urls import path
from personal.views import signup, login, home_view, custom_logout, base, account_activation_sent, activate, course_catalog, course_preview, community, python, c_plus_plus, java

#from django.conf.urls import url, include
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', base, name='base'), 
    path('signup/', signup, name='signup'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', custom_logout, name='logout'),
    path('base/', base, name='base'),
    path('home/', home_view, name= 'home'),
    path('course_catalog', course_catalog, name='course_catalog'),
    path('course_preview', course_preview, name='course_preview'),
    path('community', community, name='community'),
    path('c++', c_plus_plus, name='c++'),
    path('java', java, name='java'),
    path('python', python, name='python'),
    path('admin/', admin.site.urls),
    path('account_activation_sent/', account_activation_sent, name='account_activation_sent'),
    path('activate/<uidb64>/<token>/', activate, name='activate'),
]

admin.site.logout = LogoutView.as_view(next_page='custom_logout')
