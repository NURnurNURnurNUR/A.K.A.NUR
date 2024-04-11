<template>
    <main>
        <NavBar />
        <div class="navig-container">
            <div class="navig-shape">
                <div class="text-container">
                    <h1>CLOTHING</h1>
                </div>
            </div> 
            <div class="right">
                <div class="products-container">
                    <Product v-for="index in 6" :key="index" class="container-product" />
                </div>
                <div class="search-bar-container">
                    <div class="search-bar-shape">
                        <p>This is the search bar container.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import Product from "@/components/Product.vue"
</script>

<style scoped>
main {
    background-color: #000;
    overflow-y: scroll;
}

.navig-container {
    position: relative;
    display: flex;
    justify-content: left;
    align-items: left;
    height: 95%;
}

.navig-shape {
    height: 100vh;
    width: 20vw;
    background-color: #FFFFFF;
    opacity: 0.9;
    position: relative;
    display: flex;
    flex-direction: column;
}

.text-container {
    text-align: center;
}

.text-container h1 {
    margin: 0;
    padding: 1em;
    color: black;
    font-size: 25px;
    letter-spacing: 0.2em;
    font-style: bold;
}

.right {
    flex: 1; /* Take up remaining space */
    display: flex;
    flex-direction: column;
    align-items: center; /* Center children horizontally */
    justify-content: center; /* Center children vertically */
}

.products-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top:30% ;
}

.container-product {
    width: calc(30% - 20px);
}

.search-bar-container {
    position: sticky;
    bottom: 80%;
    width: 30vw;
    left: 100%;
    background-color: #fff;
    z-index: 100;
    padding: 10px;
}
</style>
