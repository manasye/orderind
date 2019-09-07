<template>
  <v-bottom-navigation :value="activeBtn" color="light-blue accent-4" fixed>
    <v-btn @click="goTo('/')">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn @click="goTo('/chat')">
      <span>Chat</span>
      <v-icon>mdi-chat</v-icon>
    </v-btn>

    <v-btn @click="goTo('/schedule')">
      <span>Jadwal</span>
      <v-icon>mdi-timetable</v-icon>
    </v-btn>

    <v-btn @click="goTo('/history')">
      <span>Riwayat</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn @click="goTo('/profile')">
      <span>Profil</span>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  mounted() {
    const path = window.location.pathname;
    let active = 0;
    if (path.includes("/") || path.includes("/search") || path.includes("item"))
      active = 0;
    if (path.includes("/chat")) active = 1;
    if (path.includes("/history") || path.includes("/order")) active = 3;
    if (path.includes("/profile")) active = 4;
    this.activeBtn = active;
  },
  data() {
    return {
      activeBtn: 0
    };
  },
  methods: {
    goTo(page) {
      this.$router.push(page).catch(() => {});
    }
  }
};
</script>
