<template>
  <div>
    <div class="header">
      <v-container>
        <img src="../assets/chatbot.png" alt="" style="width: 40px" />
        <h2>Inem</h2></v-container
      >
    </div>
    <v-divider></v-divider>
    <div class="chat">
      <v-container>
        <div class="chat-in-container">
          <div class="chat-in">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            excepturi expedita
          </div>
        </div>
        <div class="chat-out-container">
          <div class="chat-out">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aperiam delectus, dolore
          </div>
        </div>
        <div class="chat-carousel"></div>
        <v-text-field
          label="Ketik pesan disini"
          append-outer-icon="mdi-send"
          class="mb-12 message-box"
        ></v-text-field>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.header {
  .container {
    padding-bottom: 5px;
  }
}
.header img {
  float: left;
}

.header h2 {
  position: relative;
  top: -2px;
  left: 10px;
}
.chat {
  margin-bottom: 15vh;
  height: calc(100vh - 53px - 56px - 66px);
  overflow-y: scroll;
}
.chat-in {
  background-color: #cdcdcd;
  padding: 12px;
  width: 70%;
  border-radius: 16px;
  margin-bottom: 16px;
}
.chat-out {
  background-color: #009cdc;
  color: white;
  padding: 12px;
  margin-left: auto;
  width: 70%;
  border-radius: 16px;
  margin-bottom: 16px;
}
.message-box {
  position: fixed;
  bottom: 0px;
  width: calc(100vw - 24px);
  background-color: white;
}
</style>
