from rest_framework.parsers import JSONParser
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.db import IntegrityError
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate

# jwt authentication
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenRefreshView


# @csrf_exempt
# def register(request):
#     if request.method == 'POST':
#         try:
#             data = JSONParser().parse(request)
#             user = User.objects.create_user(
#                 data['username'], password=data['password'])
#             user.save()
#             token = Token.objects.create(user=user)
#             return JsonResponse({'token': str(token)}, status=201)

#         except IntegrityError:
#             return JsonResponse({'error': 'That username has already been taken. Please choose a new username'}, status=400)


# @csrf_exempt
# def login(request):
#     if request.method == 'POST':
#         data = JSONParser().parse(request)
#         user = authenticate(request, username=data['username'],
#                             password=data['password'])
#         if user is None:
#             return JsonResponse({'error': 'Wrong email or password!'}, status=400)
#         else:
#             try:
#                 token = Token.objects.get(user=user)
#             except:
#                 token = Token.objects.create(user=user)
#             return JsonResponse({'token': str(token)}, status=200)


class MyTokenRefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)


# @csrf_exempt
# def refresh(request):
#     user = request.user
#     if user.is_authenticated:
#         refresh = RefreshToken.for_user(user)

#         res = JsonResponse({
#             'refresh': str(refresh),
#             'access': str(refresh.access_token),
#         }, status=200)

#         return res
#     else:
#         return JsonResponse({'error': 'You are not logged in!'}, status=400)


@csrf_exempt
def register(request):
    if request.method == 'POST':
        try:
            data = JSONParser().parse(request)
            user = User.objects.create_user(
                data['username'], password=data['password'])
            user.save()
            refresh = RefreshToken.for_user(user)

            res = JsonResponse({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=200)

            # res.set_cookie('access_token', str(refresh.access_token),
            #                httponly=True, secure=True)

            return res

        except IntegrityError:
            return JsonResponse({'error': 'That username has already been taken. Please choose a new username'}, status=400)


@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        user = authenticate(request, username=data['username'],
                            password=data['password'])
        if user is None:
            return JsonResponse({'error': 'Wrong email or password!'}, status=400)
        else:
            refresh = RefreshToken.for_user(user)

            res = JsonResponse({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=200)

            # res.set_cookie(key='access_token', value=str(refresh.access_token),
            #                httponly=True)
            return res
