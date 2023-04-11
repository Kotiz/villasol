<template>
  <div class="fancy-portfolio-one pt-180 md-pt-100" id="">
    <div class="container">
      <div class="title-style-six">
        <h2>Apartament <span> 1</span></h2>
      </div>
      <!-- /.title-style-six -->
    </div>

    <div v-if="picturesApatmentsOne && picturesApatmentsOne.attributes" class="portfolio_slider_three pt-120 md-pt-70">
      <swiper
        class=""
        ref="mySwiper"
        :modules="modules"
        :loop="true"
        :navigation="{ nextEl: '.next_c', prevEl: '.prev_c' }"
        :breakpoints="breakpoints"
      >
        <swiper-slide
          v-for="(picture, pictureIndex) in picturesApatmentsOne.attributes.pictures.data"
          :key="pictureIndex.id"
        >
          <div class="item">
            <div class="img-meta"><img :src="'http://localhost:1337' + picture.attributes.url" alt="" /></div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="slider-arrows d-flex justify-content-center">
      <div class="prev_c d-flex align-items-center justify-content-center">
        <img src="../../assets/images/icon/82.svg" alt="" />
      </div>
      <div class="next_c d-flex align-items-center justify-content-center">
        <img src="../../assets/images/icon/83.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  name: "FancyPortfolio",

  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      testimonialData: [
        {
          id: 1,
          img: require(`@/assets/images/media/img_73.png`),
        },
        {
          id: 2,
          img: require(`@/assets/images/media/img_74.png`),
        },
        {
          id: 3,
          img: require(`@/assets/images/media/img_75.png`),
        },
        {
          id: 4,
          img: require(`@/assets/images/media/img_76.png`),
        },
        {
          id: 5,
          img: require(`@/assets/images/media/img_75.png`),
        },
      ],
      breakpoints: {
        0: { slidesPerView: 2 },
        480: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
      },
    };
  },
  setup() {
    const picturesApatmentsOne = ref([]);
    onMounted(async () => {
      axios.get("http://localhost:1337/api/apartments/1?populate=*").then((response) => picturesApatmentsOne.value = response.data.data);
      console.log('data apart1 Carusell', picturesApatmentsOne);
    });
    return {
      modules: [Navigation],
      picturesApatmentsOne,
    };
  },
};
</script>
