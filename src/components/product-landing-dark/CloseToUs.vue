<template>
  <div class="pt-160 pb-150 md-pt-120 client-feedback-slider-five" id="CloseToUs" >
    <div class="fancy-feature-thirtyFive position-relative lg-container">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="block-style-thirtySix">
              <div class="title-style-fourteen">
                <div class="upper-title">Co zobaczyć</div>
                <h2>Blisko naszego apartamentu</h2>
              </div>
              <div class="tag-line">
                Kilka przykładów dla twojej wygody
              </div>
              <ul
                class="slider-arrows d-flex justify-content-center justify-content-lg-end pt-25 md-pt-10 md-pb-30"
              >
                <li class="prev_case2 ripple-btn slick-arrow" style="">
                  <i class="flaticon-right-arrow"></i>
                </li>
                <li class="next_case2 ripple-btn slick-arrow" style="">
                  <i class="flaticon-right-arrow"></i>
                </li>
              </ul>
            </div>
            <!-- /.block-style-thirtySix -->
          </div>
        </div>
      </div>
      <div class="slider-wrapper">
        <div class="portfolio_slider_two">
          <swiper
            ref="mySwiper"
            :modules="modules"
            :loop="true"
            :navigation="{ nextEl:'.next_case2' , prevEl:'.prev_case2' }"
            :breakpoints="breakpoints"
          >
            <swiper-slide v-for="item in portfolioItems" :key="item.id">
              <div class="item">
                <div class="card-block">
                  <img :src="item.img" alt="" class="w-100" />
                  <div class="text">
                  <div class="tag">{{item.title}}</div>
                  <h4>{{item.subtitle}}</h4>
                </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <!-- /.portfolio_slider_two -->
      </div>
      <!-- /.slider-wrapper -->
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import portfolioMixin from "@/mixin/portfolio-mixin";

export default {
  name: "FeatureSlider",
  mixins:[portfolioMixin],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
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
