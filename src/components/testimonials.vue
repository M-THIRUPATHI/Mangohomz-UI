<template>
  <div class="testimonials " style="margin-top: -50px;">
    <div class="title-testimonials">
      <span class="text-title-testimonials"
        ><p style="margin-bottom:0px;">
          Hear What Our Users Have to Say!
        </p></span
      >
    </div>
    <div class="contentTestimonial flex justify-left ">
      <div class="displayImage">
        <a href="https://youtu.be/857bFhiHNm4" target="_blank">
          <q-img
            src="~assets/Testimonial 1.1.webp"
            style="width:100px;height:300px"
            contain
            class="TestiMonialsImages TestOne"
          />
        </a>
      </div>
      <div class="displayImage">
        <a>
          <q-img
            src="~assets/Testimonial 1.2.webp"
            style="width:100px;height:300px"
            contain
            class="TestiMonialsImages"
          />
        </a>
      </div>
      <div class="displayImage">
        <a href="https://www.youtube.com/shorts/VSJIeES2zW8" target="_blank">
          <q-img
            src="~assets/Testimonial 1.3.webp"
            style="width:100px;height:300px"
            contain
            class="TestiMonialsImages"
          />
        </a>
      </div>
      <div class="displayImage">
        <a href="https://m.facebook.com/story.php?story_fbid=560661396268680&id=100069744732122&mibextid=Nif5oz" target="_blank">
          <q-img
            src="~assets/Testimonial 1.4.webp"
            style="width:100px;height:300px"
            contain
            class="TestiMonialsImages"
          />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "testimonials"
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster+Two:wght@700&display=swap");
.text-title-testimonials {
  font-size: 26px;
  margin-left: 10px;
  font-family: "Lobster", cursive;
}
@media (max-width: 767px) {
  .TestiMonialsImages {
    width: 375px  !important;
    margin-left: -4%;
    /* margin-top: -60px; */
  }
  .displayImage {
    width: 90%;
  }

  .contentTestimonial {
    justify-content: center;
  }
  .img2 {
    margin-top: -140px;
    margin-bottom: -50px;
  }
  .text-title-testimonials {
    font-size: 19px;
    margin-left: 10px;
    line-break: anywhere;
    font-weight: bolder;
  }
}

@media screen and (max-width: 400px) {
  .contentTestimonial {
    justify-content: left;
    margin-left: 5px;
  }
}

@media only screen and (min-width: 1536px) {
  .TestiMonialsImages {
    width: 360px !important;
    margin-left: 10px !important;
  }

  .title-testimonials {
    margin-left: 2.5% !important;
  }
  .img2 {
    margin-left: 40px;
  }
}
@media only screen and (min-width: 1920px) {
  .contentTestimonial {
    justify-content: center;
  }
  .title-testimonials {
    margin-left: 10% !important;
  }
}
@media (min-width: 1440px) and (max-width: 1535px) {
  .TestiMonialsImages {
    width: 338px !important;
  }
  .TestOne {
    margin-left: 20px;
  }
  .img2 {
    margin-right: 10px;
  }
}
@media (min-width: 1280px) and (max-width: 1439px) {
  .TestiMonialsImages {
    width: 300px !important;
    margin-left: 24px;
  }
}
</style>
