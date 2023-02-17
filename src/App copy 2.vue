<template>
  <container>
     <div class="main-page-wrapper font-gordita dark-style lg-container overflow-hidden">
     <HeaderSix :dark="true" />
     <RouterView/>
     <!-- <MainHome /> -->
     <AboutUs />
     <div v-for="apartment in apartments" :key="apartment.id">
      {{  apartment.attributes.name }}
     </div>
     <OurFacilites />
     <CloseToUs />
     <ContactStyle />
     </div>
   </container>
 </template>

<script lang="ts">
import axios from 'axios';
import { onMounted } from 'vue';
import HeaderSix from '../src/components/product-landing-dark/HeaderFour.vue';
import AboutUs from '../src/components/product-landing-dark/AboutUs.vue';
import CloseToUs from '../src/components/product-landing-dark/CloseToUs.vue';
import ContactStyle from './components/product-landing-dark/ContactStyle.vue';
import OurFacilites from './components/product-landing-dark/OurFacilites.vue';

export default {
  components: {
    HeaderSix,
    AboutUs,
    CloseToUs,
    ContactStyle,
    OurFacilites
  },
  setup() {

      onMounted(() => {
          console.log('dzialalala.l');
          axios.get('http://localhost:1337/api/apartments').then((response) => {
            this.apartments = response.data.data;
              console.log('eeeee', response.data.data);
          })

      })

      return { };
  },
}
</script>