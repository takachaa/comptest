<template>
<div>

	
	<!--main-->
	<main>
		<div class="l-main">
			<!--article-->
			<article>
				
				<section id="searchform">
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents">
							<form action="">
								<div class="p-form__search u-fbox u-fbox--alcenter">
									<input type="text" name="search" placeholder="地域や職種、企業名などを検索" class="p-form__search__input">
									<input type="submit" value="検索" class="p-form__search__submit">
								</div>
							</form>
							<a class="p-form__detailopen u-fbox u-fbox--alcenter">より詳細な検索条件を指定</a>
						</div>
						<!--/contents-->
					</div>
					<!--/section-->
				</section>
				
				<section id="jobs">
					<!--section-->
					<div class="l-main__section">
						<!--contents-->
						<div class="l-main__contents">
							
							<!--job-->
							<div class="p-offer" id="1">
								<div class="p-offer__thumbnail">
									<img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img">
									<span class="p-offer__thumbnail__iconbox u-fbox u-fbox--alstart u-fbox--wauto">
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--good"></span>
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--favorite"></span>
									</span>
								</div>
								<div class="p-offer__cat u-fbox u-fbox--alstart u-fbox--bxstart">
									<span class="p-offer__cat__icon">正社員</span>
									<span class="p-offer__cat__icon">未経験OK</span>
								</div>
								<h1 class="p-offer__title">(1)100%自社開発！北九州で腰を据えて働こう</h1>
								<p class="p-offer__desc">ネットワークエンジニア、Webエンジニア、プログラマー</p>
								<div class="p-offer__detail">
									<dl class="p-offer__detail__company u-fbox u-fbox--alstart">
										<dt class="p-offer__detail__company__name">株式会社ジョブマッチング</dt>
										<dd class="p-offer__detail__company__url"><a href="" class="p-offer__detail__company__url__text">https://www.xxx.com</a></dd>
										<dd class="p-offer__detail__company__place u-fbox u-fbox--alcenter u-fbox--wauto">福岡県北九州市</dd>
									</dl>
									<div class="p-offer__detail__arrow--down"></div>
									<div class="p-offer__detail__details">
										<p class="p-offer__detail__details__item">得意先様からの電話・FAXの注文に対するパソコンでの受注処理が主な業務です。<br>その他医薬品メーカーへの商品の発注や、在庫管理などの事務関連業務全般を行っていただきます。</p>
										<p class="p-offer__detail__details__item">会社名：SHINRAI GROUP<br>
											勤務地：熊本市 武蔵ケ丘<br>
											給与：月給 17万〜22万円<br>
											雇用形態：正社員</p>
										<div class="p-offer__detail__details__btn">
											<!-- <a href="" class="c-btn__detail">さらに詳細を見る</a> -->
											<!-- <router-link :to="{ name: 'Top3Detail', params: { value: '1' }}" class="c-btn__detail">さらに詳細を見る</router-link > -->
											<a class="c-btn__detail">さらに詳細を見る</a>
										</div>
										<span class="c-btn__modalclose">詳細を閉じる</span>
									</div>
								</div>
							</div>
							<!--/job-->
							
							<!--job-->
							<div class="p-offer" id="2">
								<div class="p-offer__thumbnail">
									<img src="../img/img_company02.png" alt="" class="p-offer__thumbnail__img">
									<span class="p-offer__thumbnail__iconbox u-fbox u-fbox--alstart u-fbox--wauto">
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--good"></span>
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--favorite"></span>
									</span>
								</div>
								<div class="p-offer__cat u-fbox u-fbox--alstart u-fbox--bxstart">
									<span class="p-offer__cat__icon">正社員</span>
									<span class="p-offer__cat__icon">未経験OK</span>
								</div>
								<h1 class="p-offer__title">(2)100%自社開発！北九州で腰を据えて働こう</h1>
								<p class="p-offer__desc">ネットワークエンジニア、Webエンジニア、プログラマー</p>
								<div class="p-offer__detail">
									<dl class="p-offer__detail__company u-fbox u-fbox--alstart">
										<dt class="p-offer__detail__company__name">株式会社ジョブマッチング</dt>
										<dd class="p-offer__detail__company__url"><a href="" class="p-offer__detail__company__url__text">https://www.xxx.com</a></dd>
										<dd class="p-offer__detail__company__place u-fbox u-fbox--alcenter u-fbox--wauto">福岡県北九州市</dd>
									</dl>
									<div class="p-offer__detail__arrow--down"></div>
									<div class="p-offer__detail__details">
										<p class="p-offer__detail__details__item">得意先様からの電話・FAXの注文に対するパソコンでの受注処理が主な業務です。<br>その他医薬品メーカーへの商品の発注や、在庫管理などの事務関連業務全般を行っていただきます。</p>
										<p class="p-offer__detail__details__item">会社名：SHINRAI GROUP<br>
											勤務地：熊本市 武蔵ケ丘<br>
											給与：月給 17万〜22万円<br>
											雇用形態：正社員</p>
										<div class="p-offer__detail__details__btn">
											<!-- <a href="" class="c-btn__detail">さらに詳細を見る</a> -->
											<!-- <router-link to="/detail" class="c-btn__detail">さらに詳細を見る</router-link> -->
											<!-- <router-link :to="{ name: 'Top3Detail', params: { value: '2' }}" class="c-btn__detail">さらに詳細を見る</router-link > -->
											<a class="c-btn__detail">さらに詳細を見る</a>
										</div>
										<span class="c-btn__modalclose">詳細を閉じる</span>
									</div>
								</div>
							</div>
							<!--/job-->

							<!--job-->
							<div class="p-offer" id="3">
								<div class="p-offer__thumbnail">
									<img src="../img/img_company03.png" alt="" class="p-offer__thumbnail__img">
									<span class="p-offer__thumbnail__iconbox u-fbox u-fbox--alstart u-fbox--wauto">
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--good"></span>
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--favorite"></span>
									</span>
								</div>
								<div class="p-offer__cat u-fbox u-fbox--alstart u-fbox--bxstart">
									<span class="p-offer__cat__icon">正社員</span>
									<span class="p-offer__cat__icon">未経験OK</span>
								</div>
								<h1 class="p-offer__title">(3)100%自社開発！北九州で腰を据えて働こう</h1>
								<p class="p-offer__desc">ネットワークエンジニア、Webエンジニア、プログラマー</p>
								<div class="p-offer__detail">
									<dl class="p-offer__detail__company u-fbox u-fbox--alstart">
										<dt class="p-offer__detail__company__name">株式会社ジョブマッチング</dt>
										<dd class="p-offer__detail__company__url"><a href="" class="p-offer__detail__company__url__text">https://www.xxx.com</a></dd>
										<dd class="p-offer__detail__company__place u-fbox u-fbox--alcenter u-fbox--wauto">福岡県北九州市</dd>
									</dl>
									<div class="p-offer__detail__arrow--down"></div>
									<div class="p-offer__detail__details">
										<p class="p-offer__detail__details__item">得意先様からの電話・FAXの注文に対するパソコンでの受注処理が主な業務です。<br>その他医薬品メーカーへの商品の発注や、在庫管理などの事務関連業務全般を行っていただきます。</p>
										<p class="p-offer__detail__details__item">会社名：SHINRAI GROUP<br>
											勤務地：熊本市 武蔵ケ丘<br>
											給与：月給 17万〜22万円<br>
											雇用形態：正社員</p>
										<div class="p-offer__detail__details__btn">
											<!-- <a href="" class="c-btn__detail">さらに詳細を見る</a> -->
											<!-- <router-link to="/detail" class="c-btn__detail">さらに詳細を見る</router-link> -->
											<!-- <router-link :to="{ name: 'Top3Detail', params: { value: '3' }}" class="c-btn__detail">さらに詳細を見る</router-link > -->
											<a class="c-btn__detail">さらに詳細を見る</a>
										</div>
										<span class="c-btn__modalclose">詳細を閉じる</span>
									</div>
								</div>
							</div>
							<!--/job-->

							<!--job-->
							<div class="p-offer" id="4">
								<div class="p-offer__thumbnail">
									<img src="../img/img_company01.png" alt="" class="p-offer__thumbnail__img">
									<span class="p-offer__thumbnail__iconbox u-fbox u-fbox--alstart u-fbox--wauto">
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--good"></span>
										<span class="p-offer__thumbnail__iconbox__icon p-offer__thumbnail__iconbox__icon--favorite"></span>
									</span>
								</div>
								<div class="p-offer__cat u-fbox u-fbox--alstart u-fbox--bxstart">
									<span class="p-offer__cat__icon">正社員</span>
									<span class="p-offer__cat__icon">未経験OK</span>
								</div>
								<h1 class="p-offer__title">(4 )100%自社開発！北九州で腰を据えて働こう</h1>
								<p class="p-offer__desc">ネットワークエンジニア、Webエンジニア、プログラマー</p>
								<div class="p-offer__detail">
									<dl class="p-offer__detail__company u-fbox u-fbox--alstart">
										<dt class="p-offer__detail__company__name">株式会社ジョブマッチング</dt>
										<dd class="p-offer__detail__company__url"><a href="" class="p-offer__detail__company__url__text">https://www.xxx.com</a></dd>
										<dd class="p-offer__detail__company__place u-fbox u-fbox--alcenter u-fbox--wauto">福岡県北九州市</dd>
									</dl>
									<div class="p-offer__detail__arrow--down"></div>
									<div class="p-offer__detail__details">
										<p class="p-offer__detail__details__item">得意先様からの電話・FAXの注文に対するパソコンでの受注処理が主な業務です。<br>その他医薬品メーカーへの商品の発注や、在庫管理などの事務関連業務全般を行っていただきます。</p>
										<p class="p-offer__detail__details__item">会社名：SHINRAI GROUP<br>
											勤務地：熊本市 武蔵ケ丘<br>
											給与：月給 17万〜22万円<br>
											雇用形態：正社員</p>
										<div class="p-offer__detail__details__btn">
											<!-- <a href="" class="c-btn__detail">さらに詳細を見る</a> -->
											<!-- <router-link to="/detail" class="c-btn__detail">さらに詳細を見る</router-link> -->
											<!-- <router-link :to="{ name: 'Top3Detail', params: { value: '4' }}" class="c-btn__detail">さらに詳細を見る</router-link > -->
											<a class="c-btn__detail">さらに詳細を見る</a>
										</div>
										<span class="c-btn__modalclose">詳細を閉じる</span>
									</div>
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
	<router-link to="/login" class="p-footer__menu__icon p-footer__menu__icon--search"></router-link>
	<!--footer-->
	
	<!--/footer-->
	
	<!--more search-->
	<div class="p-form__jobsearch">
		<form>
			<div class="p-form__jobsearch__item">
				<select name="pref">
					<option value="" selected="">都道府県</option>
					<option value="北海道">北海道</option>
					<option value="青森県">青森県</option>
					<option value="岩手県">岩手県</option>
					<option value="宮城県">宮城県</option>
					<option value="秋田県">秋田県</option>
					<option value="山形県">山形県</option>
					<option value="福島県">福島県</option>
					<option value="茨城県">茨城県</option>
					<option value="栃木県">栃木県</option>
					<option value="群馬県">群馬県</option>
					<option value="埼玉県">埼玉県</option>
					<option value="千葉県">千葉県</option>
					<option value="東京都">東京都</option>
					<option value="神奈川県">神奈川県</option>
					<option value="新潟県">新潟県</option>
					<option value="富山県">富山県</option>
					<option value="石川県">石川県</option>
					<option value="福井県">福井県</option>
					<option value="山梨県">山梨県</option>
					<option value="長野県">長野県</option>
					<option value="岐阜県">岐阜県</option>
					<option value="静岡県">静岡県</option>
					<option value="愛知県">愛知県</option>
					<option value="三重県">三重県</option>
					<option value="滋賀県">滋賀県</option>
					<option value="京都府">京都府</option>
					<option value="大阪府">大阪府</option>
					<option value="兵庫県">兵庫県</option>
					<option value="奈良県">奈良県</option>
					<option value="和歌山県">和歌山県</option>
					<option value="鳥取県">鳥取県</option>
					<option value="島根県">島根県</option>
					<option value="岡山県">岡山県</option>
					<option value="広島県">広島県</option>
					<option value="山口県">山口県</option>
					<option value="徳島県">徳島県</option>
					<option value="香川県">香川県</option>
					<option value="愛媛県">愛媛県</option>
					<option value="高知県">高知県</option>
					<option value="福岡県">福岡県</option>
					<option value="佐賀県">佐賀県</option>
					<option value="長崎県">長崎県</option>
					<option value="熊本県">熊本県</option>
					<option value="大分県">大分県</option>
					<option value="宮崎県">宮崎県</option>
					<option value="鹿児島県">鹿児島県</option>
					<option value="沖縄県">沖縄県</option>
				</select>
			</div>
			<div class="p-form__jobsearch__item">
				<select name="occupation">
					<option value="" selected="">職種を選んでください</option>
					<option value="営業">営業</option>
					<option value="製造業">製造業</option>
					<option value="サービス業">サービス業</option>
					<option value="飲食業">飲食業</option>
				</select>
			</div>
			<div class="p-form__jobsearch__item">
				<input type="text" name="keyword" placeholder="キーワード検索">
			</div>
			<!-- <div class="p-form__jobsearch__item">
				<select name="salary">
					<option value="" selected>給与形態</option>
					<option value="時給">時給</option>
					<option value="月給">月給</option>
					<option value="日給">日給</option>
					<option value="年収">年収</option>
				</select>
			</div>
			<div class="p-form__jobsearch__item p-form__jobsearch__item--salary u-fbox u-fbox--alcenter">
				<select name="min" class="p-form__item__range">
					<option value="" selected>MIN</option>
					<option value="¥100,000">¥100,000</option>
					<option value="¥200,000">¥200,000</option>
					<option value="¥300,000">¥300,000</option>
					<option value="¥400,000">¥400,000</option>
				</select>
				<span class="p-form__jobsearch__item__range--opt">〜</span>
				<select name="max" class="p-form__item__range">
					<option value="" selected>MAX</option>
					<option value="¥100,000">¥100,000</option>
					<option value="¥200,000">¥200,000</option>
					<option value="¥300,000">¥300,000</option>
					<option value="¥400,000">¥400,000</option>
				</select>
			</div> -->
			<div class="p-form__jobsearch__item">
				<select name="salary" v-model="category" v-on:change="changeCategory">
					<option value="" selected>給与形態</option>
					<option v-for="option in categoryOptions" v-bind:value="option.value" :key="option.index">
					{{ option.text }}
					</option>
				</select>
			</div>
			<div v-if="selectVisible" class="p-form__jobsearch__item p-form__jobsearch__item--salary u-fbox u-fbox--alcenter">
				<select v-model="minSelect" name="min" class="p-form__item__range">
					<option value="" selected>MIN</option>
					<option v-for="option in minOptions[category]" v-bind:value="option.value"  :key="option.index">
					{{ option.text }}
					</option>
				</select>
				<span class="p-form__jobsearch__item__range--opt">〜</span>
				<select v-model="maxSelect" name="max" class="p-form__item__range">
					<option value="" selected>MAX</option>
					<option v-for="option in maxOptions[category]" v-bind:value="option.value"  :key="option.index">
					{{ option.text }}
					</option>
				</select>
			</div>
			<div class="p-form__jobsearch__title">求職する目的や希望する条件は？<span>（複数選択可能）</span></div>
			<div class="p-form__jobsearch__item">
				<div class="p-form__checkbox u-fbox u-fbox--alstart u-fbox--bxstart">
					<label><input type="checkbox" name="purpose" value="年収アップ"><span>年収アップ</span></label>
					<label><input type="checkbox" name="purpose" value="スキルチェンジ"><span>スキルチェンジ</span></label>
					<label><input type="checkbox" name="purpose" value="自分にあった職場探し"><span>自分にあった職場探し</span></label>
					<label><input type="checkbox" name="purpose" value="Uターン/Iターン"><span>ターン/Iターン</span></label>
					<label><input type="checkbox" name="purpose" value="新しいことにチャレンジ"><span>新しいことにチャレンジ</span></label>
					<label><input type="checkbox" name="purpose" value="通勤時間の短縮"><span>通勤時間の短縮</span></label>
					<label><input type="checkbox" name="purpose" value="環境の良い場所へ移住"><span>環境の良い場所へ移住</span></label>
					<label><input type="checkbox" name="purpose" value="フレックス制度"><span>フレックス制度</span></label>
					<label><input type="checkbox" name="purpose" value="しっかり固まった業務内容"><span>しっかり固まった業務内容</span></label>
					<label><input type="checkbox" name="purpose" value="シフト制"><span>シフト制</span></label>
					<label><input type="checkbox" name="purpose" value="会社全体のやる気・勢い"><span>会社全体のやる気・勢い</span></label>
					<label><input type="checkbox" name="purpose" value="勤務時間の明確化"><span>勤務時間の明確化</span></label>
					<label><input type="checkbox" name="purpose" value="教育が充実"><span>教育が充実</span></label>
					<label><input type="checkbox" name="purpose" value="祝日休業"><span>祝日休業</span></label>
					<label><input type="checkbox" name="purpose" value="技術力・営業力"><span>技術力・営業力</span></label>
					<label><input type="checkbox" name="purpose" value="夏季休暇制度"><span>夏季休暇制度</span></label>
					<label><input type="checkbox" name="purpose" value="安定性"><span>安定性</span></label>
					<label class="p-form__checkbox__w100"><input type="checkbox" name="purpose" value="勤務時間調整がある程度できる"><span>勤務時間調整がある程度できる</span></label>
					<label class="p-form__checkbox__w100"><input type="checkbox" name="purpose" value="仕事について相談できる環境"><span>仕事について相談できる環境</span></label>
				</div>
			</div>
			<div class="p-form__jobsearch__title">自分の性格・仕事への姿勢<span>（複数選択可能）</span></div>
			<div class="p-form__jobsearch__item">
				<div class="p-form__checkbox u-fbox u-fbox--alstart u-fbox--bxstart">
					<label><input type="checkbox" name="personality" value="やる気と勢い"><span>やる気と勢い</span></label>
					<label><input type="checkbox" name="personality" value="緻密・正確な作業"><span>緻密・正確な作業</span></label>
					<label><input type="checkbox" name="personality" value="ミスが少ない"><span>ミスが少ない</span></label>
					<label><input type="checkbox" name="personality" value="「まず、やってみよう」の精神"><span>「まず、やってみよう」の精神</span></label>
					<label><input type="checkbox" name="personality" value="時間に正確"><span>時間に正確</span></label>
					<label><input type="checkbox" name="personality" value="集中力が高い"><span>集中力が高い</span></label>
					<label><input type="checkbox" name="personality" value="フットワークが軽い"><span>フットワークが軽い</span></label>
					<label><input type="checkbox" name="personality" value="会社・上司を尊重"><span>会社・上司を尊重</span></label>
					<label><input type="checkbox" name="personality" value="部下の面倒見が良い"><span>部下の面倒見が良い</span></label>
					<label><input type="checkbox" name="personality" value="チームワークが得意"><span>チームワークが得意</span></label>
					<label><input type="checkbox" name="personality" value="新しいことが好き"><span>新しいことが好き</span></label>
					<label><input type="checkbox" name="personality" value="覚えた作業は着実にこなす"><span>覚えた作業は着実にこなす</span></label>
					<label><input type="checkbox" name="personality" value="何でも調べる"><span>何でも調べる</span></label>
					<label><input type="checkbox" name="personality" value="メモはしっかり取る"><span>メモはしっかり取る</span></label>
					<label><input type="checkbox" name="personality" value="自分の意見をはっきり言う"><span>自分の意見をはっきり言う</span></label>
					<label><input type="checkbox" name="personality" value="相手の話に耳を傾ける"><span>相手の話に耳を傾ける</span></label>
					<label><input type="checkbox" name="personality" value="進むべき方向に向かって全力"><span>進むべき方向に向かって全力</span></label>
					<label><input type="checkbox" name="personality" value="相手を立てる"><span>相手を立てる</span></label>
					<label><input type="checkbox" name="personality" value="突発残業OK"><span>突発残業OK</span></label>
					<label><input type="checkbox" name="personality" value="計画的な残業OK"><span>計画的な残業OK</span></label>
					<label class="p-form__checkbox__w100"><input type="checkbox" name="personality" value="仕事は時間内にしっかりこなす"><span>仕事は時間内にしっかりこなす</span></label>
					<label class="p-form__checkbox__w100"><input type="checkbox" name="personality" value="状況に柔軟に対応"><span>状況に柔軟に対応</span></label>
				</div>
			</div>
			<div class="p-form__jobsearch__btn u-fbox u-fbox--alcenter u-fbox--bxcenter">
				<a href="" class="c-btn__clear">条件をクリア</a>
				<a href="" class="c-btn__search">上記の条件で検索</a>
			</div>
			<span class="p-form__jobsearch__close"></span>
		</form>
	</div>
	<!--m/ore search-->
</div>
</template>

<script>
import $ from 'jquery'
import ShowJobOfferDetail from '@/components/ShowJobOfferDetail'

export default {
  name: 'Login',
  data(){
	return {
		jobId : this.$route.params.value,
		// isSearchDetailActive : false,
		// isCompanyDetailActive : false
		selectVisible:false,
		category:'',
		minSelect:'',
		maxSelect:'',
		categoryOptions: [
            { text: '時給', value: '時給' },
			{ text: '日給', value: '日給' },
            { text: '月給', value: '月給' },
			{ text: '年収', value: '年収' }
        ],
		minOptions: {
            時給: [
                {text: "¥900", value: "900"},
                {text: "¥1,000", value: "1000"},
				{text: "¥1,100", value: "1100"},
				{text: "¥1,200", value: "1200"},
				{text: "¥1,300", value: "1300"},
				{text: "¥1,400", value: "1400"},
				{text: "¥1,500", value: "1500"},
				{text: "¥1,600", value: "1600"},
				{text: "¥1,700", value: "1700"},
				{text: "¥1,800", value: "1800"},
				{text: "¥1,900", value: "1900"},
				{text: "¥2,000", value: "2000"},
				{text: "¥2,100", value: "2100"},
				{text: "¥2,200", value: "2200"},
				{text: "¥2,300", value: "2300"},
				{text: "¥2,400", value: "2400"},
				{text: "¥2,500", value: "2500"},
				{text: "¥2,600", value: "2600"},
				{text: "¥2,700", value: "2700"},
				{text: "¥2,800", value: "2800"},
				{text: "¥2,900", value: "2900"},
				{text: "¥3,000", value: "3000"},
            ],
			日給:[
                {text: "¥5,000", value: "5000"},
				{text: "¥10,000", value: "10000"},
				{text: "¥15,000", value: "15000"},
				{text: "¥20,000", value: "20000"},
				{text: "¥25,000", value: "25000"},
				{text: "¥30,000", value: "30000"},
				{text: "¥35,000", value: "35000"},
				{text: "¥40,000", value: "40000"},
				{text: "¥45,000", value: "45000"},
				{text: "¥50,000", value: "50000"},
				{text: "¥55,000", value: "55000"},
				{text: "¥60,000", value: "60000"},
				{text: "¥65,000", value: "65000"},
				{text: "¥70,000", value: "70000"},
				{text: "¥75,000", value: "75000"},
				{text: "¥80,000", value: "80000"},
				{text: "¥85,000", value: "85000"},
				{text: "¥90,000", value: "90000"},
				{text: "¥95,000", value: "95000"},
				{text: "¥100,000", value: "100000"},     
            ],
            月給:[
                {text: "¥100,000", value: "100000"},
                {text: "¥150,000", value: "150000"},
				{text: "¥200,000", value: "200000"},
				{text: "¥250,000", value: "250000"},
				{text: "¥300,000", value: "300000"},
				{text: "¥350,000", value: "350000"},
				{text: "¥400,000", value: "400000"},
				{text: "¥450,000", value: "450000"},
				{text: "¥500,000", value: "500000"},
				{text: "¥550,000", value: "550000"},
				{text: "¥600,000", value: "600000"},
				{text: "¥650,000", value: "650000"},
				{text: "¥700,000", value: "700000"},
				{text: "¥750,000", value: "750000"},
				{text: "¥800,000", value: "800000"},
				{text: "¥850,000", value: "850000"},
				{text: "¥900,000", value: "900000"},
				{text: "¥950,000", value: "950000"},
				{text: "¥1000,000", value: "1000000"},
            ],
			年収:[
                {text: "¥1000,000", value: "1000000"},
				{text: "¥1500,000", value: "1500000"},
				{text: "¥2000,000", value: "2000000"},
				{text: "¥2500,000", value: "2500000"},
				{text: "¥3000,000", value: "3000000"},
				{text: "¥3500,000", value: "3500000"},
				{text: "¥4000,000", value: "4000000"},
				{text: "¥4500,000", value: "4500000"},
				{text: "¥5000,000", value: "5000000"},
				{text: "¥5500,000", value: "5500000"},
				{text: "¥6000,000", value: "6000000"},
				{text: "¥6500,000", value: "6500000"},
				{text: "¥7000,000", value: "7000000"},
				{text: "¥7500,000", value: "7500000"},
				{text: "¥8000,000", value: "8000000"},
				{text: "¥8500,000", value: "8500000"},
				{text: "¥9000,000", value: "9000000"},
				{text: "¥9500,000", value: "9500000"},
				{text: "¥10000,000", value: "10000000"},
               
            ],
        },
		maxOptions: {
            時給: [
                {text: "¥900", value: "900"},
                {text: "¥1,000", value: "1000"},
				{text: "¥1,100", value: "1100"},
				{text: "¥1,200", value: "1200"},
				{text: "¥1,300", value: "1300"},
				{text: "¥1,400", value: "1400"},
				{text: "¥1,500", value: "1500"},
				{text: "¥1,600", value: "1600"},
				{text: "¥1,700", value: "1700"},
				{text: "¥1,800", value: "1800"},
				{text: "¥1,900", value: "1900"},
				{text: "¥2,000", value: "2000"},
				{text: "¥2,100", value: "2100"},
				{text: "¥2,200", value: "2200"},
				{text: "¥2,300", value: "2300"},
				{text: "¥2,400", value: "2400"},
				{text: "¥2,500", value: "2500"},
				{text: "¥2,600", value: "2600"},
				{text: "¥2,700", value: "2700"},
				{text: "¥2,800", value: "2800"},
				{text: "¥2,900", value: "2900"},
				{text: "¥3,000", value: "3000"},
            ],
			日給:[
                {text: "¥5,000", value: "5000"},
				{text: "¥10,000", value: "10000"},
				{text: "¥15,000", value: "15000"},
				{text: "¥20,000", value: "20000"},
				{text: "¥25,000", value: "25000"},
				{text: "¥30,000", value: "30000"},
				{text: "¥35,000", value: "35000"},
				{text: "¥40,000", value: "40000"},
				{text: "¥45,000", value: "45000"},
				{text: "¥50,000", value: "50000"},
				{text: "¥55,000", value: "55000"},
				{text: "¥60,000", value: "60000"},
				{text: "¥65,000", value: "65000"},
				{text: "¥70,000", value: "70000"},
				{text: "¥75,000", value: "75000"},
				{text: "¥80,000", value: "80000"},
				{text: "¥85,000", value: "85000"},
				{text: "¥90,000", value: "90000"},
				{text: "¥95,000", value: "95000"},
				{text: "¥100,000", value: "100000"}, 
            ],
            月給:[
                {text: "¥100,000", value: "100000"},
                {text: "¥150,000", value: "150000"},
				{text: "¥200,000", value: "200000"},
				{text: "¥250,000", value: "250000"},
				{text: "¥300,000", value: "300000"},
				{text: "¥350,000", value: "350000"},
				{text: "¥400,000", value: "400000"},
				{text: "¥450,000", value: "450000"},
				{text: "¥500,000", value: "500000"},
				{text: "¥550,000", value: "550000"},
				{text: "¥600,000", value: "600000"},
				{text: "¥650,000", value: "650000"},
				{text: "¥700,000", value: "700000"},
				{text: "¥750,000", value: "750000"},
				{text: "¥800,000", value: "800000"},
				{text: "¥850,000", value: "850000"},
				{text: "¥900,000", value: "900000"},
				{text: "¥950,000", value: "950000"},
				{text: "¥1000,000", value: "1000000"},
            ],	
			年収:[
                {text: "¥1000,000", value: "1000000"},
				{text: "¥1500,000", value: "1500000"},
				{text: "¥2000,000", value: "2000000"},
				{text: "¥2500,000", value: "2500000"},
				{text: "¥3000,000", value: "3000000"},
				{text: "¥3500,000", value: "3500000"},
				{text: "¥4000,000", value: "4000000"},
				{text: "¥4500,000", value: "4500000"},
				{text: "¥5000,000", value: "5000000"},
				{text: "¥5500,000", value: "5500000"},
				{text: "¥6000,000", value: "6000000"},
				{text: "¥6500,000", value: "6500000"},
				{text: "¥7000,000", value: "7000000"},
				{text: "¥7500,000", value: "7500000"},
				{text: "¥8000,000", value: "8000000"},
				{text: "¥8500,000", value: "8500000"},
				{text: "¥9000,000", value: "9000000"},
				{text: "¥9500,000", value: "9500000"},
				{text: "¥10000,000", value: "10000000"},
            ],
        }
	}
  },
  mounted: function() {
	
	const that = this;

	that.$emit('click', {'isHeaderActive':true,'isFooterActive':true}) 
	
	$('.p-form__detailopen').on('click',function(e) {
		e.preventDefault();
		$('.p-form__jobsearch').addClass('is-active');
		$('body').addClass('is-active');
	});

	$('.p-form__jobsearch__close').on('click',function() {
		$('.p-form__jobsearch').removeClass('is-active');
		$('.p-form__jobsearch__title').removeClass('is-active');
		$('body').removeClass('is-active');
		$('.p-form__jobsearch__title + .p-form__jobsearch__item').removeAttr('style');
	});

	$('.p-offer__detail__arrow--down').on('click',function() {
		$(this).next('.p-offer__detail__details').slideToggle(300);
		$(this).toggleClass('is-active');
	});
	
	$('.p-offer__detail .c-btn__modalclose').on('click',function() {
		$(this).parents('.p-offer__detail').find('.p-offer__detail__details').slideToggle(300);
		$(this).parents('.p-offer__detail').find('.p-offer__detail__arrow--down').toggleClass('is-active');
	});
	
	$('.p-form__jobsearch__title').on('click',function() {
		$(this).toggleClass('is-active');
		$(this).next('.p-form__jobsearch__item').slideToggle(300);
	});

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

	//以下大石追加分
    $('.c-btn__detail').on('click', function(){
        
        that.showJobOfferDetail(1);
        
    });


	//詳細からの画面遷移の場合はJOBIDがパラメータで送られてくるので対象の仕事情報までスクロール
	// if(that.jobId){
	// 	$(`#${that.jobId}`).get(0).scrollIntoView(true)
	// }


	
  },
  methods : {
	changeCategory: function(){
	
		if(this.category != ""){
			this.selectVisible = true
		}else{
			this.selectVisible = false
		}
		
		this.minSelect = '';
		this.maxSelect = '';
	},
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
	},
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