<script>
import { collection, addDoc } from 'firebase/firestore'; // Import collection and addDoc
import NavBar from "@/components/NavBar.vue";
import projectFirestore from "../firebase/config";

export default {
  components: {
    NavBar
  },
  data() {
    return {
      email: '',
      message: '',
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    handleSubmit() {
      let userMessage = {
        email: this.email,
        message: this.message
      };

      const userMessagesCollection = collection(projectFirestore, 'userMessages');

      addDoc(userMessagesCollection, userMessage)
        .then(() => {
          this.successMessage = 'Message sent successfully!';
          console.log('Success message:', this.successMessage);
          
          this.email = '';
          this.message = '';
          setTimeout(() => {
            this.successMessage = ''; 
            console.log('Success message cleared');
          }, 5000);
        })
        .catch(error => {
          this.errorMessage = 'Error sending message: ' + error.message;
          console.log('Error message:', this.errorMessage);
          setTimeout(() => {
            this.errorMessage = ''; 
            console.log('Error message cleared');
          }, 5000);
        });
    }
  }
};
</script>

<template>
    <main>
        <NavBar />
        <div class="shape-container">
            <div class="shape">
                <div class="text-container">
                    <h1>Support</h1>
                    <p>If you have any troubles or questions, contact us!</p>
                </div>
                <div class="form-container">
                    <div class="email-container">
                        <label for="email">Email:</label>
                        <input type="email" id="email" v-model="email">
                    </div>
                    <div class="message-container">
                        <label for="message">Message:</label>
                        <textarea id="message" rows="5" v-model="message"></textarea>
                    </div>
                    <button type="submit" @click.prevent="handleSubmit">Submit</button>
                </div>
                <div>
                  <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
                  <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
main 
{
    background-image: url("@/assets/li.jpeg");
    width: 100%;
    height:100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.shape-container 
{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 93%;
    
}

.shape 
{
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

.text-container 
{
    text-align: center;
    margin-bottom: 2em; 
}

.text-container h1 
{
    margin: 0;
    padding: 1em;
    color: black;
    font-size: 40px;
    letter-spacing: 0.2em;
    font-style: bold;
}

.text-container p 
{
    margin: 0;
    font-size: 25px;
    color: black;
}

.form-container 
{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2em; 
}

.email-container,
.message-container 
{
    margin-bottom: 20px;
    text-align: center;
}

label 
{
    color: white;
    font-size: 20px; 
    font-weight: bold;
    font-family: 'Montserrat';
}

.email-container label 
{
    color: #000; 
    
}

.message-container label 
{
    color: #000; 
    
}

input[type="email"],
textarea 
{
    width: 90%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #fff;
    z-index: 1;
}

button[type="submit"] 
{
    padding: 10px 50px;
    border: none;
    border-radius: 5px;
    background-color: #1C1E30;
    color: white;
    cursor: pointer;
    font-size: 18px;
}
</style>

