<template>
  <v-container>
    <div class="item-detail">
      <v-row>
        <v-col cols="7">
          <h3>Pisang Molen</h3>
          <h5 class="order-grey mb-2">Oleh supplier Jaya Abadi</h5>
          <h5 class="price mb-2">Rp 280.000,-</h5>
        </v-col>
        <v-col cols="5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWcA3uDDFQejDaIeaTNHs65eATlmvbYBMWJM6ZRdBKLqksPiEw"
            alt=""
          />
        </v-col>
      </v-row>
    </div>
    <div class="progress">
      <v-timeline dense clipped light>
        <v-timeline-item right small>
          <h4>Pesanan Dikonfirmasi</h4>
          <h5 class="order-grey">16-8-2019, 10.00 WIB</h5></v-timeline-item
        ><v-timeline-item right small>
          <h4>Pesanan Dikonfirmasi</h4>
          <h5 class="order-grey">16-8-2019, 10.00 WIB</h5></v-timeline-item
        >
      </v-timeline>
    </div>
    <div style="display: block;text-align: center">
      <v-btn color="primary" small>Pesanan Tiba</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.item-detail {
  padding: 0 12px;
}
.order-grey {
  color: rgba(0, 0, 0, 0.5);
}
.progress {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
