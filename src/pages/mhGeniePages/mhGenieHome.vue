<template>
  <q-page>
    <div class="AdvStrip">
      <p class="text-center">
        Get your <span class="HighlightText">medical tests</span> done with an additional<span class="HighlightText">
          20%</span>
        discount from Redclliffe<span class="Advlink">
          <a style="cursor: pointer;" @click="handleCustomEvent(`${redcliffpath}`)">Click here</a>
        </span>
        <span v-if="!isLoggedIn" class="LoginTxts">
          <span class="LoginTxt" @click="LoginForm = true">Login</span>
          <span class="LoginTxt" @click="SignUpForm = true">Signup</span>
        </span>
        <span v-else class="LoginTxts">
          <span class="LoginTxt" @click="logout">Logout</span>
        </span>
      </p>
    </div>
    <!-- <div class="AdvStrip">
      <p class="text-center">Get your <span class="HighlightText">medical tests</span> done with an additional<span
          class="HighlightText"> 20%</span> discount from Redclliffe<span class="Advlink">
            <a style="cursor: pointer;" @click="handleCustomEvent(`${redcliffpath}`)">Click here</a>
          </span><span class="LoginTxts"><span class="LoginTxt" @click="LoginForm = true">Login</span><span
            class="LoginTxt" @click="SignUpForm = true">Signup</span></span></p>
    </div> -->
    <div class="bannerImg">
      <q-img src="../../assets/images/Banner.webp" spinner-color="white" style="height: 400px; max-width: 100%" />
    </div>
    <div class="bannerImgMobile">
      <q-img src="../../assets/images/LandingPageMob.webp" spinner-color="white" style="height: 440px; max-width: 100%" />
    </div>
    <div class="PopSearch">
      <div class="flex flex-center">
        <div class="clickItems">
          <q-img src="../../assets/images/Heart.png" spinner-color="white" style="width:110px;height: 110px;"
            @click="selectProblem('Heart')" />
          <p style="text-align: center;font-weight: 600;">Heart</p>
        </div>
        <div class="clickItems">
          <q-img src="../../assets/images/Brain.png" spinner-color="white" style="width:110px;height: 110px;"
            @click="selectProblem('Brain')" />
          <p style="text-align: center;font-weight: 600;">Brain</p>
        </div>
        <div class="clickItems">
          <q-img src="../../assets/images/Kidney.png" spinner-color="white" class="ThirdBox"
            style="width:110px;height: 110px;" @click="selectProblem('Kidney')" />
          <p style="text-align: center;font-weight: 600;">Kidney</p>
        </div>
        <div class="clickItems">
          <q-img src="../../assets/images/Liver.png" style="width:110px;height: 110px;" spinner-color="white"
            @click="selectProblem('Liver')" />
          <p style="text-align: center;font-weight: 600;">Liver</p>
        </div>
        <div class="clickItems">
          <q-img src="../../assets/images/Respiratory.png" spinner-color="white" style="width:110px;height: 110px;"
            @click="selectProblem('Respiratory')" />
          <p style="text-align: center;font-weight: 600;">Respiratory</p>
        </div>
        <div class="clickItems">
          <q-img src="../../assets/images/MotherAndChild.png" spinner-color="white"
            @click="selectProblem('Mother & Child Care')" style="width:110px;height: 110px;margin-top:20px;" />
          <p style="text-align: center;font-weight: 600;">Mother & <br>
            Child Care</p>
        </div>
      </div>
      <div class="flex flex-center">
        <div class="clickItems">
          <q-img src="../../assets/images/H1.webp" spinner-color="white" style="width:110px;height: 110px;" />
          <p style="text-align: center;font-weight: 600;">Hospital 1</p>
        </div>
        <div class="clickItems">
          <q-img src="../../assets/images/H2.webp" spinner-color="white" style="width:110px;height: 110px;" />
          <p style="text-align: center;font-weight: 600;">Hospital 2</p>
        </div>
        <div class="clickItems">
          <q-img src="../../assets/images/H3.webp" spinner-color="white" class="ThirdBox"
            style="width:110px;height: 110px;" />
          <p style="text-align: center;font-weight: 600;">Hospital 3</p>
        </div>
        <div class="clickItems">
          <q-img src="../../assets/images/H4.webp" style="width:110px;height: 110px;" spinner-color="white" />
          <p style="text-align: center;font-weight: 600;">Hospital 4</p>
        </div>
        <div class="clickItems">
          <q-img src="../../assets/images/H5.webp" spinner-color="white" style="width:110px;height: 110px;" />
          <p style="text-align: center;font-weight: 600;">Hospital 5</p>
        </div>
        <div class="clickItems">
          <q-img src="../../assets/images/H6.webp" spinner-color="white" style="width:110px;height: 110px;" />
          <p style="text-align: center;font-weight: 600;">Hospital 6</p>
        </div>
      </div>
      <div class="chatBotLogo">
        <q-img src="../../assets/images/bot-1.webp" style="width:80px;height: 90px;" />
      </div>
    </div>
    <q-dialog v-model="LoginForm" class="dialog" persistent>
      <q-card>
        <div class="login">
          <q-form ref="mhgenieForm">
            <q-img src="../../assets/images/mobileBannerUp.png" style="width: 520px;height:89px;"
              class="MobileBannerUp" />
            <div class="arrow-left" @click="LoginForm = false">
              <q-img src="../../assets/images/arrow2.png" style="width: 20px;height: 20px;margin-left:10px;" />
            </div>
            <div class="loginForm">
              <div class="titleLogin">
                <p class="text-center">Login</p>
              </div>
              <div class="inputs">
                <div class="input">
                  <q-input hide-bottom-space v-model="mhgenieLoginForm.username" class="BgColorInp" outlined
                    color="#204957" label-color="white" dense label="Email/Phone Number/userName"
                    style="width:270px;margin-top: 20px;color:white;border-radius: 5px;"
                    :rules="[(val) => (val && val.length > 0) || 'Please Enter Username']" />
                </div>
                <div class="input">
                  <q-input hide-bottom-space v-model="mhgenieLoginForm.password" class="BgColorInp" outlined
                    color="#204957" label-color="white" dense label="Password"
                    style="width:270px;margin-top: 5px;border-radius: 5px;" type="password" autocomplete="new-password"
                    :rules="[(val) => (val && val.length > 0) || 'Please Enter Password']" />
                </div>
                <div class="flex flex-center q-mt-sm">
                  <div class="checkbox">
                    <q-checkbox v-model="rememberMe" size="xs" background-color="#204957" val="xs" label="Remember me" />
                  </div>
                  <div class="forgetPassword q-mt-md q-ml-md cursor-pointer" @click="OpenForgetPassword">
                    <p>Forget password ?</p>
                  </div>
                </div>
                <div class="flex flex-center">
                  <div class="loginBtn" @click="onSubmitLogin">
                    <P>Login</P>
                  </div>
                </div>
                <div class="flex flex-center">
                  <div class="dntAn">
                    <p>Dont have an account ?</p>
                    <p style="margin-top:-10px;color: #123845;font-weight: 600;" class="text-center cursor-pointer"
                      @click="OpenSignupPage">Signup</p>
                  </div>
                </div>
              </div>
            </div>
            <q-img src="../../assets/images/mobileBannerDown.png" style="width: 520px;height:89px;"
              class="MobileBannerDown" />
          </q-form>
        </div>
      </q-card>
    </q-dialog>
    <!--Login form for problems Start-->
    <q-dialog v-model="LoginFormforproblem" class="dialog" persistent>
      <q-card>
        <div class="login">
          <q-form ref="mhgenieForm">
            <q-img src="../../assets/images/mobileBannerUp.png" style="width: 520px;height:89px;"
              class="MobileBannerUp" />
            <div class="arrow-left" @click="LoginFormforproblem = false">
              <q-img src="../../assets/images/arrow2.png" style="width: 20px;height: 20px;margin-left:10px;" />
            </div>
            <div class="loginForm">
              <div class="titleLogin">
                <p class="text-center">Login</p>
              </div>
              <div class="inputs">
                <div class="input">
                  <q-input hide-bottom-space v-model="mhgenieLoginForm.username" class="BgColorInp" outlined
                    color="#204957" label-color="white" dense label="Email/Phone Number/userName"
                    style="width:270px;margin-top: 20px;color:white;border-radius: 5px;"
                    :rules="[(val) => (val && val.length > 0) || 'Please Enter Username']" />
                </div>
                <div class="input">
                  <q-input hide-bottom-space v-model="mhgenieLoginForm.password" class="BgColorInp" outlined
                    color="#204957" label-color="white" dense label="Password"
                    style="width:270px;margin-top: 5px;border-radius: 5px;" type="password" autocomplete="new-password"
                    :rules="[(val) => (val && val.length > 0) || 'Please Enter Password']" />
                </div>
                <div class="flex flex-center q-mt-sm">
                  <div class="checkbox">
                    <q-checkbox v-model="rememberMe" size="xs" background-color="#204957" val="xs" label="Remember me" />
                  </div>
                  <div class="forgetPassword q-mt-md q-ml-md cursor-pointer" @click="OpenForgetPassword">
                    <p>Forget password ?</p>
                  </div>
                </div>
                <div class="flex flex-center">
                  <div class="loginBtn" @click="onSubmitLoginforproblem">
                    <P>Login</P>
                  </div>
                </div>
                <div class="flex flex-center">
                  <div class="dntAn">
                    <p>Dont have an account ?</p>
                    <p style="margin-top:-10px;color: #123845;font-weight: 600;" class="text-center cursor-pointer"
                      @click="OpenSignupPage">Signup</p>
                  </div>
                </div>
              </div>
            </div>
            <q-img src="../../assets/images/mobileBannerDown.png" style="width: 520px;height:89px;"
              class="MobileBannerDown" />
          </q-form>
        </div>
      </q-card>
    </q-dialog>
    <!--Login form for problems End-->
    <q-dialog v-model="SignUpForm" class="dialog" persistent>
      <q-card>
        <div class="Signup">
          <q-form ref="signUpForm">
            <q-img src="../../assets/images/mobileBannerUp.png" style="width: 550px;height:89px;"
              class="MobileBannerUp" />
            <div class="arrow-left" @click="SignUpForm = false">
              <q-img src="../../assets/images/arrow2.png" style="width: 20px;height: 20px;margin-left:10px;" />
            </div>
            <div class="SignupForm">
              <div class="titleLogin">
                <p class="text-center">Signup</p>
              </div>
              <div class="inputs">
                <div class="input">
                  <q-input hide-bottom-space v-model="signupformdata.email_id" class="BgColorInp" outlined color="#204957"
                    label-color="white" dense label="Email"
                    style="width:270px;margin-top: 20px;color:white;border-radius: 5px;"
                    :rules="[required('Email'), email()]" />
                </div>
                <div class="input">
                  <q-input hide-bottom-space v-model="signupformdata.phone_number" class="BgColorInp" outlined
                    color="#204957" label-color="white" dense label="Phone Number"
                    style="width:270px;margin-top: 5px;border-radius: 5px;" mask="##########"
                    :rules="[required('Mobile Number'), phone()]" />
                </div>
                <div class="input">
                  <q-input hide-bottom-space v-model="signupformdata.username" class="BgColorInp" outlined color="#204957"
                    label-color="white" dense label="Username" style="width:270px;margin-top: 5px;border-radius: 5px;"
                    :rules="[required('Username')]" />
                </div>
                <div class="input">
                  <q-input hide-bottom-space v-model="signupformdata.password" class="BgColorInp" outlined color="#204957"
                    label-color="white" dense label="Password" style="width:270px;margin-top: 5px;border-radius: 5px;"
                    :rules="[required('Password'), passwordRule(8)]" />
                </div>
                <div class="input">
                  <q-input hide-bottom-space v-model="signupformdata.confirm_password" class="BgColorInp" outlined
                    color="#204957" label-color="white" dense label="Confirm Password"
                    style="width:270px;margin-top: 5px;border-radius: 5px;"
                    :rules="[required('Confirm Password'), passwordMatch(signupformdata.password, 'Passwords do not match')]" />
                </div>
                <div class="flex flex-center q-mt-lg">
                  <div class="loginBtn" @click="onSubmitSignup">
                    <P>Signup</P>
                  </div>
                </div>
              </div>
            </div>
            <q-img src="../../assets/images/mobileBannerDown.png" style="width: 550px;height:89px;"
              class="MobileBannerDown" />
          </q-form>
        </div>
      </q-card>
    </q-dialog>
    <q-dialog v-model="ForgetPasswordForm" class="dialog" persistent>
      <q-card>
        <div class="ForgetPassword">
          <q-form>
            <q-img src="../../assets/images/mobileBannerUp.png" style="width: 550px;height:89px;"
              class="MobileBannerUp" />
            <div class="arrow-left" @click="ForgetPasswordForm = false">
              <q-img src="../../assets/images/arrow2.png" style="width: 20px;height: 20px;margin-left:10px;" />
            </div>
            <div class="ForgetPasswordForm">
              <div class="flex flex-center">
                <q-img src="../../assets/images/lock.png" style="width: 100px;height: 127px;" />
              </div>
              <div class="titleForGetpassword">
                <p class="text-center">Forget Password ?</p>
              </div>
              <div class="flex flex-center">
                <p style="margin-top:0px;font-weight: 600;margin-bottom: 0px;">Enter your registered email id or phone<br>
                  number to reset the password</p>
              </div>
              <div class="inputs">
                <div class="input" style="margin-top: 0px !important;">
                  <q-input class="BgColorInp" outlined color="#204957" label-color="white" dense label="Email"
                    style="width:270px;margin-top: 20px;color:white;border-radius: 5px;" />
                </div>
                <div class="flex flex-center q-mt-md">
                  <div class="loginBtn">
                    <P style="margin-bottom: 0px;">Submit</P>
                  </div>
                </div>
              </div>
            </div>
            <q-img src="../../assets/images/mobileBannerDown.png" style="width: 550px;height:89px;"
              class="MobileBannerDown" />
          </q-form>
        </div>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
import { mapActions } from 'vuex';
import validations from "../../helpers/validations";
import filepaths from "../../helpers/filepath";


export default {
  name: 'AdvertisementStrip',
  data() {
    return {
      redcliffpath: filepaths.redcliffurl,
      ...validations,
      rememberMe: false,
      LoginForm: false,
      LoginFormforproblem: false,
      SignUpForm: false,
      ForgetPasswordForm: false,
      signupformdata: {
        email_id: "",
        phone_number: "",
        username: "",
        password: "",
        confirm_password: "",
      },
      mhgenieLoginForm: {
        username: "",
        password: "",
      },
      selectedProblem: '',
      isLoggedIn: false,
    };
  },
  mounted() {
    // const savedUsername = localStorage.getItem('username');
    // const savedPassword = localStorage.getItem('password');
    // this.mhgenieLoginForm.username = savedUsername;
    // this.mhgenieLoginForm.password = savedPassword;
  },
  methods: {
    ...mapActions("genie", ["userSignupDetails"]),
    ...mapActions("genie", ["mhgenieLogin"]),

    handleCustomEvent(url) {
      window.open(url);
    },
    resetForm() {
      this.signupformdata.email_id = '';
      this.signupformdata.phone_number = '';
      this.signupformdata.username = '';
      this.signupformdata.password = '';
      this.signupformdata.confirm_password = '';
    },
    logout() {
      this.$router.push('/mhGenieHome');
      this.$q.notify({
        message: "Logout successful",
        type: "positive",
        position: "top"
      });
      setTimeout(() => {
        this.$router.go();
      });
    },
    resetlogin() {
      this.mhgenieLoginForm.username = '';
      this.mhgenieLoginForm.password = '';
    },
    openLoginPage() {
      this.LoginForm = true;
      this.SignUpForm = false;
      this.selectedProblem = '';
    },
    OpenSignupPage() {
      this.LoginForm = false;
      this.SignUpForm = true;
    },
    OpenForgetPassword() {
      this.LoginForm = false;
      this.ForgetPasswordForm = true;
    },
    onSubmitSignup() {
      this.$refs.signUpForm.validate().then(success => {
        if (success) {
          // console.log(this.signupformdata);
          this.$q
            .dialog({
              title: 'Confirm',
              message: 'Do you want to Signup?',
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              this.userSignupDetails(this.signupformdata)
                .then(response => {
                  if (response.message1 === "Signup successful") {
                    setTimeout(() => {
                      this.$q.notify({
                        message: "Signup Successful. Check Your Email For Login Credentials.",
                        type: "positive",
                        position: "top"
                      });
                      setTimeout(() => {
                        this.openLoginPage();
                        this.resetForm();
                      }, 1500);
                    });
                  } else {
                    this.$q.notify({
                      message: "Mobile number already registered",
                      type: "negative",
                      position: "top"
                    });
                  }
                })
                .catch(error => {
                  console.log(error);
                  this.$q.notify({
                    message: "Failed to save user Signup data",
                    type: "negative",
                  });
                });
            })
            .onCancel(() => {
              this.OpenSignupPage();
              this.resetForm();
            });
        }
      });
    },

    passwordMatch(password, errorMessage) {
      return v => v === password || errorMessage;
    },
    passwordRule(minLength) {
      return (val) => {
        if (val && val.length < minLength) {
          return `Password should be at least ${minLength} characters long`;
        }
        const disallowedSymbols = /[\(\)\{\}\[\]\|`¬¦!"£$%^&*<>:;#~_\-+=, ]/;
        if (disallowedSymbols.test(val)) {
          return 'Password cannot contain spaces or certain symbols';
        }
        return true;
      };
    },
    selectProblem() {
      if (this.isLoggedIn) {
        this.$router.push({
          path: '/mhGenieUserDashboard',
        });
      } else {
        if (!this.LoginFormforproblem) {
          this.openLoginPage();
        }

      }
    },
    onSubmitLogin() {
      this.resetForm();
      this.$refs.mhgenieForm.validate().then((success) => {
        if (success) {
          this.mhgenieLogin(this.mhgenieLoginForm)
            .then(response => {
              if (response && response.status) {
                setTimeout(() => {
                  this.isLoggedIn = true;
                  this.LoginForm = false;
                  if (this.selectedProblem) {
                    this.$router.push({
                      path: '/mhGenieUserDashboard',
                    });
                  } else if (this.$route.path !== '/mhGenieHome') {
                    this.$router.push('/mhGenieHome');
                  }
                  this.resetlogin();
                }, 1000);
              } else {
                this.openLoginPage();
              }
            })
            .catch(error => {
              console.error("Error during login:", error);
            });
        }
      });
    },

    // onSubmitLogin() {
    //   this.resetForm();
    //   this.$refs.mhgenieForm.validate().then((success) => {
    //     if (success) {
    //       this.mhgenieLogin(this.mhgenieLoginForm)
    //         .then(response => {
    //           if (response && response.status) {
    //             //   if (this.rememberMe) {
    //             //   localStorage.setItem('username', this.mhgenieLoginForm.username);
    //             //   localStorage.setItem('password', this.mhgenieLoginForm.password);
    //             // }
    //             setTimeout(() => {
    //               this.isLoggedIn = true;
    //               this.LoginForm = false;
    //               this.$router.push({
    //                 path: '/',
    //               });
    //               this.resetlogin();
    //             }, 1000);
    //           } else {
    //             this.openLoginPage();
    //           }
    //         })
    //         .catch(error => {
    //           console.error("Error during login:", error);
    //         });
    //     }
    //   });
    // },
    onSubmitLoginforproblem() {
      this.resetForm();
      this.$refs.mhgenieForm.validate().then((success) => {
        if (success) {
          this.mhgenieLogin(this.mhgenieLoginForm)
            .then(response => {
              if (response && response.status) {
                //   if (this.rememberMe) {
                //   localStorage.setItem('username', this.mhgenieLoginForm.username);
                //   localStorage.setItem('password', this.mhgenieLoginForm.password);
                // }
                setTimeout(() => {
                  this.isLoggedIn = true;
                  this.LoginFormforproblem = false;
                  this.$router.push({
                    path: '/mhGenieUserDashboard',
                  });
                  this.resetlogin();
                }, 1000);
              } else {
                this.openLoginPage();
              }
            })
            .catch(error => {
              console.error("Error during login:", error);
            });
        }
      });
    },

  },
};
</script>
<style>
.AdvStrip {
  display: flex;
  justify-content: space-around;
  padding: 16px;
  background-color: #3B3B3B;
  color: white;
  font-size: 20px;
}

.AdvStrip p {
  margin-bottom: 0px;
}

.HighlightText {
  font-size: 24px;
  color: #F9EE54;
  font-weight: 600;
}

.Advlink a {
  margin-left: 20px;
  text-decoration: none;
  color: #6dd8f0;
  font-size: 18px;
}

.PopSearch {
  background-color: #EEEFEE;
  padding-top: 26px;
  padding-bottom: 26px;
}

.title-popsearch {
  font-size: 32px;
  padding-top: 2%;
  padding-bottom: 0%;
}

.clickItems {
  margin-left: 20px;
  cursor: pointer;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
}

.clickItems:hover {
  -ms-transform: scale(1.5);
  /* IE 9 */
  -webkit-transform: scale(1.5);
  /* Safari 3-8 */
  transform: scale(1.5);
  margin-right: 10px;
  margin-left: 10px;
}

.chatBotLogo {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}

.loginForm {
  width: 520px;
}

.login {
  width: 520px;
  height: 601px;
  background-color: white;
}

.Signup {
  width: 550px;
  height: 683px;
  background-color: white;
}

.ForgetPassword {
  width: 550px;
  height: 525px;
  background-color: white;
}

.titleLogin p {
  font-size: 38px;
  padding-top: 6px;
  color: #295360;
  font-weight: 500;
}

.input {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.BgColorInp {
  background-color: #204957;
}

.BgColorInp input {
  color: white;
  font-weight: 600;
}

.loginBtn {
  width: 270px;
  text-align: center;
  cursor: pointer;
}

.loginBtn p {
  padding: 10px;
  background-color: #21df7e;
  border-radius: 5px;
  font-weight: 600;
  color: #007f3b;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.dntAn {
  font-size: 18px;
  color: black;
}

.bannerImgMobile {
  display: none;
}

.titleForGetpassword {
  font-size: 22px;
  font-weight: 600;
  margin-top: 7px;
}

.titleForGetpassword p {
  margin-bottom: 0px;
}

@media (max-width:767px) {
  .bannerImg {
    display: none;
  }

  .bannerImgMobile {
    display: block;
  }

  .AdvStrip {
    font-size: 16px;
  }

  .HighlightText {
    font-size: 20px;
    color: #F9EE54;
    font-weight: 600;
  }

  .login {
    width: 364px;
    height: 601px;
    background-color: white;
  }

  .Signup {
    width: 364px;
    height: 684px;
    background-color: white;
  }

  .ForgetPassword {
    width: 364px;
    height: 525px;
    background-color: white;
  }

  .MobileBannerUp {
    width: 365px !important;
  }

  .MobileBannerDown {
    width: 365px !important;
  }

  .loginForm {
    width: auto;
  }

  .LoginTxts {
    display: flex;
    justify-content: center;
    margin-left: 0px !important;
  }
}

.LoginTxt {
  font-size: 16px;
  margin: 4px;
  padding: 10px;
  background-color: #225a96;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

.LoginTxts {
  margin-left: 50px;
}
</style>
