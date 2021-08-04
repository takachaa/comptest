<template>
<div>
<!--job-->
  <div class="p-offer">
    <div class="p-offer__thumbnail">
      <img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img">
    </div>
    <div class="p-offer__cat u-fbox u-fbox--alstart u-fbox--bxstart">
      <span class="p-offer__cat__icon">正社員</span>
      <span class="p-offer__cat__icon">未経験OK</span>
    </div>
    <h1 class="p-offer__title">(LIKETO)100%自社開発！北九州で腰を据えて働こう</h1>
    <p class="p-offer__desc">ネットワークエンジニア、Webエンジニア、プログラマー</p>
    <div class="p-offer__detail">
      <dl class="p-offer__detail__company u-padding--bottom0 u-fbox u-fbox--alstart">
        <dt class="p-offer__detail__company__name">株式会社ジョブマッチング</dt>
        <dd class="p-offer__detail__company__url"><a href="" class="p-offer__detail__company__url__text">https://www.xxx.com</a></dd>
        <dd class="p-offer__detail__company__place u-fbox u-fbox--alcenter u-fbox--wauto">福岡県北九州市</dd>
      </dl>
    </div>
    <div class="p-offer__btn u-fbox u-fbox--alcenter">
      <a class="c-btn__good">いいね</a>
      <a class="c-btn__star">お気に入り</a>
    </div>
    <div class="p-offer__detail__details__btn">
      <a class="c-btn__detail">求人の詳細を見る</a >
    </div>
  </div>
  <!--/job-->
  
  <!--job-->
  <div class="p-offer">
    <div class="p-offer__thumbnail">
      <img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img">
    </div>
    <div class="p-offer__cat u-fbox u-fbox--alstart u-fbox--bxstart">
      <span class="p-offer__cat__icon">正社員</span>
      <span class="p-offer__cat__icon">未経験OK</span>
    </div>
    <h1 class="p-offer__title">100%自社開発！北九州で腰を据えて働こう</h1>
    <p class="p-offer__desc">ネットワークエンジニア、Webエンジニア、プログラマー</p>
    <div class="p-offer__detail">
      <dl class="p-offer__detail__company u-padding--bottom0 u-fbox u-fbox--alstart">
        <dt class="p-offer__detail__company__name">株式会社ジョブマッチング</dt>
        <dd class="p-offer__detail__company__url"><a href="" class="p-offer__detail__company__url__text">https://www.xxx.com</a></dd>
        <dd class="p-offer__detail__company__place u-fbox u-fbox--alcenter u-fbox--wauto">福岡県北九州市</dd>
      </dl>
    </div>
    <div class="p-offer__btn u-fbox u-fbox--alcenter">
      <a class="c-btn__good">いいね</a>
      <a class="c-btn__star is-active">お気に入り</a>
    </div>
    <div class="p-offer__detail__details__btn">
      <a class="c-btn__detail">求人の詳細を見る</a >
    </div>
  </div>
  <!--/job--> 
</div>
</template>

<script>
import $ from 'jquery'
import ShowJobOfferDetail from '@/components/ShowJobOfferDetail'

export default {
  name: 'LikeTo',
  props: {
  },
  mounted(){
    
    let that = this

    //以下大石追加分
    $('.c-btn__detail').on('click', function(){
        
        that.showJobOfferDetail(1);
        
    });
  },
  methods:{
    showJobOfferDetail(id) {   
      this.$FModal.show(
        { component: ShowJobOfferDetail },
        {
          jobOfferId : Number(id)
        }
      )
    }

  }
}
</script>
