<template>
  <v-card @click="goTo(`/order/${history._id}`)">
    <div class="history-container">
      <v-row>
        <v-col cols="9">
          <h3>{{ history.item.name }}</h3>
          <h5 class="price mb-2">
            Rp.
            {{
              Number(
                (history.quantity * history.item.price).toFixed(1)
              ).toLocaleString()
            }},-
          </h5>
          <v-btn color="" small v-if="history.status === 'PENDING'"
            >Pending</v-btn
          >
          <v-btn color="secondary" small v-if="history.status === 'CONFIRMED'"
            >Dikonfirmasi</v-btn
          >
          <v-btn color="warning" small v-if="history.status === 'ON_PROCESS'"
            >Diproses</v-btn
          >
          <v-btn color="primary" small v-if="history.status === 'DELIVERED'"
            >Selesai</v-btn
          >
        </v-col>
        <v-col cols="3">
          <img
            :src="
              history.item.picture ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWcA3uDDFQejDaIeaTNHs65eATlmvbYBMWJM6ZRdBKLqksPiEw'
            "
            style="max-height: 73px"
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
