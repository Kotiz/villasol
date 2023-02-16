import {createRouter, createWebHistory} from 'vue-router'
import ProductLandingDark from '../pages/product-landing-dark';
import Apart1 from '../components/product-landing-dark/aparts/ApartOne.vue';
import Apart2 from '../components/product-landing-dark/aparts/ApartTwo.vue';
import Apart3 from '../components/product-landing-dark/aparts/ApartThree.vue';
import Apart4 from '../components/product-landing-dark/aparts/ApartFour.vue';
import Apart5 from '../components/product-landing-dark/aparts/ApartFive.vue';
import NotFound from '../pages/404';


const routes = [
    {
        path: '/',
        name: 'ProductLandingDark',
        component: ProductLandingDark,
        meta: {
            title: 'Home view Villa Sol',
        },
    },
    {
        path: '/ApartOne',
        name: 'ApartOne',
        component: Apart1,
        meta: {
            title: 'Villa Sol - Apartament 1',
        },
    },
    {
        path: '/ApartTwo',
        name: 'ApartTwo',
        component: Apart2,
        meta: {
            title: 'Blog V2 || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/ApartThree',
        name: 'ApartThree',
        component: Apart3,
        meta: {
            title: 'Blog V3 || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/ApartFour',
        name: 'ApartFour',
        component: Apart4,
        meta: {
            title: 'Blog V4 || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/ApartFive',
        name: 'ApartFive',
        component: Apart5,
        meta: {
            title: 'Blog V4 || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/not-found',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: 'NotFound || Deski-Saas & Software Vue Template',
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: 'NotFound || Deski-Saas & Software Vue Template',
        },
    },
   
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
    window.scrollTo(0, 0)
});

export default router
