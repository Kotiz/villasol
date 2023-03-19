<template>
  <div class="client-feedback-slider-five pt-100 md-pt-50 " id="about us" >
    <div class="container" >
      <div class="row" >
        <div class="col-xl-7 col-lg-10 col-md-9 m-auto" >
          <HeaderText :nameOfAparts="titleHeader"
                      :textNumberOfApart="textNumberApart"
          />
            <!-- /.title-style-six -->
        </div>
      </div> 
      <div class="row">
        <div class="col-xl-7 col-lg-10 m-auto">           
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>

  import HeaderText from '../../common/TextHeaders/HeaderTextOfComponent.vue'
  
  export default {
    name: "AboutUs",
    components: {
      HeaderText,
    },
    setup() {
      const titleHeader = 'Apartament';
      const textNumberApart = 'TWO';
      return {
        titleHeader,
        textNumberApart,
      };
    },
  };
  </script>
  