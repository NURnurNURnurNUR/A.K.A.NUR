<script>
import NavBar from '@/components/NavBar.vue';

export default {
    components: {
        NavBar
    },
    data() {
        return {
            loaded: false,
            paidfor: false, 
            product: {
                price: 100,
                description: "fuck you",
            }
        };
    },

    mounted() {
        const script = document.createElement('script');
        script.src = "https://www.paypal.com/sdk/js?client-id=AWB96auXArl-a6-n5bthzGiOcjI_ZR39hIk6wb_BPuS79V3_0S9eyIarWqaHOAKtSJBwvt_I9b59jO4g";
        script.addEventListener("load", this.setLoaded);
        document.body.appendChild(script);
    },

    methods: {
        setLoaded() {
            this.loaded = true;
            window.paypal
               .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: this.product.description,
                                amount: {
                                    currency_code: "USD", 
                                    value: this.product.price
                                }
                            }
                        ]
                    });

                },
            
            })
            .render(this.$refs.paypal);
        }
    }
};
</script>

<template>
    <main>
        <NavBar/>

        <div v-if="!paidfor"> 
            <h1>Your products - ${{ 100 }} OBO</h1>
            <p>{{ product.description }}</p>
        </div>
        <div ref="paypal"></div>
    </main>
</template>

<style scoped>
</style>
