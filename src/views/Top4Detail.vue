<template>
<div>
	
	<!--main-->
	<main>
		<div class="l-main">
			<!--article-->
			<article>
				
				<section id="jobs">
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents">				
							<!-- <a class="p-offertitle" @click="backTop()">こんな職場です！{{ jobId }} </a> -->
							<router-link :to="{ name: 'Top2', params: { value: jobId }}" class="p-offertitle">こんな職場です！</router-link >
							<!--job-->
							<div class="p-offer p-offer--detail">
								<div class="p-offer__thumbnail">

									<swiper class="swiper" :options="swiperOption">
										<swiper-slide class="slide-1"><img src="../img/test10.jpg" alt="" class="p-offer__thumbnail__img"></swiper-slide>
										<swiper-slide class="slide-2"><img src="../img/test10.jpg" alt="" class="p-offer__thumbnail__img"></swiper-slide>
										<swiper-slide class="slide-3"><img src="../img/test10.jpg" alt="" class="p-offer__thumbnail__img"></swiper-slide>
										<swiper-slide class="slide-4"><img src="../img/test10.jpg" alt="" class="p-offer__thumbnail__img"></swiper-slide>
										<swiper-slide class="slide-5"><video width="384" height="222" controls src="https://res.cloudinary.com/code-kitchen/video/upload/v1555082747/movie.mp4"></video></swiper-slide>
										<div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
										<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
										<div class="swiper-button-next swiper-button-white" slot="button-next"></div>
									</swiper>
																		
									<span class="p-offer__thumbnail__iconbox p-offer__thumbnail__iconbox--detail u-fbox u-fbox--alstart u-fbox--wauto">
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--good"></span>
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--favorite"></span>
									</span>
								</div>
								<div class="p-offer__cat u-fbox u-fbox--alstart u-fbox--bxstart">
									<span class="p-offer__cat__icon">未経験</span>
									<span class="p-offer__cat__icon">若手</span>
									<span class="p-offer__cat__icon">中堅</span>
									<span class="p-offer__cat__icon">熟練</span>
								</div>
								<h1 class="p-offer__title">H・O 32歳(女性) <p class="p-offer__detail__company__place u-fbox u-fbox--alcenter u-fbox--wauto">福岡県北九州市</p></h1>
								<p class="p-offer__desc">ネットワークエンジニア、Webエンジニア、プログラマー</p>
								<div class="p-offer__detail p-offer__detail--details">
									<div class="p-offer__detail__details">
										<p class="p-offer__detail__details__item">初めまして、○○県から参りました○○と申します。<br>現在○○大学で○○を専攻しており、その中で一般企業と共に○○の開発プロジェクトに関わらせていただいています。<br>今回はその開発プロジェクトとはまた違うアプローチで○○に関わっていらっしゃる御社での面接ということで、今まで関わってきた内容との違いという部分にも期待をしています。
<br>今までおこなってきたことを御社との面接で生かせれば、と考えております。宜しくお願いいたします</p>
										<p class="p-offer__detail__details__item">
											職種：通信業<br>
											雇用形態：正社員</p>
									</div>
									<h2 class="p-offer__detail__details__title">求職する目的や希望条件</h2>
									<ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
										<li class="p-offer__detail__details__list__item">しっかり固まった業務内容</li>
										<li class="p-offer__detail__details__list__item">シフト制</li>
										<li class="p-offer__detail__details__list__item">技術力・営業力</li>
										<li class="p-offer__detail__details__list__item">教育が充実</li>
									</ul>
									<h2 class="p-offer__detail__details__title">性格・仕事への姿勢</h2>
									<ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
										<li class="p-offer__detail__details__list__item">やる気と勢い</li>
										<li class="p-offer__detail__details__list__item">「まず、やってみよう」の精神</li>
										<li class="p-offer__detail__details__list__item">フットワークが軽い</li>
										<li class="p-offer__detail__details__list__item">新しいことが好き</li>
										<li class="p-offer__detail__details__list__item">突発残業OK</li>
									</ul>
									<h2 class="p-offer__detail__details__title">学歴</h2>
									<ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
										<li class="p-offer__detail__details__list__item">横浜大学</li>
										<li class="p-offer__detail__details__list__item">横浜高校</li>
									</ul>
									<h2 class="p-offer__detail__details__title">職歴</h2>
									<ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
										<li class="p-offer__detail__details__list__item">Qookai株式会社</li>
										<li class="p-offer__detail__details__list__item">株式会社ヘッズ</li>
									</ul>
									<h2 class="p-offer__detail__details__title">言語</h2>
									<ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
										<li class="p-offer__detail__details__list__item">英語</li>
										<li class="p-offer__detail__details__list__item">日本語</li>
									</ul>
									<h2 class="p-offer__detail__details__title">スキル</h2>
									<ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
										<li class="p-offer__detail__details__list__item">プログラム</li>
										<li class="p-offer__detail__details__list__item">インフラエンジニア</li>
									</ul>
									<!-- <div class="p-offer__detail__details__company">
										<p class="p-offer__detail__details__company__item">会社名：株式会社エムディーシー</p>
										<p class="p-offer__detail__details__company__item">URL：<a href="https://aaa.cp.jp" target="_blank" rel="noopener"></a>https://aaa.cp.jp</p>
										<p class="p-offer__detail__details__company__item">住所：〒800-0321 福岡県京都郡苅田町新浜町1-34</p>
										<p class="p-offer__detail__details__company__item">電話番号：000-0000-0000</p>
										<p class="p-offer__detail__details__company__item">地図（GoogleMap）
											<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.811430190144!2d130.98374551563583!3d33.76553839023065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3543ea24d48e7cef%3A0x1e629c98f103d16f!2z5qCq5byP5Lya56S-44OY44OD44K6IOacrOekvuW3peWgtA!5e0!3m2!1sja!2sjp!4v1624452980941!5m2!1sja!2sjp" style="border:0;" allowfullscreen="" loading="lazy"></iframe></p>
										<div class="p-offer__detail__details__company__agent u-fbox u-fbox--alcenter">
											<img src="../img/user.jpg" alt="" class="p-offer__detail__details__company__agent__img">
											<dl class="p-offer__detail__details__company__agent__detail">
												<dd class="p-offer__detail__details__company__agent__detail__desc">採用担当者</dd>
												<dt class="p-offer__detail__details__company__agent__detail__name">山田 太郎</dt>
											</dl>											
										</div>
									</div>										
									<h2 class="p-offer__detail__details__title p-offer__detail__details__title--agent">自己紹介</h2>
									<p class="p-offer__detail__details__item">テキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミー</p>
									<h2 class="p-offer__detail__details__title">こんな性格です！</h2>
									<ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
										<li class="p-offer__detail__details__list__item">穏やか</li>
										<li class="p-offer__detail__details__list__item">誰とでも打ち解ける</li>
										<li class="p-offer__detail__details__list__item">人の話を聞く</li>
									</ul>
									<h2 class="p-offer__detail__details__title">休日の過ごし方♪</h2>
									<ul class="p-offer__detail__details__list u-fbox u-fbox--alstart u-fbox--bxstart">
										<li class="p-offer__detail__details__list__item">NETFLIX</li>
										<li class="p-offer__detail__details__list__item">ドライブ</li>
										<li class="p-offer__detail__details__list__item">音楽鑑賞</li>
										<li class="p-offer__detail__details__list__item">お笑い番組</li>
									</ul> -->
								</div>
							</div>
							<!--/job-->
							
						</div>
						<!--/contents-->
					</div>
					<!--/section-->
				</section>

			</article>
			<!--/article-->
		</div>	
	</main>
	<!--/main-->

</div>
</template>

<script>
import $ from 'jquery'
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css';

export default {
  name: 'Top3Detail',
//   componets:{
// 	Swiper,
// 	SwiperSlide
//   },
  data(){
	return {
		jobId : '',
		Slides: ["/img/img_company01.png","/img/img_company01.png","/img/img_company01.png","/img/img_company01.png"],
		swiperOption: {
			spaceBetween: 30,
			effect: 'fade',
			// effect: 'flip',
			pagination: {
			el: '.swiper-pagination',
			clickable: true
			},
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
			}
		}
		
	}
  },
  computed: {
		
	},
  created(){
	
  },
  mounted() {
	
	this.$emit('click', {'isHeaderActive':true,'isFooterActive':true}) 

	//画面遷移時に前のページのスクロール位置に引きずられてしまうので、スクロールをTOPにリセット
	window.scrollTo(0,0);

	const that = this;

	//以下大石追加分
	$('.p-offer__thumbnail__iconbox__icon--good').on('click', function(){
		
		if ($(this).hasClass('is-active')) {
			that.toast('「いいね！」を解除しました。');
			$(this).removeClass('is-active');
		} else {
			$(this).addClass('is-active');
			that.toast('「いいね！」を登録しました。');
		}		
	});

	$('.p-offer__thumbnail__iconbox__icon--favorite').on('click', function(){
		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			that.toast('「お気に入り」を解除しました。');
		} else {
			$(this).addClass('is-active');
			that.toast('「お気に入り」を登録しました。');
		}		
	});

	
  },
  methods : {
    toast(message){
		// this.$toast(message,{duration:1000, horizontalPosition:'center', verticalPosition:'center', transition: 'fade',}, )
		this.$toasted.show(message, { theme: "toasted-primary", 
			position: "bottom-center", 
			duration : 1000, 
			fullWidth:true,
			fitToScreen:true,
			className: ['toasting']
			}
		)
	}
  }
}
</script>

<style>
.toasting {
  color: white !important;
  background-color: #41c1eb !important;
  /* margin-bottom:10% !important; */
  /* vertical-align: middle !important; */
  /* display:table-cell !important;;
  vertical-align:middle !important; */
}
</style>
