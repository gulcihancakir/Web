<template>
  <div ng-app="appGlobal" ng-controller="cntrlSepet" class="ng-scope">
<div class="BasketPage BasketPageeStep_1">


<!-- <div class="Basketstep step1">

<ul style="display: none;" class="mobilSepetAdim">
<li class="onestepsec bSepet"><i></i>
<div><span>SEPETİM</span><span class="onesteptext">Alışveriş Sepetim</span></div>
</li>
<li class="pasif bAdres"><i></i>
<div><span>ADRES</span><span class="onesteptext">Adres Seçimi</span></div>
</li>
<li class="pasif bOdeme"><i></i>
<div><span>ÖDEME</span><span class="onesteptext">Ödeme Bilgileri</span></div>
</li>
<li class="pasif bSiparis"><i></i>
<div><span>SİPARİŞ</span><span class="onesteptext">Sipariş Onayı</span></div>
</li>
</ul> -->
<!-- <a href="javascript:;" class="sepetDuzenleBtn" data-edit="0">Düzenle</a> -->
<!-- </div> -->
<div class="BasketDetailContainer">
<div class="BasketDetail EmptyCart" style="display: none;">
<div class="empty-area">
<div class="left">
<div class="Icon">
<span class="tici-100"></span>
</div>
</div>
<div class="right">
<div class="Text">
<div class="T">Sepetinizde Ürün Bulunamadı.</div>
</div>
</div>
</div>
</div>
<div class="BasketDetail BasketDetailSepetList">
<div id="sepetimExtraUrunContent" style="display: none;">
</div>
<div class="btn">
<nuxt-link to="/" id="linkAlisverisDevam" class="alisverisedevamet button" target="_parent">Alışverişe Devam Et</nuxt-link>

</div>
<div class="sepett">

<ul><li v-for="product in products"  :key="product.id">
 <div class="duzen">



<div class="sepetItem sepetAdetTipi0">
<div class="sepetItemB sepetItemB0 divUrunSepetResim" >
<img class="sepetImg urunSepetResim" :src="product.image" />
</div>
<div class="sepetItemB sepetItemB1">
<span>Minik Terzi</span>
<a href="" rel="0" target="_top">{{product.title}}</a>
<span>Renk: <strong>{{product.renk}}</strong></span>
<span>Beden: <strong>STD</strong></span>


<!-- <span class="UrunHizliKargo" style="display:none">
Hızlı Kargo
</span> -->
<!-- <span class="UrunKisiselNot" style="display:none">
Ürün Notu : <strong></strong>
</span>
<span class="UrunKisiselNot SepetKampanyaTanim" style="display:none">
Kampanya :
 </span> -->
</div>
<div class="sepetItemB sepetItemB2">
<div class="adetGuncelleContent">
<a href="" class="" style="display: none;">Azalt</a>
<input type="number" class="textbox txtSepetAdet" id="" name="" value="1" min="1" max="999999" step="1" data-double="False">
<span class="sepetAdetMobile" style="display: none" >x <span>Adet</span></span>
<a href="" class="" style="display: none;">Artır</a>
<a onclick="" id="mainHolder_ucSepetim_rptSepet_lnkBtnAdetGuncelle_0" class="AdetGuncelle" href="" style="display: none;">Güncelle</a>
</div>
</div>
<div class="sepetItemPriceContent">
<div class="sepetItemB sepetItemBIndirimsiz sepetFiyatBold sepetItemB4">
<span class="sepetItemB3_2">
{{product.price}}
</span>
</div>
<div class="sepetItemB sepetItemB4 sepetFiyatBold">
<span class="sepetItemB4_2">
{{product.price}}
</span>
</div>
</div>
<div class="sepetItemB sepetItemB5">
<a   id="mainHolder_ucSepetim_rptSepet_lnkBtnUrunSil_0"  class="sepet-sil" ></a>
</div>
</div>

</div>
</li></ul>


<div class="sepetListAlt">
<div id="mainHolder_ucSepetim_divUcretsizKargoUlasim" class="hedefSatisContent" >
{{deger}}
</div>
<a id="mainHolder_ucSepetim_btnSepetiTemizle" class="sepetiTemizle" >Sepeti Temizle</a>
</div>
</div>
<br>
</div>
<div class="clear"></div>
<div class="clear"></div>
<div class="clear"></div>
<div class="clear"></div>
<div class="clear"></div>
<div class="clear"></div>
<div class="clear"></div>
</div>
<div class="BasketAccountContainer">
<div class="BasketAccount" >
<div class="basketCompleteContent">
<a id="mainHolder_ucSepetim_aSiparisTamamlaLink2" class="button basketCompletebtn" >SİPARİŞİ TAMAMLA </a>
</div>

<div class="BasketRigth">
<ul>
<li>
<span>Sipariş Tutarı</span>
<span class="tut ng-binding">₺{{total}}</span>
</li>
<!-- ngIf: cart.toplamKDV != '0' && !kdvDahilGoster -->
<!-- ngIf: cart.urunOzellestirmeFiyatlari != '0' -->
<!-- ngIf: cart.ekVergiTutari -->
<!-- ngIf: cart.gumrukVergisiGumruk -->
<!-- ngIf: cart.gumrukVergisiVergi -->
<!-- ngIf: cart.hediyeCekiIndirimi > 0 -->
<!-- ngIf: cart.hopiParacikKullanimi > 0 -->
<!-- ngIf: cart.hopiIndirimi > 0 -->
<!-- ngIf: cart.puanIndirimTutari > 0 -->
<!-- ngIf: cart.kampanyaIndirimleri > 0 -->
<!-- ngIf: cart.indirimlerToplami > 0 && false -->
<li class="genelToplam">
<span> <b>Sepet Toplamı</b> </span>
<span class="tut ng-binding"> <b>₺{{total}}</b></span>
</li>
<!-- ngIf: cart.tahminiTeslimSuresi > 0 || cart.ayniGunTeslimat -->
</ul>
</div>
<div class="BasketRigth BasketHediyeCeki">
<div id="hed">
<div id="mainHolder_ucSepetim_divHediyeCekiForm" class="Odeme-RightLine">

Hediye Çekleri


<div id="hediyeCeklerimList" style="display: none;">
</div>
<div class="hediCekForm">
<input name="ctl00$mainHolder$ucSepetim$txtbxHediyeCekiKodu" type="text" id="txtbxHediyeCekiKodu">
<a onclick="" id="mainHolder_ucSepetim_lnkButtonHediyeCekiUygula"
 class="button" >Ekle</a>
</div>
</div>
</div>
</div>


<div class="basketCompleteContent">
<a id="mainHolder_ucSepetim_aSiparisTamamlaLink" class="button basketCompletebtn" onclick="">SİPARİŞİ TAMAMLA</a>
</div>
</div><div></div>
</div>

</div>
<!-- <div id="divSepetUrunStokYok" style="display: none;">
<div class="modal-js SoldModal">
<div class="modal-title">SEPETİNİZDEKİ ÜRÜNLER TÜKENDİ!</div>
<div class="modal-stitle">Alışverişe devam et, yeni fırsatları yakala.</div>
<div class="modal-body">
<div class="SoldOutCount"><span class="spnSoldOutCount"></span><span>Adet</span></div>
<div class="SoldOut-area">
<div class="T">Sepetine Eklenmeyen Ürün(ler)</div>
<div class="List" id="divTukenenUrunListesi">
</div>
</div>
</div>
 <div class="modal-control">
<div class="item">
<a href="javascript:void(0);" onclick="$.fancybox.close()" class="basketCompletebtn button">Alışverişe Devam Et</a>
</div>
<div class="item">
<a href="javascript:void(0);" onclick="" class="basketCompletebtn  button">Sepetten Çıkar</a>
</div>
</div>
</div>
</div> -->

</div>
</template>
<script>
export default {
    computed:{
        products(){
            return this.$store.getters.cartProducts
        
        },
           total(){
            return this.$store.getters.cartTotal
      
    },
    deger(){
        return this.$store.getters.toplam_tutar
    }

    },
  
}
</script>
<style scoped>
* {
    margin: 0;
    outline: 0;
    padding: 0;
}
* {
  
    box-sizing: border-box;
}
.ng-scope{
  width: 1170px;
}
body, td, th, input, textarea, select, a {
    font-size: 12px;
}
body {
    color: #000;
    font-family: open sans,sans-serif;
    font-weight: 400;
}
.BasketPage {
    font: 12px/normal 'Roboto',sans-serif;
    margin: 20px 0;
}
.Basketstep.step1 {
    width: 76%;
}
.Basketstep.step1 {
    width: 76%;
}
.Basketstep {
    margin-bottom: 15px;
    padding-left: 0;
    padding-right: 0;
}
.BasketPage * {

    box-sizing: border-box;
}
.BasketRigth > ul > li{
    list-style-type: none;

}
.BasketRigth {
    margin-top: 20px;
    margin-bottom: 20px;
}
.BasketDetail, .BasketRigth {
    background-color: #fff;
    border: 1px solid #eee;
      
    padding: 10px;
    width: 100%;
   
    margin: 0;
     
}
.BasketDetail{
   
    height: 100%;
}
.BasketDetailContainer {
    /* width: 70.5%; */
    position: relative;
    float: left;
}
.BasketPageeStep_1{
width: 1170px;
height: 301px;
margin-left: 370px;
}


ul{
    list-style:none;
}
.BasketRigth.BasketHediyeCeki {

    background-color: #ddd;
    border-color: #d0d0d0;
    width: 330px;
    height: 77px;

}
#hed div {
    width: 100%;
    border: none;
    padding-bottom: 0;
    font-weight: 600;
}
.Odeme-RightLine {
    text-align: left;
    padding: 0;
    width: 308px;
    height: 55px;
   
    
        
}
#hed div.hediCekForm a {
    width: 28%;
    float: right;
    background-color: #565656;
    text-align: center;
    color: #fff;
    height: 30px;
    line-height: 30px;
    border-radius: 0;
    height: auto;
    box-shadow: none;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 12px;
}

#hed div.hediCekForm input {
    width: 209px;
    float: left;
    background-color: white;
    height: 30px;
    min-height: 30px;
    line-height: 30px;
    border-radius: 0;
    box-shadow: none;
    margin: 0;
    padding: 0;
    color: #b5b5b5;
    text-indent: 15px;
    border: 1px solid #e5e5e5;
    font-size: 12px;
    font-weight: 400;
    opacity: 2;
}
.btn{
  float: right;
  color: white;
}


.BasketAccountContainer {
    width: 330px;
    height: 281px;
    float: right;
    position: relative;
}

.BasketAccount{
    width: 330px;
    height: 281px;
    margin-left: 15px;
}

.basketCompletebtn:hover {
    background-color: #114b5f !important;
    
   
}
.sepetItemB5{
    margin-top: 38px;
    margin-left:50px ;
}
.sepet-sil::before {
    /* content: "\f102"; */
    font-family: fontawesome;
  content: "x";
    font-family: ticimax-font !important;
    font-style: normal;
    font-weight: 400 !important;
    /* font-variant: normal;
    font-variant-caps: normal; */
    font-size: 20px;
    /* text-transform: none; */
    line-height: 1;
    
   
}
.sepet-sil {
    font-size: 12px;
    color: #6c706d;
    cursor: pointer;
}


.sepetiTemizle {
    float: right;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: 0;
    color: #b9b9b9;
    font-size: 12px;
    text-decoration: underline;
    line-height: 30px;
    border-radius: 0;
}

 .basketCompletebtn {
    background: none #fc5f5e;
     
    color: #fff;
    text-align: center;
   
    float: none;
    width: auto;
    height: auto;
    display: block;
    border-radius: 3px;
    line-height: 28px;
    font-size: 16px;
    border: 0;
    
    font-weight: 400;
    padding: 5px 0;
}




.BasketRigth ul li.genelToplam .tut, #divToplamOdeme, .OdemeMenu ul li.activeMenu a::before, .BasketRigth ul li.genelToplam span.tut {
    color: #03a0b4;
}
.BasketRigth{
    margin-bottom: 20px;
}


.hedefSatisContent::before {
    content: "\f0a2";
    color: #fc5f5e;
    font: normal normal normal 12px/1 FontAwesome !important;
}

.button {

    cursor: pointer;
    background: white;
    border:1px solid ;
    margin-bottom: 20px;
    

}

.hedefSatisContent {
    padding: 0;
    margin-bottom: 0;
    color: #000;
    font-size: 12px;
    line-height: 30px;
    float: left;
}

.duzen{
 border: 1px solid #eee;
  width: 809px;
  height: 122px;
    background-color: #fff;
    margin-top:50px ;

  
}
.alisverisedevamet{
    color: #8d8e8f;
font-weight: 500;
background-color: #fff;
display: block;
padding: 12px 22px;
border-radius: 3px;
border: 1px solid #f0f0f0;
text-align: center;
transition: .3s;
}
 
.basketCompletebtn {
    background-color: #03a0b4 !important;
   
  
}
element {

    display: none;
    width: 330.4px;
    height: 281px;
    float: none;

}
.alisverisedevamet:hover {
    background: none #fc5f5e;
    color: #fff;
    border: 1px solid #fc5f5e;
}
.sepett .alisverisedevamet {
    float: right;
    margin-bottom: 15px;
}
.button:hover {
  
    -webkit-transition-duration: .2s,.2s;
}
.alisverisedevamet {
    
    font-weight: 500;
    
    display: block;
    padding: 12px 22px;
    border-radius: 3px;
   
    text-align: center;
    transition: .3s;
       
}
/* .button {
    cursor: pointer;
    background: none repeat scroll 0 0 #111;
    color: #fff;
    font-size: 12px;
    margin: 0 0 8px;
    padding: 11px 5px;
    border: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
} */
.basketCompletebtn {
    border-bottom: 3px solid #b50322 !important;
    
}


.BasketRigth ul li .tut {

    float: right;

}
.BasketRigth ul li span {
/* float: left; */
    font-size: 12px;
    line-height: 20px;

}
/* .sepett .alisverisedevamet {
    float: right;
    margin-bottom: 15px;
} */


/* .button {
    cursor: pointer;
    background: none repeat scroll 0 0 #111;
    
    color: #fff;
    font-size: 12px;
    margin: 0 0 8px;
     
   
} */

a {
    line-height: normal;
}

a {
    text-decoration: none;
   
   
}

.sepetItem:last-child {
    margin-bottom: 0;
}
.sepetItem {
    /* background-color: #fff;
    border: 1px solid #f0f0f0;

    padding: 10px;
    border-radius: 5px;
    position: relative; */
}
.BasketPage * {

    box-sizing: border-box;
}
.sepetItem div.sepetItemB0 {
    height: 100px;
    width: 70px;
    overflow: hidden;
    padding: 0;
    margin-right: 20px;
    margin-left: 10px;
    margin-top: 10px;
    border: 0;
}
.sepetItem > div {
    float: left;
}
.sepetItem > div {
    float: left;
}
.sepetItemB1 {
    width: 34%;
    margin-top: 10px;
}
.sepetItemB1 span {
    display: block;
    line-height: 20px;
    font-size: 12px;
   
}
.sepetItemB1 a {
    font-size: 13px;
    line-height: 20px;
    display: block;
    color: #000;
}
.BasketPage * {
   
    box-sizing: border-box;
}
.sepetItemB1 span {
    display: block;
    line-height: 20px;
    font-size: 12px;
}
.sepetItemB1 span strong {
    font-weight: 600;
}
.sepetItemB1 span {
    line-height: 20px;
    font-size: 12px;
}
.textbox ,.txtSepetAdet {
    height: 30px;
    line-height: 30px;
    width: 60px;
    float: none;
    display: inline-block;
    margin-top: 35px;
    padding: 0;
    text-align: center;
    box-shadow: none;
    border: 1px solid #e5e5e5;
    border-radius: 0;
}
.sepett .alisverisedevamet {
    float: right;
    margin-bottom: 15px;
}
.textbox, .selectboxx {
    color: #666;
  
    font-size: 12px;
    
    -webkit-transition-duration: .2s,.2s;
}
.sepetItem > div {
    float: left;
}
.sepetItemPriceContent {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
}
.sepetItemBIndirimsiz.sepetItemB4 {
    color: #000;
}
.sepetItemB4 {
    flex: 1;
    text-align: center;
    padding: 37px 0;
    color: #fd7175;
    font-size: 18px;
    line-height: 24px;
}
.sepetListTittleB4, .sepetItemB4 {
    width: 15%;
}
.sepetImg {
    max-height: 100px;
    max-width: 100%;
  
}
.sepet-sil {
    font-size: 12px;
    color: #6c706d;
    cursor: pointer;
   
}
#hed div.hediCekForm a:hover {
    background-color: #fc5f5e;
}


</style>