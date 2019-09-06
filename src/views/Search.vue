<template>
  <v-container>
    <search-box></search-box>
    <h3 class="mb-4">Hasil pencarian untuk "{{ searchQuery }}"</h3>
    <v-row no-gutters>
      <v-col cols="6" v-for="(item, idx) in items" :key="item.id">
        <item-card :item="item" :iseven="idx % 2 === 0"></item-card></v-col
    ></v-row>
  </v-container>
</template>

<script>
import SearchBox from "../components/SearchBox";
import ItemCard from "../components/ItemCard";

export default {
  mounted() {
    this.searchQuery = this.$route.params.query || "";
  },
  components: {
    SearchBox,
    ItemCard
  },
  data() {
    return {
      searchQuery: "",
      items: [
        {
          id: 1,
          name: "AAA",
          price: "Rp250,000"
        }
      ]
    };
  }
};
</script>
