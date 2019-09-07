<template>
  <v-card @click="goTo(`/order/${history.id}`)">
    <div class="history-container">
      <v-row>
        <v-col cols="7">
          <h3>Pisang Molen</h3>
          <h5 class="price mb-2">Rp 280.000,-</h5>
          <v-btn color="warning" small>Diproses</v-btn>
          <!--<v-btn color="primary" small>Selesai</v-btn>-->
        </v-col>
        <v-col cols="5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWcA3uDDFQejDaIeaTNHs65eATlmvbYBMWJM6ZRdBKLqksPiEw"
            alt=""
          />
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["history"],
  methods: {
    goTo(page) {
      this.$router.push(page).catch(() => {});
    }
  }
};
</script>

<style scoped lang="scss">
.history-container {
  padding: 0 12px;
  margin-bottom: 16px;
}
</style>
