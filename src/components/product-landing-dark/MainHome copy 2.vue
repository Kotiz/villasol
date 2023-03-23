<template>
  <div id="Home" >
    <div  class="BackgroundImage">
      <div class="illustration-content">
        <img
          src="../../assets/images/logosy/villaLogo.svg"
          alt=""
          class="main-img ms-auto"
        />
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
      </div>
      <div class="container ">
        <div class="row ">
          <div class="col-xl-8 col-lg-8">
            <!-- <h1 class="font-recoleta hero-heading">
              Zawsze jesteś <span>mile</span> widziany u nas.
            </h1> -->
            <!-- KARUZELA -->
            <div  id="carouselExampleControls" class="carousel slide col-xl-8 col-lg-8 borderIMG" data-bs-ride="carousel">
              <div class="carousel-inner ">
                <div v-for="(picture, pictureIndex) in apartMainHomeItems" 
                  :key="pictureIndex" 
                  :class="pictureIndex === 0 ? 'carousel-item active' : 'carousel-item'"
                  >
                  <img 
                    :src="picture.img" 
                    class="d-block w-100 " 
                    alt="..." 
                    style="border-radius: 9px; "
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
            <!-- END OF KARUZELA -->
            <!-- <img src="../../assets/images/logosy/logo_villa_picture.png" alt=""> -->
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
import apartamentMainHome from "@/mixin/apartamentMainHome"

export default {
  name: "HeroArea",
  mixins:[apartamentMainHome],
  components: {
    // VideoModal,
  },
};
</script>
<style scoped>
.borderIMG{
  border-radius:4% 95% 6% 95% / 95% 4% 92% 5%;
  border: solid rgb(73, 219, 16);
  border-color: rgb(248, 246, 246);
}
/* .BackgroundImage {
  background-color:darkgray; 
  background-image: url('../../assets/images/photos/outside/2.png');
  background-repeat: no-repeat;
  background-size: cover;
  animation:slide 3s ease-in-out infinite alternate;
  bottom:0;
  left:-50%;
  right:-50%;
  top:0;
  z-index:-1;
} */
.BackgroundImage {

  text-align:center;
  background: url('../../assets/images/photos/backgroundMain/1.png');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-animation: zoomin 20s ease-in infinite;
  animation: zoomin 15s ease-in infinite;
  transition: all .5s ease-in-out;
  overflow: hidden;
}
/* Zoom in Keyframes */
@-webkit-keyframes zoomin {
  0% {transform: scale(1);}
  50% {transform: scale(1.05);}
  100% {transform: scale(1);}
}
@keyframes zoomin {
  0% {transform: scale(1);}
  50% {transform: scale(1.05);}
  100% {transform: scale(1);}
} /*End of Zoom in Keyframes */

/* Zoom out Keyframes */
@-webkit-keyframes zoomout {
  0% {transform: scale(1);}
  50% {transform: scale(0.67);}
  100% {transform: scale(1);}
}
@keyframes zoomout {
    0% {transform: scale(1);}
  50% {transform: scale(0.67);}
  100% {transform: scale(1);}
}/*End of Zoom out Keyframes */

</style>
