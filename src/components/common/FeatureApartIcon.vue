<template>
  <div class="col-xl-7 col-lg-10 col-md-9 m-auto">
<hr>
  <div class="container">
    <div class="row">
      <div class="col">
        <span>
          <font-awesome-icon icon="fa-solid fa-person" size="xl" />
          {{ $t("apartamentOneGuestnumber") }} {{ apartOneGuestnumber }}
        </span>
      </div>
      <div class="col">
        <span>
          <font-awesome-icon icon="fa-solid fa-maximize" size="xl" />
          {{ $t("apartamentOneSize") }} {{ apartOneGuestSize }} m2
        </span>
      </div>
      <div class="col">
        <span>
          <font-awesome-icon icon="fa-solid fa-door-open" size="xl" />
          {{ $t("apartamentOneBedroomQuantity") }} {{ apartOneGuestBedroomQuantity }}
        </span>
      </div>
      <div class="col">
        <span>
          <font-awesome-icon icon="fa-solid fa-couch" size="xl" />
          {{ $t("apartamentOneSofaQuantity") }} {{ apartOneGuestSofaQuantity }}
        </span>
      </div>
      <div class="col">
        <span>
          <font-awesome-icon icon="fa-solid fa-bed" size="xl" />
          {{ $t("apartamentOneBedQuantity") }} {{ apartamentOneBedQuantity }}
        </span>
      </div>
    </div>
  </div>
<hr>
</div>
</template>
<script>
export default {
  props:[   'apartOneGuestnumber',
            'apartOneGuestSize',
            'apartOneGuestBedroomQuantity',
            'apartOneGuestSofaQuantity',
            'apartamentOneBedQuantity',
        ],
}
</script>
<style scoped>
hr {
  border-top: 1px solid rgb(116, 114, 114);
}
span {
  font-size: small;
}

</style>