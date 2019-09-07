<template>
  <v-container>
    <h3 class="mb-5">Riwayat Pemesanan</h3>
    <history-card
      v-for="h in histories"
      :history="h"
      :key="h.id"
    ></history-card>
  </v-container>
</template>

<script>
import HistoryCard from "../components/HistoryCard";

export default {
  components: {
    HistoryCard
  },
  data() {
    return {
      histories: ["", ""]
    };
  }
};
</script>
