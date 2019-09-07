<template>
  <v-container>
    <div class="item-detail">
      <v-row>
        <v-col cols="9">
          <h3>{{ detail.item.name }}</h3>
          <h5 class="order-grey mb-2">
            Oleh supplier {{ detail.item.supplier.name }}
          </h5>
          <h5 class="price mb-2">
            Rp.
            {{ Number(detail.item.price.toFixed(1)).toLocaleString() }},-
          </h5>
        </v-col>
        <v-col cols="3">
          <img
            :src="
              detail.item.picture ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWcA3uDDFQejDaIeaTNHs65eATlmvbYBMWJM6ZRdBKLqksPiEw'
            "
            alt=""
          />
        </v-col>
      </v-row>
    </div>
    <div class="progress">
      <v-timeline dense clipped light>
        <v-timeline-item
          right
          small
          :color="detail.status !== 'PENDING' ? 'primary' : 'grey'"
        >
          <h4>Pending</h4>
          <!--<h5 class="order-grey">16-8-2019, 10.00 WIB</h5>--></v-timeline-item
        >
        <v-timeline-item
          right
          small
          :color="
            detail.status === 'CONFIRMED' ||
            detail.status === 'ON_PROGRESS' ||
            detail.status === 'DELIVERED'
              ? 'primary'
              : 'grey'
          "
        >
          <h4>Pesanan Dikonfirmasi</h4></v-timeline-item
        >
        <v-timeline-item
          right
          small
          :color="
            detail.status === 'ON_PROGRESS' || detail.status === 'DELIVERED'
              ? 'primary'
              : 'grey'
          "
        >
          <h4>Pesanan Diproses</h4></v-timeline-item
        >
        <v-timeline-item
          right
          small
          :color="detail.status === 'DELIVERED' ? 'primary' : 'grey'"
        >
          <h4>Pesanan Tiba</h4>
        </v-timeline-item>
      </v-timeline>
    </div>
    <div style="display: block;text-align: center">
      <v-btn color="primary" small @click="confirmDelivery">Pesanan Tiba</v-btn>
    </div>
  </v-container>
</template>

<script>
import config from "../config";

export default {
  created() {
    this.getDetail();
  },
  data() {
    return {
      detail: null
    };
  },
  methods: {
    confirmDelivery() {
      fetch(config.host + "/orders/" + this.$route.params.id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "DELIVERED" })
      })
        .then(response => response.json())
        .then(() => {
          this.$toasted.success("Barang diterima");
          this.getDetail();
        });
    },
    getDetail() {
      fetch(config.host + "/orders/" + this.$route.params.id)
        .then(response => response.json())
        .then(response => {
          this.detail = response.data;
        });
    }
  }
};
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
