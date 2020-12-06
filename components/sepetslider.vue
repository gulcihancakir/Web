<template>
<!-- <div class="maindiv">
   <div class="imagediv">

        <img src="https://www.minikterzi.com/Uploads/UrunResimleri/uzun-tunik-9796.jpg" alt="">

   </div>
 
  <div class="detay">
    <span>Uzun Tunik</span>
    <span>-</span>
    <span>STD</span>    
    <span>x</span>

    <span>1</span>
    <strong><a href="" type="button">x</a></strong>
    </div>
    <div class="toplam">
  <tr><td>:</td><td> ₺150,00  Genel Toplam</td></tr>
  </div>

</div> -->
<div>
    <div class="CartProduct" >
<ul class="SProduct" ><li class="topCardItem">
    <a href="/balon-kollu-keten-tunik-990" rel="nofollow">
        <img src="https://www.minikterzi.com/Uploads/UrunResimleri/thumb/balon-kollu-keten-tunik-1c8b.jpg" alt="Balon Kollu Keten Tunik"  style="height: 70px;">
        <span class="SepettopAd"><span>Balon Kollu Keten Tunik</span><span>Camel - STD</span></span>
        <span class="sepetTopBirimFiyat" >₺149,00 </span>
        <span class="SepetTopAdet">
            x&nbsp;1
        </span>
        <span class="sepetTopSatisBirimi" >Adet </span>
        <span class="sepetTopFiyat" >₺149,00 </span>
       
    </a>
    <a onclick="sepettenCikar(1745,0)" rel="nofollow">
        <span><i class="fa fa-times" aria-hidden="true"></i></span>
    </a>
</li>
</ul>
<ul id="ulUstSepetteUrunYok" class="divustSepetteUrunYok" style="display: none;">
<li>
<span class="spanustSepetteUrunYok">Sepetinizde ürün bulunmamaktadır.</span>
</li>
</ul>
<ul class="SPrice">
<li>
<span>Genel Toplam</span>:
<span id="spnUstSepetToplamTutar" class="sepetToplamTutar">₺149,00</span>
</li>
</ul>
<a href="/Sepetim.aspx" class="button headerCartBtn" style="display: none;" rel="nofollow">Sepetim</a>
<a href="" class="button headerOrderBtn"  rel="nofollow">SİPARİŞİ TAMAMLA</a>
</div>
</div>
</template>

<style scoped>
/* .CartProduct {
    display: block !important;
    border: 0;
    position: fixed;
    right: 0;
    top: 0;
    margin-right: -20%;
    width: 20%;
    height: 100%;
    padding: 20px;
    background: #fff;
    z-index: 10000;
   
    box-sizing: border-box;
    
    box-shadow: 0 0 4px 0 rgba(0,0,0,.14);
  
    transition: margin-right .7s cubic-bezier(.165,.84,.44,1);
} */
.CartProduct ul {
    list-style-type: none;
}
.mycart .CartProduct ul li {
    float: none;
    display: block;
    margin-bottom: 10px;
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
    -o-transition: all .5s;
}
.mycart .CartProduct ul li a > img {
    width: 80px;
    height: auto !important;
    margin: 0 15px 0 0;
    float: left;
    border: 1px solid #ddd;
    padding: 0;
}
img {
 
    max-width: 100%;
}
.mycart .CartProduct ul.SPrice li span {
    display: inline-block;
    float: right;
    font-weight: 600;
    color: #000;
}
/* img{
    width: 92;
    height: 138px;
}
.maindiv{
    width: 300px;
    height: auto;
}
span{
    color:rgb(133, 136, 136)
}
.imagediv{
    width: 92px;
    height: 138px;
}
.detay{
    margin-top:-95px ;
    margin-left:95px ;
}
.toplam{
    margin-top:84px ;
    margin-left:77px
}

a{
color:rgb(133, 136, 136)
} */
</style>