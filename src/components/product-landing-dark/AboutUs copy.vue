<template>
  <div class="client-feedback-slider-five pt-100 md-pt-50 " id="AboutUs" >
    <div class="container" >
      <div class="row" >
        <div class="col-xl-7 col-lg-10 col-md-9 m-auto" >
          <!-- <img
            src="../../assets/images/icon/84.svg"
            alt=""
            class="icon m-auto"
          /> -->
          <div class="title-style-six text-center mt-25" >
            <h2>Kilka <span> słów </span>o nas</h2>
          </div>
          <!-- /.title-style-six -->
        </div>
      </div>

      <div class="row">
        <div class="col-xl-7 col-lg-10 m-auto">
          <div class="clientSliderFive mt-80 md-mt-50 item">
            <p style="text-align:justify">
              {{ useAboutUs.description }}
            </p>
          </div>
          <!-- <div class="clientSliderFive mt-80 md-mt-50">
            <swiper
              ref="mySwiper"
              :modules="modules"
              :loop="true"
              :navigation="{ nextEl: '.next_f', prevEl: '.prev_f' }"
            >
              <swiper-slide
                v-for="about in aboutUsData"
                :key="about.id"
              >
                <div class="item">
                  <p class="" style="text-align:justify">
                    {{ about.desc }}
                  </p>
                  <h6 class="name text-secondary">{{ about.name }}</h6>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <ul class="d-flex justify-content-center slider-arrow mt-40">
            <li class="prev_f slick-arrow" style="">
              <i class="flaticon-right-arrow"></i>
            </li>
            <li class="next_f slick-arrow" style="">
              <i class="flaticon-right-arrow"></i>
            </li>
          </ul> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import { useAboutUsStore } from '@/store/aboutUsStore'


export default {
  name: "AboutUs",
  data() {
    return {
      // aboutUsData: [
      //   {
      //     id: 1,
      //     name: "Villa Sol",
      //     title: "",
      //     desc: "Budynek został całkowicie odnowiony i przebudowany w roku 2022/2023. Usytuowany jest na osiedlu 'Zasole' niedaleko dworca PKP, przy spokojnej ulicy osiedlowej. Z naszego apartamentu wszędzie jest blisko nawet na pieszo. Na oświęcimski rynek spacerem dojdziemy w 10-15 minut a do muzeum Birkenau które jest najdalej zajmie nam to spacerem ok. 20 minut. W bliskości mamy sklepy, markety, przystanki komunikacji zbiorczej. W niedalekiej odległości ok 5-10 minut pieszo znajduje się duży park miejski na którym znajdziemy także plac zabaw dla dzieci.  ",
      //   },
      //   {
      //     id: 2,
      //     name: "Villa Sol",
      //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      //   },
      // ],
    };
  },
  components: {
    // Swiper,
    // SwiperSlide,
  },
  setup() {
    const useAboutUs = useAboutUsStore();
    return {
      modules: [Navigation],
      useAboutUs,
    };
  },
};
</script>
