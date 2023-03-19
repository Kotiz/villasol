<template>
  <div class="contact-us-light pt-180 pb-200 md-pt-90 md-pb-80" id="Contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4 col-sm-6">
          <div class="address-info">
            <div class="icon"><img src="../../assets/images/icon/44.svg" alt=""></div>
            <div class="title">Nasza lokalizacja</div>
            <p class="font-rubik">Villa Sol<br>ul.Garbarska 20<br> 32-600 Oświęcim </p>
          </div> <!-- /.address-info -->
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="address-info">
            <div class="icon"><img src="../../assets/images/icon/45.svg" alt=""></div>
            <div class="title">Kontakt</div>
            <p class="font-rubik">villasoloswiecim@gmail.com <br>+48 604 054 572</p>
          </div> <!-- /.address-info -->
        </div>
        <div class="col-md-4 col-sm-6 ">
          <div class="address-info">
            <div class="icon"><img src="../../assets/images/icon/46.svg" alt=""></div>
            <div class="title">Znajdziesz nas na :</div>
            <p class="font-rubik">Follow on social media</p>
            <ul class="d-flex justify-content-center">
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
            </ul>
          </div> <!-- /.address-info -->
        </div>
      </div>

      <div class="form-style-light">
        <form @submit.prevent="sendMail" ref="form" id="contact-form" data-bs-toggle="validator">
          <div class="messages"></div>
          <div class="row controls">
            <div class="col-md-6">
              <div class="input-group-meta form-group mb-35">
                <label>First Name</label>
                <input type="text" placeholder="name" name="from_name" :value="inputFieldReset" required="required" 
                data-error="Name is required.">
                <span class="placeholder_icon valid-sign">
                  <img src="../../assets/images/icon/18.svg" alt="">
                </span>
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group-meta form-group mb-35">
                <label>Last Name</label>
                <input type="text" placeholder="" name="from_name" required="required" 
                data-error="Name is required.">
                <span class="placeholder_icon valid-sign">
                  <img src="../../assets/images/icon/18.svg" alt="">
                </span>
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-12">
              <div class="input-group-meta form-group mb-35">
                <label>Your Email</label>
                <input type="email" placeholder="" name="user_email" :value="inputFieldReset" required="required"
                  data-error="Valid email is required.">
                <span class="placeholder_icon valid-sign">
                  <img src="../../assets/images/icon/18.svg" alt="">
                </span>
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-12">
              <div class="input-group-meta form-group lg mb-35">
                <label>Your Message</label>
                <textarea class="text-area" :value="inputFieldReset" placeholder="Write your message here..." name="message" required="required"
                  data-error="Please,leave us a message."></textarea>
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-12"><button class="theme-btn-one btn-lg" type="submit" name="send">Send Message</button></div>
          </div>
        </form>
      </div> <!-- /.form-style-light -->
    </div>
    <!-- <form action="?" method="POST">
      <br/>
      <input type="submit" value="Submit">
    </form> -->
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import {ref} from 'vue';

export default {
  name: 'ContactStyleLight',
  methods: {
    onSubmit() {
      console.log('Submitted');
    },
  },
  setup() {
    const form = ref(null);
    const inputFieldReset = ref(null);

    const sendMail = () => {
        emailjs.sendForm('service_pdpk1te', 'template_8og43j1', form.value, 'X8y45620ASttj5oOO')
        .then(() => {
          alert('Message sent!')
          inputFieldReset.value = " ";
        }, (error) => {
          alert('Message not sent', error);
        }); 
      }
    return {
        form,
        inputFieldReset,
        sendMail,
    }
    }

}
</script>