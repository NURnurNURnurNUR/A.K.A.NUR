<template>
    <main>
        
           <NavBar />
        
        <div class="shape-container">
            <div class="shape">
                <div class="text-container">
                    <h1>Login</h1>
                    <p>Enter your email and passwrod</p>
                </div>
                <form>
                    <div class="form-container">
                        <div class="email-container">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required>
                        </div>
            
                        <div class="message-container">
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" required>
                        </div>
                        <button type="submit" class="btn">Login</button>
                    </div>
          
                </form>
                <a href="/signup" button class="account">Do not have an account? SIGN UP</a>
            </div>
        </div>
    
    </main>
    </template>
    
    <script setup>
    import NavBar from "@/components/NavBar.vue";
    
    
    </script>
    
    <style scoped>
    main {
      background-image: url("@/assets/login.jpg");
      width: 100%;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    
    .shape-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 93%;
    }
    
    .shape {
      height: 580px;
      width: 450px;
      border-radius: 5%;
      background-color: #FFFFFF;
      opacity: 0.9;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
    .text-container {
      text-align: center;
      margin-bottom: 2em;
    }
    
    .text-container h1 {
      margin: 0;
      padding: 1em;
      color: black;
      font-size: 40px;
      letter-spacing: 0.2em;
      font-style: bold;
    }
    
    .text-container p {
      margin: 0;
      font-size: 25px;
      color: black;
    }
    
    .form-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding-bottom: 4em;
    }
    
    .email-container,
    .message-container {
      text-align: center;
      align-items: center;
      margin-top: 2.5em; /* Adjusted margin-top */
    }
    
    label {
      color: white;
      font-size: 20px;
      font-weight: bold;
      font-family: 'Montserrat';
    }
    
    .email-container label {
      color: #000;
    }
    
    .message-container label {
      color: #000;
    }
    
    
    input[type="email"],
    input[type="password"] {
      width: 90%;
      padding: 17px; 
      border-radius: 5px;
      border: 1px solid #ccc;
      background-color: #fff;
      z-index: 1;
    }
    
    
    button[type="submit"] {
      padding: 10px 50px;
      margin-top: 2em; 
      border: none;
      border-radius: 5px;
      background-color: #000;
      color: white;
      cursor: pointer;
      font-size: 18px;
    }
    
    
    .account {
      color: #000;
      font-family: 'Montserrat';
      font-weight: bold;
      letter-spacing: 0.1em;
      margin-bottom:4em;
    }
    
    .account:hover {
      background-color: #000;
      color: white;
    }
    </style>