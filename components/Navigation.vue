<template>

     
        <div class="navigation">
            <div id="divTopProductSearch" class="searchContent " style="opacity: 1;">
<div class="search" id="divArama">
<button class="ButtonMic" id="start_button" type="button" onclick="return startButton(event);" style="display: none; cursor: pointer;">
<img alt="Start" id="start_img" src="/Scripts/speech/mic.gif" width="32"></button>
<input name="ctl00$txtbxArama" type="text" id="txtbxArama" tabindex="-1" onkeypress="" class="urunSearchAC rsbInput" autocomplete="off" inputmode="search" placeholder="Arama">
<input type="button" name="" onclick="" id="btnKelimeAra" class="rsbButton" value="Ara" title="Ara">
</div>
</div>
<div>
   
<div id="divUcTopMenu">
             <!-- <ul class="HeaderMenu2 navUl" id="HeaderMenu2">
        <li class="ulVar" v-for="item in categoryList" :key="item">
            <a v-bind:href="''" target="_self" v-bin:title="item.categoryName">
            {{item.categoryName}}
              </a>
            <ul v-for="i in subitem" :key="i">
                <li><a v-bind:href="''" target="_self" v-bin:title="i.name">{{i.name}}</a></li>
            </ul>

          
        </li>
    </ul> -->
    
 <ul class="HeaderMenu2 navUl" id="HeaderMenu2">
    <li class="ulVar">
        <a href="" target="_self" title="ÜST">ÜST</a>
        
        <!-- <ul>
    <li><a href="/tunik-20" target="_self" title="TUNİK">TUNİK</a></li>
<li><a href="/gomlek-24" target="_self" title="GÖMLEK">GÖMLEK</a></li>
<li><a href="/bluz-26" target="_self" title="BLUZ">BLUZ</a></li>
<li><a href="/kazak-28" target="_self" title="KAZAK">KAZAK</a></li>
<li><a href="/sweatshirt-29" target="_self" title="SWEATSHIRT">SWEATSHIRT</a></li>
<li><a href="/hirka-35" target="_self" title="HIRKA">HIRKA</a></li>
</ul>  -->

</li>

<li class="ulVar"><a href="/alt-17" target="_self" title="ALT">ALT</a>
<ul><li><a href="" target="_self" title="PANTOLON">PANTOLON</a></li>
<!-- <li><a href="/etek-25" target="_self" title="ETEK">ETEK</a></li>
<li><a href="/jean-30" target="_self" title="JEAN">JEAN</a></li> -->
</ul> 
</li>
<li class="ulVar"><a href="/elbise-15" target="_self" title="ELBİSE">ELBİSE</a>
 <!-- <ul><li><a href="/elbise-16" target="_self" title="ELBİSE">ELBİSE</a></li>
<li><a href="/jile-27" target="_self" title="JİLE">JİLE</a></li>
</ul>  -->
</li>
<li class="ulVar"><a href="/dis-giyim-13" target="_self" title="DIŞ GİYİM">DIŞ GİYİM</a>
<ul>
    <li><a href="" target="_self" title="CEKET">CEKET</a></li>
<li><a href="" target="_self" title="FERACE">FERACE</a></li>
<li><a href="" target="_self" title="KAFTAN">KAFTAN</a></li>
<li><a href="" target="_self" title="TRENÇKOT">TRENÇKOT</a></li>
<li><a href="" target="_self" title="YAĞMURLUK">YAĞMURLUK</a></li>
<li><a href="" target="_self" title="KABAN">KABAN</a></li>
</ul> 
</li>
<li class="ulVar"><a href="/ic-giyim-32" target="_self" title="İÇ GİYİM">İÇ GİYİM</a>
<!-- <ul>
    <li><a href="/jupon-33" target="_self" title="JÜPON">JÜPON</a></li>
</ul>  -->
</li>
<li><a href="/denim" target="_self" title="DENİM">DENİM</a></li>
<li class="ulVar"><a href="/aksesuar-38" target="_self" title="AKSESUAR">AKSESUAR</a>
<!-- <ul><li><a href="/kemer-39" target="_self" title="KEMER">KEMER</a></li>
<li><a href="/sal-atki-42" target="_self" title="ŞAL &amp; ATKI">ŞAL &amp; ATKI</a></li>
</ul> -->
</li>
</ul>
<div class="TempMenu">
<div></div>
</div>



</div>
</div>

</div>

</template>
<script>
export default {
    data(){
        return{
            categoryList:[
                {
                    categoryId:1,
                   categoryName: "ÜST",
                   subitem:[
                       
                   ]
                },
                {
                     categoryId:2,
                   categoryName: "ALT",
                   subitem:[
                       
                   ]
                },
                {
                     categoryId:3,
                   categoryName: "ELBİSE",
                   subitem:[

                   ]
                },
                {
                 categoryId:4,
                   categoryName: "DIŞ GİYİM",
                   subitem:[
                       {name: "CEKET",},
                       {name:"FERACE",},
                    {name:"KAFTAN",},
                    {name:"TRENÇKOT",},
                    {name:"YAĞMURLUK",},
                    {name:"KABAN"}
                   ]
                   },
                   {
                        categoryId:5,
                   categoryName: "İÇ GİYİM",
                   subitem:[
                       
                   ]
                   },
                   {
                    categoryId:6,
                   categoryName: "DENİM",
                   subitem:[
                       
                   ]
                   },
                   {
                        categoryId:7,
                   categoryName: "AKSESUAR",
                   subitem:[
                       
                   ]
                   }

            ]
        }
    }
}
</script>
<style scoped>


.navigation {

    text-align: left;
    display: block;
    background-color: #114b5f;
    height: 51px;

    

}
* {
    margin: 0;
    outline: 0;
    padding: 0;
}
body, td, th, input, textarea, select, a {
    font-size: 12px;

}

.navUl a {
    cursor: pointer;
}
.navUl a:hover {
    text-decoration: none;
}

.navUl a {
    text-decoration: none;
        text-decoration-line: none;
        text-decoration-style: solid;
        text-decoration-color: currentcolor;
        text-decoration-thickness: auto;
    color: #666;
   
}
ul.HeaderMenu2 li ul {
    visibility: visible;
}
ul.HeaderMenu2 {
    text-align: left;
}
ol, ul {
    list-style: none;
        list-style-position: outside;
        list-style-image: none;
        list-style-type: none;
}
body {
    color: #000;
    font-family: open sans,sans-serif;
    font-weight: 400;
}
.navigation {
    text-align: left;
}
.navigation ul {
    list-style-type: none;
}
ul.HeaderMenu2 {
    /* z-index: 1000; */
    margin: auto !important;
    float: none;
    display: block;
    text-align: left;
}
.HeaderMenu2 {
    width: 1170px;
}

ul.HeaderMenu2 > li:first-child {
    background-color: #03a0b4;
}
ul.HeaderMenu2 > li:hover {
    background-color: #03a0b4;
}
ul.HeaderMenu2 li {
    position: relative;
}
ul.HeaderMenu2 > li {
    display: inline-block;
    padding: 0 25px;
    margin: 0;
    /* float: left; */
}


ol, ul {
    list-style: none;
        list-style-type: none;
    z-index: 2;

        
}
ul.HeaderMenu2 li ul li a {
    line-height: 35px;
    /* color:white; */
    font-size: 13px;
    font-weight: 400;
    display: block;
}
ul.HeaderMenu2 li ul li a:hover{
 
    color:#03a0b4;
}
ul.HeaderMenu2 li:hover > ul {
    display: block;
    /* overflow: visible; */
    visibility: visible;
    opacity: 1;

    transform: translateY(0px);
    
    transition: transform .5s ease,opacity .2s ease,max-height 0s step-end,max-width 0s step-end,padding 0s step-end;
}
ul.HeaderMenu2 {
    text-align: left;
}

/* ul.HeaderMenu2 li {

    position: relative;
    

} */

ul.HeaderMenu2 > li > a {
    color: #fff;
    height: 100%;
    
    font-size: 14px;
    font-weight: 700;
    position: relative;
    line-height: 50px;
    display: inline-block;
    font-family: roboto condensed,sans-serif;
}

ul.HeaderMenu2 > li.ulVar::after {

    border-top-color: inherit;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    border-left-color: transparent !important;
    border-color: #f8f8f8;
    
    content: ' ';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -2px;
    border-width: 4px 3px;
    border-style: solid;

}
ul.HeaderMenu2 li ul {
    position: absolute;
    left: 0;
    top: 100%;
    padding: 0 15px;
    background: #fff;
    border: 1px solid #eee;
       
    border-bottom: 3px solid #03a0b4;
    border-top: none;
    overflow: hidden;
    width: 205px;
    opacity: 0;
    visibility: hidden;
  
    transform: translateY(40px);
   
    transition: transform .5s ease,opacity .6s ease,max-height .6s step-end,max-width .6s step-end,padding .6s step-end;
 
    box-shadow: 0 4px 13px -3px gray;
}
.navigation ul {
    list-style-type: none;
}
.searchContent {
    

    width: 300px;
    height: 34px;
    background: #fff;
    position: absolute;
    right: 0;
    /* bottom: 103px; */
    /* margin-bottom: 0px; */
    margin-right: 335px;
    margin-top: 10px;
}
.searchContent .urunSearchAC {
    position: absolute;
    
    color: black;
    right: 34px;
    top: 0;
    line-height: 34px;
    border: 0;
    padding: 0;
    font-size: 11px;
    width: 80%;
}
.searchContent .rsbButton {
    position: absolute;
   
    right: 0;
    top: 0;
    line-height: 34px;
    padding: 0 6px;
    font-size: 12px;
    border: 0;
    cursor: pointer;
    text-indent: 0;
    border: 0;
    box-shadow: none;
    border-radius: 0;
    -webkit-appearance: none;
    background-color: #ddd;
    color: rgb(70, 69, 69);
}
</style>