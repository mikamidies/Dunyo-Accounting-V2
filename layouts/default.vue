<template>
  <main>
    <DesktopHeader class="main__navbar" />
    <MobileHeader class="mobile__navbar" />
    <div class="site">
      <nuxt />
    </div>
    <DesktopFooter />
  </main>
</template>

<script>
import translationsApi from "@/api/translations";

export default {
  data() {
    return {
      translations: [],
    };
  },

  async fetch() {
    const translations = await translationsApi.getTranslations(this.$axios, {
      headers: {
        Language: this.$i18n.locale,
      },
    });

    await this.$store.commit("getTranslations", translations.data);
  },

  computed: {
    currentLang() {
      return this.$i18n.locale;
    },
  },

  watch: {
    async currentLang() {
      const translations = await translationsApi.getTranslations(this.$axios, {
        headers: {
          Language: this.$i18n.locale,
        },
      });

      await this.$store.commit("getTranslations", translations.data);
    },
  },

  mounted() {},
};
</script>

<style scoped>
main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.site {
  flex: 1;
}
.main__navbar {
  display: block;
}
.mobile__navbar {
  display: none;
}
@media screen and (max-width: 1024px) {
  .main__navbar {
    display: none;
  }
  .mobile__navbar {
    display: block;
  }
}
</style>
