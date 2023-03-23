<template>
  <div id="Home">
    <div class="hero-banner-six">
      <div class="illustration-content">
        <!-- <img
          src="../../assets/images/shape/144.svg"
          alt=""
          class="main-img ms-auto"
        /> -->
        <img
          src="../../assets/images/logosy/villaLogo.svg"
          alt=""
          class="main-img ms-auto"
        />
        <!-- <div class="screen-two">
          <img
            src="../../assets/images/assets/screen_06.png"
            alt=""
            class="ms-auto"
          />
        </div> -->
        <!-- <img
          src="../../assets/images/shape/145.svg"
          alt=""
          class="shapes shape-one"
        /> -->
        <!-- <img
          src="../../assets/images/shape/146.svg"
          alt=""
          class="shapes shape-two"
        /> -->
        <img
          src="../../assets/images/shape/147.svg"
          alt=""
          class="shapes shape-three"
        />
        <img
          src="../../assets/images/shape/148.svg"
          alt=""
          class="shapes shape-four"
        />
        <!-- <img
          src="../../assets/images/shape/149.svg"
          alt=""
          class="shapes shape-five"
        /> -->

      </div>
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <!-- <h1 class="font-recoleta hero-heading">
              Zawsze jesteś <span>mile</span> widziany u nas.
            </h1> -->
            <img src="../../assets/images/logosy/logo_villa_picture.png" alt="">
            <p class="hero-sub-heading">
              {{ $t("main-home-title")}}
            </p>
            <div class="d-sm-flex align-items-center button-group">
              <button
                data-bs-toggle="modal"
                data-bs-target="#videoModal"
                class="d-flex align-items-center video-button fancybox order-sm-last"
              >
                <!-- <img
                  src="../../assets/images/icon/play-circle.svg"
                  alt=""
                  class="icon"
                />
                <span>Zobacz wideo</span> -->
              </button>
              <!-- <a
                href="#"
                class="d-flex align-items-center ios-button gr-bg-one hover-reverse-gr-bg-one order-sm-first"
              >
                <img
                  src="../../assets/images/icon/apple.svg"
                  alt=""
                  class="icon"
                />
                <div>
                  <span>Make reservation</span>
                  <strong>or write to us</strong>
                </div>
              </a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- VideoModal -->
    <!-- <VideoModal videoId="-iIFc0qD8Co" /> -->
  </div>
</template>

<script>
// import VideoModal from "../common/Modal/VideoModal.vue";

export default {
  name: "HeroArea",
  components: {
    // VideoModal,
  },
};
</script>
