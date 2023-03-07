<template>
  <container>
    <div class="main-page-wrapper font-gordita dark-style lg-container overflow-hidden">
      <HeaderSix :dark="true" />
      <RouterView/>
      <FancyPortfolio />
      <AboutUs />
      <OurFacilites />
      <CloseToUs />
      <ContactStyle />
    </div>
  </container>
</template>
<script lang="ts">
import { defineComponent } from "vue";


import HeaderSix from '../src/components/product-landing-dark/HeaderFour.vue';
import AboutUs from '../src/components/product-landing-dark/AboutUs.vue';
import CloseToUs from '../src/components/product-landing-dark/CloseToUs.vue';
import ContactStyle from './components/product-landing-dark/ContactStyle.vue';
import OurFacilites from './components/product-landing-dark/OurFacilites.vue';
import FancyPortfolio from "./components/product-landing-dark/Fancy-portfolio.vue";

export default defineComponent({
  setup() {
  },
  components: {
    HeaderSix,
    AboutUs,
    CloseToUs,
    ContactStyle,
    OurFacilites,
    FancyPortfolio
},
});
</script>
