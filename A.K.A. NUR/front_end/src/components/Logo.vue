<template>
    <div class="logo">
      <span class="aka">A.K.A.</span>
      <span class="nur">NUR</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Logo'
  }
  </script>
  
  <style scoped>
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  
  .aka {
    background-color: black;
    color: white;
    padding: 15px 90px;
    font-size: 2em;
    letter-spacing:1em;
  }
  
  .nur {
    background-color: white;
    color: black;
    padding: 15px 100px;
    font-size:2em;
    letter-spacing:1em;
  }
  </style>