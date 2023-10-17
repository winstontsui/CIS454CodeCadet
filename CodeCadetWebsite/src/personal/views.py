from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib.sites.shortcuts import get_current_site
from django.shortcuts import render, redirect
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string

from personal.forms import SignUpForm
from personal.tokens import account_activation_token

@login_required
def home_view(request, *args, **kwargs):
    return render(request, "base.html", {})

def logout(request, *args, **kwargs):
    return render(request, "logout.html", {})

def base(request, *args, **kwargs):
    return render(request, "base.html", {})

def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = False
            user.save()

            current_site = get_current_site(request)
            subject = 'Activate Your MySite Account'
            message = render_to_string('account_activation_email.html', {
                'user': user,
                'domain': current_site.domain,
                'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                'token': account_activation_token.make_token(user),
            })
            user.email_user(subject, '', html_message = message)

            return redirect('account_activation_sent')
    else:
        form = SignUpForm()
    return render(request, 'signup.html', {'form': form})

def account_activation_sent(request):
    return render(request, 'account_activation_sent.html')


def activate(request, uidb64, token):
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None

    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.profile.email_confirmed = True
        user.save()
        login(request, user)
        return redirect('base')
    else:
        return render(request, 'account_activation_invalid.html')
    
def course_catalog(request, *args, **kwargs):
    return render(request, "course_catalog.html", {})

def course_preview(request, *args, **kwargs):
    return render(request, "course_preview.html", {})

def community(request, *args, **kwargs):
    return render(request, "community.html", {})

def c_plus_plus(request, *args, **kwargs):
    return render(request, "c++.html", {})

def java(request, *args, **kwargs):
    return render(request, "java.html", {})

def python(request, *args, **kwargs):
    return render(request, "python.html", {})

