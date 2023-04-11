<template>
  <ul class="navbar-nav shadow-sm border-end border-end-0">
    <li class="nav-item dropdown position-static active ">
      <router-link to="/">
      <a class="nav-link" href="">Home</a>
    </router-link>
    </li>
    
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle "
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
      <!-- <a class="nav-link" href="#AboutUs">{{ $t("nav-about-us")}}</a> -->
      <a class="nav-link">
      <router-link to="/O-nas-apartmenty-villa-sol-Oswiecim-blisko-starego-miasta-i-muzeum-auschwitz">{{ $t("nav-about-us")}}</router-link></a>
    </li>
    <li class="nav-item">
      <!-- <a class="nav-link" href="#CloseToUs">{{ $t("nav-near-us")}}</a> -->
      <a class="nav-link">
      <router-link to="/Close-to-us-apartment-sol-Oswiecim-near-old-town-with-electric-scooter">{{ $t("nav-near-us")}}</router-link></a>
    </li>
    <li class="nav-item">
      <!-- <a class="nav-link" href="#Contact">{{  $t("nav-contact") }}</a> -->
      <a class="nav-link">
      <router-link to="/Contact-with-us-apartment-sol-Oswiecim-near-old-town-with-electric-scooter">{{ $t("nav-contact")}}</router-link></a>
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
          url: "/Apartment-One-Oswiecim-near-old-town-with-electric-scooter",
          title: "Apartament 1",
        },
        {
          url: "/Apartment-Two-Oswiecim-near-auschwitz-museum-and-old-town",
          title: "Apartament 2",
        },
        {
          url: "/Apartament-Three-Oswiecim-blisko-auschwitz-muzeum-i-starego-miasta",
          title: "Apartament 3",
        },
        {
          url: "/Apartament-Four-Oswiecim-blisko-auschwitz-muzeum-i-starego-miasta",
          title: "Apartament 4",
        },
        {
          url: "/Apartament-Three-Oswiecim-near-old-town-with-electric-scooter-spa-finnish-bath",
          title: "Apartament 5",
        },
      ],
    };
  },
};
</script>
