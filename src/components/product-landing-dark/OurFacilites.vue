<template>
  <div class="fancy-feature-twelve pt-100 md-pt-50 "  id="Facilites">
    <div class="bg-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-xl-7 col-lg-10 col-md-8 m-auto">
            <div class="title-style-six text-center">
              <h2 class="text-dark">Nasze <span>udogodnienia</span></h2>
            </div>
            <!-- /.title-style-six -->
          </div>
        </div>

        <div class="row justify-content-center pt-30 md-pt-20">
          <div
            v-for="item in facilitesData.data"
            :key="item.id"
            class="col-lg-3 col-md-6"
          >
            <div class="block-style-seventeen mt-10 mb-40">
              <div
                class="icon d-flex align-items-center justify-content-center"
              >
                <img :src="item.icon" alt="" />
              </div>
              <div class="hover-text">{{ item.hover_text }}</div>
            </div>
            <!-- /.block-style-seventeen -->
          </div>
        </div>
      </div>
    </div>
    <!-- /.bg-wrapper -->
    <!-- <img
      src="../../assets/images/shape/151.svg"
      alt=""
      class="shapes shape-one"
    /> --> {{ facilitesData.hover_text }}
  </div>
</template>

<script>
import { useOurFacilitieStore } from '@/store/ourFacilitiesStore'
export default {
  name: "OurFacilites",
  data() {
    return {
      // facilitesData: [
      //   {
      //     id: 1,
      //     icon: require(`@/assets/images/icons/scooter.svg`),
      //     hover_text: "Do dyspozycji gości dwie hulajnogi elektryczne ",
      //   },
      //   {
      //     id: 2,
      //     icon: require(`@/assets/images/icons/emotor.svg`),
      //     hover_text: "Do dyspozycji gości dwa skutery elektryczne",
      //   },
      //   {
      //     id: 3,
      //     icon: require(`@/assets/images/icons/ecar.svg`),
      //     hover_text: "Ładowarka do aut elektrycznych",
      //   },
      //   {
      //     id: 4,
      //     icon: require(`@/assets/images/icons/pralka.svg`),
      //     hover_text: "W każdym pokoju znajduje się mała pralka",
      //   },
      //   {
      //     id: 5,
      //     icon: require(`@/assets/images/icons/kawa.svg`),
      //     hover_text: "W każdym pokoju mały ekspress kapsułkowy",
      //   },
      // ],
    };
  },
  setup() {
    const facilitesData = useOurFacilitieStore;
    console.log(facilitesData);
    return {
      facilitesData,
    }
  }
};
</script>
