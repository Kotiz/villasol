<template>
  <div class="title-style-six text-center mt-25" >
    <h2>{{ nameOfAparts }} <span> {{ textNumberOfApart}} </span></h2>
  </div>
</template>
<script>
export default {
  props: ['nameOfAparts','textNumberOfApart'],
}
</script>