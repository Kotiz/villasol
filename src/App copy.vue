<template class="main-page-wrapper font-gordita dark-style lg-container">
 <container>
    <div class="main-page-wrapper font-gordita dark-style lg-container overflow-hidden">
    <HeaderSix :dark="true" />
    <RouterView/>
    <!-- <MainHome /> -->
    <AboutUs />
    <OurFacilites />
    <CloseToUs />
    <ContactStyle />
    </div>
  </container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeaderSix from '../src/components/product-landing-dark/HeaderFour.vue';
// import MainHome from './components/product-landing-dark/MainHome.vue';
import AboutUs from '../src/components/product-landing-dark/AboutUs.vue';
import CloseToUs from '../src/components/product-landing-dark/CloseToUs.vue';
import ContactStyle from './components/product-landing-dark/ContactStyle.vue';
import OurFacilites from './components/product-landing-dark/OurFacilites.vue';
// import axios from 'axios';
// import { onMounted, mounted } from 'vue';



@Options({
  components: {
    HeaderSix,
    // MainHome,
    AboutUs,
    OurFacilites,
    CloseToUs,
    ContactStyle,
  },
})
export default class App extends Vue {
  // onMounted(() => {
  // console.log("cokolwiek");
  //   axios.get('http://localhost:1337/api/apartments').then((response) => {
  //     console.log(response.data.data);
  //   })
  // });


  }


</script>
