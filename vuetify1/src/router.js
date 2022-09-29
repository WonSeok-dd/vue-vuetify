import Vue from "vue"
import VueRouter from "vue-router"

import DefaultLayout from "@/layouts/default/index.vue"
import AuthenticationLayout from "@/layouts/authentication/index.vue"
import PageLayout from "@/layouts/page/index.vue"

// DefaultLayout
import DashBoard from "./components/DashBoard.vue"
import GridSystem from "./components/GridSystem.vue"
import GridListPage from "./components/GridListPage.vue"
import BreakPoints from "./components/BreakPoints.vue"
import TypoGraphy from "./components/TypoGraphy.vue"

import Tables from "./components/Tables.vue"
import Forms from "./components/Forms.vue"
import Buttons from "./components/Buttons.vue"
import Icons from "./components/Icons.vue"

// DefaultLayout/Test
const Test = () => import(/*webpackChunkName : "components-test"*/ '@/components/Test.vue')

//const Test = function(resolve, reject){
//    resolve({
//        'template' : '<div>Hello Test!!@@@</div>'
//    })
//}

//AuthenticationLayout
import SignIn from "@/layouts/authentication/SignIn.vue"

import Info from "@/layouts/authentication/Info.vue"
import InfoFirstIn from "@/layouts/authentication/InfoFirstIn.vue"
import InfoSecondIn from "@/layouts/authentication/InfoSecondIn.vue"
import InfoSignUp from "@/layouts/authentication/InfoSignUp.vue"

//PageLayout
import RestaurantList from "@/layouts/page/RestaurantList.vue"


Vue.use(VueRouter)

const routes = [

    {
        path: "/",
        component : DefaultLayout,
        children : [
            {
                path :"/test",
                component : Test
            },


            {
                path :"",
                component : DashBoard
            },
        
            {
                path: "grid-system",
                component : GridSystem
            },
        
            {
                path: "grid-list-page",
                component : GridListPage
            },
            {
                path: "breakpoints",
                component : BreakPoints
            },
        
            {
                path : "typography",
                component : TypoGraphy
            },
        
            {
                path : "tables",
                component : Tables
            },
        
            {
                path : "forms",
                component : Forms
            },
            {
                path : "buttons",
                component : Buttons
            },
            {
                path : "icons",
                component : Icons
            }
        ]
    },

    {
        path: "/authentication",
        component : AuthenticationLayout,
        children : [
            {
                path : 'info',
                component : Info
            },

            {
                path : 'info-first_in',
                component : InfoFirstIn
            },

            {
                path: 'info-second-in',
                component : InfoSecondIn
            },
            {
                path : "info-sign-up",
                component : InfoSignUp
            },

            {
                path : "sign-in",
                component : SignIn
            },


        ]
    },

    {
        path: "/page",
        component : PageLayout,
        children : [
            {
                path : "restaurantList",
                component : RestaurantList
            }
        ]
    }

   
];

const router = new VueRouter({
    mode : "history",
    routes
})

export {router}; 