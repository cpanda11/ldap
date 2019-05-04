from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'index.html')


def search_group_by_uid(request):
    uid = request.GET.get('uid')
    print('User ID: ', uid)
    return JsonResponse({'result': True})
