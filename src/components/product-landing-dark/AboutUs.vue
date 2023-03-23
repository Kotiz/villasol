<template>
  <div class="client-feedback-slider-five pt-70 md-pt-50 " id="AboutUs" >
    <div class="container" >
      <div class="row" >
        <div class="col-xl-7 col-lg-10 col-md-9 m-auto" >
          <div class="title-style-six text-center mt-25" >
            <!-- <h2>Kilka <span> słów </span>o nas {{ t('header') }}</h2> -->
            <h2>{{ $t("header") }}</h2>
            <div class="mt-40" style="text-align:justify; line-height: 2.5">
            <p>{{ $t("description") }}</p>
          </div>
          </div>
          <!-- /.title-style-six -->
        </div>
      </div>
      <div v-if="useAboutUses && useAboutUses.attributes " class="row pt-100">
        <div class="col-xl-7 col-lg-10 m-auto">
          <div class="clientSliderFive mt-10 md-mt-50 item"
            v-for="(useAboutUses, index) in useAboutUses.attributes.data" :key="index">
          </div>
          <div style="text-align:justify">
            <!-- {{ useAboutUses.attributes.description }} -->
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "AboutUs",
  setup() {
    const useAboutUses = ref([]);
    console.log("obiekt nr 2",useAboutUses);
    onMounted(async () => {
      axios.get("http://localhost:1337/api/about-us-single?locale=pl-PL").then((response) => useAboutUses.value = response.data.data);
        console.log('data axios',useAboutUses);
    });
    return {
      useAboutUses,
    };
  },
};
</script>
<!-- <i18n>
  {
    "en": {
      "header": "About us",
      "description": "The our Villa Sol was fully renovated and rebuilt in year 2022/2023.Established on estate Zasole near the PKP station, by peaceful estate street. From our Apartament everything is close even while walking. It takes about 10-15 minutes Oświęcim market when taking a walk and to museum  Birkenau which is the farthest attraction out there about 20 minutes. In close proximity there are shops , markets and public transport stops. Theres also a big public park with a place for kids which takes only 5-10 minutes to get there.",
    },
    "pl": {
      "header": "Kilka słów o nas",
      "description": "Budynek został całkowicie odnowiony i przebudowany w roku 2022/2023. Usytuowany jest na osiedlu 'Zasole' niedaleko dworca PKP, przy spokojnej ulicy osiedlowej. Z naszego apartamentu wszędzie jest blisko nawet na pieszo. Na oświęcimski rynek spacerem dojdziemy w 10-15 minut a do muzeum Birkenau które jest najdalej zajmie nam to spacerem ok 20 minut. W bliskości mamy sklepy, markety, przystanki komunikacji zbiorczej. W niedalekiej odległości ok 5-10 minut pieszo znajduje się duży park miejski na którym znajdziemy także plac zabaw dla dzieci."
    }
  }
</i18n> -->
