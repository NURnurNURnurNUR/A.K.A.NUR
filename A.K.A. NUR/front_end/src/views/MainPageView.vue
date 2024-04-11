<script setup>
import NavBar from "@/components/NavBar.vue";
import Logo from '@/components/Logo.vue';
</script>

<template>
<div>
   <NavBar/>
</div>
<main>
   <div>
      <Logo/>
   </div>
   <div class="text-box">
      <p>WELCOME TO A.K.A. NUR, WHERE TIMELESS ELEGANCE MEETS MODERN SOPHISTICATION.<br>
         WE SPECIALIZE IN OFFERING HIGH-QUALITY WOMEN'S CLOTHING IN CLASSIC BLACK AND WHITE COLORS, EMBODYING CHIC MINIMALISM.<br>
         JOIN US AT OUR PRESTIGIOUS FASHION WEEKS WHERE WE SHOWCASE OUR LATEST COLLECTIONS, SETTING THE STANDARD FOR SOPHISTICATED STYLE.<br>
         ELEVATE YOUR WARDROBE WITH A.K.A. NUR – WHERE BLACK AND WHITE ARE NOT JUST COLORS, BUT A STATEMENT OF ENDURING ALLURE.</p>
  </div>
   
</main>

</template>

<style scoped>
main 
    {
        background-image: url("@/assets/fashion.jpg");
        width: 100%;
        height:100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    
    }
 
   
    .black-text 
    {
      color: black;
    }
    .text-box 
    {
       
      margin: 0 auto; 
      max-width: 800px; 
  }

    p
    {
        text-align: center;
        color: #FFFFFF;
        letter-spacing:0.1em;
        font-weight: 500;
        font-weight:500;
        font-size: 1.1em;
        font-family: "Montserrat", monospace;
        margin-bottom: 0;
        padding-bottom: 1em;
        line-height: 1.7;
    }




</style>