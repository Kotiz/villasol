<template>
  <div class="contact-style-two">
    <div class="container">
      <div class="contact-info-wrapper">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-6 d-lg-flex">
            <div class="address-info">
              <div class="icon d-flex align-items-end"><img src="../../assets/images/icon/44.svg" alt=""></div>
              <div class="title">Location</div>
              <p class="font-rubik">Dhaka, Kawran Bazar <br> 1201 Metro</p>
            </div> <!-- /.address-info -->
          </div>
          <div class="col-lg-4 col-sm-6 d-lg-flex">
            <div class="address-info">
              <div class="icon d-flex align-items-end"><img src="../../assets/images/icon/45.svg" alt=""></div>
              <div class="title">Contact</div>
              <p class="font-rubik">bawejkor@duwvude.gov <br>(779) 564-1593</p>
            </div> <!-- /.address-info -->
          </div>
          <div class="col-lg-4 col-sm-6 d-lg-flex">
            <div class="address-info">
              <div class="icon d-flex align-items-end"><img src="../../assets/images/icon/46.svg" alt=""></div>
              <div class="title">Social Media</div>
              <p class="font-rubik">Find on social media</p>
              <ul class="d-flex justify-content-center">
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
              </ul>
            </div> <!-- /.address-info -->
          </div>
        </div>
        <img src="../../assets/images/shape/64.svg" alt="" class="shapes shape-one">
      </div> <!-- /.contact-info-wrapper -->

      <div class="form-style-classic mt-150 md-mt-80">
        <form @submit.prevent="onSubmit" id="contact-form" data-bs-toggle="validator">
          <div class="messages"></div>
          <div class="row controls">
            <div class="col-md-6" data-aos="fade-right" data-aos-duration="1200">
              <div class="input-group-meta form-group mb-60">
                <label>First Name</label>
                <input type="text" placeholder="Michel" name="Fname" required="required" data-error="Name is required.">
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-md-6" data-aos="fade-left" data-aos-duration="1200">
              <div class="input-group-meta form-group mb-60">
                <label>Last Name</label>
                <input type="text" placeholder="Hawkins" name="Lname" required="required"
                  data-error="Name is required.">
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-12" data-aos="fade-up" data-aos-duration="1200">
              <div class="input-group-meta form-group mb-60">
                <label>Email Address</label>
                <input type="email" placeholder="saeslal@zouj.co.uk" name="email" required="required"
                  data-error="Valid email is required.">
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-12" data-aos="fade-up" data-aos-duration="1200">
              <div class="input-group-meta form-group lg mb-40">
                <label>Your Message</label>
                <textarea placeholder="your message here.." name="message" required="required"
                  data-error="Please,leave us a message."></textarea>
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-12" data-aos="fade-up" data-aos-duration="1200">
              <button :class="`${contact_doc ? 'theme-btn-six lg' : 'theme-btn-two'}`">Send Message</button></div>
          </div>
        </form>
      </div> <!-- /.form-style-classic -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactStyle',
  props:{contact_doc:Boolean},
  methods: {
    onSubmit() {
      console.log('Submitted');
    },
  },
}
</script>