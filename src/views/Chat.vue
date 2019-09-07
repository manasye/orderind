<template>
  <div>
    <div class="header">
      <v-container>
        <img src="../assets/chatbot.png" alt="" style="width: 40px" />
        <h2>Inem</h2></v-container
      >
    </div>
    <v-divider></v-divider>
    <div class="chat" id="chat-container">
      <v-container>
        <template v-for="chat in chats">
          <div
            v-if="chat.fromBot && chat.message.type === 'TEXT'"
            class="chat-in-container"
            :key="chat._id"
          >
            <div class="chat-in">
              <p>{{ chat.message.data }}</p>
            </div>
          </div>
          <div
            v-else-if="
              !chat.fromBot && chat.message && chat.message.type === 'TEXT'
            "
            class="chat-out-container"
            :key="chat._id"
          >
            <div class="chat-out">
              <p>{{ chat.message.data }}</p>
            </div>
          </div>
          <carousel
            :perPage="2.1"
            :key="chat._id"
            v-else-if="chat.message && chat.message.type === 'CAROUSEL'"
          >
            <slide v-for="item in chat.message.data" :key="item._id">
              <div class="chat-carousel" @click="goTo(`/item/${item._id}`)">
                <img
                  class="carousel-picture"
                  :src="
                    item.picture ||
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWcA3uDDFQejDaIeaTNHs65eATlmvbYBMWJM6ZRdBKLqksPiEw'
                  "
                  alt=""
                />
                <h3 style="text-align: center">{{ item.name }}</h3>
                <h5 style="text-align: center; color: #009cdc">
                  Rp. {{ Number(item.price.toFixed(1)).toLocaleString() }},-
                </h5>
              </div>
            </slide>
          </carousel>
        </template>
        <v-text-field
          label="Ketik pesan disini"
          append-outer-icon="mdi-send"
          class="mb-12 message-box"
          v-model="inputMessage"
          @click:append-outer="sendMessage"
          @keydown="sendMessageByEnter"
        ></v-text-field>
      </v-container>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import config from "../config";
import $ from "jquery";

export default {
  components: {
    Carousel,
    Slide
  },
  created() {
    fetch(config.host + "/messages?merchantId=5d726d23c392ad75ea1079ab")
      .then(response => response.json())
      .then(response => {
        this.chats = response.data;
      });
    this.socketClient.on("chatbot_response", message => {
      this.chats.push(JSON.parse(message));
    });
  },
  mounted() {
    setTimeout(
      () =>
        $("#chat-container").scrollTop($("#chat-container")[0].scrollHeight),
      500
    );
  },
  data() {
    return {
      chats: [],
      socketClient: require("socket.io-client")(config.socketHost),
      inputMessage: ""
    };
  },
  methods: {
    goTo(page) {
      this.$router.push(page).catch(() => {});
    },
    sendMessage() {
      this.socketClient.emit("chatbot_message", this.inputMessage);
      this.chats.push({
        merchant: "5d726d23c392ad75ea1079ab",
        fromBot: false,
        message: {
          type: "TEXT",
          data: this.inputMessage
        }
      });
      this.inputMessage = "";
    },
    sendMessageByEnter(event) {
      if (event.keyCode === 13) {
        this.sendMessage();
      }
    },
    scrollToBottom(id) {
      const div = document.getElementById(id);
      div.scrollTop = 999999;
    }
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
  p {
    margin-bottom: 0;
  }
}
.chat-in {
  background-color: rgb(192, 192, 192, 0.15);
  padding: 12px;
  width: auto;
  max-width: 70%;
  border-radius: 16px;
  margin-bottom: 16px;
  display: inline-block;
}
.chat-out-container {
  text-align: right;
}
.chat-out {
  text-align: left;
  background-color: #009cdc;
  color: white;
  width: auto;
  padding: 12px;
  margin-left: auto;
  max-width: 70%;
  border-radius: 16px;
  margin-bottom: 16px;
  display: inline-block;
}
.chat-carousel {
  width: 90%;
  border-radius: 16px;
  margin-bottom: 16px;
  background-color: rgb(192, 192, 192, 0.15);
  padding: 12px;
}
.carousel-picture {
  width: 140px;
  height: 140px;
}
.message-box {
  position: fixed;
  bottom: 0px;
  width: calc(100vw - 24px);
  background-color: white;
}
</style>

<style>
.VueCarousel-dot-container {
  margin-top: 0 !important;
}
</style>
