<template>
  <v-container>
    <div style="text-align: center" class="mb-7">
      <v-avatar size="120">
        <img src="https://www.logomakershop.com/img/logo4_02.png" alt="John" />
      </v-avatar>
      <h2 class="mt-4">Toko Jaya Baru</h2>
      <h4 class="price">
        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/36/6e/0e/366e0edd-183a-ebd3-579a-f57cddfa0a90/source/512x512bb.jpg"
          alt=""
          style="width: 30px"
        />
        Rp 1.000.000
      </h4>
    </div>
    <div class="detail" v-for="d in details" :key="d.field">
      <h4 class="field">{{ d.field }}</h4>
      <h4>{{ d.value }}</h4>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      details: [
        {
          field: "Nama Pemilik",
          value: "Wildan Dicky"
        },
        {
          field: "Alamat Toko",
          value: "Jalan Tubagus Ismail Raya No2A"
        },
        {
          field: "Nomor Telepon",
          value: "08121839183"
        },
        {
          field: "Email",
          value: "toko@jaya.com"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.field {
  color: rgba(0, 0, 0, 0.5);
}
.detail {
  margin-bottom: 20px;
  h3 {
    font-weight: 600;
  }
}
</style>
