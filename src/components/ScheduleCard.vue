<template>
  <v-card>
    <div class="schedule-card">
      <v-row>
        <v-col cols="4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWcA3uDDFQejDaIeaTNHs65eATlmvbYBMWJM6ZRdBKLqksPiEw"
            alt=""
          />
        </v-col>
        <v-col cols="5"
          ><h3>{{ schedule.name }}</h3>
          <h5 class="count">{{ schedule.quantity }}</h5>
          <h5 class="price">
            Rp. {{ Number(schedule.price.toFixed(1)).toLocaleString() }},-
          </h5></v-col
        >
        <v-col cols="3">
          <v-btn small right color="primary" class="mb-3" style="float: right"
            >Ok</v-btn
          >
          <v-btn small right color="error" style="float: right">Batal</v-btn>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["schedule"]
};
</script>

<style scoped lang="scss">
.schedule-card {
  padding: 0 12px;
  margin-bottom: 16px;
}
.count {
  color: rgba(0, 0, 0, 0.5);
}
</style>
