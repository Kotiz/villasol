<template>
  <div class="client-feedback-slider-five pt-100 md-pt-50 " id="AboutUs" >
    <div class="container" >
      <div class="row" >
        <div class="col-xl-7 col-lg-10 col-md-9 m-auto" >
          <div class="title-style-six text-center mt-25" >
            <h2>Kilka <span> słów </span>o nas</h2>
          </div>
          <!-- /.title-style-six -->
        </div>
      </div>
      <div v-if="useAboutUses && useAboutUses.attributes " class="row">
        <div class="col-xl-7 col-lg-10 m-auto">
          <!-- <div class="clientSliderFive mt-10 md-mt-50 item"
            v-for="(useAboutUs, index) in useAboutUses" :key="index">
            <p style="text-align:justify">
              {{ useAboutUs.attributes.description }}
            </p>
          </div> -->
          <div>{{ useAboutUses.attributes.description }}</div>
          <div> {{ useAboutUses.attributes.pictures.data }}</div>
          <div>
            <div class="clientSliderFive mt-10 md-mt-50 item"
              v-for="(picture, pictureIndex) in useAboutUses.attributes.pictures.data" :key="pictureIndex">
            <p style="text-align:justify">
             a <img :src="'http://localhost:1337' + picture.attributes.url" alt="">AA
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { useAboutUsStrapi } from '@/store/aboutUsStrapi'
import { ref, onMounted } from "vue";
import axios from "axios"

export default {
  name: "AboutUs",
  // setup() {
  //   const useAboutUs = useAboutUsStrapi();
  //   useAboutUs.retrieveAboutUs();
  //   return {
  //     useAboutUs,
  //   };
  // },
  setup() {
    const useAboutUses = ref([]);
    console.log("obiekt nr 2",useAboutUses);
    onMounted(async () => {
      axios.get("http://localhost:1337/api/apartments/2?populate=*").then((response) => useAboutUses.value = response.data.data);
        console.log('data axios',useAboutUses);
    });
    return {
      useAboutUses,
    };
  },
};
</script>
