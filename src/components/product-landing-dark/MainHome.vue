<template>
  <div id="Home" class="MainHome w-100">
    <div  class="BackgroundImage">
      <div class="content">
        <div class="position-relative">
          <div class="logo">
            <img
            src="../../assets/images/logosy/villaLogo.svg"
            alt=""
            class=""
            />
          </div>  
        </div>
    <!-- VideoModal -->
    <!-- <VideoModal videoId="-iIFc0qD8Co" /> -->
      </div>
    </div>
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

.logo {
  position: absolute;
  top: 20vh;
  right: 0;
  padding-right: 70;
  width: 800px;
  height: 700px;
  /* border: 3px solid #73AD21; */
}
.content {
  height: 100vh;
}
.MainHome {
  position: relative;

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
  -webkit-animation: zoomin 10s ease-in infinite;
  animation: zoomin 10s ease-in infinite;
  transition: all .1s ease-in-out;
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
