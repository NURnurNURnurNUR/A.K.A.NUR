import { createRouter, createWebHistory} from "vue-router";
import MainPage from "../views/MainPageView.vue";
import ClothingPage from "../views/ClothingPageView.vue";
import LoginPage from "../views/LoginPageView.vue";
import SignupPage from "../views/SignupPageView.vue";
import AccountPage from "../views/AccountPageView.vue";
import SupportPage from "../views/SupportPageView.vue";
import BagPage from "../views/BagPageView.vue";
import AdminPage from "../views/AdminPageView.vue";
import ProductPage from "../views/ProductPageView.vue";


const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes:
        [
            {
                path: "/",
                component: MainPage,
                name: "mainpage"
            },

            {
                path:"/clothing",
                component: ClothingPage,
                name:"clothingpage"
            },
         
            {
                path: "/login",
                component: LoginPage,
                name: "loginpage"
            },

            {
                path: "/signup",
                component: SignupPage,
                name: "signupPage"
            },

            {
                path: "/account",
                component: AccountPage,
                name: "accountpage",


            },

            {
                path: "/support",
                component: SupportPage,
                name:"supportpage"
            },

            {
                path:"/bag",
                component: BagPage,
                name:"bagpage"
            },

            {
                path:"/admin",
                component: AdminPage,
                name:"adminpage"
            },

            {
                path: "/prodcut",
                component: ProductPage,
                name: "productpage"
            }
            
        ]
    }
)






export default router