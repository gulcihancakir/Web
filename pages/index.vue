<template>
  <div class="Container">
   
      <!-- <Logo /> -->
      
      <!-- <HeaderContent /> -->
    
      <navigation />
     

      <AnasayfaSlider />
     
      
      <UrunListe />
     
      <!-- <UrunDetayBenzerUrunler/> -->
     

      
     
    

  </div>
</template>

<script scoped>
import sepet from '../components/sepet.vue'
export default {
  components: { sepet },}
</script>

<style >

 .Container {
 /* max-width: 1860px; */
 max-width: 1843px;
 height: 6000px;
}
/*
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
