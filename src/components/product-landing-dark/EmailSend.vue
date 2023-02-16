<template>
    <!-- <section>
    <div class="form-container">
    <p>Hire Me</p>
    <form class="form" ref="form" @submit.prevent="sendMail">
    <div class="form-group">
    <input name="from_name" placeholder="name" type="text" :value="inputFieldReset" required>
    </div>
    <div class="form-group">
    <input name="user_email" placeholder="email" type="email" :value="inputFieldReset" required>
    </div>
    <div class="form-group">
    <input name="subject" placeholder="subject" type="text" :value="inputFieldReset" required>
    </div>
    <div class="form-group">
    <textarea class="text-area" name="message" placeholder="message" type="text" :value="inputFieldReset" required></textarea>
    </div>
    <div class="form-group">
    <input class="submit" type="submit" name="send" />
    </div>
    </form>
    </div>
    </section> -->
    <div class="contact-style-two">
    <div class="container">
    <section>
        <div class="form-style-classic mt-200 md-mt-80">
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
              <button class="theme-btn-two">Send Message</button></div>
          </div>
        </form>
      </div>
    </section>
    </div>
    </div>
</template> 
<style>
*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

html, body {
 font-size: 12px;
 overflow: hidden;
 font-family: 'Comfortaa', cursive;
 color: white;
}

p{
 font-size: 30px;
 padding: 10px;
 font-weight: bold;
}

.form-container {
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 margin: 50px auto;
 border-radius: 10px;
 padding: 10px;
 background-color: #ea1d6f; 
 width: 500px;
}

.form-group{
 padding: 15px;
}

.form-group input{
 padding: 10px 10px 10px 10px;
 border: none;
 border-radius: 10px;
 width: 400px;
 outline: none;
 font-family: 'Comfortaa', cursive;
 font-weight: 500;
}

.text-area {
 height: 150px;
 width: 400px;
 border: none;
 border-radius: 10px;
 padding: 10px;
 outline: none;
 font-family: 'Comfortaa', cursive;
 font-weight: 500;
}

.form-group .submit{
 border: none;
 border-radius:5px;
 height: 40px;
 width: 70px ;
 cursor: pointer;
 font-family: 'Comfortaa', cursive;
 font-weight: 500;
}
</style>
<script>
import emailjs from 'emailjs-com';
import {ref} from 'vue';

export default {
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