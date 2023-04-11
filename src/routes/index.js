import {createRouter, createWebHistory} from 'vue-router'
// import ProductLandingDark from '../pages/product-landing-dark';
import MainHome from '@/components/product-landing-dark/MainHome.vue';
import CloseToUs from '@/components/product-landing-dark/CloseToUs.vue';
import ContactStyle from '@/components/product-landing-dark/ContactStyle.vue';
import AboutUs from '@/components/product-landing-dark/AboutUs.vue';
import Apart1 from '../components/product-landing-dark/aparts/ApartOne.vue';
import Apart2 from '../components/product-landing-dark/aparts/ApartTwo.vue';
import Apart3 from '../components/product-landing-dark/aparts/ApartThree.vue';
import Apart4 from '../components/product-landing-dark/aparts/ApartFour.vue';
import Apart5 from '../components/product-landing-dark/aparts/ApartFive.vue';
import NotFound from '../pages/404';


const routes = [
    {
        path: '/',
        name: 'MainHome',
        component: MainHome,
        meta: {
            title: 'Apartamenty na wynajem w Oświęcimiu, ul. Garbarska 20 - Jacuzzi - Sauna - elektryczne hulajnogi - blisko',
        },
    },
    {
        path: '/O-nas-apartmenty-villa-sol-Oswiecim-blisko-starego-miasta-i-muzeum-auschwitz',
        name: 'AboutUs',
        component: AboutUs,
        meta: {
            title: 'Villa Sol - Oświęcim - Apartamenty - Garbarska 20 - Jacuzzi - Finnish bath - electric scooters',
        },
    },
    {
        path: '/Close-to-us-apartment-sol-Oswiecim-near-old-town-with-electric-scooter',
        name: 'Close to us- Apartment Sol - Oswiecim - Near Old Town - with electric scooter',
        component: CloseToUs,
        meta: {
            title: 'Villa Sol - Oświęcim - Apartaments - Oświęcim - Garbarska 20',
        },
    },
    {
        path: '/Contact-with-us-apartment-sol-Oswiecim-near-old-town-with-electric-scooter',
        name: 'Contact with us - Apartamenty Villa Sol - Oswiecim - blisko muzeum i starego miasta ',
        component: ContactStyle,
        meta: {
            title: 'Villa Sol - Oświęcim - Apartaments - Oświęcim - Garbarska 20 - contact - telephone',
        },
    },
    {
        path: '/Apartment-One-Oswiecim-near-old-town-with-electric-scooter',
        name: 'Apartamenty-oswiecim-garbarska-20-near-to-old-town-with-electric-scooter',
        component: Apart1,
        meta: {
            title: 'Villa Sol - Oświęcim - Apartaments - Oświęcim - Garbarska 20 - near Old Town',
        },
    },
    {
        path: '/Apartment-Two-Oswiecim-near-auschwitz-museum-and-old-town',
        name: 'Apartment-Two-Oswiecim-near-auschwitz-museum-and-old-town',
        component: Apart2,
        meta: {
            title: 'Villa Sol - Oświęcim - Apartaments - Oświęcim - Garbarska 20 - near Auschwitz Museum',
        },
    },
    {
        path: '/Apartament-Three-Oswiecim-blisko-auschwitz-muzeum-i-starego-miasta',
        name: 'Apartament-Three-Oswiecim-blisko-auschwitz-muzeum-i-starego-miasta',
        component: Apart3,
        meta: {
            title: 'Villa Sol - Oświęcim - Apartaments - Oświęcim - Garbarska 20 - near Auschwitz Museum and Old Town',
        },
    },
    {
        path: '/Apartament-Four-Oswiecim-blisko-auschwitz-muzeum-i-starego-miasta',
        name: 'Apartament-Four-Oswiecim-blisko-auschwitz-muzeum-i-starego-miasta',
        component: Apart4,
        meta: {
            title: 'Villa Sol - Oświęcim - Apartaments - Oświęcim - Garbarska 20 - with electric scooters',
        },
    },
    {
        path: '/Apartament-Three-Oswiecim-near-old-town-with-electric-scooter-spa-finnish-bath',
        name: 'Apartament-Three-Oswiecim-near-old-town-with-electric-scooter-spa-finnish-bath',
        component: Apart5,
        meta: {
            title: 'Villa Sol - Oświęcim - Apartamenty - Oświęcim - Garbarska 20 - Jacuzzi - Finnish bath',
        },
    },
    {
        path: '/not-found',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: 'NotFound || Villa Sol - Oświęcim - Apartamenty',
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: 'NotFound || Villa Sol - Oświęcim - Apartaments',
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
