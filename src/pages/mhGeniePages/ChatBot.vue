<template>
  <q-page class="ChatbotPage">
    <div class="container-chatbot">
      <div class="flex">
        <div class="left-container">
          <div class="header-chatbot">
            <div class="imgChatbot flex">
              <q-img src="../../assets/images/bot-1.webp" style="width:60px;height: 70px;" />
              <p>CHATBOT</p>
            </div>
          </div>
          <div class="Problems flex">
            <div class="icon">
              <q-img src="../../assets/images/User.png" style="width:60px;height: 60px;" />
            </div>
            <div class="problemInfo">
              <span class="title-p">Heart Problem</span><br>
              <span class="subtitle-p">I am suffering with heart problem</span>
            </div>
            <div class="arrowSymbol"> <q-img src="../../assets/images/arrow.png"
                style="width:40px;height: 40px;margin-left: 54px;margin-top: 10px;" /> </div>
          </div>
          <div class="Problems flex">
            <div class="icon">
              <q-img src="../../assets/images/User.png" style="width:60px;height: 60px;" />
            </div>
            <div class="problemInfo">
              <span class="title-p">Heart Problem</span><br>
              <span class="subtitle-p">I am suffering with heart problem</span>
            </div>
            <div class="arrowSymbol"> <q-img src="../../assets/images/arrow.png"
                style="width:40px;height: 40px;margin-left: 54px;margin-top: 10px;" /> </div>
          </div>
          <div class="Problems flex">
            <div class="icon">
              <q-img src="../../assets/images/User.png" style="width:60px;height: 60px;" />
            </div>
            <div class="problemInfo">
              <span class="title-p">Heart Problem</span><br>
              <span class="subtitle-p">I am suffering with heart problem</span>
            </div>
            <div class="arrowSymbol"> <q-img src="../../assets/images/arrow.png"
                style="width:40px;height: 40px;margin-left: 54px;margin-top: 10px;" /> </div>
          </div>
          <div class="Problems flex">
            <div class="icon">
              <q-img src="../../assets/images/User.png" style="width:60px;height: 60px;" />
            </div>
            <div class="problemInfo">
              <span class="title-p">Heart Problem</span><br>
              <span class="subtitle-p">I am suffering with heart problem</span>
            </div>
            <div class="arrowSymbol"> <q-img src="../../assets/images/arrow.png"
                style="width:40px;height: 40px;margin-left: 54px;margin-top: 10px;" /> </div>
          </div>
          <div class="logout" @click="Back">
            <p>BACK</p>
          </div>
        </div>
        <div class="middle-container"></div>
        <div class="right-container">
          <div class="chatting-area">
            <div class="UserMessage flex">
              <div class="UserMessage-left-container">
                <span class="username">User</span><br>
                <span class="problemDesc">I want to know the best about the best hospital in delhi for heart
                  surgery?</span><br>
                <span class="datetime">9:32 Mon 29 May 2023</span>
              </div>
              <div class="UserMessage-right-container">
                <div class="icon">
                  <q-img src="../../assets/images/User.png" style="width:60px;height: 60px;" />
                </div>
              </div>
            </div>
            <div class="BotMessage flex">
              <div class="BotMessage-left-container">
                <span class="username">ChatBot</span><br>
                <span class="problemDesc">Of course! I'm here to help. Please wait for the response from the health care
                  provider</span><br>
                <span class="datetime">9:32 Mon 29 May 2023</span>
              </div>
              <div class="BotMessage-right-container">
                <div class="icon">
                  <q-img src="../../assets/images/bot-1.webp" style="width:60px;height: 70px;" />
                </div>
              </div>
            </div>
            <div class="HospitalMessage flex">
              <div class="HospitalMessage-left-container">
                <span class="username">Hospital X</span><br>
                <span class="problemDesc">I want to know the best about the best hospital in delhi for heart surgery?
                </span><br>
                <span class="datetime">9:34 Mon 29 May 2023</span>
              </div>
              <div class="HospitalMessage-middle-container">
                <p>Reply</p>
              </div>
              <div class="HospitalMessage-right-container">
                <div class="icon">
                  <q-img src="../../assets/images/bot-1.webp" style="width:60px;height: 70px;" />
                </div>
              </div>
            </div>
            <div class="HospitalMessage flex">
              <div class="HospitalMessage-left-container">
                <span class="username">Hospital Y</span><br>
                <span class="problemDesc">I want to know the best about the best hospital in delhi for heart surgery?
                </span><br>
                <span class="datetime">9:34 Mon 29 May 2023</span>
              </div>
              <div class="HospitalMessage-middle-container">
                <p>Reply</p>
              </div>
              <div class="HospitalMessage-right-container">
                <div class="icon">
                  <q-img src="../../assets/images/bot-1.webp" style="width:60px;height: 70px;" />
                </div>
              </div>
            </div>
            <div class="HospitalMessage flex">
              <div class="HospitalMessage-left-container">
                <span class="username">Hospital Z</span><br>
                <span class="problemDesc">I want to know the best about the best hospital in delhi for heart surgery?
                </span><br>
                <span class="datetime">9:34 Mon 29 May 2023</span>
              </div>
              <div class="HospitalMessage-middle-container">
                <p>Reply</p>
              </div>
              <div class="HospitalMessage-right-container">
                <div class="icon">
                  <q-img src="../../assets/images/bot-1.webp" style="width:60px;height: 70px;" />
                </div>
              </div>
            </div>
            <div class="MessageAre">
              <div class="mre-cont flex flex-start">
                <div class="imgs">
                  <q-img src="../../assets/images/mic.png"
                    style="width:30px;height: 30px;color: green;padding:10px;margin: 4px;" />
                  <q-img src="../../assets/images/attach.png" style="width:30px;height: 30px;padding:10px;margin: 4px;" />
                  <q-img src="../../assets/images/photo-camera-interface-symbol-for-button.png"
                    style="width:30px;height: 30px;padding:10px;margin: 4px;margin-right: 10px;" />
                </div>
                <div class="inputAer">
                  <q-input style="width:800px;border-radius: 5px;background-color: white;" dense
                    label="Type your message here" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    Back() {
      this.$router.push('/mhGenieUserDashboard');
      // this.$q.notify({
      //   message: "Logout successful",
      //   type: "positive",
      //   position: "top"
      // });
    },
  },
}
</script>
<style>
.left-container {
  width: 28%;
  height: 100%;
}

.right-container {
  width: 71%;
  background-color: white;
  height: 720px;
  margin-top: 12px;
  margin-left: 3px;
}

.header-chatbot,
.Problems,
.logout {
  margin: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.imgChatbot {
  padding: 10px;
}

.imgChatbot p {
  margin-top: 20px;
  font-weight: 600;
  margin-left: 10px;
  color: #3bc1fe;
}

.Problems {
  padding: 10px;
}

.problemInfo {
  margin-left: 20px;
  margin-top: 6px;
}

.title-p {
  font-size: 16px;
  font-weight: 600;
  color: #3bc1fe;
}

.subtitle-p {
  font-size: 12px;
}

.logout p {
  padding: 14px;
  text-align: center;
  position: absolute;
  bottom: 0px;
  width: 25%;
  background-color: white;
  border-radius: 10px;
  font-weight: 600;
  color: #3bc1fe;
  cursor: pointer;

}

.ChatbotPage {
  background-color: #e9f7fe;

}

.UserMessage-left-container,
.BotMessage-left-container {
  width: 90%;
}

.HospitalMessage-left-container {
  width: 80%;
}

.HospitalMessage-middle-container {
  width: 10%;
  cursor: pointer;
}

.HospitalMessage-right-container {
  width: 10%;
}

.HospitalMessage-middle-container p {
  margin-top: 24px;
  font-weight: 600;
  font-size: 16px;
}

.UserMessage-right-container,
.BotMessage-right-container {
  width: 10%;
}

.UserMessage,
.BotMessage,
.HospitalMessage {
  padding: 10px;
  background-color: #d4e1e5;
  margin: 10px;
  border-radius: 5px;
}

.BotMessage {
  background-color: #8dbbff;
}

.HospitalMessage {
  background-color: #f2aeb4;
}

.username {
  font-size: 18px;
  font-weight: 600;
}

.problemDesc {
  font-size: 16px;
}

.datetime {
  font-weight: 600;
}

.middle-container {
  width: 6px;
  background-color: #1c1d1c;
  margin-top: 4px;
  height: 730px;
}

.MessageAre {
  position: absolute;
  bottom: 10px;
}

.mre-cont {
  margin: 10px;
  padding: 10px;
  background-color: #1e1f1e;
  border-radius: 5px;
  width: 1050px;
}

.arrowSymbol {
  cursor: pointer;
}
</style>
