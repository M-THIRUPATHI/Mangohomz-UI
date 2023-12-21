<template>
  <q-card-section class="text-white bg-primary">
    <!-- English Code -->
    <div class="row lt-sm" style="margin-right: 15px">
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <!-- <q-fab icon="add" direction="left" color="primary"> <i class="fab fa-telegram"></i> -->
        <div class="q-pa-md q-gutter-sm">
          <q-btn
            round
            color="secondary"
            icon="mdi-whatsapp"
            type="a"
            aria-label="MH WhatsApp Communication Link"
            @click="openChatDialog"
            target="_blank"
            ><q-tooltip class="bg-green"> WhatsApp </q-tooltip>
          </q-btn>
          <!-- <q-btn
            round
            color="info"
            icon="fab fa-telegram"
            type="a"
            aria-label="MH Telegram Communication Link"
            href="https://t.me/MangoHomzBot"
            target="_blank"
            ><q-tooltip class="bg-info text-body2">Telegram</q-tooltip></q-btn
          > -->
          <q-btn
            round
            color="primary"
            icon="mdi-phone"
            type="a"
            aria-label="MH Phone Communication Link"
            href="tel:8929982655"
            target="_blank"
            ><q-tooltip class="bg-primary text-body2">Phone</q-tooltip></q-btn
          >
          <!-- <div class="contactUsPopUp" v-if="callUsPopUp" style="z-index: 2">
            <q-img
              @click="CloseCallUsPopUp"
              contain
              src="~assets/Close Button Logo P.png"
              style="
                width: 28px;
                height: 28px;
                margin-left: 98%;
                margin-top: -36px;
              "
            />
            <div class="flex" style="margin-top: -26px">
              <div class="callUsImage">
                <div>
                  <q-img
                    contain
                    src="~assets/Call Button P.png"
                    style="width: 60px; height: 100px"
                  />
                </div>
              </div>
              <div>
                <p>
                  <span class="textphNomobile"
                    >Call us or give a missed call </span
                  ><br /><span class="phoneNumber"
                    ><a href="tel:8929982655" target="_blank"
                      >+91 8929982655</a
                    ></span
                  >
                </p>
              </div>
            </div>
          </div> -->

          <!-- <q-btn
            round
            color="negative"
            icon="mdi-email"
            type="a"
            aria-label="MH Email Communication Link"
            href="mailto:care@mangohomz.com"
            target="_blank"
            ><q-tooltip class="bg-red text-body2">Email</q-tooltip></q-btn
          > -->
        </div>
        <!-- </q-fab> -->
      </q-page-sticky>
      <q-page-scroller position="bottom">
        <q-btn
          fab
          style="margin-left: -180px"
          round
          icon="keyboard_arrow_up"
          color="red"
        />
      </q-page-scroller>
      <div class="col-12">
        <div
          class="footer-head text-bold text-center"
          style="font-family: verdana"
        >
          FOLLOW US ON
        </div>
        <div>
          <div
            class="row q-pa-xs mh-align-center"
            style="margin-left: 50px; margin-top: 5px"
          >
            <div class="col-2" style="margin-left: -10px">
              <q-btn
                href="https://www.facebook.com/mangohomzpage"
                target="_blank"
                type="a"
                flat
                aria-label="MH FaceBook Communication Link"
                ><q-icon
                  name="fab fa-facebook-square"
                  color="white"
                  size="25px"
              /></q-btn>
            </div>
            <div class="col-2" style="margin-left: -10px">
              <q-btn
                href="https://www.youtube.com/@mangohomz"
                target="_blank"
                type="a"
                flat
                aria-label="MH Youtube Communication Link"
              >
                <q-icon name="fab fa-youtube" color="white" size="25px"
              /></q-btn>
            </div>
            <div class="col-2" style="margin-left: -10px">
              <q-btn
                href="https://www.instagram.com/mangohomz/"
                target="_blank"
                type="a"
                flat
                aria-label="MH Instagram Communication Link"
                ><q-icon name="fab fa-instagram" color="white" size="25px"
              /></q-btn>
            </div>
            <div class="col-2" style="margin-left: -10px">
              <q-btn
                href="https://twitter.com/mangohomz"
                target="_blank"
                type="a"
                flat
                aria-label="MH Twitter Communication Link"
              >
                <q-icon name="fab fa-twitter" color="white" size="25px"
              /></q-btn>
            </div>

            <div class="col-2" style="margin-left: -10px">
              <q-btn
                href="https://www.linkedin.com/company/mangohomz/"
                target="_blank"
                aria-label="MH LinkedIn Communication Link"
                type="a"
                flat
              >
                <q-icon name="fab fa-linkedin" color="white" size="25px"
              /></q-btn>
            </div>
            <div class="col-2" style="margin-left: -10px">
              <q-btn
                href="https://www.quora.com/profile/Mangohomz"
                target="_blank"
                type="a"
                flat
                aria-label="MH Quora Communication Link"
              >
                <q-icon name="fab fa-quora" color="white" size="25px"
              /></q-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-2">
        <div
          class="footer-head text-bold text-center"
          style="font-family: verdana; margin-top: 20px"
        >
          POLICY
        </div>
        <div
          class="footer-head text-center"
          style="font-family: verdana; cursor: pointer"
        >
          <span
            class="text-white"
            role="link"
            @click="termAndConditionOpenInTab()"
          >
            Terms & Conditions</span
          >
        </div>
        <div
          class="footer-head text-center"
          style="font-family: verdana; cursor: pointer"
        >
          <span class="text-white" @click="PrivacyPolicyOpenInTab()"
            >Privacy Policy
          </span>
        </div>
        <div
          class="footer-head text-center"
          style="font-family: verdana; cursor: pointer"
        >
          <span class="text-white" @click="RefundPolicyOpenInTab()"
            >Refund Policy</span
          >
        </div>

        <div
          class="footer-head text-center"
          style="font-family: verdana; cursor: pointer"
        >
          <span class="text-white" @click="CancellationPolicyOpenInTab()"
            >Cancellation Policy</span
          >
        </div>
        <div
          class="footer-head text-center"
          style="font-family: verdana; cursor: pointer"
        >
          <span class="text-white" role="link" @click="supportOpenInNewTab()">
            Customer Support
          </span>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div
          class="footer-head text-bold text-center"
          style="font-family: verdana; margin-top: 20px"
        >
          CONTACT US
        </div>
        <div style="font-family: verdana" class="text-center">
          Helpline Number:<br />+91 8929982655
        </div>
        <div style="font-family: verdana" class="text-center">
          Email:
          <a
            class="text-white text-center"
            href="mailto:care@mangohomz.com"
            target="_blank"
            ><br />
            care@mangohomz.com
          </a>
          <br />
          <q-btn
            style="margin-top: 10px"
            round
            color="info"
            icon="fab fa-telegram"
            type="a"
            aria-label="MH Telegram Communication Link"
            href="https://t.me/MangoHomzBot"
            target="_blank"
            ><q-tooltip class="bg-info text-body2">Telegram</q-tooltip></q-btn
          >
        </div>
        <div style="margin-top:10px">
          <p    style="  cursor: pointer; color: white;margin-top:0px;font-size:20px;font-weight:bold;text-align:center;"
          @click="showAddress = !showAddress">Address:</p>

          <div v-if="showAddress" class="flex flex-center " style="text-align:center">
            <div style="font-family: verdana,border:1px solid black;height:60px;width:200px">
              302, Cauvery Serenity, Yeshwanthpur, Bangalore<br />
              INDIA – 560022
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div
          class="footer-head"
          style="
            margin-top: 20px;
            text-align: center;
            font-family: verdana;
            cursor: pointer;
          "
        >
          <!-- <span class="text-white" @click="mhLoginDialog = true">MH LOGIN</span>
          <br/> -->
          <div
            class="col-12"
            style="font-family: verdana; font-size: 15px; margin-top: 5px"
          >
            <div
              class="footer-head text-bold text-h6"
              style="font-family: verdana; margin-top: -6px"
            >
              SUBSCRIBE
            </div>
            <span
              >Stay updated, enter your email <br />address below and click the
              "Subscribe" button:
            </span>
            <q-form ref="emailSubscribeForm">
              <div class="flex flex-row flex-center">
                <div>
                  <q-input
                    v-model="emailForm.subscriber_email_id"
                    :rules="[required(' Email ID'), email()]"
                    type="email"
                    dense
                    style="
                      background-color: white;
                      margin-top: 20px;
                      height: 38px;
                      width: 263px;
                      border-radius: 10px;
                      text-align: center;
                      border: 0px;
                      padding-left: 10px;
                      padding-right: 10px;
                      padding-bottom: 10px;
                    "
                    label="Enter Email Address"
                  ></q-input>
                </div>
                <div>
                  <q-btn
                    style="
                      margin-top: 20px;
                      margin-left: -20px;
                      height: 38px;
                      border-radius: 18px;
                      width: 100px;
                      background-color: rgb(193, 76, 96);
                    "
                    @click="onEmailSubscribe"
                    >Subscribe</q-btn
                  >
                </div>
              </div>
            </q-form>
          </div>
        </div>
      </div>

      <div class="col-12">
        <!-- <div
          class="footer-head text-bold text-center"
          style="font-family: verdana; margin-top: 20px"
        >
          MH LOGIN
        </div>
        <div class="row" style="margin-left: 110px; margin-top: -10px">
          <q-btn
            flat
            class="text-center"
            no-caps
            @click="staffLoginDialog = true"
            style="font-family: verdana; cursor: pointer"
            >Staff Login</q-btn
          >
        </div>
        <div class="row" style="margin-left: 110px; margin-top: -10px">
          <q-btn
            flat
            class="text-center"
            no-caps
            @click="adminLoginDialog = true"
            style="font-family: verdana; cursor: pointer"
            >Admin Login</q-btn
          >
        </div>
        <div class="row" style="margin-left: 110px; margin-top: -10px">
          <q-btn
            flat
            class="text-center"
            no-caps
            @click="cityLoginDialog = true"
            style="font-family: verdana; cursor: pointer"
            >City Login</q-btn
          >
        </div> -->
        <!-- <div class="footer-head" style="margin-top:20px;text-align: center;font-family: verdana; cursor: pointer">

          <span class="text-white" @click="mhLoginDialog = true">MH LOGIN</span>
        </div> -->
      </div>
      <div class="col-12">
        <div
          class="footer-head text-bold text-center"
          style="font-family: verdana; margin-top: 20px"
        >
          BUSINESS HOURS
        </div>
        <div style="font-family: verdana" class="text-center">
          Monday – Saturday<br />
          8 AM – 8 PM
        </div>
        <div style="font-family: verdana" class="text-center">
          <br />Copyright © MANGOHOMZ TECHNOLOGIES PRIVATE LIMITED. All
          rights reserved.<br />
        </div>
        <div
          class="footer-head text-bold text-center" @click="mhLoginDialog = true"
          style="font-family: verdana; margin-top: 20px; cursor: pointer;margin-bottom: 50px"
        >
          MH LOGIN
        </div>
      </div>
    </div>
    <div class="row gt-xs">
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <!-- <q-fab icon="add" direction="left" color="primary"> <i class="fab fa-telegram"></i> -->
        <div class="q-pa-md q-gutter-sm">
          <q-page-scroller position="bottom-left" :offset="[-50, 8]">
            <q-btn fab round icon="keyboard_arrow_up" color="red" />
          </q-page-scroller>

          <q-btn
            round
            color="secondary"
            icon="mdi-whatsapp"
            type="a"
            aria-label="MH WhatsApp Communication Link"
            @click="openChatDialog"
            target="_blank"
            ><q-tooltip class="bg-green"> WhatsApp </q-tooltip>
          </q-btn>
          <q-btn
            round
            color="info"
            icon="fab fa-telegram"
            type="a"
            aria-label="MH Telegram Communication Link"
            href="https://t.me/MangoHomzBot"
            target="_blank"
            ><q-tooltip class="bg-info text-body2">Telegram</q-tooltip></q-btn
          >

          <!-- <q-btn fab icon="keyboard_arrow_up" color="red" /> -->

          <!-- <q-btn
            round
            color="primary"
            icon="mdi-phone"
            type="a"
            aria-label="MH Phone Communication Link"
            href="tel:8929982655"
            target="_blank"
            ><q-tooltip class="bg-primary text-body2">Phone</q-tooltip></q-btn
          >
          <q-btn
            round
            color="negative"
            icon="mdi-email"
            type="a"
            aria-label="MH Email Communication Link"
            href="mailto:care@mangohomz.com"
            target="_blank"
            ><q-tooltip class="bg-red text-body2">Email</q-tooltip></q-btn
          > -->
        </div>
        <!-- </q-fab> -->
      </q-page-sticky>

      <!-- <q-page-scroller position="bottom">
        <q-btn fab icon="keyboard_arrow_up" color="red" />
      </q-page-scroller> -->

      <div class="col-12 col-md-2">
        <div
          class="footer-head text-center text-bold"
          style="font-family: verdana; margin-left: -30px"
        >
          FOLLOW US ON
        </div>
        <div>
          <div class="row">
            <div class="col-md-3 q-pa-md" style="margin-right: -5px">
              <q-btn
                href="https://www.facebook.com/mangohomzpage"
                aria-label="MH FaceBook Communication Link"
                target="_blank"
                type="a"
                flat
                ><q-icon
                  name="fab fa-facebook-square"
                  color="white"
                  size="25px"
              /></q-btn>
            </div>
            <div class="col-md-3 q-pa-md" style="margin-right: -5px">
              <q-btn
                href="https://www.youtube.com/@mangohomz"
                target="_blank"
                type="a"
                flat
                aria-label="MH Youtube Communication Link"
              >
                <q-icon name="fab fa-youtube" color="white" size="25px"
              /></q-btn>
            </div>
            <div class="col-md-3 q-pa-md">
              <q-btn
                href="https://www.instagram.com/mangohomz/"
                target="_blank"
                type="a"
                flat
                aria-label="MH Instagram Communication Link"
                ><q-icon name="fab fa-instagram" color="white" size="25px"
              /></q-btn>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 q-pa-md" style="margin-right: -5px">
              <q-btn
                href="https://twitter.com/mangohomz"
                target="_blank"
                type="a"
                flat
                aria-label="MH Twitter Communication Link"
              >
                <q-icon name="fab fa-twitter" color="white" size="25px"
              /></q-btn>
            </div>

            <div class="col-md-3 q-pa-md" style="margin-right: -5px">
              <q-btn
                href="https://www.linkedin.com/company/mangohomz/"
                target="_blank"
                type="a"
                flat
                aria-label="MH LinkedIn Communication Link"
              >
                <q-icon name="fab fa-linkedin" color="white" size="25px"
              /></q-btn>
            </div>
            <div class="col-md-3 q-pa-md">
              <q-btn
                href="https://www.quora.com/profile/Mangohomz"
                target="_blank"
                type="a"
                flat
                aria-label="MH Quora Communication Link"
              >
                <q-icon name="fab fa-quora" color="white" size="25px"
              /></q-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-2">
        <div
          class="footer-head text-bold text-left"
          style="font-family: verdana"
        >
          POLICY
        </div>
        <div class="footer-head" style="font-family: verdana; cursor: pointer">
          <span class="text-white" @click="termAndConditionOpenInTab()">
            Terms & Conditions</span
          >
        </div>
        <div class="footer-head" style="font-family: verdana; cursor: pointer">
          <span class="text-white" @click="PrivacyPolicyOpenInTab()"
            >Privacy Policy
          </span>
        </div>
        <div class="footer-head" style="font-family: verdana; cursor: pointer">
          <span class="text-white" @click="RefundPolicyOpenInTab()"
            >Refund Policy</span
          >
        </div>

        <div class="footer-head" style="font-family: verdana; cursor: pointer">
          <span class="text-white" @click="CancellationPolicyOpenInTab()"
            >Cancellation Policy</span
          >
        </div>
        <div class="footer-head" style="font-family: verdana; cursor: pointer">
          <span class="text-white" role="link" @click="supportOpenInNewTab()">
            Customer Support
          </span>
        </div>
      </div>
      <div class="col-12 col-md-2">
        <div
          class="footer-head text-bold text-h6"
          style="font-family: verdana; margin-top: -6px"
        >
          CONTACT US
        </div>
        <div style="font-family: verdana">
          Helpline Number:<br />+91 8929982655
        </div>
        <div style="font-family: verdana">
          Email:
          <a class="text-white" href="mailto:care@mangohomz.com" target="_blank"
            ><br />
            care@mangohomz.com
          </a>
        </div>
        <div>
          <p    style="  cursor: pointer; color: white;margin-top:10px;font-size:16px;font-weight:bold"
          @click="showAddress = !showAddress">Address:</p>

          <div v-if="showAddress" class="address" style="margin-top:-10px;">
           <div style="font-family: verdana,border:1px solid black;height:50px;width:200px">
            <strong>  302, Cauvery Serenity, Yeshwanthpur, Bangalore<br />
              INDIA – 560022</strong>
            </div>

          </div>
        </div>
      </div>

      <div
        class="footer-heading col-12 col-md-3"
        style="
          font-family: verdana;

          width: 380px;
          margin-right: 30px;
        "
      >
        <div
          class="footer-head text-bold text-h6"
          style="font-family: verdana; margin-top: -6px"
        >
          SUBSCRIBE
        </div>

        <span
          >Stay updated, enter your email <br />address below and click the
          "Subscribe" button:
        </span>
        <q-form ref="emailSubscribeForm">
          <div class="flex flex-row">
            <div>
              <!-- Desktop-view-subscribe -->
              <q-input
                v-model="emailForm.subscriber_email_id"
                @keyup.enter="prompt = false"
                hide-bottom-space
                label="Enter Email Address"
                dense
                :rules="[required(' Email ID'), email()]"
                style="
                  text-align: center;
                  background-color: white;
                  margin-top: 10px;
                  text-align: center;
                  height: 38px;
                  width: 280px;
                  text-align: center;
                  font-size: 12px;
                  border: 0px solid transparent;
                  border-radius: 10px;
                  margin-bottom: 15px;
                  padding-left: 20px;
                  padding-right: 35px;
                  padding-bottom: 20px;
                "
              />
            </div>
            <div>
              <q-btn
                @click="onEmailSubscribe"
                style="
                  margin-top: 10px;
                  height: 38px;
                  width: 85px;
                  border-radius: 20px;
                  font-size: 11px;
                  margin-left: -20px;
                background-color: rgb(193, 76, 96);
                "
                >Subscribe</q-btn
              >
            </div>
          </div>
        </q-form>
      </div>

      <div class="col-12 col-md-2">
        <div
          class="footer-head text-bold text-h6"
          style="font-family: verdana; margin-top: -6px"
        >
          BUSINESS HOURS
        </div>
        <div style="font-family: verdana">
          Monday – Saturday<br />
          8 am – 8 pm
        </div>
        <div class="col-12 col-md-2" style="font-family: verdana">
          <br />Copyright © MANGOHOMZ TECHNOLOGIES PRIVATE LIMITED. All
          rights reserved. <br />
        </div>

        <div
          class="text-white footer-head text-bold text-h6"
          style="font-family: verdana;cursor: pointer; margin-top: 20px; margin-bottom: 30px"
          @click="mhLoginDialog = true"
        >
          MH LOGIN
        </div>
        <!-- <div class="row">
          <q-btn
            flat
            class="text-left"
            no-caps

            style="font-family: verdana"
            >Login</q-btn
          >
        </div> -->
      </div>
    </div>
    <!--Whatsapp Chat Dialog start-->
    <q-dialog v-model="whatsappChatDialog">
      <q-card style="min-width: 350px">
        <q-btn
          dark
          size="sm"
          class="justify-end"
          style="margin-left: auto"
          icon="close"
          color="primary"
          @click="closeWhatsappWithUs"
        >
          <q-tooltip>Close</q-tooltip>
        </q-btn>
        <div class="row col-12 q-mb-sm" style="padding-top: 3%">
          <!-- <a class="text-bold" href="#">GO BACK TO WEBSITE</a> -->
        </div>
        <q-toolbar class="bg-white text-primary rounded-borders">
          <q-toolbar-title class="text-subtitle1 text-weight-bold">
            <q-img src="~assets/web_site/Landing page top.jpg"></q-img>
          </q-toolbar-title>
        </q-toolbar>
        <div>
          <q-form ref="chatformvalidation">
            <div>
              <q-input
                style="
                  padding-left: 50px;
                  padding-right: 50px;
                  padding-bottom: 20px;
                "
                dense
                outlined
                v-model="chatForm.full_name"
                label="Enter Name *"
                hide-bottom-space
                label-color="black"
                :rules="[required('Name')]"
              ></q-input>
            </div>
            <div>
              <q-input
                style="
                  padding-left: 50px;
                  padding-right: 50px;
                  padding-bottom: 20px;
                  color: lightgrey;
                "
                dense
                outlined
                v-model="chatForm.phone_number"
                label="Enter Phone Number *"
                hide-bottom-space
                label-color="black"
                :rules="[required('Phone no'), phone()]"
                mask="##########"
              ></q-input>
            </div>
            <div
              style="
                padding-left: 125px;
                padding-right: 100px;
                padding-bottom: 50px;
              "
            >
              <q-btn
                no-caps
                style="width: 100px; height: 30px"
                color="secondary"
                class="text-bold"
                label="CHAT"
                @click="saveAndOpenChat"
              />
            </div>
          </q-form>
        </div>
      </q-card>
    </q-dialog>
    <!--Whatsapp chat Doalog end-->

    <!-- Admin Login Dialog -->
    <q-dialog v-model="adminLoginDialog">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6 text-bold text-primary">
            <q-icon
              ><q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img
            ></q-icon>
            Admin Login
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-form class="q-gutter-md" ref="adminForm">
            <q-input
              dense
              outlined
              v-model="adminLoginForm.username"
              autofocus
              label="Username"
              :rules="[(val) => (val && val.length > 0) || 'Please Username']"
            >
            </q-input>
            <q-input
              dense
              outlined
              v-model="adminLoginForm.password"
              label="Password"
              type="password"
              :rules="[
                (val) => (val && val.length > 0) || 'Please Enter Password',
              ]"
            >
            </q-input>
          </q-form>
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn
            push
            class="text-weight-bolder"
            label="Login"
            color="primary"
            @click="onSubmit"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="staffLoginDialog">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div
            class="footer-head text-bold text-left"
            style="font-family: verdana;cursor: pointer; margin-left: 10px; margin-top: -2px"
          >
            MH LOGIN
          </div>
          <div class="text-h6 text-bold text-primary">
            <q-icon
              ><q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img
            ></q-icon>
            Staff Login
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-form class="q-gutter-md" ref="staffForm">
            <q-input
              dense
              outlined
              v-model="staffLoginForm.username"
              autofocus
              label="Username"
              :rules="[(val) => (val && val.length > 0) || 'Please Username']"
            >
            </q-input>
            <q-input
              dense
              outlined
              v-model="staffLoginForm.password"
              label="Password"
              type="password"
              :rules="[
                (val) => (val && val.length > 0) || 'Please Enter Password',
              ]"
            >
            </q-input>
          </q-form>
          <!-- <small>
            Don't have an account yet ?
            <a
              @click="
                becomeStaffDialog = true;
                staffLoginDialog = false;
              "
              href="#"
              >Create Account</a
            >
          </small> -->
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn
            push
            class="text-weight-bolder"
            label="Login"
            color="primary"
            @click="onSubmitStaff"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="becomeStaffDialog">
      <q-card style="min-width: 350px">
        <q-toolbar class="bg-white text-primary rounded-borders">
          <q-icon
            ><q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img
          ></q-icon>
          <q-toolbar-title class="text-subtitle1 text-weight-bold">
            Become A Staff
          </q-toolbar-title>

          <q-btn
            flat
            dense
            color="primary"
            icon="close"
            @click="becomeStaffDialog = false"
          >
          </q-btn>
        </q-toolbar>

        <q-card-section class="q-pt-none">
          <q-form
            class="q-gutter-md"
            @submit="onStaffSignUpSubmit"
            @reset="onStaffSignUpReset"
            ref="staffRegisterForm"
          >
            <q-input
              dense
              outlined
              v-model="staffEntryForm.first_name"
              autofocus
              @keyup.enter="prompt = false"
              label="Full Name"
              :rules="[required('Name')]"
              hide-bottom-space
            >
              <template v-slot:prepend>
                <q-icon name="person" color="secondary" />
              </template>
            </q-input>
            <q-input
              dense
              outlined
              v-model="staffEntryForm.mobile_no"
              @keyup.enter="prompt = false"
              label="Mobile No"
              lazy-rules
              mask="##########"
              hide-bottom-space
              :rules="[required('Phone no'), phone()]"
              ><template v-slot:prepend>
                <q-icon name="phone" color="secondary" />
              </template>
            </q-input>
            <q-input
              dense
              outlined
              v-model="staffEntryForm.email_id"
              @keyup.enter="prompt = false"
              hide-bottom-space
              label="Email-ID"
              :rules="[required('Email'), email()]"
              ><template v-slot:prepend>
                <q-icon name="email" color="secondary" />
              </template>
            </q-input>
            <q-select
              dense
              outlined
              use-input
              hide-selected
              :options="cities"
              option-value="city_id"
              option-label="city"
              fill-input
              options-dense
              input-debounce="0"
              v-model="staffEntryForm.city"
              label="City *"
              label-color="black"
              :rules="[required('City')]"
              ><template v-slot:prepend>
                <q-icon name="mdi-map-marker" color="secondary" /> </template
            ></q-select>
            <q-input
              dense
              outlined
              v-model="staffEntryForm.nearest_hospital"
              @keyup.enter="prompt = false"
              label="Nearest Hospital"
              hide-bottom-space
              :rules="[required('Nearest Hospital')]"
              ><template v-slot:prepend>
                <q-icon name="mdi-hospital-marker" color="secondary" />
              </template>
            </q-input>
          </q-form>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn
            push
            class="text-weight-bolder"
            label="Register"
            color="secondary"
            @click="onStaffSignUpSubmit"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="cityLoginDialog">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6 text-bold text-primary">
            <q-icon
              ><q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img
            ></q-icon>
            City Login
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-form class="q-gutter-md" ref="cityForm">
            <q-input
              dense
              outlined
              v-model="cityLoginForm.username"
              autofocus
              label="Username"
              :rules="[(val) => (val && val.length > 0) || 'Please Username']"
            >
            </q-input>
            <q-input
              dense
              outlined
              v-model="cityLoginForm.password"
              label="Password"
              type="password"
              :rules="[
                (val) => (val && val.length > 0) || 'Please Enter Password',
              ]"
            >
            </q-input>
          </q-form>
          <!-- <small>
            Don't have an account yet ?
            <a
              @click="
                becomeCityDialog = true;
                cityLoginDialog = false;
              "
              href="#"
              >Create Account</a
            >
          </small> -->
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn
            push
            class="text-weight-bolder"
            label="Login"
            color="primary"
            @click="onSubmitCity"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!--Onkar Working All In one Login Dialog start-->
    <q-dialog v-model="mhLoginDialog">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6 text-bold text-primary">
            <q-icon
              ><q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img
            ></q-icon>
            MH LOGIN
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-form class="q-gutter-md" ref="mhForm">
            <q-input
              dense
              outlined
              v-model="mhLoginForm.username"
              autofocus
              label="Username"
              :rules="[(val) => (val && val.length > 0) || 'Please Username']"
            >
            </q-input>
            <q-input
              dense
              outlined
              v-model="mhLoginForm.password"
              label="Password"
              type="password"
              :rules="[
                (val) => (val && val.length > 0) || 'Please Enter Password',
              ]"
            >
            </q-input>
          </q-form>
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn
            push
            class="text-weight-bolder"
            label="Login"
            color="primary"
            @click="onSubmitmhLogin"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!--Onkar Working All In one Login Dialog End-->

    <q-dialog v-model="becomeCityDialog">
      <q-card style="min-width: 350px">
        <q-toolbar class="bg-white text-primary rounded-borders">
          <q-icon
            ><q-img src="~assets/logos/MHmini_logo_128x128.png"></q-img
          ></q-icon>
          <q-toolbar-title class="text-subtitle1 text-weight-bold">
            Become A City Manager
          </q-toolbar-title>

          <q-btn
            flat
            dense
            color="primary"
            icon="close"
            @click="becomeCityDialog = false"
          >
          </q-btn>
        </q-toolbar>

        <q-card-section class="q-pt-none">
          <q-form
            class="q-gutter-md"
            @submit="onCitySignUpSubmit"
            @reset="onCitySignUpReset"
            ref="cityRegisterForm"
          >
            <q-input
              dense
              outlined
              v-model="cityEntryForm.first_name"
              autofocus
              @keyup.enter="prompt = false"
              label="Full Name"
              :rules="[required('Name')]"
              hide-bottom-space
            >
              <template v-slot:prepend>
                <q-icon name="person" color="secondary" />
              </template>
            </q-input>
            <q-input
              dense
              outlined
              v-model="cityEntryForm.mobile_no"
              @keyup.enter="prompt = false"
              label="Mobile No"
              lazy-rules
              mask="##########"
              hide-bottom-space
              :rules="[required('Phone no'), phone()]"
              ><template v-slot:prepend>
                <q-icon name="phone" color="secondary" />
              </template>
            </q-input>
            <q-input
              dense
              outlined
              v-model="cityEntryForm.email_id"
              @keyup.enter="prompt = false"
              hide-bottom-space
              label="Email-ID"
              :rules="[required('Email'), email()]"
              ><template v-slot:prepend>
                <q-icon name="email" color="secondary" />
              </template>
            </q-input>
            <q-select
              dense
              outlined
              use-input
              hide-selected
              :options="cities"
              option-value="city_id"
              option-label="city"
              fill-input
              options-dense
              input-debounce="0"
              v-model="cityEntryForm.city"
              label="City *"
              label-color="black"
              :rules="[required('City')]"
              ><template v-slot:prepend>
                <q-icon name="mdi-map-marker" color="secondary" /> </template
            ></q-select>
            <q-input
              dense
              outlined
              v-model="cityEntryForm.nearest_hospital"
              @keyup.enter="prompt = false"
              label="Nearest Hospital"
              hide-bottom-space
              :rules="[required('Nearest Hospital')]"
              ><template v-slot:prepend>
                <q-icon name="mdi-hospital-marker" color="secondary" />
              </template>
            </q-input>
          </q-form>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn
            push
            class="text-weight-bolder"
            label="Register"
            color="secondary"
            @click="onCitySignUpSubmit"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog
      v-model="previewDialogBox"
      persistent
      class="my_card"
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="justify-center">
        <q-bar class="bg-primary">
          <div class="text-h6 text-white">{{ title1 }}</div>
          <q-space />

          <q-btn
            label="PRINT"
            class="positive text-white text-bold"
            @click="getData"
            color="primary"
          />

          <q-btn v-close-popup>
            <q-icon name="close" color="white"></q-icon>
            <q-tooltip>close</q-tooltip>
          </q-btn>
        </q-bar>

        <div class="q-px-xl">
          <q-card-section class="q-px-xl">
            <div
              class="row bg-white justify-center q-px-xl"
              style="
                font-family: verdana;
                border-right: 2px solid lightgrey;
                height: 1400px;
                box-sizing: border-box;
                border-left: 2px solid lightgrey;
                border-top: 2px solid lightgrey;
                border-bottom: 2px solid lightgrey;
              "
            >
              <div class="row-item-start" style="box-sizing: border-box">
                <q-card-section horizontal>
                  <q-card-section class="col-12 justify-center q-pa-md q-px-xl">
                    <p
                      class="text-center text-bold q-mt-sm q-mb-xs"
                      style="font-size: 20px; font-family: verdana"
                    >
                      <b>MangoHomz</b>
                    </p>
                    <p
                      class="text-center text-bold q-mt-sm q-mb-xs"
                      style="font-size: 25px; font-family: verdana"
                    >
                      <b>Accommodation Booking Invoice Details</b>
                    </p>

                    <p
                      class="text-h6 text-center text-bold q-mt-sm q-mb-xs"
                      padding
                      style="font-family: verdana"
                    >
                      <u><b>Invoice No</b></u>
                    </p>
                  </q-card-section>
                </q-card-section>
                <div
                  class="text-left text-bold"
                  style="
                    font-size: 12px;
                    font-family: verdana;
                    padding-top: 10px;
                  "
                >
                  Accommodation Booking Details
                </div>
                <div class="row q-mt-sm" style="border: 0.5px solid">
                  <div class="col-6">
                    <div class="text-subtitle" style="padding-left: 5px">
                      MH Booking Id :
                      <strong>{{ bookingsData.booking_order_id }}</strong>
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      Property Name :
                      <strong>{{ bookingsData.property_name }}</strong>
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      Near Hospital :
                      <strong>{{ bookingsData.near_hospital }}</strong>
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      Address : <strong>{{ bookingsData.address }}</strong>
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      State : <strong>{{ bookingsData.state }}</strong>
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      Pincode: <strong>{{ bookingsData.pin_code }}</strong>
                    </div>
                  </div>
                  <div class="col-6" style="border-left: 0.5px solid">
                    <div class="text-subtitle" style="padding-left: 5px">
                      Invoice Number :
                      <strong>{{ bookingsData.invoice_booking_id }}</strong>
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      Partner Name :
                      <strong>{{ bookingsData.partner_name }}</strong>
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      Sub Partner Name :
                      <strong>{{ bookingsData.sub_partner_name }}</strong>
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      Check In Date :
                      <strong>{{
                        moment(bookingsData.check_in).format("Do MMM YYYY")
                      }}</strong>
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      Check Out Date :<strong>{{
                        moment(bookingsData.check_out).format("Do MMM YYYY")
                      }}</strong>
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      No.of Days :
                      <strong>{{ bookingsData.no_of_days }} Days</strong>
                    </div>
                  </div>
                  <!-- <div class="col-12 text-bold" style="font-size: 12px;border-top:0.5px solid;padding-left: 5px;">
                    Note:- New TIME TABLE FROM 01-07-2020 CHECK TIME BEFORE BOARDING
                  </div> -->
                </div>
                <div
                  class="text-left text-bold"
                  style="
                    font-size: 12px;
                    font-family: verdana;
                    padding-top: 10px;
                  "
                >
                  Accommodation Price Details
                </div>
                <div class="row q-mt-sm" style="border: 0.5px solid">
                  <div class="col-1">
                    <div
                      class="text-center"
                      style="font-size: 12px; padding-left: 5px"
                    >
                      <b>Sno</b>
                    </div>
                    <div
                      class="text-center"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      1
                    </div>
                    <div
                      class="text-center"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      2
                    </div>
                    <div
                      class="text-center"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      3
                    </div>
                    <div
                      class="text-center"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      4
                    </div>
                    <div
                      class="text-center"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      5
                    </div>
                    <!-- <div class="text-subtitle" style="font-size: 12px;border-top:0.5px solid;padding-left: 5px">
                    6
                    </div> -->
                    <div
                      class="text-center"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      6
                    </div>
                    <div
                      class="text-center"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      7
                    </div>
                    <div
                      class="text-center"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      8
                    </div>
                  </div>
                  <div class="col-3" style="border-left: 0.5px solid">
                    <div
                      class="text-center"
                      style="font-size: 12px; padding-left: 5px"
                    >
                      <b>Description</b>
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      Room Price
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      Room Price per {{ bookingsData.no_of_days }} Days
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      Discount (%)
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      Discount Price
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      MH Offer
                    </div>
                    <!-- <div class="text-subtitle" style="font-size: 12px;border-top:0.5px solid;padding-left: 5px">
                    MH Offer Name
                    </div> -->
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      GST (%)
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      GST Amount
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      Total Amount
                    </div>
                  </div>
                  <div class="col-2" style="border-left: 0.5px solid">
                    <div
                      class="text-center"
                      style="font-size: 12px; padding-left: 5px"
                    >
                      <b>Amount</b>
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      {{ bookingsData.room_charges }}
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      {{ bookingsData.room_charges_per_days }}
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      {{ bookingsData.discount }}
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      {{ bookingsData.discount_price }}
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      {{ bookingsData.mh_offer }}
                    </div>
                    <!-- <div class="text-subtitle" style="font-size: 12px;border-top:0.5px solid;padding-left: 5px">
                    {{bookingsData.mh_offer_name == "" ? "No Offer" : bookingsData.mh_offer_name}}
                    </div> -->
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      {{ bookingsData.gst_percentage }}
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      {{ bookingsData.gst_amount }}
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      {{ bookingsData.total_amount }}
                    </div>
                  </div>
                  <div class="col-6" style="border-left: 0.5px solid">
                    <div
                      class="text-center"
                      style="font-size: 12px; padding-left: 5px"
                    >
                      <b>Amount (In Words)</b>
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      {{ bookingsData.room_charges_in_words }}
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      {{ bookingsData.room_charges_per_days_in_words }}
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      {{ bookingsData.discount_in_words }}
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      {{ bookingsData.discount_price_in_words }}
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      {{ bookingsData.mh_offer_in_words }}
                    </div>
                    <!-- <div class="text-subtitle" style="font-size: 12px;border-top:0.5px solid;padding-left: 5px">
                    {{bookingsData.mh_offer_name == "" ? "No Offer" : bookingsData.mh_offer_name}}
                    </div> -->
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      {{ bookingsData.gst_percentage_in_words }}
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      {{ bookingsData.gst_amount_in_words }}
                    </div>
                    <div
                      class="text-subtitle"
                      style="
                        font-size: 12px;
                        border-top: 0.5px solid;
                        padding-left: 5px;
                      "
                    >
                      {{ bookingsData.total_amount_in_words }}
                    </div>
                  </div>
                  <!-- <div class="col-12 text-bold" style="font-size: 12px;border-top:0.5px solid;padding-left: 5px;">
                    Note:- New TIME TABLE FROM 01-07-2020 CHECK TIME BEFORE BOARDING
                  </div> -->
                </div>

                <div
                  class="text-left text-bold"
                  style="
                    font-size: 12px;
                    font-family: verdana;
                    padding-top: 10px;
                  "
                >
                  Accommodation Guest Details
                </div>
                <div class="row q-mt-sm" style="border: 0.5px solid">
                  <div class="col-12">
                    <q-markup-table dense>
                      <thead>
                        <tr>
                          <th class="text-center"><strong>Sno</strong></th>
                          <th class="text-center">
                            <strong>MH Booking Id</strong>
                          </th>
                          <th class="text-center">
                            <strong>Guest Name</strong>
                          </th>
                          <th class="text-center">
                            <strong>Guest Type</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="item in bookingsData.guest_data"
                          :key="item.sno"
                        >
                          <td class="text-center">{{ item.sno }}</td>
                          <td class="text-center">{{ item.mh_booking_id }}</td>
                          <td class="text-center">{{ item.guest_name }}</td>
                          <td class="text-center">{{ item.guest_type }}</td>
                        </tr>
                      </tbody>
                    </q-markup-table>
                  </div>
                  <!-- <div class="col-12 text-bold" style="font-size: 12px;border-top:0.5px solid;padding-left: 5px;">
                    Note:- New TIME TABLE FROM 01-07-2020 CHECK TIME BEFORE BOARDING
                  </div> -->
                </div>
              </div>
            </div>
          </q-card-section>
        </div>
      </q-card>
    </q-dialog>

    <q-dialog
      v-model="printDialogBox"
      persistent
      class="my_card"
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="justify-center">
        <q-bar class="bg-primary">
          <div class="text-h6 text-white">{{ title1 }}</div>
          <q-space />

          <q-btn
            print="'#createPdf'"
            label="Print"
            v-print="printObj"
            rounded
            class="positive text-white text-bold"
            @click="printpart('createPdf')"
          />

          <q-btn v-close-popup>
            <q-icon name="close" color="white"></q-icon>
            <q-tooltip>close</q-tooltip>
          </q-btn>
        </q-bar>

        <div class="q-px-xl">
          <q-card-section class="q-px-xl">
            <div
              class="row bg-white justify-center q-px-xl"
              style="
                font-family: verdana;
                border-right: 2px solid lightgrey;
                height: 1400px;
                box-sizing: border-box;
                border-left: 2px solid lightgrey;
                border-top: 2px solid lightgrey;
                border-bottom: 2px solid lightgrey;
              "
            >
              <div id="createPdf" class="allotView">
                <div class="row-item-start" style="box-sizing: border-box">
                  <q-card-section horizontal>
                    <q-card-section
                      class="col-12 justify-center q-pa-md q-px-xl"
                    >
                      <p
                        class="text-center text-bold q-mt-sm q-mb-xs"
                        style="font-size: 20px; font-family: verdana"
                      >
                        <b>MangoHomz</b>
                      </p>
                      <p
                        class="text-center text-bold q-mt-sm q-mb-xs"
                        style="font-size: 25px; font-family: verdana"
                      >
                        <b>Accommodation Booking Invoice Details</b>
                      </p>

                      <p
                        class="text-h6 text-center text-bold q-mt-sm q-mb-xs"
                        padding
                        style="font-family: verdana"
                      >
                        <u><b>Invoice No</b></u>
                      </p>
                    </q-card-section>
                  </q-card-section>
                  <div
                    class="text-left text-bold"
                    style="
                      font-size: 12px;
                      font-family: verdana;
                      padding-top: 10px;
                    "
                  >
                    Accommodation Booking Details
                  </div>
                  <!-- <div class="row">
                    <div class="col-6">
                      <div
                        class="text-subtitle1 text-justify"
                        style="padding-left: 50px;border: 0.5px solid"
                      >
                        MH Booking Id :

                        <b>{{ bookingsData.booking_order_id }}</b>
                      </div>
                      <div class="text-subtitle1" style="padding-left: 520px;border: 0.5px solid">
                        Property Name :
                        <b>{{ bookingsData.property_name }}</b>
                      </div>
                    </div>
                    </div> -->

                  <div class="row" style="border: 0.5px solid">
                    <div class="col-6">
                      <div class="text-subtitle" style="padding-left: 5px">
                        MH Booking Id :
                        <strong>{{ bookingsData.booking_order_id }}</strong>
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        Property Name :
                        <strong>{{ bookingsData.property_name }}</strong>
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        Near Hospital :
                        <strong>{{ bookingsData.near_hospital }}</strong>
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        Address : <strong>{{ bookingsData.address }}</strong>
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        State : <strong>{{ bookingsData.state }}</strong>
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        Pincode: <strong>{{ bookingsData.pin_code }}</strong>
                      </div>
                    </div>
                    <div class="col-6" style="border-left: 0.5px solid">
                      <div class="text-subtitle" style="padding-left: 5px">
                        Invoice Number :
                        <strong>{{ bookingsData.invoice_booking_id }}</strong>
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        Partner Name :
                        <strong>{{ bookingsData.partner_name }}</strong>
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        Sub Partner Name :
                        <strong>{{ bookingsData.sub_partner_name }}</strong>
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        Check In Date :
                        <strong>{{
                          moment(bookingsData.check_in).format("Do MMM YYYY")
                        }}</strong>
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        Check Out Date :<strong>{{
                          moment(bookingsData.check_out).format("Do MMM YYYY")
                        }}</strong>
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        No.of Days :
                        <strong>{{ bookingsData.no_of_days }} Days</strong>
                      </div>
                    </div>
                    <!-- <div class="col-12 text-bold" style="font-size: 12px;border-top:0.5px solid;padding-left: 5px;">
                    Note:- New TIME TABLE FROM 01-07-2020 CHECK TIME BEFORE BOARDING
                  </div> -->
                  </div>
                  <div
                    class="text-left text-bold"
                    style="
                      font-size: 12px;
                      font-family: verdana;
                      padding-top: 10px;
                    "
                  >
                    Accommodation Price Details
                  </div>
                  <div class="row q-mt-sm" style="border: 0.5px solid">
                    <div class="col-1">
                      <div
                        class="text-center"
                        style="font-size: 12px; padding-left: 5px"
                      >
                        <b>Sno</b>
                      </div>
                      <div
                        class="text-center"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        1
                      </div>
                      <div
                        class="text-center"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        2
                      </div>
                      <div
                        class="text-center"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        3
                      </div>
                      <div
                        class="text-center"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        4
                      </div>
                      <div
                        class="text-center"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        5
                      </div>
                      <!-- <div class="text-subtitle" style="font-size: 12px;border-top:0.5px solid;padding-left: 5px">
                    6
                    </div> -->
                      <div
                        class="text-center"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        6
                      </div>
                      <div
                        class="text-center"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        7
                      </div>
                      <div
                        class="text-center"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        8
                      </div>
                    </div>
                    <div class="col-3" style="border-left: 0.5px solid">
                      <div
                        class="text-center"
                        style="font-size: 12px; padding-left: 5px"
                      >
                        <b>Description</b>
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        Room Price
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        Room Price per {{ bookingsData.no_of_days }} Days
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        Discount (%)
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        Discount Price
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        MH Offer
                      </div>
                      <!-- <div class="text-subtitle" style="font-size: 12px;border-top:0.5px solid;padding-left: 5px">
                    MH Offer Name
                    </div> -->
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        GST (%)
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        GST Amount
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        Total Amount
                      </div>
                    </div>
                    <div class="col-2" style="border-left: 0.5px solid">
                      <div
                        class="text-center"
                        style="font-size: 12px; padding-left: 5px"
                      >
                        <b>Amount</b>
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        {{ bookingsData.room_charges }}
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        {{ bookingsData.room_charges_per_days }}
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        {{ bookingsData.discount }}
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        {{ bookingsData.discount_price }}
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        {{ bookingsData.mh_offer }}
                      </div>
                      <!-- <div class="text-subtitle" style="font-size: 12px;border-top:0.5px solid;padding-left: 5px">
                    {{bookingsData.mh_offer_name == "" ? "No Offer" : bookingsData.mh_offer_name}}
                    </div> -->
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        {{ bookingsData.gst_percentage }}
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        {{ bookingsData.gst_amount }}
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        {{ bookingsData.total_amount }}
                      </div>
                    </div>
                    <div class="col-6" style="border-left: 0.5px solid">
                      <div
                        class="text-center"
                        style="font-size: 12px; padding-left: 5px"
                      >
                        <b>Amount (In Words)</b>
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        {{ bookingsData.room_charges_in_words }}
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        {{ bookingsData.room_charges_per_days_in_words }}
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        {{ bookingsData.discount_in_words }}
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        {{ bookingsData.discount_price_in_words }}
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        {{ bookingsData.mh_offer_in_words }}
                      </div>
                      <!-- <div class="text-subtitle" style="font-size: 12px;border-top:0.5px solid;padding-left: 5px">
                    {{bookingsData.mh_offer_name == "" ? "No Offer" : bookingsData.mh_offer_name}}
                    </div> -->
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        {{ bookingsData.gst_percentage_in_words }}
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        {{ bookingsData.gst_amount_in_words }}
                      </div>
                      <div
                        class="text-subtitle"
                        style="
                          font-size: 12px;
                          border-top: 0.5px solid;
                          padding-left: 5px;
                        "
                      >
                        {{ bookingsData.total_amount_in_words }}
                      </div>
                    </div>
                    <!-- <div class="col-12 text-bold" style="font-size: 12px;border-top:0.5px solid;padding-left: 5px;">
                    Note:- New TIME TABLE FROM 01-07-2020 CHECK TIME BEFORE BOARDING
                  </div> -->
                  </div>

                  <div
                    class="text-left text-bold"
                    style="
                      font-size: 12px;
                      font-family: verdana;
                      padding-top: 10px;
                    "
                  >
                    Accommodation Guest Details
                  </div>
                  <div class="row q-mt-sm" style="border: 0.5px solid">
                    <div class="col-12">
                      <q-markup-table dense>
                        <thead>
                          <tr>
                            <th class="text-center"><strong>Sno</strong></th>
                            <th class="text-center">
                              <strong>MH Booking Id</strong>
                            </th>
                            <th class="text-center">
                              <strong>Guest Name</strong>
                            </th>
                            <th class="text-center">
                              <strong>Guest Type</strong>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="item in bookingsData.guest_data"
                            :key="item.sno"
                          >
                            <td class="text-center">{{ item.sno }}</td>
                            <td class="text-center">
                              {{ item.mh_booking_id }}
                            </td>
                            <td class="text-center">{{ item.guest_name }}</td>
                            <td class="text-center">{{ item.guest_type }}</td>
                          </tr>
                        </tbody>
                      </q-markup-table>
                    </div>
                    <!-- <div class="col-12 text-bold" style="font-size: 12px;border-top:0.5px solid;padding-left: 5px;">
                    Note:- New TIME TABLE FROM 01-07-2020 CHECK TIME BEFORE BOARDING
                  </div> -->
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </div>
      </q-card>
    </q-dialog>

    <!--GrievanceDialog Start Form-->
    <q-dialog v-model="grievanceDialog" no-backdrop-dismiss>
      <q-card style="min-width: 350px">
        <q-card-section>
          <q-toolbar
            class="bg-primary text-white q-my-md shadow-2"
            style="top: 0; position: sticky; z-index: 100"
          >
            <div
              class="col-11 text-h6 text-center text-bold"
              style="
                font-family: verdana;
                font-size: 14px;
                text-decoration: underline;
              "
            >
              MANGOHOMZ (MH) GRIEVANCE REDRESSAL FORM
            </div>
            <q-space />
            <div>
              <q-btn
                dark
                padding="none"
                class="justify-end"
                icon="close"
                color="primary"
                @click="closeGrievanceDialog"
              >
                <q-tooltip>close</q-tooltip>
              </q-btn>
            </div>
          </q-toolbar>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form
            class="q-gutter-md"
            @submit="onGrievanceSubmit"
            @reset="onGrievanceReset"
            ref="grievanceForm"
          >
            <q-input
              dense
              outlined
              v-model="grievanceForm.name"
              autofocus
              @keyup.enter="prompt = false"
              label="Name"
              :rules="[required('Name')]"
              style="padding-bottom: 5px"
            >
              <template v-slot:prepend>
                <q-icon name="person" color="indigo-9" />
              </template>
            </q-input>
            <q-input
              dense
              outlined
              v-model="grievanceForm.mobile_no"
              @keyup.enter="prompt = false"
              label="Mobile No"
              lazy-rules
              mask="##########"
              style="padding-bottom: 5px"
              :rules="[required('Phone no'), phone()]"
            >
              <template v-slot:prepend>
                <q-icon name="phone" color="indigo-9" />
              </template>
            </q-input>
            <q-input
              dense
              outlined
              v-model="grievanceForm.email_id"
              @keyup.enter="prompt = false"
              label="Email-ID"
              style="padding-bottom: 5px"
              :rules="[required('Email'), email()]"
              ><template v-slot:prepend>
                <q-icon name="email" color="indigo-9" />
              </template>
            </q-input>
            <q-input
              dense
              outlined
              v-model="grievanceForm.mh_booking_id"
              @keyup.enter="prompt = false"
              label="MH Booking ID"
              style="padding-bottom: 5px"
              :rules="[required('MH Booking ID')]"
              ><template v-slot:prepend>
                <q-icon name="home" color="indigo-9" />
              </template>
            </q-input>
            <q-input
              dense
              outlined
              v-model="grievanceForm.comment"
              type="textarea"
              @keyup.enter="prompt = false"
              style="padding-bottom: 5px"
              label="Complain/Suggestion/Feedback"
              :rules="[required('Complain/Suggestion/Feedback')]"
              ><template v-slot:prepend>
                <q-icon name="mdi-comment-quote" color="indigo-9" />
              </template>
            </q-input>
          </q-form>
        </q-card-section>

        <q-card-actions align="right" class="gutter-q-pa-md q-gutter-sm">
          <q-btn
            dark
            class="justify-end"
            color="indigo-9"
            label="Submit"
            @click="onGrievanceSubmit"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!--GrievanceDialog End Form-->
  </q-card-section>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { api } from "boot/axios";
import VueHtmlToPaper from "vue-html-to-paper";
import moment from "moment";
import validations from "../helpers/validations";

directives: {
  print;
  VueHtmlToPaper;
}

function wrapCsvValue(val, formatFn) {
  let formatted = formatFn !== void 0 ? formatFn(val) : val;
  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);
  formatted = formatted.split('"').join('""');
  return `"${formatted}"`;
}
const adminForm = () => {
  return {
    role: "admin",
    username: "",
    password: "",
  };
};
export default {
  name: "footerTag",
  data() {
    return {
      adminLoginDialog: false,
      staffLoginDialog: false,
      showAddress: false,
      cityLoginDialog: false,
      mhLoginDialog: false,
      becomeStaffDialog: false,
      becomeCityDialog: false,
      // userAgreementDialog: false,
      // cancellationDialog: false,
      // privacyPolicyDialog: false,
      // refundDialog: false,
      callUsPopUp: false,

      grievanceDialog: false,

      ...validations,

      staffEntryForm: {
        first_name: "",
        last_name: "",
        mobile_no: "",
        email_id: "",
        city: "",
        nearest_hospital: "",
        partnerType: "",
      },
      grievanceForm: {
        name: "",
        mobile_no: "",
        mail_id: "",
        mh_booking_id: "",
        comment: "",
      },
      cityEntryForm: {
        first_name: "",
        last_name: "",
        mobile_no: "",
        email_id: "",
        city: "",
        nearest_hospital: "",
        partnerType: "",
      },

      moment: moment,
      maximizedToggle: true,
      mh_booking_id: "",
      title1: "Invoice Details",
      previewDialogBox: false,
      printDialogBox: false,
      printObj: {
        preview: true,
        previewTitle: "Booking Invoice Details",
        id: "createPdf",
      },
      bookingsData: {
        address: "",
        state: "",
        pin_code: "",
        property_name: "",
        property_type: "",
        partner_name: "",
        sub_partner_name: "",
        check_in: "",
        check_out: "",
        no_of_guest: "",
        booking_order_id: "",
        near_hospital: "",
        room_charges: "",
        room_charges_per_days: "",
        discount: "",
        discount_price: "",
        no_of_days: "",
        mh_offer: "",
        mh_offer_name: "",
        gst_percentage: "",
        gst_amount: "",
        total_amount: "",
        invoice_booking_id: "",
        room_charges_in_words: "",
        room_charges_per_days_in_words: "",
        discount_in_words: "",
        discount_price_in_words: "",
        no_of_days_in_words: "",
        mh_offer_in_words: "",
        mh_offer_name_in_words: "",
        gst_percentage_in_words: "",
        gst_amount_in_words: "",
        total_amount_in_words: "",
        fareDetailsArray: "",
        guest_data: "",
      },
      a: [
        "",
        "One ",
        "Two ",
        "Three ",
        "Four ",
        "Five ",
        "Six ",
        "Seven ",
        "Eight ",
        "Nine ",
        "Ten ",
        "Eleven ",
        "Twelve ",
        "Thirteen ",
        "Fourteen ",
        "Fifteen ",
        "Sixteen ",
        "Seventeen ",
        "Eighteen ",
        "Nineteen ",
      ],
      b: [
        "",
        "",
        "Twenty",
        "Thirty",
        "Fourty",
        "Fifty",
        "Sixty",
        "Seventy",
        "Eighty",
        "Ninety",
      ],

      adminLoginForm: {
        role: "admin",
        username: "",
        password: "",
      },
      emailForm: {
        subscriber_email_id: "",
      },

      staffLoginForm: {
        role: "staff",
        username: "",
        password: "",
      },
      cityLoginForm: {
        role: "city_manager",
        username: "",
        password: "",
      },
      mhLoginForm: {
        role: "",
        username: "",
        password: "",
      },
      whatsappChatDialog: false,
      chatForm: {
        full_name: "",
        phone_number: "",
      },
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.account.user,
      guest_columns: (state) => state.account.guest_columns,
      cities: (state) => state.master.cities,
    }),
    userDetails() {
      let user = JSON.parse(localStorage.getItem("user")) || [];

      return user;
    },

  },
  mounted() {
    this.$store.dispatch("master/loadCities");
  },

  methods: {
    ...mapActions("account", ["adminLogin"]),
    ...mapActions("account", ["staffLogin"]),
    ...mapActions("account", ["cityManagerLogin"]),
    ...mapActions("account", ["mhLogin"]),
    ...mapActions("account", ["staffRegistration"]),
    ...mapActions("account", ["cityRegistration"]),
    ...mapActions("account", ["grievanceRegistration"]),
    ...mapActions("adminDashboard", ["emailSubscribeSaving"]),

    //...mapActions("master",["loadCities"]),

    async printpart() {
      await this.$htmlToPaper("createPdf");
    },
    hideAddressOnKeyPress(event) {
      if (event.key === '*') {
        this.showAddress = false;
      }
    },
    getData() {
      this.printDialogBox = true;
    },
    CloseCallUsPopUp() {
      this.callUsPopUp = false;
    },
    openCallUsPopUp() {
      this.callUsPopUp = !this.callUsPopUp;
    },
    inWords(num) {
      if ((num = num.toString()).length > 9) return "overflow";
      let n = ("000000000" + num)
        .substr(-9)
        .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
      if (!n) return;
      var str = "";
      str +=
        n[1] != 0
          ? (this.a[Number(n[1])] || this.b[n[1][0]] + " " + this.a[n[1][1]]) +
            "Crore "
          : "";
      str +=
        n[2] != 0
          ? (this.a[Number(n[2])] || this.b[n[2][0]] + " " + this.a[n[2][1]]) +
            "Lakh "
          : "";
      str +=
        n[3] != 0
          ? (this.a[Number(n[3])] || this.b[n[3][0]] + " " + this.a[n[3][1]]) +
            "Thousand "
          : "";
      str +=
        n[4] != 0
          ? (this.a[Number(n[4])] || this.b[n[4][0]] + " " + this.a[n[4][1]]) +
            "Hundred "
          : "";
      str +=
        n[5] != 0
          ? (str != "" ? "and " : "") +
            (this.a[Number(n[5])] || this.b[n[5][0]] + " " + this.a[n[5][1]]) +
            "Only "
          : "";
      return str;
    },

    getCustomerMhBookingDetails(payload) {
      let details = {};
      api
        .get(`/booking/getCustomerMhBookingsData/${payload}`)
        .then((response) => {
          if (response.data.length > 0) {
            this.previewDialogBox = true;

            this.bookingsData.address =
              response.data[0].property_address[0].address;
            this.bookingsData.state =
              response.data[0].property_address[0].state;
            this.bookingsData.pin_code =
              response.data[0].property_address[0].pin_code;
            this.bookingsData.property_name = response.data[0].property_name;
            this.bookingsData.partner_name = response.data[0].partner_name;
            this.bookingsData.check_in = response.data[0].check_in;
            this.bookingsData.check_out = response.data[0].check_out;
            this.bookingsData.no_of_guest = response.data[0].guest_count;
            this.bookingsData.sub_partner_name =
              response.data[0].sub_partner_name;
            this.bookingsData.booking_order_id =
              response.data[0].booking_order_id;
            this.bookingsData.near_hospital =
              response.data[0].near_hospital_name;
            this.bookingsData.room_charges = response.data[0].room_price;
            this.bookingsData.room_charges_per_days =
              parseInt(response.data[0].room_price) *
              parseInt(response.data[0].no_of_days);
            this.bookingsData.discount = response.data[0].discount;
            this.bookingsData.discount_price = response.data[0].discount_price;
            this.bookingsData.no_of_days = response.data[0].no_of_days;
            this.bookingsData.mh_offer = response.data[0].mh_offer_price;
            this.bookingsData.mh_offer_name = response.data[0].mh_offer_name;
            this.bookingsData.gst_percentage = response.data[0].gst_percentage;
            this.bookingsData.gst_amount = response.data[0].gst_amount;
            this.bookingsData.total_amount = response.data[0].total_price;
            this.bookingsData.invoice_booking_id =
              response.data[0].invoice_number;
            this.bookingsData.room_charges_in_words = this.inWords(
              response.data[0].room_price
            );
            this.bookingsData.room_charges_per_days_in_words = this.inWords(
              parseInt(response.data[0].room_price) *
                parseInt(response.data[0].no_of_days)
            );
            this.bookingsData.discount_in_words = this.inWords(
              response.data[0].discount
            );
            this.bookingsData.discount_price_in_words = this.inWords(
              response.data[0].discount_price
            );
            this.bookingsData.no_of_days_in_words = this.inWords(
              response.data[0].no_of_days
            );
            this.bookingsData.mh_offer_in_words = this.inWords(
              response.data[0].mh_offer_price
            );
            this.bookingsData.gst_percentage_in_words = this.inWords(
              response.data[0].gst_percentage
            );
            this.bookingsData.gst_amount_in_words = this.inWords(
              response.data[0].gst_amount
            );
            this.bookingsData.total_amount_in_words = this.inWords(
              response.data[0].total_price
            );
            this.bookingsData.guest_data = response.data[0].guestData;
          } else {
            this.$q.notify({
              message: "MH Booking Id has not found",
              color: "negative",
              icon: "warning",
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.$q.notify({
            message: "MH Booking Id has not found",
            color: "negative",
            icon: "warning",
          });
        });
    },

    addFood() {
      this.$router.push("/bookingFood");
    },
    addTravel() {
      this.$router.push("/bookingTravel");
    },
    addMedical() {
      this.$router.push("/bookingEquipment");
    },

    onSubmit() {
      this.$refs.adminForm.validate().then((success) => {
        if (success) {
          this.adminLogin(this.adminLoginForm);
          setTimeout(() => {
            this.adminLoginForm = adminForm();
          }, 3000);
        }
      });
    },
    onSubmitStaff() {
      this.$refs.staffForm.validate().then((success) => {
        if (success) {
          this.staffLogin(this.staffLoginForm);
          setTimeout(() => {
            this.staffLoginForm = staffForm();
          }, 3000);
        }
      });
    },
    onSubmitCity() {
      this.$refs.cityForm.validate().then((success) => {
        if (success) {
          this.cityManagerLogin(this.cityLoginForm);
          setTimeout(() => {
            this.cityLoginForm = cityForm();
          }, 3000);
        }
      });
    },
    onSubmitmhLogin() {
      this.$refs.mhForm.validate().then((success) => {
        if (success) {
          this.mhLogin(this.mhLoginForm);
        }
      });
    },
    onStaffSignUpSubmit() {
      this.$refs.staffRegisterForm.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              this.staffRegistration(this.staffEntryForm);

              this.staffLoginDialog = false;

              this.$refs.staffRegisterForm.reset();
              this.becomeStaffDialog = false;
            })
            .onCancel(() => {
              this.becomeStaffDialog = false;
              this.staffLoginDialog = false;
            });
        }
      });
    },
    onStaffSignUpReset() {
      this.$refs.staffRegisterForm.reset();
    },

    onGrievanceSubmit() {
      this.$refs.grievanceForm.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit the grievance form ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              this.grievanceRegistration(this.grievanceForm);
              this.grievanceDialog = false;
              //this.$refs.grievanceForm.reset();
            })
            .onCancel(() => {
              this.grievanceDialog = true;
            });
        } else {
          this.$q.notify({
            message: `Please Enter Form Properly`,
            position: "top",
            type: "negative",
          });
        }
      });
    },
    onEmailSubscribe() {
      this.$refs.emailSubscribeForm.validate().then(async (success) => {
      if (success) {
        this.emailForm.subscriber_email_id = this.emailForm.subscriber_email_id;

      this.$store.dispatch(
        "adminDashboard/emailSubscribeSaving",
        this.emailForm
      );

      setTimeout(() => {
        this.emailForm.subscriber_email_id = "";
      }, 1000);

    }
    else{
      console.log("error while uploading data")
    }
  });
    },

    onCitySignUpSubmit() {
      this.$refs.cityRegisterForm.validate().then((success) => {
        if (success) {
          this.$q
            .dialog({
              title: "Confirm",
              message: "Do you want to Submit data ?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              this.cityRegistration(this.cityEntryForm);
              this.cityLoginDialog = false;

              this.$refs.cityRegisterForm.reset();
              this.becomeCityDialog = false;
            })
            .onCancel(() => {
              this.becomeCityDialog = false;
              this.cityLoginDialog = false;
            });
        }
      });
    },
    onCitySignUpReset() {
      this.$refs.cityRegisterForm.reset();
    },
    closePrivacyPolicyDialog() {
      this.privacyPolicyDialog = false;
    },
    closeCancellationDialog() {
      this.cancellationDialog = false;
    },
    closeGrievanceDialog() {
      this.grievanceDialog = false;
    },
    onGrievanceReset() {
      this.$refs.grievanceForm.reset();
    },
    closeRefundDialog() {
      this.refundDialog = false;
    },
    closeTermConditionDialog() {
      this.userAgreementDialog = false;
    },
    openGrievanceDialog() {
      this.grievanceDialog = true;
    },
    supportOpenInNewTab() {
      this.$router.push("/customersupport");
    },
    termAndConditionOpenInTab() {
      this.$router.push("/termandconditon");
    },
    PrivacyPolicyOpenInTab() {
      this.$router.push("/privacypolicy");
    },
    RefundPolicyOpenInTab() {
      this.$router.push("/refundpolicy");
    },
    CancellationPolicyOpenInTab() {
      this.$router.push("/cancellationpolicy");
    },

    saveAndOpenChat() {
      this.$refs.chatformvalidation.validate().then(async (success) => {
        if (success) {
          const savechat = {
            full_name: this.chatForm.full_name,
            phone_number: this.chatForm.phone_number,
          };
          try {
            await this.$store.dispatch("account/savechatus", savechat);
            this.chatForm.full_name = "";
            this.chatForm.phone_number = "";
            window.open(
              "https://api.whatsapp.com/send?phone=918929982655",
              "_blank"
            );
          } catch (error) {
            console.error("Error saving chat details:", error);
          }
        }
      });
    },

    openChatDialog() {
      this.whatsappChatDialog = true;
    },
    closeWhatsappWithUs() {
      this.whatsappChatDialog = false;
    },
  },
};
</script>
<style>
.btn-fixed-width {
  width: 150px;
}
</style>
