<template>
  <div id="ProductDetailMain" class="ProductDetailMain">
    <div class="ProductDetailMainRow">
      <div class="leftImage col-xs-12 col-md-5 col-sm-5">
        <div class="Images imageZoomPreview">
          <img
            id="imgUrunResim"
            v-bind:src="post.image"
            alt="Balon Kollu Keten Tunik"
            class="cloudzoom"
            onclick="window.zoom.V1.clickPreviweImage()"
            data-cloudzoom="easeTime : 0 , galleryFade : false,animationTime : 0 , zoomImage:'https://www.minikterzi.com/Uploads/UrunResimleri/balon-kollu-keten-tunik-1c8b.jpg', zoomSizeMode : 'image' "
            style="user-select: none"
          />
        </div>
        <div
          id="divVideoGoruntulemeAlan"
          class="videoGoruntuleme"
          style="display: none"
        ></div>
        <div class="SmallImages" id="divThumbList">
          <div class="AltImgCapSmallImg">
            <img
              class="cloudzoom-gallery"
              src="https://www.minikterzi.com/Uploads/UrunResimleri/balon-kollu-keten-tunik-110b.jpg"
              alt="Balon Kollu Keten Tunik"
              id="imgurunresmi"
              onclick="window.zoom.V1.clickThumb()"
              data-cloudzoom='{ "easeTime" : 0 , "galleryFade" : false, "animationTime" : 0, "useZoom" : "#imgUrunResim" , "image" : "https://www.minikterzi.com/Uploads/UrunResimleri/balon-kollu-keten-tunik-110b.jpg", "zoomImage" : "https://www.minikterzi.com/Uploads/UrunResimleri/balon-kollu-keten-tunik-110b.jpg" }'
            />
          </div>
          <div class="AltImgCapSmallImg">
            <img
              class="cloudzoom-gallery"
              src="https://www.minikterzi.com/Uploads/UrunResimleri/thumb/balon-kollu-keten-tunik-110b.jpg"
              alt="Balon Kollu Keten Tunik"
              id="imgurunresmi"
              onclick="window.zoom.V1.clickThumb()"
              data-cloudzoom='{ "easeTime" : 0 , "galleryFade" : false, "animationTime" : 0, "useZoom" : "#imgUrunResim" , "image" : "/Uploads/UrunResimleri/balon-kollu-keten-tunik-6b65.jpg", "zoomImage" : "/Uploads/UrunResimleri/buyuk/balon-kollu-keten-tunik-6b65.jpg" }'
            />
          </div>
          <div class="AltImgCapSmallImg">
            <img
              class="cloudzoom-gallery"
              src="https://www.minikterzi.com/Uploads/UrunResimleri/thumb/balon-kollu-keten-tunik-ec8b.jpg"
              alt="Balon Kollu Keten Tunik"
              id="imgurunresmi"
              onclick="window.zoom.V1.clickThumb()"
              data-cloudzoom='{ "easeTime" : 0 , "galleryFade" : false, "animationTime" : 0, "useZoom" : "#imgUrunResim" , "image" : "/Uploads/UrunResimleri/balon-kollu-keten-tunik-ec8b.jpg", "zoomImage" : "/Uploads/UrunResimleri/buyuk/balon-kollu-keten-tunik-ec8b.jpg" }'
            />
          </div>
          <div class="AltImgCapSmallImg">
            <img
              class="cloudzoom-gallery"
              src="https://www.minikterzi.com/Uploads/UrunResimleri/thumb/balon-kollu-keten-tunik-475a.jpg"
              alt="Balon Kollu Keten Tunik"
              id="imgurunresmi"
              onclick="window.zoom.V1.clickThumb()"
              data-cloudzoom='{ "easeTime" : 0 , "galleryFade" : false, "animationTime" : 0, "useZoom" : "#imgUrunResim" , "image" : "/Uploads/UrunResimleri/balon-kollu-keten-tunik-475a.jpg", "zoomImage" : "/Uploads/UrunResimleri/buyuk/balon-kollu-keten-tunik-475a.jpg" }'
            />
          </div>
          <div class="AltImgCapSmallImg">
            <img
              class="cloudzoom-gallery"
              src="https://www.minikterzi.com/Uploads/UrunResimleri/thumb/balon-kollu-keten-tunik-2a95.jpg"
              alt="Balon Kollu Keten Tunik"
              id="imgurunresmi"
              onclick="window.zoom.V1.clickThumb()"
              data-cloudzoom='{ "easeTime" : 0 , "galleryFade" : false, "animationTime" : 0, "useZoom" : "#imgUrunResim" , "image" : "/Uploads/UrunResimleri/balon-kollu-keten-tunik-2a95.jpg", "zoomImage" : "/Uploads/UrunResimleri/buyuk/balon-kollu-keten-tunik-2a95.jpg" }'
            />
          </div>
          <div class="AltImgCapSmallImg">
            <img
              class="cloudzoom-gallery"
              src="https://www.minikterzi.com/Uploads/UrunResimleri/thumb/balon-kollu-keten-tunik-1c8b.jpg"
              alt="Balon Kollu Keten Tunik"
              id="imgurunresmi"
              onclick="window.zoom.V1.clickThumb()"
              data-cloudzoom='{ "easeTime" : 0 , "galleryFade" : false, "animationTime" : 0, "useZoom" : "#imgUrunResim" , "image" : "/Uploads/UrunResimleri/balon-kollu-keten-tunik-1c8b.jpg", "zoomImage" : "/Uploads/UrunResimleri/buyuk/balon-kollu-keten-tunik-1c8b.jpg" }'
            />
          </div>
          <div class="AltImgCapSmallImg">
            <img
              class="cloudzoom-gallery"
              src="https://www.minikterzi.com/Uploads/UrunResimleri/thumb/balon-kollu-keten-tunik-1c8b.jpg"
              alt="Balon Kollu Keten Tunik"
              id="imgurunresmi"
              onclick="window.zoom.V1.clickThumb()"
              data-cloudzoom='{ "easeTime" : 0 , "galleryFade" : false, "animationTime" : 0, "useZoom" : "#imgUrunResim" , "image" : "/Uploads/UrunResimleri/balon-kollu-keten-tunik-aa32.jpg", "zoomImage" : "/Uploads/UrunResimleri/buyuk/balon-kollu-keten-tunik-aa32.jpg" }'
            />
          </div>
          <div class="AltImgCapSmallImg">
            <img
              class="cloudzoom-gallery"
              src="https://www.minikterzi.com/Uploads/UrunResimleri/thumb/balon-kollu-keten-tunik-1c8b.jpg"
              alt="Balon Kollu Keten Tunik"
              id="imgurunresmi"
              onclick="window.zoom.V1.clickThumb()"
              data-cloudzoom='{ "easeTime" : 0 , "galleryFade" : false, "animationTime" : 0, "useZoom" : "#imgUrunResim" , "image" : "/Uploads/UrunResimleri/balon-kollu-keten-tunik-093e.jpg", "zoomImage" : "/Uploads/UrunResimleri/buyuk/balon-kollu-keten-tunik-093e.jpg" }'
            />
          </div>
          <div class="AltImgCapSmallImg">
            <img
              class="cloudzoom-gallery"
              src="https://www.minikterzi.com/Uploads/UrunResimleri/thumb/balon-kollu-keten-tunik-7186.jpg"
              alt="Balon Kollu Keten Tunik"
              id="imgurunresmi"
              onclick="window.zoom.V1.clickThumb()"
              data-cloudzoom='{ "easeTime" : 0 , "galleryFade" : false, "animationTime" : 0, "useZoom" : "#imgUrunResim" , "image" : "/Uploads/UrunResimleri/balon-kollu-keten-tunik-7186.jpg", "zoomImage" : "/Uploads/UrunResimleri/buyuk/balon-kollu-keten-tunik-7186.jpg" }'
            />
          </div>
          <div class="AltImgCapSmallImg">
            <img
              class="cloudzoom-gallery"
              src="https://www.minikterzi.com/Uploads/UrunResimleri/thumb/balon-kollu-keten-tunik-1107.jpg"
              alt="Balon Kollu Keten Tunik"
              id="imgurunresmi"
              onclick="window.zoom.V1.clickThumb()"
              data-cloudzoom='{ "easeTime" : 0 , "galleryFade" : false, "animationTime" : 0, "useZoom" : "#imgUrunResim" , "image" : "/Uploads/UrunResimleri/balon-kollu-keten-tunik-1107.jpg", "zoomImage" : "/Uploads/UrunResimleri/buyuk/balon-kollu-keten-tunik-1107.jpg" }'
            />
          </div>
        </div>
        <div class="mobileImageSlider" id="divMobileImageList"></div>
      </div>
      <div class="RightDetail col-xs-12 col-md-7 col-sm-7">
        <div class="ProductName">
          <h1>
            <span> {{post.title}}</span>
          </h1>
        </div>
        <div class="PriceList">
          <div class="Formline puanVer"></div>
          <div class="Formline" id="divMarka">
            <span class="left_line lineTitle">Marka</span>
            <span class="center_line lineTitle">:</span>
            <span class="right_line Marka">
              <a href="/minik-terzi">
                <span>Minik Terzi</span>
              </a>
            </span>
          </div>
          <div id="divUrunKampanyaliFiyat" style="display: none">
            <span class="urunKampanyaTanim"></span>
            <span class="urunKampanyaIndirimOrani"></span>
            <span class="urunKampanyaFiyat"></span>
            <span class="urunKampanyaAciklama">Sepetteki Son Fiyat</span>
          </div>
          <div id="pnlFiyatlar">
            <div id="divFiyatAlanlari">
              <div class="urunDetayFiyatContainer">
                <div class="Formline" id="divIndirimsizFiyat">
                  <span class="left_line lineTitle">Fiyat</span>
                  <span class="center_line lineTitle">:</span>
                  <span class="right_line indirimliFiyat" id="fiyat2">
                    <span class="spanFiyat">₺{{post.price}}</span
                    ><span class="spanKdv">(KDV Dahil)</span>
                  </span>
                </div>
                <div
                  class="Formline"
                  id="divOzellestirmeFiyati"
                  style="display: none"
                >
                  <span class="left_line lineTitle">Sepet Fiyatı</span>
                  <span class="center_line lineTitle">:</span>
                  <span class="right_line indirimliFiyat" id="spnSepetFiyati">
                    <span class="spanFiyat"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
                   

          <div class="Formline BorderNone OnYaziContent" id="divOnyazi">
            <span class="left_line teksatir">
              <h2>
                <span>
                    <p>{{post.bilgi2}}</p>
                  <p>
                 Renk:{{post.Renk}}<br />
                 Kumaş:{{post.Kumas}}<br />
                 Mevsim:{{post.Mevsim}}
                  </p>
       
                          <p v-for="i in post.bilgi1" :key="i">{{i}}</p>
    
                
                      <p v-for="i in post.boy" :key="i.id" >{{i}}</p>
               
             
                  <p  v-for="(value, key) in post.beden" :key="key.id">{{value}} ile uyumludur.</p>
                
                <p>Verilen ölçüler en küçük bedene aittir. Bedenler arasında ortalama 4 cm fark bulunmaktadır.</p>

                <p>Manken boyu: 1.72</p>

                
                  
         

                </span>
              </h2>
            </span>
          </div>
          <div class="asortiItem" style="display: none"></div>
          <div id="divUrunEkSecenek" class="Formline BorderNone">
            <div class="eksecenekLine selectvaryasyon">
              <span class="left_line">Renk</span
              ><span class="center_line">:</span
              ><span class="right_line"
                ><select name="ddlEkSecenek0" class="eksecenekSelect">
                  <option value="-1">Seçiniz</option>
                  <option tipid="2" value="15">{{post.Renk}}</option>
                </select></span
              >
            </div>
          </div>
        </div>
        
        <div class="ProductIcon hidden-phone">
          <div id="divKritikStok" style="display: none">
            <a class="tipL" title="Kritik Stok">
              <span class="box1">
                <i class="fa fa-exclamation" aria-hidden="true"></i>Kritik Stok
              </span>
            </a>
          </div>
          <div class="UFavorilerimeEkle">
            <a
              onclick="javascript:FavoriUrunDetay();"
              data-action="1"
              title="Favorilere Ekle"
              class="tipL"
              id="aFavoriEkleBtn"
              data-original-title="Favorilere Ekle"
            >
              <span class="box1"
                ><i class="fa fa-heart" aria-hidden="true"></i>Favorilere
                Ekle</span
              >
            </a>
          </div>
          <div class="UIstekListemeEkle">
            <a
              onclick="javascript:IstekListemeEkle();"
              class="tipL"
              title="İstek Listeme Ekle"
            >
              <span class="box1">
                <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                İstek Listeme Ekle
              </span>
            </a>
          </div>
          <div class="UKarsilastirma">
            <a class="tipL" onclick="addToCompare()" title="Karşılaştır">
              <span class="box1">
                <i class="fa fa-exchange" aria-hidden="true"></i>
                Karşılaştır
              </span>
            </a>
          </div>
          <div class="FiyatHaberVer">
            <a
              id="aFiyatAlarmEkleBtn"
              class="tipL"
              data-action="1"
              title="Fiyat Düşünce Haber Ver"
              href="javascript:FiyatAlarmListeUrunDetay();"
            >
              <span class="box1"
                ><i class="fa fa-arrow-down" aria-hidden="true"></i>Fiyat
                Düşünce Haber Ver</span
              >
            </a>
          </div>
          
          <div class="UGelinceHaberVer" style="display: none">
            <a
              id="aGelinceHaberVer"
              href="javascript:;"
              onclick="gelinceHaberVer(this)"
              data-haber="0"
              ><span class="box1 tipL" title="Gelince Haber Ver"
                ><i class="fa fa-mail-reply" aria-hidden="true"></i>Gelince
                Haber Ver</span
              ></a
            >
          </div>
        </div>
        <div class="clear"></div>
        <div class="clear"></div>
      <div class="buybutton" id="divSatinAl"> 
          <div class="buyfast">
            <input
              type="button"
              class="buyfastbutton button"
              value="Hemen Al"
              id="btnHemenAl"
              onclick=""
            />
          </div>
          <div class="BasketBtn">
            <div id="divBasketInputTextBox" class="Basketinp">
              <span
                class="riSingle riContSpinButtons RadInput RadInput_Default"
              >
                <a
                  href=""
                  class="urunDetayAdetArttirma urunListeAdetArtir riUp"
                  onclick=""
                  >Artır</a
                >
                <input
                  type="text"
                  id="txtbxurunSiparisAdedi"
                  step="1"
                  min="1"
                  value="1"
                  data-double="False"
                  class="txtSepetAdet"
                  name="txtbxurunSiparisAdedi"
                />
                <a
                  href=""
                  class="urunDetayAdetArttirma riDown"
                  onclick=""
                  >Azalt</a
                >
              </span>
            </div>
            <div class="basketBtn">
              <input
                type="button"
                value="Sepete Ekle"
                onclick="sepeteEkleUrunDetay();"
                class="Addtobasket button"
              />
            </div>
          </div>
        </div>  
      <div id="divStokYok" style="display: none">
          Ürün stoklarımızda kalmamıştır.
        </div> 
        <div class="clear"></div>
        <div class="ProductIcon2"> 
          <div class="TavsiyeEtBtnContent">
            <a
              class="hidden-phone TavsiyeEtBtn button"
              onclick=""
              ><span>Tavsiye Et</span></a
            >
          </div>
          <div class="hidden-phone">
            <a
              rel="nofollow"
              class="printBtn button"
              href=""
              target="_blank"
              ><span>Sayfayı Yazdır</span></a
            >
          </div>
          <div class="YorumYazbtnContent">
            <a class="hidden-phone button"
              ><span>Yorum Yaz</span></a
            >
          </div>
          <div class="clear"></div>
         
         
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/index'

export default {
  
created(){
 this.$store.dispatch('fetchProducts')
},
data(){
return{
    id:this.$route.params.id
}
},
    computed:{
        post(){
            console.log(this.$store.getters.getSite(this.$route.params.id))

            return this.$store.getters.getSite(this.$route.params.id)
            
        },
       
        //    relatedProducts(){
           
        //     return this.$store.getters.getfilterSite(1)

        // },
        
    },

}
</script>
<style>
* {
  margin: 0;
  outline: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
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
.ProductDetailMainRow {
  margin-left: -15px;
  margin-right: -15px;
  margin-top:50px ;
  height: 2109px;
}
.eksecenekSelect{
  width: 261px;
  height: 45px;
  margin-top: 10px;
  margin-left: 50px;
  color: rgb(34, 33, 33);
}
.textbox:focus, select:focus {
    background-color: #f1f1f1;
    border: solid 1px #ccc;
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

.col-sm-5,
.col-md-5,
.col-xs-12 {
  position: relative;
  height: 700px;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.col-md-5 {
  width: 41.66666667%;
}
.col-md-5 {
  float: left;
}
.leftImage .Images {
  width: 100%;


  text-align: center;
}

element {
  user-select: none;
}
.leftImage .Images img {
  max-width: 100%;
  height: 700px;
}
img {
  border: none;
  
}
.ProductDetailMain{
  width: 1170px;
  margin-right:385px ;
  margin-left:385px ;
}
.ProductDetailMainRow{
  width:1200px ;
  height: 2126px;
}

.ProductDetailMainRow .leftImage .Images {
  text-align: center;
}
.ProductDetailMainRow .leftImage .SmallImages {
  margin-top: 30px;
  display: block;
  width: 100%;
  
  /* margin-left: 140px; */
}
/* .eksecenekLine {
    clear: both;
    display: block;
    margin-bottom: 3px;
} */


.ProductDetailMainRow .leftImage .SmallImages .AltImgCapSmallImg {
    /* width: 15%; */
    width: 92px;
    height: 138px;
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px;
    margin: 10;
    overflow: hidden;
    border: 1px solid #f1f1f1;
}
.ProductDetailMainRow .leftImage .SmallImages .AltImgCapSmallImg img {
    max-width: 100%;
}
img {
    border: none;
    max-width: 100%;
}
.ProductDetailMainRow .RightDetail .ProductName {
    margin-bottom: 20px;
}
.ProductDetailMainRow .RightDetail .ProductName h1 {
    font-weight: 400;
    font-size: 20px;
}
.ProductDetailMainRow .RightDetail .PriceList {
    width: 55%;
    float: left;
}
.ProductDetailMainRow .RightDetail .PriceList .Formline {
    margin-bottom: 10px;
}
.ProductDetailMainRow .RightDetail .PriceList .Formline .left_line {
    font-size: 12px;
font-weight: 600;
min-width: 30%;
  
}
.ProductDetailMainRow .RightDetail .PriceList .Formline span {
    line-height: 34px;
    float: left;
}


.col-sm-7,
.col-md-7,
.col-xs-12
 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  height: 1202px;
}
.col-md-7 {
    width: 700px;
    height: 798px;
    float: left;
}
.ProductDetailMainRow .RightDetail .PriceList .Formline .center_line {
    width: 2%;
}

.ProductDetailMainRow .RightDetail .PriceList .Formline .right_line {
    width: 60%;
  
}
.ProductDetailMainRow .RightDetail .PriceList .Formline span {
    line-height: 34px;
    float: left;
}
a {
    cursor: pointer;
}
body, td, th, input, textarea, select, a {
    font-size: 12px;
}
a {
    text-decoration: none;
    color: #666;
  
}
.ProductDetailMainRow .RightDetail .PriceList .Formline {
    margin-bottom: 10px;
}


* {
   
    box-sizing: border-box;
}
.button {
    cursor: pointer;
    background: none repeat scroll 0 0 #111;
       
    color: #fff;
   
    margin: 0 0 8px;
    padding: 11px 5px;
 
    border-radius: 0;
}

.buybutton{
  margin-top:760px ;
}
.ProductDetailMainRow .RightDetail .buybutton .buyfast {
    float: left;
    width: 30%;
    margin-right: 20px;
}
.ProductDetailMainRow .RightDetail .buybutton .buyfast input.buyfastbutton {
    background-color: #03a0b4;
    color: #fff;
    border: 0;
    font-size: 18px;
    font-family: roboto condensed,sans-serif;
    width: 100%;
}
.button {
    cursor: pointer;
    background: none repeat scroll 0 0 #111;
    
   
    margin: 0 0 8px;
    padding: 11px 5px;
  
    border-radius: 0;
}
.ProductDetailMainRow .RightDetail .buybutton .buyfast input:hover {
    background-color: #114b5f;
}
* {
 
    box-sizing: border-box;
}
.ProductDetailMainRow .RightDetail .buybutton .BasketBtn {
    width: 60%;
    float: left;
}
.ProductDetailMainRow .RightDetail .buybutton .BasketBtn .Basketinp {
    width: 140px !important;
    float: left;
    margin-right: 18px;
}
.ProductDetailMainRow .RightDetail .buybutton .BasketBtn .Basketinp .riSingle {
    width: 140px ;
    position: relative;
    padding-left: 44px;
    padding-right: 44px;
}
.riSingle {
    display: inline-block;
    white-space: nowrap;
    text-align: left;
    box-sizing: border-box;
    
    vertical-align: middle;
}
.ProductDetailMainRow .RightDetail .buybutton .BasketBtn .Basketinp .riSingle input {
    font-size: 16px;
    font-weight: 600;
    color: #000;
    background: 0 0;
    border: 1px solid #114b5f;
    border-radius: 0;
    box-shadow: none;
    height: 44px  ;
    margin: 0 1px ;
    padding: 0 ;
    width: 50px;
    padding: 0;
    text-align: center;
}
.riSingle {
    white-space: nowrap;
    
}
.ProductDetailMainRow .RightDetail .buybutton .BasketBtn .Basketinp .riSingle .riUp {
    background: #03a0b4;
    border: none;
    border-radius: 0;
    box-shadow: none;
    color: #fff;
    height: 44px;
    text-shadow: none;
    width: 44px;
    position: absolute;
    right: 0;
    top: 0;
    margin: 0 !important;
    padding: 0 !important;
    font-size: 0 !important;
    text-indent: 0 !important;
}
.riSingle a.riUp {
    display: inline-block;
  
    vertical-align: top;
}
.RadInput a {
   
    overflow: hidden;
    
    outline: 0;
    z-index: 2;
   
    text-align: center;
    text-decoration: none;
}
.ProductDetailMainRow .RightDetail .buybutton .BasketBtn .Basketinp .riSingle .riDown {
    position: absolute;
    left: 0;
    top: 0;
    margin: 0 !important;
    padding: 0 !important;
    background: #03a0b4;
    border: none;
    border-radius: 0;
    box-shadow: none;
    color: #fff;
    height: 44px;
    text-shadow: none;
    width: 44px;
    font-size: 0 !important;
    text-indent: 0 !important;
}
.ProductDetailMainRow .RightDetail .buybutton .BasketBtn .basketBtn input.Addtobasket {
    background-color: #03a0b4;
    color: #fff;
    border: 0;
    font-size: 18px;
    font-family: roboto condensed,sans-serif;
}
.ProductDetailMainRow .RightDetail .buybutton .BasketBtn .basketBtn input:hover {
    background-color: #114b5f;
}
.ProductDetailMainRow .RightDetail .buybutton .BasketBtn .Basketinp .riSingle .riDown:hover {
    background-color: #114b5f;
}
.ProductDetailMainRow .RightDetail .buybutton .BasketBtn .Basketinp .riSingle .riUp:hover {
    background-color: #114b5f;
}
.ProductDetailMainRow .RightDetail .ProductIcon2 {
  
    margin-top: 730px;
    height: 100px;

}
.ProductDetailMainRow .RightDetail .ProductIcon2 > div {
    float: left;
    text-align: left;
    margin-right: 10px;
    margin-top: 30px;
}
.ProductDetailMainRow .RightDetail .ProductIcon2 a {
   text-decoration: none;
}
.ProductDetailMainRow .RightDetail .ProductIcon2 a:hover{
   background-color:  #03a0b4 ;
   color: white;
}

.ProductDetailMainRow .RightDetail .PriceList .Formline span {
    line-height: 34px;
}
.ProductDetailMainRow .RightDetail .PriceList #divOnyazi h2 {
    font-size: 13px;
    line-height: normal;
    font-weight: 600;
}
.ProductDetailMainRow .RightDetail .ProductIcon .box1 {
    background-color: #114b5f !important;
 
    box-shadow: none;
    border: 0;
    color: #fff;
    display: block;
    float: none;
    line-height: 34px;
    margin-right: 0;
    padding: 0;
    cursor: pointer;
   
}
.ProductDetailMainRow .RightDetail .ProductIcon {
    float: right;
    width: 30%;
}
.ProductDetailMainRow .RightDetail .ProductIcon a {
   text-decoration: none;
}
.ProductDetailMainRow .RightDetail .buybutton .BasketBtn .Basketinp .riSingle .riUp::after {
    content: "+";
    font-size: 18px !important;
    text-indent: 0 !important;
    line-height: 44px !important;
}
.ProductDetailMainRow .RightDetail .buybutton .BasketBtn .Basketinp .riSingle .riDown::after {
    content: "-";
    font-size: 18px !important;
    text-indent: 0 !important;
    line-height: 44px !important;
}
.ProductDetailMainRow .RightDetail .PriceList .Formline::after,
.ProductDetailMainRow .RightDetail .PriceList .eksecenekLine::after,
.ProductDetailMainRow .RightDetail .ProductIcon2::after
{
  clear: both;
display: table;
content: "";
}
.box1 {
    
    background: #f2f2f2;
  
    margin-bottom: 15px;
    min-width: 120px;
  
   
}
.ProductDetailMainRow .RightDetail .ProductIcon .box1 i {
    font-size: 16px;
    margin-right: 5px;
    margin-left: 5px;
}
.box1 i {
 
    margin: 0 5px;
     
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    
   
    text-rendering: auto;

}
.ProductDetailMainRow .RightDetail .ProductIcon .box1:hover {
    background-color: #03a0b4 !important;
}

p{
    margin-bottom: 0px;
    font-size: 12px;
}
</style>