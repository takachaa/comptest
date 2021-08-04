<template>
  <section id="regForm">
    <!--section-->
    <div class="l-main__section">
      <!--contents-->
      <div class="l-main__contents">
        <div class="p-form__registration">
          <h1 class="p-form__registration__title">ご希望の職種と雇用形態は？</h1>
          <dl>
            <dt class="p-form__registration__stitle">職種</dt>
            <dd class="p-form__registration__item">
              <select name="occupation" v-model="objects.dataObject2.occupation">
                <option value="" selected="">職種を選んでください</option>
                <option value="営業">営業</option>
                <option value="製造業">製造業</option>
                <option value="サービス業">サービス業</option>
                <option value="飲食業">飲食業</option>
              </select>
            </dd>
            <dt class="p-form__registration__stitle">雇用形態</dt>
            <dd class="p-form__registration__item">
              <select name="employment"  v-model="objects.dataObject2.employmentStatus">
                <option value="" selected="">雇用形態を選んでください</option>
                <option value="正社員">正社員</option>
                <option value="契約社員">契約社員</option>
                <option value="パート">パート</option>
                <option value="アルバイト">アルバイト</option>
              </select>
            </dd>
            <dt class="p-form__registration__stitle">給与形態</dt>
            <dd class="p-form__registration__item">
              <select name="salary" v-model="category" v-on:change="changeCategory">
                <option value="" selected>給与形態をえらんでください。</option>
                <option v-for="option in categoryOptions" v-bind:value="option.value" :key="option.index">
                {{ option.text }}
                </option>
              </select>
            </dd>
            <dd v-if="selectVisible" class="p-form__registration__item p-form__registration__item--salary u-fbox u-fbox--alcenter">
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
            </dd>
          </dl>
          <div class="p-form__registration__btn u-fbox u-fbox--bxcenter">
            <a class="c-btn__back" @click="back">戻る</a>
            <a class="c-btn__next" @click="next">次へ</a>
          </div>							
        </div>
        
      </div>
      <!--/contents-->
    </div>
    <!--/section-->
  </section>
</template>

<script>
export default {
  name: 'Registration2',
  data () {
    return {
        page : 2,

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
    changeCategory: function(){
      
      if(this.category != ""){
        this.selectVisible = true
      }else{
        this.selectVisible = false
      }
      
      this.minSelect = '';
      this.maxSelect = '';
    },
    back(){     
      this.$emit('click', this.page - 1)
    },
    next(){  
      
      this.$emit('click', this.page + 1)    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a.disabled{
    pointer-events: none;
}
</style>
