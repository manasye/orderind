<template>
  <v-app>
    <v-content> <router-view></router-view></v-content>
    <bottom-nav></bottom-nav>
  </v-app>
</template>

<script>
import BottomNav from "./components/BottomNav";

export default {
  components: {
    BottomNav
  },
  name: "App",
  data: () => ({
    //
  })
};
</script>

<style>
body {
  font-family: "Nunito", sans-serif;
}
img {
  max-width: 100%;
}
.price {
  color: #0091ea;
}
.v-application--wrap {
  margin-bottom: 45px;
}
</style>
