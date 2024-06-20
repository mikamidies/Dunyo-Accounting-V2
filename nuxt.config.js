export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Dunyo Accounting",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["ant-design-vue/dist/antd.css", "@/assets/css/main.css"],

  plugins: [
    "@/plugins/antd-ui",
    { src: "@/plugins/replain.js", mode: "client" },
  ],

  components: true,

  buildModules: ["@nuxtjs/dotenv"],

  modules: ["@nuxtjs/axios", "@nuxtjs/i18n"],

  axios: {
    baseURL: process.env.BASE_URL || "https://admin.dunyo.ae/api",
  },

  build: {
    babel: {
      compact: true,
    },
    standalone: true,
    extend(config, ctx) {
      config.externals = [
        {
          encoding: "encoding",
        },
      ];
    },
  },

  i18n: {
    locales: ["en","ru"],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
    },
  },
};
