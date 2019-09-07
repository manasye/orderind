<template>
  <v-container>
    <search-box></search-box>
    <h3 class="mb-4">Hasil pencarian untuk "{{ searchQuery }}"</h3>
    <v-row no-gutters>
      <v-col cols="6" v-for="(item, idx) in items" :key="item.id">
        <item-card :item="item" :iseven="idx % 2 === 0"></item-card></v-col
    ></v-row>
    <img
      v-if="items.length === 0"
      src="https://cdn.dribbble.com/users/1554526/screenshots/3399669/no_results_found.png"
    />
  </v-container>
</template>

<script>
import SearchBox from "../components/SearchBox";
import ItemCard from "../components/ItemCard";
import config from "../config";

export default {
  mounted() {
    this.searchQuery = this.$route.params.query || "";
    this.fetchData();
  },
  components: {
    SearchBox,
    ItemCard
  },
  data() {
    return {
      searchQuery: "",
      items: []
    };
  },
  methods: {
    fetchData() {
      fetch(config.host + "/items?page=0&limit=100&search=" + this.searchQuery)
        .then(response => response.json())
        .then(response => {
          this.items = response.data;
        });
    }
  },
  watch: {
    "$route.params.query": function(query) {
      this.searchQuery = query;
      this.fetchData();
    }
  }
};
</script>
