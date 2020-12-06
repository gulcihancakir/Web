<template>
  <div class="container">
    <div class="row">
      <div class="top">
        <div class="col-md-6 col-sm-6">
          <h3>Benzer Ürünler</h3>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-6 hidden-xs">
          <div class="controls pull-right">
            <a
              class="left fa fa-chevron-left btn btn-info"
              href="#carousel-example"
              data-slide="prev"
            ></a>
            <a
              class="right fa fa-chevron-right btn btn-info"
              href="#carousel-example"
              data-slide="next"
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div
      id="carousel-example"
      class="carousel slide hidden-xs"
      data-ride="carousel"
      data-type="multi"
    >
      <div class="carousel-inner">
        <div class="item active">
          <div class="row">
            <div
              class="col-md-3 col-sm-3 
              "
              v-for="(item, index) in productList"
              :key="index"
            >
              <div class="slider-item" v-if="index < 4">
                <div class="slider-image">
                  <a class="detailLink detailUrl" data-id="" title="" href="">
                  <img
                    :src="item.productImage"
                    class="img-responsive"
                    alt="a"
                  />
                  </a>
                </div>
                <div class="slider-main-detail">
                  <div class="slider-detail">
                    <div class="product-detail">
                      <a href="" class="productName">{{ item.productName }}</a>
                      <h5 class="detail-price"><b>₺</b>{{ item.productPrice }}</h5>
                      <div class="productIcon">
                        <div class="favori favoriContent-563-974">
                          <a
                            onclick=""
                            init="false"
                            data-action="1"
                            class="favoriteslist listfavoriPasif tip"
                            onload=""
                            title="Favorilere Ekle"
                          >
                            Favorilere Ekle
                          </a>
                        </div>
                        <div class="mycartIcon tip" title="Sepete Ekle">
                          <a
                            onclick=""
                            class="btnAddToCart"
                            data-productid=""
                            data-variantid=""
                          >
                            <span class="urunListeSpanSepeteEkle"
                              >Sepete Ekle</span
                            >
                          </a>
                        </div>
                        <div
                          class="examineIcon tip detailLink"
                          title="Ürünü İncele"
                        >
                          <a
                            href="/uzun-tunik-563"
                            class="detailUrl"
                            data-id="563"
                          >
                            Ürünü İncele
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="row">
            <div
              class="col-md-3 col-sm-3 "
              v-for="(item, index) in productList"
              :key="index"
            >
              <div class="slider-item" v-if="index > 3 && index < 8">
                <div class="slider-image">
                  <a class="detailLink detailUrl" data-id="" title="" href="">

                  <img
                    :src="item.productImage"
                    class="img-responsive"
                    alt="a"
                  />
                  </a>
                </div>
                <div class="slider-main-detail">
                  <div class="slider-detail">
                    <div class="product-detail">
                        <a href="" class="productName">{{ item.productName }}</a>

                      <h5 class="detail-price"><b>₺</b>{{ item.productPrice }}</h5>
        
                      <div class="productIcon">
                        <div class="favori favoriContent-563-974">
                          <a
                            onclick="productFavoritesProcess(-1,2,563,974,1,this)"
                            init="false"
                            data-action="1"
                            class="favoriteslist listfavoriPasif tip"
                            onload="urunfavoriKontrol(this,563)"
                            title="Favorilere Ekle"
                          >
                            Favorilere Ekle
                          </a>
                        </div>
                        <div class="mycartIcon tip" title="Sepete Ekle">
                          <a
                            onclick="productListAddToCart(563,974,0,GetControlValue('.txtSepetAdet08b6cc9d50a84903bc165fe73fe43fc9'),'/uzun-tunik-563',1)"
                            class="btnAddToCart"
                            data-productid="563"
                            data-variantid="974"
                          >
                            <span class="urunListeSpanSepeteEkle"
                              >Sepete Ekle</span
                            >
                          </a>
                        </div>
                        <div
                          class="examineIcon tip detailLink"
                          title="Ürünü İncele"
                        >
                          <a
                            href="/uzun-tunik-563"
                            class="detailUrl"
                            data-id="563"
                          >
                            Ürünü İncele
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productList: [
        {
          productId: 0,
          productName: "Balon Kollu Keten Tunik",
          productImage:
            "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/balon-kollu-keten-tunik-1c8b.jpg",
          productPrice: "149,00",
        },
        {
          productId: 1,
          productName: "Balon Kollu Keten Tunik",
          productImage:
            "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/balon-kollu-keten-tunik-bf42.jpg",
          productPrice: "149,00",
        },
        {
          productId: 2,
          productName: "Balon Kollu Keten Tunik",
          productImage:
            "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/balon-kollu-keten-tunik-e90f.jpg",
          productPrice: "149,00",
        },
        {
          productId: 3,
          productName: "Balon Kollu Keten Tunik",
          productImage:
            "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/dugmeli-havuc-pantolon-e57c.jpg",
          productPrice: "149,00",
        },
        {
          productId: 4,
          productName: "Balon Kollu Keten Tunik",
          productImage:
            "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/dugmeli-havuc-pantolon-32ed.jpg",
          productPrice: "149,00",
        },
        {
          productId: 5,
          productName: "Balon Kollu Keten Tunik",
          productImage:
            "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/dugmeli-havuc-pantolon-dbe6.jpg",
          productPrice: "149,00",
        },
        {
          productId: 6,
          productName: "Balon Kollu Keten Tunik",
          productImage:
            "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/balon-kollu-keten-tunik-1c8b.jpg",
          productPrice: "149,00",
        },
        {
          productId: 7,
          productName: "Balon Kollu Keten Tunik",
          productImage:
            "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/dugmeli-havuc-pantolon-dbe6.jpg",
          productPrice: "149,00",
        },
        {
          productId: 6,
          productName: "Balon Kollu Keten Tunik",
          productImage:
            "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/balon-kollu-keten-tunik-1c8b.jpg",
          productPrice: "149,00",
        },
        {
          productId: 7,
          productName: "Balon Kollu Keten Tunik",
          productImage:
            "https://www.minikterzi.com/Uploads/UrunResimleri/thumb/dugmeli-havuc-pantolon-dbe6.jpg",
          productPrice: "149,00",
        },
      ],
    };
  },

};
</script>
<style scoped>
.ccontainer {
  height: 606px;
  margin-left:350px ;
}

.slider-item {
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  background: #fff;
  height: 521px;
}
 .slider-item {
    position: relative;
    border: 1px solid #f5f1f1;
 
 
    float: left;
  
}

.slider-item .slider-image a::after {
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
    -webkit-opacity: .8;
    -moz-opacity: .8;
    transform: scale(0);
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    transition: .3s !important;
}
/* .col-xs-12{
  height: 200px;
} */
.slider-image {
  height: 0;
  position: relative;
  background: #fff;
  padding-bottom: 150%;
  overflow: hidden;
  width: 100%;
  margin: 0;
  border-bottom: 0;
}
 .slider-item:hover .slider-image a::after {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
}

 .slider-item .product-detail {
  z-index: 90;
  height: 73px;
}
 .slider-item .slider-detail .product-detail .productName  {
  /* margin: 0 0 2px; */
  margin-left: 50px;
  padding: 5px 0;
  font-weight: 400;
  text-align: center;
  font-size: 12px;
  height: 44px;
  text-decoration: none;
  overflow: hidden;
  
}
.slider-item .slider-detail .product-detail .productName:hover {
  color: #03a0b4;
}
.slider-item .slider-detail .product-detail .productName  {
  font-family: open sans, sans-serif;
  color: #444;
  text-decoration: none;  
}
 .slider-item .product-detail .detail-price  {
  color: #03a0b4;
  font-size: 20px;
  margin-right: 5px;
  display: inline-block;
  line-height: 24px;
}
.slider-item .product-detail .detail-price {
  text-align: center;
}
.slider-item .product-detail .detail-price {
  margin: 3px 0;
  margin-top: 25px;
  clear: both;
  float: left;
  width: 100%;
  text-align: center;
  display: block;
  height: 30px;
}
.slider-item:hover .detail-price {
  opacity: 0;
  /* z-index: -1; */
}

 .slider-item .productIcon .favori a {
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
 .slider-item .productIcon .mycartIcon {
  width: 50%;
  float: left;
  margin-left: 10px;
}

 .produ.slider-item .productIcon .mycartIcon a {
  font-size: 14px;
  line-height: 33px;
  text-align: center;
  white-space: nowrap;
  color: #03a0b4;
  text-transform: uppercase;
  font-weight: 400;
}
 .slider-item .productIcon .mycartIcon a {
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

 .slider-item .productIcon .hoverFalse,
 .slider-item .productIcon .favori,
 .slider-item .productIcon .mycartIcon,
.slider-item .productIcon .examineIcon {
  opacity: 0;
  visibility: hidden;
  transform: translateY(50px);
}
 .slider-item .productIcon .hoverFalse a,
 .slider-item .productIcon .favori a,
 .slider-item .productIcon .mycartIcon a,
.slider-item .productIcon .examineIcon a{
  text-decoration: none;
}
.slider-item:hover .favori,
 .slider-item:hover .mycartIcon,
 .slider-item:hover .examineIcon {
  opacity: 1;
  visibility: visible;

  transform: translateY(-20px);
}
 .slider-item .productIcon .examineIcon {
  width: 17%;
  float: right;
}
 .slider-item .productIcon .examineIcon a {
 
  width: 100%;

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
 
  /* -webkit-border-radius: 0; */
}
/* .slider-item .productIcon .examineIcon a {
    font-size: 0;
    text-align: center;
    white-space: nowrap;
    color: #03a0b4;
    text-transform: uppercase;
    font-weight: 400; */
/* } */
.slider-item .productIcon .examineIcon a:after {
  font-family: fontawesome;
  font-size: 16px !important;
  line-height: 35px;
  content: "\f002";
}
.slider-item .productIcon .favori a:after {
  font-family: fontawesome;
  font-size: 16px !important;
  line-height: 35px;
  content: "\f004";
}
.slider-item.productIcon .hoverFalse,
.slider-item .productIcon .favori,
.slider-item .productIcon .mycartIcon,
.slider-item .productIcon .examineIcon {
  transition: all 0.4s ease;
}
.slider-item .productIcon .favori {
  width: 17%;
  cursor: pointer;
  float: right;
  margin-left: 10px;
  margin-right: 10px;
}

.top {
  background-color: #03a0b4;
  height: 38px;
  width: 1170px;
  margin-top: 10px;
}
 h3 {
  margin-top: 10px;

  color: #fff;
  font-size: 14px;
  font-family: roboto condensed, sans-serif;
  font-weight: 700;
}
.pull-right {
  padding-bottom: 0px;
} 
.carousel-inner{
  width: 1170px;
  
}

.row {
  margin-bottom: 25px;
} 
.row {
    margin-right: 0px;
    margin-left:0px;
}

.slider-item .rating {
  float: left;
  font-size: 17px;
  text-align: right;
  line-height: 52px;
  margin-bottom: 10px;
  height: 52px;
}
.slider-item .btn-add {
  width: 50%;
  float: left;
  border-right: 1px solid #e1e1e1;
}
.slider-item .btn-details {
  width: 50%;
  float: left;
}
.controls {
  margin-top: 10px;
}

.btn-info {
  background-color: #03a0b4;
  border: none;
  padding: 5px;
} 
.btn-info:hover {
  background-color: #03a0b4;
 
} 

.review {
  margin-bottom: 5px;
  padding-top: 5px;
}
</style>