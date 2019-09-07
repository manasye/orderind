<template>
  <v-container>
    <h3 class="mb-5">Jadwal Otomasi Pesanan</h3>
    <schedule-card
      v-for="(s, idx) in schedules"
      :schedule="s"
      :key="s.id"
      @click="schedules.splice(idx, 1)"
    ></schedule-card>
    <img
      v-if="schedules.length === 0"
      src="https://cdn.dribbble.com/users/1554526/screenshots/3399669/no_results_found.png"
    />
  </v-container>
</template>

<script>
import ScheduleCard from "../components/ScheduleCard";
import config from "../config";

export default {
  components: {
    ScheduleCard
  },
  created() {
    fetch(config.host + "/upcoming-orders?merchantId=5d726d23c392ad75ea1079ab")
      .then(response => response.json())
      .then(response => {
        this.schedules = response.data;
      });
  },
  data() {
    return {
      schedules: []
    };
  }
};
</script>

<style scoped></style>
