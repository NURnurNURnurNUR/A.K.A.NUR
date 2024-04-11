<script setup>

import { RouterLink } from 'vue-router';

</script>

<template>
    <div>
      <div class="navig">
        <RouterLink to="/">A.K.A. NUR</RouterLink>
        <RouterLink to="/clothing">CLOTHING</RouterLink>
        <RouterLink to="/login">LOGIN</RouterLink>
        <RouterLink to="/account">MY ACCOUNT</RouterLink>
        <RouterLink to="/support">SUPPORT</RouterLink>
        <RouterLink to="/bag">SHOPPING BAG</RouterLink>
      </div>
    </div>
  </template>
  
  <style scoped>
  .navig
  {
    height: 50px;
    width: 100%; 
    background-color: #FFFFFF;
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
  }
  
  .navig a 
  {
    color: #000;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    padding: 0 20px; 
    height: 100%;
    display: flex;
    align-items: center;
  }
  
  .navig a:hover 
  {
    background-color: #ddd;
    color: black;
  }
  
  
  @media screen and (max-width: 768px) 
  {
    .navig a 
    {
      font-size: 14px; 
      padding: 0 10px; 
    }
  }
  </style>