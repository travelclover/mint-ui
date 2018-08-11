import i18n from "@/locale";

const app = {
  state: {
    locale: "en" // 默认英文
  },
  mutations: {
    // 设置语言
    setLocale(state, locale) {
      this.locale = locale;
      i18n.locale = locale;
    }
  }
};

export default app;
