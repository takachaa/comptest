<template>
  <div>
    <!--header-->
    <header class="l-header" v-if="isHeaderActive">
      <div class="p-header">
        <div class="p-header__menu"><span><span></span></span></div>
        <div class="p-header__logo"><img src="./img/logo.png" alt="meetus" class="p-header__logo__img"></div>
        <div class="p-header__login"><router-link to="/login"><img src="./img/icon_login.svg" alt="ログイン" class="p-header__login__icon"></router-link></div>     
      </div>
    </header>
    <!--/header-->
    <!-- <transition name="slide" mode="out-in" appear> -->
    <transition name="fade">
      <router-view @click="changeHeaderFooterStatus"/>
    </transition>

    <!--footer-->
    <footer v-show="isFooterActive">
      <div class="p-footer">
        <div class="p-footer__menu u-fbox u-fbox--alcenter">
          <!-- <a href="" class="p-footer__menu__icon p-footer__menu__icon--search"></a> -->
          <router-link to="/top2" class="p-footer__menu__icon p-footer__menu__icon--search"></router-link>
          <!-- <a href="" class="p-footer__menu__icon p-footer__menu__icon--good"></a> -->
          <router-link to="/like" class="p-footer__menu__icon p-footer__menu__icon--good"></router-link>			
          <!-- <a href="" class="p-footer__menu__icon p-footer__menu__icon--star"></a> -->
          <router-link to="/favorite" class="p-footer__menu__icon p-footer__menu__icon--star"></router-link>
          <!-- <a href="" class="p-footer__menu__icon p-footer__menu__icon--message"></a> -->
          <router-link to="/message" class="p-footer__menu__icon p-footer__menu__icon--message"><span class="p-footer__menu__icon__num">N</span></router-link>
          <!-- <a href="" class="p-footer__menu__icon p-footer__menu__icon--other"></a> -->
          <router-link to="/menu" class="p-footer__menu__icon p-footer__menu__icon--other"></router-link>
        </div>
      </div>
    </footer>
    <!--/footer-->
  </div>
</template>

<script>
// import $ from 'jquery'

export default {
  name: 'App',
  data(){
    return {
      jobId : this.$route.params.value,
      isHeaderActive: true,
      isFooterActive: true,
      // isSearchDetailActive : false,
      // isCompanyDetailActive : false
    }
  },
  mounted(){
    console.log('app.vue mounted')
    // /**メニューアクションサンプル**/
    // $('.p-footer__menu__icon').on('click',function(e){
    //   e.preventDefault();
    //   $('.p-footer__menu__icon').removeClass('is-active');
    //   $(this).addClass('is-active');
    // });
  },
  updated(){
    console.log('app.vue updated')
    
  },
  methods:{
    changeHeaderFooterStatus(obj){
      this.isHeaderActive = obj.isHeaderActive;
      this.isFooterActive = obj.isFooterActive;
    }
  }
}
</script>


<style>
@import "./css/style.css";
.slide-enter-active {
  transition: all .1s ease;
}
.slide-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-enter, .slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .8s
}
.fade-enter, .fade-leave {
  opacity: 0.5
}
</style>
