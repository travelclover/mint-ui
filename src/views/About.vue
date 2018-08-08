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
      this.$toast({
        message: "提示",
        position: "bottom"
      });
    });
  }
};
</script>
