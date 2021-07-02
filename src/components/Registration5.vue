<template>
  <section id="regForm">
    <!--section-->
    <div class="l-main__section">
      <!--contents-->
      <div class="l-main__contents">
        <div class="p-form__registration">
          <h1 class="p-form__registration__title">以下の内容で送信します。</h1>
          <form action="">
          <dl>
            <dt class="p-form__registration__stitle">お名前（名字、イニシャル、ハンドルネーム等）</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">{{objects.dataObject1.name}}</dd>
            <dt class="p-form__registration__stitle">メールアドレス</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">{{objects.dataObject1.mail}}</dd>
            <!-- <dt class="p-form__registration__stitle">パスワード</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">123456789</dd> -->
            <dt class="p-form__registration__stitle">性別</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">{{objects.dataObject1.gender}}</dd>
            <dt class="p-form__registration__stitle">生まれた年</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">{{objects.dataObject1.yearOfBirth}}年</dd>
            <dt class="p-form__registration__stitle">お住いの都道府県</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">{{objects.dataObject1.address1}}</dd>
            <dt class="p-form__registration__stitle">お住まいの市区町村</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">{{objects.dataObject1.address2}}</dd>
            <dt class="p-form__registration__stitle">職種</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">{{objects.dataObject2.occupation}}</dd>
            <dt class="p-form__registration__stitle">雇用形態</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">{{objects.dataObject2.employmentStatus}}</dd>
            <dt class="p-form__registration__stitle">求職する目的や希望する条件は？</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">{{objects.dataObject3.purposeAndConditions.join('、')}}</dd>
            <dt class="p-form__registration__stitle">自分の性格・仕事への姿勢</dt>
            <dd class="p-form__registration__item p-form__registration__item--confirm">{{objects.dataObject4.personalityAndPosture.join('、')}}</dd>
          </dl>
          <div class="p-form__registration__btn u-fbox u-fbox--bxcenter">
            <a class="c-btn__back" @click="back">戻る</a>
            <a class="c-btn__next" @click="next">次へ</a>
          </div>
          
        </form>
        </div>
        
      </div>
      <!--/contents-->
    </div>
    <!--/section-->
  </section>
</template>

<script>
export default {
  name: 'Registration4',
  data () {
    return {
        page : 5,
		}
  },
  props: {
    objects :{
			dataObject1:{
				name : "",
        mail : "",
				password : "",
				gender : "",
				yearOfBirth : "",
				address1 :"",
				address2 :""
			},
			dataObject2:{
				occupation : "",
				employmentStatus : "",
			},
			dataObject3:{
				purposeAndConditions : []
			},
			dataObject4:{
				personalityAndPosture : []
			}
		}
  },
  methods : {
    back(){     
      this.$emit('click', this.page -1)
    },
    next(){    
      this.$router.push('/mailAuth')  
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
