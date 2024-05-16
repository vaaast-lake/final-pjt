from django.shortcuts import render, get_object_or_404, get_list_or_404
from rest_framework.decorators import api_view
import requests
from django.conf import settings
from django.http import JsonResponse
from .models import DepositProducts, DepositOptions
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from django.db.models import Max

API_KEY = settings.API_KEY
FINLIFE_BASE_URL = settings.FINLIFE_BASE_URL

# Create your views here.
@api_view(['GET'])
def save_deposit_products(request):
    URL = FINLIFE_BASE_URL + 'depositProductsSearch.json'
    params = {
        'auth': API_KEY,
        'topFinGrpNo': '020000',
        'pageNo': 1
    }

    data = requests.get(URL, params=params).json()

    prdt_base_list = data["result"]["baseList"]
    prdt_option_list = data["result"]["optionList"]

    for prdt in prdt_base_list:
        serializer = DepositProductsSerializer(data=prdt)
        if serializer.is_valid():
            serializer.save()

    for option in prdt_option_list:
        serializer = DepositOptionsSerializer(data=option)
        if serializer.is_valid():
            product = DepositProducts.objects.get(fin_prdt_cd=option["fin_prdt_cd"])
            serializer.save(product=product)
            

#     return Response(status=status.HTTP_200_OK)
    return JsonResponse(data)
