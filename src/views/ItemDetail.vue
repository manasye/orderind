<template>
  <div>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWcA3uDDFQejDaIeaTNHs65eATlmvbYBMWJM6ZRdBKLqksPiEw"
      alt=""
    />
    <v-container>
      <h2>Judul</h2>
      <h3 class="supplier mb-4">Oleh supplier X</h3>
      <p class="mb-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eum
        explicabo fugit ipsum, magnam sequi tempora totam. Atque culpa delectus
        eos impedit incidunt necessitatibus non quae ratione rem, suscipit ut?
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
          prepend-icon="mdi-calendar"
          :items="options"
          label="Jadwal otomatis"
          style="width: 50%; margin-top: -2vh"
        ></v-select>
      </div>
      <v-row class="mt-5 mb-10">
        <v-col col="6"
          ><p class="harga">Harga</p>
          <h3>Rp {{ counter * 280000 }}</h3></v-col
        >
        <v-col col="6">
          <v-btn
            style="float: right;color: white; margin-top: .5vh"
            color="light-blue accent-4"
            >Beli</v-btn
          ></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 1,
      options: ["Setiap menit", "Setiap mingggu", "Setiap bulan"]
    };
  },
  methods: {
    increment() {
      this.counter = parseInt(this.counter, 10) + 1;
    },
    decrement() {
      this.counter = parseInt(this.counter, 10) - 1;
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
</style>
