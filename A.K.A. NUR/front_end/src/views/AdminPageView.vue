<template>
    <div class="admin-container">
      <h1>Add Product</h1>
      <form action="/api/submit" method="post" enctype="multipart/form-data">
        <div class="form-group">
          <label for="name">Product Name:</label>
          <input type="text" v-model="productName" name = "name">
        </div>
        <div class="form-group">
          <label for="color">Product Color:</label>
          <input type="text" v-model="productColor" name = "color">
        </div>
        <div class="form-group">
          <label for="price">Product Price:</label>
          <input type="number" v-model="productPrice" name = "price">
        </div>
        <div class="form-group">
          <label for="description">Product Description:</label>
          <textarea v-model="productDescription" required name = "description"></textarea>
        </div>
        <div class="form-group">
          <label for="image">Product Image:</label>
          <input type="file" accept="image/*" required name = "file">
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  </template>
  
  
  <script setup>

  /*
  import { ref } from 'vue';
  
  const productName = ref('');
  const productColor = ref('');
  const productPrice = ref(0);
  const productDescription = ref('');
  let productImage = null;
  
  const addProduct = async () => {
    try {
      const formData = new FormData();
      formData.append('name', productName.value);
      formData.append('color', productColor.value);
      formData.append('price', productPrice.value);
      formData.append('description', productDescription.value);
      formData.append('image', productImage);
  
      const response = await fetch('/admin/Product', {
        method: 'POST',
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to add product');
      }
  
      // Clear form fields after adding the product
      productName.value = '';
      productColor.value = '';
      productPrice.value = 0;
      productDescription.value = '';
      productImage = null;
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      productImage = reader.result;
    };
    reader.readAsDataURL(file);
  };

  */
</script>
  
<style scoped>
  .admin-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  h1 {
    margin-top: 0;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="number"],
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  textarea {
    height: 100px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  