<template>
  <div>
    <img
      :src="
        detail.picture ||
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWcA3uDDFQejDaIeaTNHs65eATlmvbYBMWJM6ZRdBKLqksPiEw'
      "
      alt=""
      class="detail-picture"
    />
    <v-container>
      <h2>{{ detail.name }}</h2>
      <h3 class="supplier mb-4">
        Oleh supplier {{ detail.supplier ? detail.supplier.name : "" }}
      </h3>
      <p class="mb-10">
        {{ detail.description }}
      </p>
      <div style="text-align: right" class="mb-5">
        <h4>Beli sebanyak</h4>
        <v-text-field
          v-model="counter"
          type="number"
          append-outer-icon="mdi-plus"
          @click:append-outer="increment"
          prepend-icon="mdi-minus"
          @click:prepend="decrement"
          style="width: 25%; float: right; "
        ></v-text-field>
      </div>
      <div>
        <v-select
          v-model="optionChoosen"
          prepend-icon="mdi-calendar"
          :items="options"
          label="Jadwal otomatis"
          style="width: 50%; margin-top: -2vh"
        ></v-select>
      </div>
      <v-row class="mt-5 mb-10">
        <v-col col="6"
          ><p class="harga">Harga</p>
          <h3>Rp {{ counter * detail.price }}</h3></v-col
        >
        <v-col col="6">
          <v-btn
            style="float: right;color: white; margin-top: .5vh"
            color="light-blue accent-4"
            @click="goToPayment"
            >Beli</v-btn
          ></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
import config from "../config";

export default {
  created() {
    fetch(config.host + "/items/" + this.$route.params.id)
      .then(response => response.json())
      .then(response => {
        this.detail = response.data;
      });
  },
  data() {
    return {
      counter: 1,
      options: [
        "Tidak pernah",
        "Setiap menit",
        "Setiap minggu",
        "Setiap bulan"
      ],
      optionChoosen: null,
      detail: {}
    };
  },
  methods: {
    increment() {
      this.counter = parseInt(this.counter, 10) + 1;
    },
    decrement() {
      if (this.counter > 0) this.counter = parseInt(this.counter, 10) - 1;
    },
    goToPayment() {
      this.createScheduler();
      this.$router.push({ name: "payment", query: {
          itemId: this.detail._id, 
          qty: this.counter
        } 
      });
    },
    createScheduler() {
      let request = {
        merchantId: config.merchantId,
        itemId: this.detail._id,
        quantity: this.counter,
      }
      if (this.optionChoosen === "Setiap menit") {
        request.isEachMinute = true;
        request.isWeekly = false;
        request.isMonthly = false;
      } else if (this.optionChoosen === "Setiap minggu") {
        request.isEachMinute = false;
        request.isWeekly = true;
        request.isMonthly = false;
      } else if (this.optionChoosen === "Setiap bulan") {
        request.isEachMinute = false;
        request.isWeekly = false;
        request.isMonthly = true;
      } else {
        return;
      }
      fetch(config.host + "/order-schedules", {
        method: 'post',
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(res => res.json()).then(res => console.log(res));
    }
  }
};
</script>

<style scoped>
.supplier {
  color: rgba(0, 0, 0, 0.3);
}
.harga {
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 0;
}
.detail-picture {
  display: block;
  margin: 0 auto;
  height: 231px;
  width: auto;
}
</style>
