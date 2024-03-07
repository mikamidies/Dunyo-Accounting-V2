<template>
  <div class="master">
    <HomeHero :services="services" />
    <HomeAbout />
    <!-- <HomeNumbers /> -->
    <HomeServices :services="services" />
    <HomeNews :news="news" />
    <HomeFAQ :faq="faq" />
    <HomePartners :partners="partners" />
    <HomeContacts />

    <ApplicationModal />
  </div>
</template>

<script>
import servicesApi from "@/api/services";
import newsApi from "@/api/news";
import faqApi from "@/api/faq";
import partnersApi from "@/api/partners";

export default {
  async asyncData({ $axios, query, i18n }) {
    const services = await servicesApi.getServices($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });
    const news = await newsApi.getNews($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });
    const faq = await faqApi.getFAQ($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });
    const partners = await partnersApi.getPartners($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });

    return {
      services,
      news,
      faq,
      partners,
    };
  },
};
</script>

<style scoped>
.master {
  overflow-x: hidden;
}
</style>
