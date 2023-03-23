<template>
  <div class="client-feedback-slider-five pt-100 md-pt-50 " id="about us" >
    <div class="container" >
      <div class="row" >
        <div class="col-xl-7 col-lg-10 col-md-9 m-auto" >
            <HeaderText :nameOfAparts="titleHeader"
                        :textNumberOfApart="textNumberApart"
            />
          <!-- /.title-style-six -->
        </div>
        
      </div>
  <div v-if="apartmentOne && apartmentOne.attributes " class="row">
    <div class="col-xl-7 col-lg-10 m-auto pt-70">
      <div>{{ apartmentOne.attributes.description }}</div>
    </div>
  </div>

            <!-- Carusell  -->
<!-- <div  id="carouselExampleControls" class="carousel slide col-xl-7 col-lg-10 m-auto " data-bs-ride="carousel">
  <div class="carousel-inner ">
    <div v-for="(picture, pictureIndex) in portfolioItems" 
      :key="pictureIndex" 
      :class="pictureIndex === 0 ? 'carousel-item active' : 'carousel-item'"
      >
      <img 
        :src="picture.img" 
        class="d-block w-100" 
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
</div> -->
<CarouselApartments />

  </div>
  </div>
</template>
  
<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import HeaderText from "@/components/common/TextHeaders/HeaderTextOfComponent.vue";
import apartamentOne from '@/mixin/apartamentOne';
import CarouselApartments from "@/components/common/carouselApartments.vue";
  
  export default {
    name: "AboutUs",
    components: {
    HeaderText,
    CarouselApartments,
},
    mixins:[apartamentOne],
    setup() {
      const titleHeader = 'Apartament';
      const textNumberApart = 'FIVE';
      const apartmentOne = ref([]);
      onMounted(async () => {
        axios.get("http://localhost:1337/api/apartments/1?populate=*").then((response) => apartmentOne.value = response.data.data);
        console.log('data apart1 axios',apartmentOne);
    });
      return {
        apartmentOne,
        titleHeader,
        textNumberApart,

      };
    },
  };
  </script>
  