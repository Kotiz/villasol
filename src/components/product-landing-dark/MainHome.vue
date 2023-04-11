<template>
  <div id="Home" class="">
    <div  class="BackgroundImage">
      <div class="content">
    <!-- VideoModal -->
    <!-- <VideoModal videoId="-iIFc0qD8Co" /> -->
      </div>
    </div>
    <div class="logo position-absolute top-0 start-50">
      <img
      src="../../assets/images/logosy/villaLogo.svg"
      alt="Logo apartamentów villa sol"
      class=""
      />
      </div>
      <div class="textHeaderUnderLogo position-absolute">
        <h4>{{ $t("main-home-text-under-logo") }}</h4>
      </div>  
      <div class="textHeader position-absolute" >
        <span title="Kilka słów na temat apartamentów"> {{ $t("main-home-textHeader") }}</span>
      </div>
      <div class="copyright position-absolute">
        <a href="https://hash.com.pl">
          <p>Created by Hash s.c. © 2023</p>
        </a>
      </div>
  </div>
</template>

<script>
// import VideoModal from "../common/Modal/VideoModal.vue";
import apartamentMainHome from "@/mixin/apartamentMainHome"

export default {
  name: "MainHome",
  mixins:[apartamentMainHome],
  components: {
    // VideoModal,
  },
};
</script>
<style scoped>

.logo {
  /* position: relative; */
  top: -90vh;
  width: 500px;
  height: 400px;
  /* margin-bottom: -60vh; */
  margin-top: 20vh;
  margin-left: 10%;
  /* border: 3px solid #73AD21; */
  
}
.logo:after {
    display: block;
    color: #fff;
    letter-spacing: 20px;
    font-family: 'Poiret One', sans-serif;
    /* content: 'Luxury Apartments'; */
    font-size: 1em;
    text-align: center;
  }


.content {
  height: 100vh;
}
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
  -webkit-animation: zoomin 17s ease-in infinite;
  animation: zoomin 17s ease-in infinite;
  transition: all .1s ease-in-out;
  overflow: hidden;
  /* z-index: 1; */
  
}
.textHeader {
  background-color: rgba(41, 40, 40, 0.1);
  border-radius: 7px;
  height: 38lvh;
  width: 18%;
  top: 38vh;
  margin-left: 30vh;
  letter-spacing: 2px;
  text-align: justify;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.textHeader span {
  color: #fff;
}
.copyright {
 bottom: 1vh;
 margin-left: 2vh;
}
.copyright p {
  font-size: x-small;
}
.textHeaderUnderLogo {
  top: 48vh;
  margin-left: 120vh;
  text-shadow: #b90b0b;
  letter-spacing: 16px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
  50% {transform: scale(1.05);}
  100% {transform: scale(1);}
}
@keyframes zoomout {
    0% {transform: scale(1);}
  50% {transform: scale(1.05);}
  100% {transform: scale(1);}
}/*End of Zoom out Keyframes */

@media only screen and (max-width: 600px) {
  .logo {
  position: relative;
  margin-left: -40%;
  margin-top: 40%;
  width: 200px;
  height: 120px;
}

.content {
  /* display: none; */
}
.logo:after {
  display: block;
  color: #fff;
  letter-spacing: 14px;
  font-family: 'Poiret One', sans-serif;
  /* content: 'Luxury Apartments'; */
  font-size: 1em;
  text-align: left;
  
}
.textHeader {
  background-color: rgba(41, 40, 40, 0.1);
  border-radius: 7px;
  height: 53lvh;
  width: 68%;
  top: 38vh;
  margin-left: 10vh;
  letter-spacing: 0px;
  text-align: justify;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.textHeader span {
  color: #fff;
}
.textHeaderUnderLogo {
  display: none;
}
}
</style>
