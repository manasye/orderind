<template>
  <v-container>
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
