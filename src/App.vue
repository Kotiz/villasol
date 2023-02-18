<template>
  <div>
    <h3>Wpis z wykorzystaniem FOR</h3>
    <div v-for="apartment in apartments" :key="apartment.id">
      <div v-if="apartment.id===3">
        <p>{{ apartment.attributes.name }} </p>
        <p>{{ apartment.attributes.description }}</p>
      </div>      
    </div>
  </div>
  <container>
    <div class="main-page-wrapper font-gordita dark-style lg-container overflow-hidden">
      <HeaderSix :dark="true" />
      <RouterView/>
      <AboutUs />
      <OurFacilites />
      <CloseToUs />
      <ContactStyle />
    </div>
  </container>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

import HeaderSix from '../src/components/product-landing-dark/HeaderFour.vue';
import AboutUs from '../src/components/product-landing-dark/AboutUs.vue';
import CloseToUs from '../src/components/product-landing-dark/CloseToUs.vue';
import ContactStyle from './components/product-landing-dark/ContactStyle.vue';
import OurFacilites from './components/product-landing-dark/OurFacilites.vue';

export default defineComponent({
  setup() {
    const apartments = ref([]);
    onMounted(async () => {
      axios.get("http://localhost:1337/api/apartments").then((response) => {
        apartments.value = response.data.data;
      });
    });
    return {
      apartments,
    };
  },
  components: {
    HeaderSix,
    AboutUs,
    CloseToUs,
    ContactStyle,
    OurFacilites
  },
});
</script>
