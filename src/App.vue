<template>
  <v-app>
    <v-content> <router-view></router-view></v-content>
    <bottom-nav></bottom-nav>
    <v-dialog v-model="dialog" max-width="320">
      <v-card>
        <v-card-title class="headline">Auto Order</v-card-title>
        <v-card-text
          >Ada barang yang terjadwal untuk dipesan hari ini
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="green darken-1" text @click="dialog = false">
            Abaikan
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="
              goTo('/schedule');
              dialog = false;
            "
          >
            Lihat
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import BottomNav from "./components/BottomNav";
import config from "./config";

export default {
  created() {
    fetch(config.host + "/upcoming-orders?merchantId=5d726d23c392ad75ea1079ab")
      .then(response => response.json())
      .then(response => {
        this.dialog = response.data.length > 0;
      });
  },
  components: {
    BottomNav
  },
  name: "App",
  data: () => ({
    dialog: false
  }),
  methods: {
    goTo(page) {
      this.$router.push(page).catch(() => {});
    }
  }
};
</script>

<style>
body {
  font-family: "Nunito", sans-serif;
}
img {
  max-width: 100%;
}
.price {
  color: #0091ea;
}
.v-application--wrap {
  margin-bottom: 45px;
}
</style>
