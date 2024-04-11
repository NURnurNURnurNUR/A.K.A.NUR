<template>
    <main>
      <NavBar/>
      <div class="content">
        <div class="text-container"> 
          <h1>Account</h1>
        </div>
        <div class="purchases-container">
          <!-- Here you can display the purchases made by the customer -->
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import NavBar from "@/components/NavBar.vue";
  </script>
  
  <style scoped>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center items horizontally */
  }
  
  .content {
    margin-top: 20px; /* Adjust as needed */
  }
  
  .text-container {
    color: #FFFFFF;
    text-align: center;
  }
  
  .purchases-container {
    /* Add styles for displaying purchases below */
    margin-top: 20px; /* Adjust as needed */
    color: #FFFFFF;
    /* Add any additional styles for the purchases container */
  }
  </style>
  