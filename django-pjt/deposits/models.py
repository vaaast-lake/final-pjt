from django.db import models

# Create your models here.
class DepositProducts(models.Model):
    fin_prdt_cd = models.TextField(unique=True) # 금융 상품 코드
    kor_co_nm = models.TextField(default=-1)    # 금융 회사명
    fin_prdt_nm = models.TextField(default=-1)  # 금융 상품명
    etc_note = models.TextField(default=-1)     # 기타 유의 사항
    mtrt_int = models.TextField(default=-1)     # 만기 후 이자율
    join_deny = models.IntegerField(default=-1) # 가입제한 (1: 제한 없음, 2: 서민전용, 3: 일부 제한)
    join_member = models.TextField(default=-1)  # 가입 대상
    join_way = models.TextField(default=-1)     # 가입 방법
    spcl_cnd = models.TextField(default=-1)     # 우대조건
    max_limit = models.IntegerField(null=True)  # 최고 한도
    dcls_strt_day = models.DateField(auto_now=False, auto_now_add=False) # 공시 시작일
    dcls_end_day = models.DateField(auto_now=False, auto_now_add=False, null=True) # 공시 종료일


class DepositOptions(models.Model):
    product = models.ForeignKey("deposits.DepositProducts", on_delete=models.CASCADE) # 외래 키(DepositProducts)
    fin_co_no = models.TextField()                                                   # 금융 회사 코드
    fin_prdt_cd = models.TextField()                                                 # 금융 상품 코드
    intr_rate_type = models.TextField()                                              # 저축 금리 유형
    intr_rate_type_nm = models.CharField(max_length=100)                             # 저축금리 유형명
    intr_rate = models.FloatField()                                                  # 저축금리
    intr_rate2 = models.FloatField()                                                 # 최고우대금리
    save_trm = models.IntegerField()                                                 # 저축기간 (단위: 개월)