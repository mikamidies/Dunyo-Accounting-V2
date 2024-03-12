<template>
  <main>
    <WholeLoader v-if="loading" />

    <DesktopHeader class="white" />
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
      loading: true,
    };
  },

  async mounted() {
    try {
      const translations = await translationsApi.getTranslations(this.$axios, {
        headers: {
          Language: this.$i18n.locale,
        },
      });

      await this.$store.commit("getTranslations", translations.data);
    } catch (error) {
    } finally {
      this.loading = false;
    }
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

    $route() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
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
.white :deep(.brand-main) {
  display: none;
}
.white :deep(.brand-colored) {
  display: block;
}
.white :deep(.link),
.white :deep(.lang),
.white :deep(.tel) {
  color: var(--blue);
}
.white :deep(.tel) {
  border: 1px solid var(--grey-8, #ebebeb);
}
.white :deep(.tel svg path) {
  fill: var(--blue);
}
.white {
  background: white !important;
}
.mobile__navbar {
  display: none;
}
.white :deep(.ant-btn) {
  color: var(--blue);
}
.white :deep(.ant-btn svg path) {
  fill: var(--blue);
}
@media screen and (max-width: 1024px) {
  .white {
    display: none;
  }
  .mobile__navbar {
    display: block;
  }
}
</style>
