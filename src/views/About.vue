<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import i18n from "@/locale";
export default {
  data() {
    return {
      title: ""
    };
  },
  mounted() {
    this.$nextTick(function() {
      i18n.locale = "zh"; // 切换成中文
      this.$toast({
        message: this.$t("system.networkError"),
        position: "bottom"
      });
    });
  }
};
</script>
