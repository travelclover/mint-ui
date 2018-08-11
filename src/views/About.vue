<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.$store.commit("setLocale", "zh");
      this.$toast({
        message: this.$t("system.networkError"),
        position: "bottom"
      });
    });
  }
};
</script>
