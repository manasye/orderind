<template>
  <v-card>
    <div class="schedule-card">
      <v-row>
        <v-col cols="3">
          <img
            :src="
              schedule.orderSchedule.item.picture ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWcA3uDDFQejDaIeaTNHs65eATlmvbYBMWJM6ZRdBKLqksPiEw'
            "
            alt=""
          />
        </v-col>
        <v-col cols="6"
          ><h3>{{ schedule.orderSchedule.item.name }}</h3>
          <h5 class="count">Jumlah: {{ schedule.orderSchedule.quantity }}</h5>
          <h5 class="price">
            Total : Rp.
            {{
              Number(
                (
                  schedule.orderSchedule.quantity *
                  schedule.orderSchedule.item.price
                ).toFixed(1)
              ).toLocaleString()
            }},-
          </h5></v-col
        >
        <v-col cols="3">
          <v-btn
            small
            right
            color="primary"
            class="mb-3"
            style="float: right"
            @click="confirm(schedule._id, true)"
            >Ok</v-btn
          >
          <v-btn
            small
            right
            color="error"
            style="float: right"
            @click="confirm(schedule._id, false)"
            >Batal</v-btn
          >
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import config from "../config";

export default {
  props: ["schedule"],
  methods: {
    confirm(id, isConfirmed) {
      fetch(config.host + "/upcoming-orders/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderConfirm: isConfirmed })
      })
        .then(response => response.json())
        .then(() => {
          if (isConfirmed) this.$toasted.success("Barang berhasil di pesan");
          else this.$toasted.success("Barang tidak jadi dipesan");
        });
      this.$emit("click");
    }
  }
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
