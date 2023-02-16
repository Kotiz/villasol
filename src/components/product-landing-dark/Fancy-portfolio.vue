<template>
  <div class="fancy-portfolio-one pt-180 md-pt-100" id="product">
    <div class="container">
      <div class="title-style-six">
        <h2>Our <span>Portfolio</span></h2>
      </div>
      <!-- /.title-style-six -->
    </div>

    <div class="portfolio_slider_three pt-120 md-pt-70">
      <swiper
        class=""
        ref="mySwiper"
        :modules="modules"
        :loop="true"
        :navigation="{ nextEl: '.next_c', prevEl: '.prev_c' }"
        :breakpoints="breakpoints"
      >
        <swiper-slide
          v-for="testimonial in testimonialData"
          :key="testimonial.id"
        >
          <div class="item">
            <div class="img-meta"><img :src="testimonial.img" alt="" /></div>
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
    return {
      modules: [Navigation],
    };
  },
};
</script>
