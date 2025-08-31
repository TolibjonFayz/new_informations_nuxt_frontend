// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/styles.css"],
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@nuxtjs/sitemap",
  ],
  app: {
    head: {
      script: [
        {
          src: "https://cdn.ckbox.io/ckbox/2.6.1/ckbox.js",
          crossorigin: "anonymous",
        },
      ],
      title: "Bilim Manba Uz – O‘zbek tilidagi bilim va maqolalar platformasi",
      meta: [
        {
          name: "description",
          content:
            "Bilim Manba Uz – O‘zbek tilida yozilgan maqolalar, darsliklar, va foydali kontent manbasi. Har bir savolga javob topiladigan joy.",
        },
        {
          name: "keywords",
          content:
            "bilim, o‘zbekcha maqolalar, darsliklar, bilim manba uz, o‘zbek tilida kontent, foydali ma'lumotlar, o‘zbek tilidagi bilimlar, o‘zbek tilidagi resurslar, astronoyia o'zbekcha, osmonlar aro",
        },
        { property: "og:title", content: "Bilim Manba Uz" },
        {
          property: "og:description",
          content: "O‘zbek tilidagi bilim va maqolalar platformasi",
        },
        // { property: "og:url", content: "https://bilimmanba.uz" },
        // { property: "og:image", content: "https://bilimmanba.uz/preview.jpg" },
      ],
      link: [{ rel: "canonical", href: "https://bilimmanba.uz" }],
    },
  },
});
