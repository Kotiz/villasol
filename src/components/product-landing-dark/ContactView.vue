<template>
  <footer class="theme-footer-three pt-180 md-pt-100" id="Contact">
    <hr style="width:70%; margin: auto;" class="pt-80">
    <div class="top-footer">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-4 col-12 footer-about-widget" data-aos="fade-up" data-aos-duration="1200">
            <router-link to="/doc-landing" class="logo"><img src="../../assets/images/logosy/logo_small.svg" alt=""></router-link>
          </div> <!-- /.about-widget -->
          
          <div class="col-lg-3 col-md-4 footer-list" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
            <h5 class="footer-title">Mapa</h5>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d452.99464509837014!2d19.204758099468695!3d50.03900175212601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47169529089c18f1%3A0xb8b6272e29a54dc2!2sVilla%20Sol!5e0!3m2!1spl!2spl!4v1675455043082!5m2!1spl!2spl" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div> <!-- /.footer-list -->
          <div class="col-lg-2 col-md-4 footer-list" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
            <h5 class="footer-title">Mapa strony</h5>
            <ul>
              <!-- <li><router-link to="/about-us-doc">About us</router-link></li> -->
              <li><a href="#Home">Home</a></li>
              <li><a href="#">Apartamenty</a></li>
              <li><a href="#">-Apartament 1</a></li>
              <li><a href="#">-Apartament 2</a></li>
              <li><a href="#">-Apartament 3</a></li>
              <li><a href="#">-Apartament 4</a></li>
              <li><a href="#">O nas</a></li>
              <li><a href="#">Udogodnienia</a></li>
              <li><a href="#">W pobliżu nas</a></li>
              <li><a href="#">Kontakt</a></li>
            </ul>
          </div> <!-- /.footer-list -->
          <div class="col-lg-3 col-md-4 address-list" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
            <h5 class="footer-title">Kontakt</h5>
            <p class="font-rubik">Villa Sol<br>
              ul.Garbarska 20<br>32-600 Oświęcim</p>
            <ul class="info">
              <li><a href="#">villasoloswiecim@gmail.com</a></li>
              <li><a href="#" class="mobile-num">+48 604 054 572</a></li>
            </ul>
            <ul class="social-icon d-flex pt-15">
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            </ul>
          </div> <!-- /.footer-list -->
        </div> <!-- /.row -->
      </div> <!-- /.container -->
    </div> <!-- /.top-footer -->

    <div class="container">
      <div class="bottom-footer-content">
        <div class="row">
          <div class="col-lg-8 ms-auto">
            <div class="d-md-flex align-items-center justify-content-between">
              <p class="order-md-first" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="50"
                data-aos-anchor=".theme-footer-three">
                <a href="www.hash.com.pl" class="">HASH s.c.</a></p>
            </div>
          </div>
        </div>
      </div> <!-- /.bottom-footer -->
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ContactView'
}
</script>