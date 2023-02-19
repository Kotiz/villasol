<template>
  <div class="client-feedback-slider-five pt-100 md-pt-50 " id="AboutUs" >
    <div class="container" >
      <div class="row" >
        <div class="col-xl-7 col-lg-10 col-md-9 m-auto" >
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
              {{ useAboutUs.data.data }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAboutUsStrapi } from '@/store/aboutUsStrapi'


export default {
  name: "AboutUs",
  setup() {
    const useAboutUs = useAboutUsStrapi();
    useAboutUs.retrieveAboutUs();
    return {
      useAboutUs,
    };
  },
};
</script>
