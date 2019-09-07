<template>
  <v-container>
    <h3 class="mb-5">Riwayat Pemesanan</h3>
    <history-card v-for="h in histories" :history="h" :key="h.id"></history-card
    ><img
      v-if="histories.length === 0"
      src="https://cdn.dribbble.com/users/1554526/screenshots/3399669/no_results_found.png"
    />
  </v-container>
</template>

<script>
import HistoryCard from "../components/HistoryCard";
import config from "../config";

export default {
  components: {
    HistoryCard
  },
  mounted() {
    fetch(config.host + "/orders/?userId=5d726d69c392ad75ea1079cb")
      .then(response => response.json())
      .then(response => {
        this.histories = response.data;
      });
  },
  data() {
    return {
      histories: []
    };
  }
};
</script>
