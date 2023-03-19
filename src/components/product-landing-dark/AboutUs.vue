<template>
  <div class="client-feedback-slider-five pt-30 md-pt-50 " id="AboutUs" >
    <div class="container" >
      <div class="row" >
        <div class="col-xl-7 col-lg-10 col-md-9 m-auto" >
          <div class="title-style-six text-center mt-25" >
            <h2>Kilka <span> słów </span>o nas</h2>
          </div>
          <!-- /.title-style-six -->
        </div>
      </div>
      <div v-if="useAboutUses && useAboutUses.attributes " class="row pt-100">
        <div class="col-xl-7 col-lg-10 m-auto">
          <div class="clientSliderFive mt-10 md-mt-50 item"
            v-for="(useAboutUses, index) in useAboutUses.attributes.data" :key="index">
          </div>
          <div style="text-align:justify">{{ useAboutUses.attributes.description }}</div>
          <div>
          </div>
        </div>
      </div>
      <p>{{ t('hello') }}</p>
    </div>
  </div>
</template>

<script>
// import { useAboutUsStrapi } from '@/store/aboutUsStrapi'
import { ref, onMounted } from "vue";
import axios from "axios";
import { useI18n } from 'vue-i18n'

export default {
  name: "AboutUs",
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    });
    const useAboutUses = ref([]);
    console.log("obiekt nr 2",useAboutUses);
    onMounted(async () => {
      axios.get("http://localhost:1337/api/about-us-single?locale=pl-PL").then((response) => useAboutUses.value = response.data.data);
        console.log('data axios',useAboutUses);
    });
    return {
      useAboutUses, t,
    };
  },
};
</script>
<i18n>
  {
    "en": {
      "hello": "Hello this is english"
    },
    "es": {
      "hello": "eso es espanol"
    },
    "pl": {
      "hello": "to jest polski"
    }
  }
</i18n>
