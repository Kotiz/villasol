<template>
  <ul class="navbar-nav">
    <li class="nav-item dropdown position-static active">
      <router-link :to="'/'" class="nav-link">Home</router-link>
      <!-- <a class="nav-link" href="#Home">Home</a> -->
    </li>
    
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        data-bs-auto-close="outside"
        data-bs-toggle="dropdown"
        >{{ $t("nav-apartments") }}</a
      >
      <ul class="dropdown-menu">
        <li v-for="(menu, index) in blog_menu_data" :key="index">
          <router-link :to="menu.url" class="dropdown-item">{{
            menu.title
          }}</router-link>
        </li>
      </ul>
      <!-- /.dropdown-menu -->
    </li>
    <li class="nav-item">
      <!-- <router-link :to="'/AboutUs'" class="nav-link">O NAS</router-link> -->
      <a class="nav-link" href="#AboutUs">{{ $t("nav-about-us")}}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#CloseToUs">{{ $t("nav-near-us")}}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#Contact">{{  $t("nav-contact") }}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" ><locale-switcher /></a>
    </li>
  </ul>
</template>

<script>
import LocaleSwitcher from '../LocaleSwitcher.vue';

export default {
  name: "NavMenu",
  components: {
    LocaleSwitcher,
  },
  data() {
    return {
      
      blog_menu_data: [
        {
          url: "/ApartOne",
          title: "Apartament 1",
        },
        {
          url: "/ApartTwo",
          title: "Apartament 2",
        },
        {
          url: "/ApartThree",
          title: "Apartament 3",
        },
        {
          url: "/ApartFour",
          title: "Apartament 4",
        },
        {
          url: "/ApartFive",
          title: "Apartament 5",
        },
      ],
    };
  },
};
</script>
