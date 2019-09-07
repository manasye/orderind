<template>
  <v-container>
    <search-box></search-box>
    <h3 class="mb-4">Barang Rekomendasi</h3>
    <v-row no-gutters>
      <v-col cols="6" v-for="(item, idx) in items" :key="item.id">
        <item-card :item="item" :iseven="idx % 2 === 0"></item-card></v-col
    ></v-row>
  </v-container>
</template>

<script>
import ItemCard from "../components/ItemCard";
import SearchBox from "../components/SearchBox";
import config from "../config.js";

export default {
  components: {
    ItemCard,
    SearchBox
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "AAA",
          price: "Rp250,000"
        }
      ],
      searchQuery: ""
    };
  },
  created() {
    fetch(config.host + "/items?page=0&limit=4")
      .then(response => response.json())
      .then(data => {
        this.items = data.data;
      });
  }
};
</script>

<style>
h3 {
  font-weight: 700;
}
</style>
