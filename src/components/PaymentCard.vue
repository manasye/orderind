<template>
  <div class="card-container">
    <v-card>
      <div style="padding: 12px">
        <v-row>
          <v-col cols="3" class="column">
            <div
              v-bind:style="{
                backgroundImage: 'url(' + payment.logo + ')',
                width: '100%',
                height: '100%',
                backgroundSize: '100% 100%'
              }"
            ></div>
          </v-col>
          <v-col cols="9" class="column">
            <h3>{{ payment.name }}</h3>
            <h5 class="gray">{{ payment.detail }}</h5>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["payment"],
  data() {
    return {
      backColor: {
        width: "100%",
        height: "100%",
        backgroundColor: `url(${this.payment.logo}) `
      }
    };
  }
};
</script>

<style scoped lang="scss">
img {
  /*width: 70%;*/
  /*margin-left: 15%;*/
}
.card-container {
  margin-bottom: 16px;
  text-align: left;
  .gray {
    color: rgba(0, 0, 0, 0.5);
  }
}
.column {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
