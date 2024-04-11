<template>
    <div class="clothing-item">
      <div class="details">
        <div class="name">
          <h2>Product Name</h2>
        </div>
        <div class="image"></div>
        <div class="description">
          <p><strong>Color:</strong> Product Color</p>
          <p><strong>Price:</strong> Product Price</p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .clothing-item 
  {
    display: flex;
    margin-bottom: 20px;
    border: 1px solid #ccc; 
    padding: 20px; 
  }
  
  .image 
  {
    width: 200px;
    height: 200px;
    background-color: #ccc;
    align-self: center;
    flex: 0 0 auto; /* Don't allow image to grow or shrink */
  }
  
  .details 
  {
    display: flex;
    flex-direction: column;
    flex: 1; /* Fill available space */
  }
  
  .description 
  {
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 10%;
  }

  .name
  {
    align-self: center;
  }

  h2 
  {
    margin-top: 0;
    margin-bottom: 10px;
    color: white; 
  }
  
  p 
  {
    margin-top: 0;
    margin-bottom: 5px;
    color: white; 
  }
  </style>
  