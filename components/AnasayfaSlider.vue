<template>
  <div class="anasayfaslider">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
    
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
      
        img-src="https://www.minikterzi.com/Uploads/Slider/-19.jpg?t=20201004124852"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://www.minikterzi.com/Uploads/Slider/-14.jpg?t=20200510120301">
      
      </b-carousel-slide>



   

     
    </b-carousel>

  
  </div>
</template>

<script >
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style  scoped>
.anasayfaslider{
  width: 1170px;
  height: 390px;
  margin-left: 350px;
  margin-top:30px;
  
}

.carousel-indicators {
    width: 15px;
    height: 15px;
    border-radius: 20px;
    display: block;

}
</style>