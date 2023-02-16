<template>
  <div class="modal fade modal-contact-popup-one" id="contactModal" tabindex="-1" role="dialog"
      aria-labelledby="contactModalTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <main class="main-body modal-content clearfix">
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <img src="../../../assets/images/icon/close.svg" alt="">
          </button>
          <div class="left-side">
            <div class="d-flex flex-column justify-content-between h-100">
              <div class="row">
                <div class="col-xl-10 col-lg-8 m-auto">
                  <blockquote>“I never dreamed about success. I worked for it.”</blockquote>
                  <span class="bio">—Estée Lauder</span>
                </div>
              </div>
              <img src="../../../assets/images/assets/ils_18.svg" alt="" class="illustration mt-auto">
            </div>
          </div> <!-- /.left-side -->
          <div class="right-side">
            <h2 class="form-title">Contact us</h2>
            <form @submit.prevent="onSubmit" id="contact-form" data-bs-toggle="validator">
              <div class="messages"></div>
              <div class="row controls">
                <div class="col-12">
                  <div class="input-group-meta form-group mb-15">
                    <label>Name</label>
                    <input type="text" placeholder="Your Name" name="Fname" required="required"
                      data-error="Name is required.">
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="input-group-meta form-group mb-35">
                    <label>Email*</label>
                    <input type="email" placeholder="Email Address" name="email" required="required"
                      data-error="Valid email is required.">
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="input-group-meta form-group mb-25">
                    <textarea placeholder="Your message" name="message" required="required"
                      data-error="Please,leave us a message."></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-12"><button class="theme-btn-seven w-100">Send Message</button></div>
              </div>
            </form>
          </div> <!-- /.right-side -->
        </main> <!-- /.main-body -->
      </div>
    </div>
</template>

<script>
export default {
  name:'ContactModal',
  methods: {
    onSubmit() {
      console.log('Submitted');
    },
  },
}
</script>