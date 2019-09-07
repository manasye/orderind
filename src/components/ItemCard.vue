<template>
  <div
    :class="iseven ? 'item-card-container-left' : 'item-card-container-right'"
    class="mb-4"
  >
    <v-card @click="goTo(`/item/${item.id}`)">
      <img
        :src="item.picture || 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWcA3uDDFQejDaIeaTNHs65eATlmvbYBMWJM6ZRdBKLqksPiEw'"
        alt=""
        class="item-card-picture"
      />
      <div class="item-card-content">
        <h4>{{ item.name }}</h4>
        <h5 class="price-tag">{{ item.price }}</h5>
      </div></v-card
    >
  </div>
</template>

<script>
export default {
  props: ["item", "iseven"],
  methods: {
    goTo(page) {
      this.$router.push(page).catch(() => {});
    }
  }
};
</script>

<style scoped lang="scss">
.item-card-container-left {
  padding: 0 7px 0 0;
}
.item-card-container-right {
  padding: 0 0 0 7px;
}
.item-card-content {
  padding: 6px;
}
.item-card-picture {
  display: block;
  width: 120px;
  height: 180px;
  margin: 0 auto;
}
.price-tag {
  color: #0091ea;
}
</style>
