<template>
<div class="CartProduct">
    <sepetslider/></div>
</template>

<style scoped>
.CartProduct {
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
}
</style>