<template>
<div v-if="apartmentOne && apartmentOne.attributes" id="carouselExampleControls" class="carousel slide col-xl-7 col-lg-10 m-auto " data-bs-ride="carousel">
  <div class="carousel-inner ">
    <div v-for="(picture, pictureIndex) in apartmentOne.attributes.pictures.data" 
    :key="pictureIndex" 
    :class="pictureIndex === 0 ? 'carousel-item active' : 'carousel-item'"
    >
      <img 
        :src="'http://localhost:1337' + picture.attributes.url" 
        class="carouselImg d-block w-100" 
        :key="pictureIndex" 
        alt="..." 
        style="border-radius: 8px; "
      >
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  props: ['apartamentOne'],
  setup() {
      const apartmentOne = ref([]);
      onMounted(async () => {
        axios.get("http://localhost:1337/api/apartments/1?populate=*").then((response) => apartmentOne.value = response.data.data);
        console.log('data apart1 axios',apartmentOne);
    });
      return {
        apartmentOne,

      };
    },
}
</script>