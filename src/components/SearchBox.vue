<template
  ><v-text-field
    v-model="searchQuery"
    outlined
    light
    rounded
    label="Cari supply disini..."
    prepend-inner-icon="mdi-search-web"
    @keyup.enter="search()"
  ></v-text-field>
</template>

<script>
export default {
  mounted() {
    this.searchQuery = this.$route.params.query || "";
  },
  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    search() {
      this.$router.push(`/search/${this.searchQuery}`).catch(() => {});
    }
  }
};
</script>
