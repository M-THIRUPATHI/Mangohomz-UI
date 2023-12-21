<template>
  <div class="container-404">
    <div class="containerImg">
      <img
        src="~assets/404 p.png"
        alt=""
        style="width:100vw;margin-top: -10vh;"
      />
    </div>
    <div class="flex flex-center">
      <div class="containertextBtn" style="margin-top: 50px;">
        <p style="font-size: 26px;">Oops. Nothing here...</p>
        <p style="padding: 10px;border-radius: 15px;background-color: #214481;color: white;text-align: center;">Go Home</p>
      </div>
    </div>
    <div style="position: absolute;right: 28px;bottom: 0px;">
      <div class="flex">
        <div class="whatIcon"><img src="~assets/WhatsApp Logo.webp" width="80px" style="margin-right: -10px;margin-top: -6px;" alt=""></div>
        <div class="text">
          <p style="margin-bottom: 0px;">whatsapp or call</p>
          <a style="text-decoration: none;" href="tel:8929982655"><p>+91-8929982655</p></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error404"
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
.container-404{
  font-family: 'Roboto', sans-serif;
  }
</style>
