<template>
  <div class="pt-120 pb-110 md-pt-10 client-feedback-slider-five"  >
    <div class="container" id="AboutUs" >
      <div class="row" >
        <div class="col-xl-7 col-lg-10 col-md-9 m-auto" >
          <div class="title-style-six text-center mt-25" >
            <h2>{{ $t("header") }}</h2>
            <div class="mt-40" style="text-align:justify; line-height: 2">
              <p>{{ $t("description") }}</p>
            </div>
          </div>
          <!-- /.title-style-six -->
        </div>
  <!-- KARUZELA -->
  <div  id="carouselExampleControls" 
        class="carousel slide col-xl-8 col-lg-8 borderIMG m-auto" 
        data-bs-ride="carousel">
    <div class="carousel-inner ">
      <div v-for="(picture, pictureIndex) in apartMainHomeItems" 
        :key="pictureIndex" 
        :class="pictureIndex === 0 ? 'carousel-item active' : 'carousel-item'"
      >
        <img 
          :src="picture.img" 
          class="d-block w-100 " 
          alt="..." 
          style="border-radius: 9px; "
        >
      </div>
    </div>
      <button class="carousel-control-prev" 
              type="button" 
              data-bs-target="#carouselExampleControls" 
              data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" 
              type="button" 
              data-bs-target="#carouselExampleControls" 
              data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
  </div>
  <!-- END OF CAROUSEL-->
      </div>
      <div v-if="useAboutUses && useAboutUses.attributes " class="row pt-100">
        <div class="col-xl-7 col-lg-10 m-auto">
          <div class="clientSliderFive mt-10 md-mt-50 item"
            v-for="(useAboutUses, index) in useAboutUses.attributes.data" :key="index">
          </div>
          <div style="text-align:justify">
            <!-- {{ useAboutUses.attributes.description }} -->
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import apartamentMainHome from "@/mixin/apartamentMainHome"

export default {
  name: "AboutUs",
  mixins:[apartamentMainHome],
  setup() {
    const useAboutUses = ref([]);
    console.log("obiekt nr 2",useAboutUses);
    onMounted(async () => {
      axios.get("http://localhost:1337/api/about-us-single?locale=pl-PL").then((response) => useAboutUses.value = response.data.data);
        console.log('data axios',useAboutUses);
    });
    return {
      useAboutUses,
    };
  },
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .mt-40 {
  position: relative;
  line-height: 1.5;
  font-size: smaller;
  /* margin-left: -40%; */
  /* margin-top: 10%; */
  /* width: 200px; */
  /* height: 120px; */
  /* border: 3px solid #73AD21; */
}

}</style>

