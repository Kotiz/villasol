<template>
  <!-- <select v-model="$i18n.locale" class="form-select" aria-label="Default select example">
    <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
      {{ locale }}
    </option>
  </select> -->



<!-- <label for="standard-select">{{ $t("switcher-choose")}}</label> -->
<div class="select">
  <select id="standard-select" v-model="$i18n.locale">
    <option lang="pl" value="pl" >&#x1F1F5;&#x1F1F1; Polski</option>
    <option lang="en" value="en">&#127466;&#127475;&#127468; English</option>
  </select>
</div>
</template>

<script>

</script>
<style scoped>
select {
  width: 100%;
  /* min-width: 15ch; */
  /* max-width: 10ch; */
  border: 0;
  border-radius: 3.25em;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;
}

</style>