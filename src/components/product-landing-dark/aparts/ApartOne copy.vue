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
<div v-if="apartmentOne && apartmentOne.attributes" id="carouselExampleControls" class="carousel slide col-xl-7 col-lg-10 m-auto " data-bs-ride="carousel">
  <div class="carousel-inner ">
    <div v-for="(picture, pictureIndex) in apartmentOne.attributes.pictures.data" 
      :key="pictureIndex" 
      :class="pictureIndex === 0 ? 'carousel-item active' : 'carousel-item'"
      >
      <img 
        :src="'http://localhost:1337' + picture.attributes.url" 
        class="d-block w-100" 
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
<CarouselApartments />

  </div>
      <!-- <div class="circle-area">
        <img src="../../../assets/images/shape/155.svg" alt="" class="main-img" />
      </div> -->
  </div>
</template>
  
<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import HeaderText from "@/components/common/TextHeaders/HeaderTextOfComponent.vue";
import CarouselApartments from "@/components/common/carouselApartments.vue";
  
  export default {
    name: "AboutUs",
    // data() {
    //   return {
    //     testimonialData: [
    //       {
    //         id: 1,
    //         name: "Villa Sol",
    //         title: "",
    //         desc: "Budynek został całkowicie odnowiony i przebudowany w roku 2022/2023. Usytuowany jest na osiedlu 'Zasole' niedaleko dworca PKP, przy spokojnej ulicy osiedlowej. Z naszego apartamentu wszędzie jest blisko nawet na pieszo. Na oświęcimski rynek spacerem dojdziemy w 10-15 minut a do muzeum Birkenau które jest najdalej zajmie nam to spacerem ok 20 minut. W bliskości mamy sklepy, markety, przystanki komunikacji zbiorczej. W niedalekiej odległości ok 5-10 minut pieszo znajduje się duży park miejski na którym znajdziemy także plac zabaw dla dzieci.  ",
    //       },
    //       {
    //         id: 2,
    //         name: "Villa Sol",
    //         title: "Developer",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    //       },
    //     ],
    //   };
    // },
    components: {
    HeaderText,
    CarouselApartments,
},
    setup() {
      const titleHeader = 'Apartament';
      const textNumberApart = 'ONE';
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
  