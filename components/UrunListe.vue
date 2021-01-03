<template>
  <div>
  
    <div class="ProductListContent">
      <div id="ProductPageProductList" class="ProductList sort_4">
        <div
          :v-if="loading"

          class="ItemOrj col-lg-3 col-md-3 col-sm-6 col-xs-6"
          v-for="product in products"
          :key="product.id"
        >
          <div class="productItem">
            <ul>
              <li>
                <div class="productImage">
                 
                  <!-- <a class="detailLink detailUrl" data-id="" title="" href="">
                   
                  </a> -->
                  <nuxt-link :to="{name:'posts-id',params:{id:product.id}}" :key="product.id"> <img :src="product.image" /></nuxt-link>
                </div>
                <div
                  class="productDetail videoAutoPlay"
                  data-id=""
                  data-variant-id=""
                >
                  <!-- <div class="productMarka" style="display: none;">Minik Terzi</div> -->
                  <div class="productName detailUrl" data-id="">
                    <!-- <a href="">{{ product.title }}</a> -->
                   
          <nuxt-link :to="{name:'posts-id',params:{id:product.id}}" :key="product.id">{{ product.title }}</nuxt-link>
                  </div>
                  <div class="productPrice">
                    <div class="discountPrice">
                      <span> <b>₺</b>{{ product.price }} </span>
                      <!-- <span class="discountKdv">
KDV Dahil
</span> -->
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="productIcon">
              <div class="favori favoriContent-990-1745">
                   <font-awesome-icon :icon="['fas', 'heart']" style="color:#03a0b4; height:17px; width:17px; margin-left:12px;margin-top:10px;"  />
               
              </div>
              <div class="mycartIcon tip" title="Sepete Ekle">
               
                  <!-- <span class="urunListeSpanSepeteEkle">Sepete Ekle</span> -->
                  <span class="urunListeSpanSepeteEkle"><a @click="addProductToCart(product)">Sepete Ekle</a></span>
  
               
              </div>
              <div class="examineIcon tip detailLink" title="Ürünü İncele">
                
            
                   <font-awesome-icon :icon="['fas', 'search']" style="color:#03a0b4; height:15px; width:15px; margin:10px"  />
               
              
              <!-- <fa :icon="['fas','search']">Ürünü İncele</fa> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

// import shop from '@/api/shop'
import store from '@/store/index'
import defaultProject from '@/plugins/firebase'

export default {
  
  data(){
    return{
loading:false
    }
  },

computed:{
  products () {
      return this.$store.getters.availableProducts
  },

       
},
methods:{
  addProductToCart(product){
    this.$store.dispatch('addProductToCart',product)
  },
  
  
},
created(){
  this.loading=true
 this.$store.dispatch('fetchProducts')
 .then(() => this.loading =false)
},
mounted(){
console.log({f:defaultProject})
}



 
};
</script>

<style scoped>
/* @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800&subset=latin,latin-ext);
@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&subset=latin,latin-ext); */
li {
  list-style-type: none;
}

.productItem .productImage a img {
  max-width: 100%;
  max-height: 100%;
  height: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.ProductList .productItem .productDetail {
  z-index: 90;
  height: 73px;
}
.ProductList .productItem .productDetail .productName {
  margin: 0 0 2px;
  padding: 5px 0;
  font-weight: 400;
  text-align: center;
  font-size: 14px;
  height: 44px;
  overflow: hidden;
}

.ProductListContent .ProductList {
  margin-left: -15px;
  margin-right: -15px;
  margin-top: 30px;
}
.ProductListContent {
  width: 1170px;
  height: 7300px;
  margin-left: 335.5px;
}
* {
  margin: 0;
  margin-right: 0px;
  margin-left: 0px;
  outline: 0;
  padding: 0;
}
.ProductList .productItem .productDetail .productPrice .discountPrice {
  color: #03a0b4;
  font-size: 20px;
  margin-right: 5px;
  display: inline-block;
  line-height: 24px;
}
.productName {
  font-size: 5px;
}
.ProductList .productItem .productDetail .productPrice {
  text-align: center;
}
/* .ProductList .productItem .productDetail .productPrice {
  margin: 3px 0;
  clear: both;
  float: left;
  width: 100%;
  text-align: center;
  display: block;
  height: 30px;
} */
.ProductList .productItem .productDetail .productName a:hover {
  color: #03a0b4;
}

body,
td,
th,
input,
textarea,
select,
a {
  font-size: 12px;
}
body {
  color: #000;
  font-family: open sans, sans-serif;
  font-weight: 400;
}

.col-md-3,
.col-lg-3,
.col-xs-4,
.col-xs-6 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.productImage {
  height: 0;
  position: relative;
  background: #fff;
  padding-bottom: 150%;
  overflow: hidden;
  width: 100%;
  border-bottom: 0;
}
* {
  margin: 0;
  outline: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.ProductListContent .ProductList {
  margin-left: -15px;
  margin-right: -15px;
}
* {
  box-sizing: border-box;
}

.col-lg-3 {
  width: 25%;
}
.col-lg-3 {
  float: left;
}
* {
  margin: 0;
  margin-right: 0px;
  margin-left: 0px;
  outline: 0;
  padding: 0;
}
.ProductList .productItem {
  position: relative;
  border: 1px solid #f5f1f1;
  padding: 0 0;
  width: 100%;
  float: left;
  margin: 0 0 30px;
}
.ProductList .productItem .productDetail {
  z-index: 90;
  height: 73px;
}
.ProductList .productItem .productDetail .productName {
  margin: 0 0 2px;
  padding: 5px 0;
  font-weight: 400;
  text-align: center;
  font-size: 14px;
  height: 44px;
  overflow: hidden;
}
.ProductList .productItem .productIcon .favori a {
  background: 0 0;
  width: 100%;
  padding: 0;
  display: block;
  background: #fff;
  padding: 0;
  font-size: 0;
  height: 35px;
  text-align: center;
  white-space: nowrap;
  color: #03a0b4;
  text-transform: uppercase;
  font-weight: 400;
  border: 1px solid #03a0b4;
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
}
.ProductList .productItem .productDetail .productPrice {
  margin: 3px 0;
  clear: both;
  float: left;
  width: 100%;
  text-align: center;
  display: block;
  height: 30px;
}
.ProductList .productItem .productIcon .mycartIcon {
  width: 50%;
  float: left;
  margin-left: 10px;
}
.ProductList .productItem .productIcon .mycartIcon a {
  background: 0 0;
  width: 100%;
  padding: 0;
  display: block;
  background: #fff;
  padding: 0;
  font-size: 14px;
  height: 35px;
  line-height: 33px;
  text-align: center;
  white-space: nowrap;
  color: #03a0b4;
  text-transform: uppercase;
  font-weight: 400;
  border: 1px solid #03a0b4;
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
}
.ProductList .productItem .productIcon .mycartIcon a {
  font-size: 14px;
  line-height: 33px;
  text-align: center;
  white-space: nowrap;
  color: #03a0b4;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
}

.ProductList .productItem .productIcon .hoverFalse,
.ProductList .productItem .productIcon .favori,
.ProductList .productItem .productIcon .mycartIcon,
.ProductList .productItem .productIcon .examineIcon {
  opacity: 0;
  visibility: hidden;

  transform: translateY(50px);
}
.ProductList .productItem .productIcon .hoverFalse a,
.ProductList .productItem .productIcon .favori a,
.ProductList .productItem .productIcon .mycartIcon a,
.ProductList .productItem .productIcon .examineIcon a {
  text-decoration: none;
}
.ProductList .productItem .productIcon .examineIcon {
  width: 17%;
  float: right;
  border: 1px solid #03a0b4;
  border-radius: 0;
  height: 35px;

}
.ProductList .productItem .productIcon .examineIcon a {
  background: 0 0;
  width: 100%;
  padding: 0;
  display: block;
  background: #fff;
  padding: 0;
  font-size: 0;
  height: 35px;
  text-align: center;
  white-space: nowrap;
  color: #03a0b4;
  text-transform: uppercase;
  font-weight: 400;
  border: 1px solid #03a0b4;
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
}
.ProductList .productItem .productIcon .examineIcon a:after {
  /* font-family: fontawesome; */
  font-size: 16px !important;
  line-height: 35px;
  /* content: "\f002"; */
  cursor:pointer;
}
.examineIcon{
  cursor: pointer;
}
.ProductList .productItem .productIcon .favori a:after {
  font-family: fontawesome;
  font-size: 16px !important;
  line-height: 35px;
  content: "\f004";
}
.ProductList .productItem:hover .productImage a::after {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
}
.ProductList .productItem .productImage a::after {
  font-family: fontawesome;
  content: "+";
  font-size: 36px;
  color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  margin: 0 auto;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: #03a0b4;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  opacity: 0;
  -webkit-opacity: 0.8;
  -moz-opacity: 0.8;
  transform: scale(0);
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  transition: 0.3s !important;
}
.ProductList .productItem:hover .favori,
.ProductList .productItem:hover .mycartIcon,
.ProductList .productItem:hover .examineIcon {
  opacity: 1;
  visibility: visible;

  transform: translateY(-20px);
}
.ProductList .productItem .productIcon .hoverFalse,
.ProductList .productItem .productIcon .favori,
.ProductList .productItem .productIcon .mycartIcon,
.ProductList .productItem .productIcon .examineIcon {
  transition: all 0.4s ease;
}
.ProductList .productItem .productIcon .favori {
  width: 17%;
  cursor: pointer;
  float: right;
  margin-left: 10px;
  margin-right: 10px;
   border: 1px solid #03a0b4;
  border-radius: 0;
  height: 35px;
}
.ProductList .productItem .productDetail .productName a {
  font-family: open sans, sans-serif;
  color: #444;
  text-decoration: none;
}
.productItem:hover .productPrice {
  opacity: 0;
  /* z-index: -1; */
}
</style>