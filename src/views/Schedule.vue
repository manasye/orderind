<template>
  <v-container>
    <schedule-card
      v-for="s in schedules"
      :schedule="s"
      :key="s.id"
    ></schedule-card>
  </v-container>
</template>

<script>
import ScheduleCard from "../components/ScheduleCard";

export default {
  components: {
    ScheduleCard
  },
  data() {
    return {
      schedules: ["", ""]
    };
  }
};
</script>

<style scoped></style>
