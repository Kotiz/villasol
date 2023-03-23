<template>
  <div :class="`theme-main-menu sticky-menu theme-menu-two ${isSticky ? 'fixed' : ''}`">
    <div class="d-flex align-items-center justify-content-center">
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/images/logosy/logo_small.svg" alt="">
        </router-link>
      </div>

      <nav id="mega-menu-holder" class="navbar navbar-expand-lg">
        <div class="nav-container">
          <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
            :class="menuActive ? 'navbar-toggler open' : 'navbar-toggler'" @click="menuActive = !menuActive">
            <span></span>
          </button>
          <div class="navbar-collapse collapse" id="collapsibleNavbar">
            <div class="d-lg-flex justify-content-between align-items-center">
              <!-- nav menu start -->
              <NavMenu />
              <!-- nav menu end -->

              <ul class="left-widget">
                <li class="d-sm-flex">
                  <ul class="language-button-group d-flex align-items-center justify-content-center">
                    <li>
                      <!-- <a href="#" class="eng-lang active">PL. </a> -->
                    </li>
                    <li>
                      <!-- <a href="#" class="ru-lang">ENG.</a> -->
                    </li>
                  </ul>

                  <!-- <ul class="user-login-button d-flex align-items-center justify-content-center">
                    <li>
                      <router-link to="/login" class="signIn-action">Login</router-link>
                    </li>
                    <li>
                      <router-link to="/register" class="signUp-action">Sign Up</router-link>
                    </li>
                  </ul> -->
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import NavMenu from './NavMenu.vue';


export default {
  name: 'HeaderFour',
  components: {
    NavMenu,
  },
  data() {
    return {
      isSticky: false,
      menuActive: false,
    }
  },
  methods: {
    handleSticky() {
      if (window.scrollY > 80) {
        this.isSticky = true;
      }
      else {
        this.isSticky = false;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleSticky)
  },
}
</script>