<template>
  <div class="client-feedback-slider-five mt-40 pb-15 pt-100 md-pt-10 md-pb-40" id="" >
    <div class="container" >
      <div class="row" >
        <div class="col-xl-7 col-lg-10 col-md-9 m-auto" >
            <HeaderText :nameOfAparts="titleHeader"
                        :textNumberOfApart="textNumberApart"
            />
            <div class="title-style-six text-center mt-45" >
            <div class="mt-40" style="text-align:justify; line-height: 2">
            <p>{{ $t("apartmentOneDescription") }}</p>
          </div>
        </div>
          <!-- /.title-style-six -->
        </div>
      </div>
  <div v-if="apartmentOne && apartmentOne.attributes " class="row">
    <div class="col-xl-7 col-lg-10 m-auto pt-70">
      <div>{{ apartmentOne.attributes.description }}</div>
    </div>
  </div>
<!--Feature apart icon-->
<FeatureApartIcon 
  :apartOneGuestnumber="apartOneGuestnumber"
  :apartOneGuestSize="apartOneGuestSize"
  :apartOneGuestBedroomQuantity="apartOneGuestBedroomQuantity"
  :apartOneGuestSofaQuantity="apartOneGuestSofaQuantity"
  :apartamentOneBedQuantity="apartamentOneBedQuantity"
/>
<!--End of feature apart icon-->
<ApartFacilitiesList />
            <!-- Carusell  -->
<div  id="carouselExampleControls" class="carousel slide col-xl-7 col-lg-10 m-auto " data-bs-ride="carousel">
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
</div>
  </div>
</div>
</template>
  
<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import HeaderText from "@/components/common/HeaderTextOfComponent.vue";
import apartamentOne from '@/mixin/apartamentOne';
import FeatureApartIcon from "@/components/common/FeatureApartIcon.vue";
import ApartFacilitiesList from "@/components/common/ApartFacilitiesList.vue";
  
  export default {
    name: "ApartTwo",
    components: {
    HeaderText,
    FeatureApartIcon,
    ApartFacilitiesList,
},
    mixins:[apartamentOne],
    setup() {
      const titleHeader = 'Apartament';
      const textNumberApart = 'TWO';
      const apartOneGuestnumber = '4';
      const apartOneGuestSize="50";
      const apartOneGuestBedroomQuantity="1";
      const apartOneGuestSofaQuantity="1";
      const apartamentOneBedQuantity="1";
      const apartmentOne = ref([]);
      onMounted(async () => {
        axios.get("http://localhost:1337/api/apartments/1?populate=*").then((response) => apartmentOne.value = response.data.data);
        console.log('data apart1 axios',apartmentOne);
    });
      return {
        apartmentOne,
        titleHeader,
        textNumberApart,
        apartOneGuestnumber,
        apartOneGuestSize,
        apartOneGuestBedroomQuantity,
        apartOneGuestSofaQuantity,
        apartamentOneBedQuantity,

      };
    },
  };
  </script>
  