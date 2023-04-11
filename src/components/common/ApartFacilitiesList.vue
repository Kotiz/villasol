<template>
<div class="col-xl-6 col-lg-10 col-md-9 m-auto">
  <div class="container mt-40">
    <div class="row">
      <div class="col">
        <ul class="list-group ">
        <li>
          {{ $t('apartamentFacilities[0]')}}
        </li>
        <li>
          {{ $t('apartamentFacilities[1]')}}
        </li>
        <li>
          {{ $t('apartamentFacilities[2]')}}
        </li>
        <li>
          {{ $t('apartamentFacilities[3]')}}
        </li>
        <li>
          {{ $t('apartamentFacilities[4]')}}
        </li>
        <li>
          {{ $t('apartamentFacilities[5]')}}
        </li>
        <li>
          {{ $t('apartamentFacilities[6]')}}
        </li>
      </ul>
      </div>
      <div class="col">
        <ul class="list-group list-group-flush">
          <li>
            {{ $t('apartamentFacilities[7]')}}
          </li>
          <li>
            {{ $t('apartamentFacilities[8]')}}
          </li>
          <li>
            {{ $t('apartamentFacilities[9]')}}
          </li>
          <li>
            {{ $t('apartamentFacilities[10]')}}
          </li>
          <li>
            {{ $t('apartamentFacilities[11]')}}
          </li>
          <li>
            {{ $t('apartamentFacilities[12]')}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>
<script scoped>
export default {
    name: "ApartFacilitiesList",
}
</script>
<style scoped>
ul {
  list-style-type: circle;
}
li {
  font-size: small;

}
</style>