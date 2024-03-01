<template>
  <div class="master">
    <HomeHero :services="services" />
    <HomeAbout />
    <HomeNumbers />
    <HomeServices :services="services" />
    <HomeNews :news="news" />
    <HomeFAQ />
    <HomePartners />
    <HomeContacts />

    <ApplicationModal />
  </div>
</template>

<script>
import servicesApi from "@/api/services";
import newsApi from "@/api/news";

export default {
  async asyncData({ $axios }) {
    const services = await servicesApi.getServices($axios);
    const news = await newsApi.getNews($axios);

    return {
      services,
      news,
    };
  },
};
</script>

<style scoped></style>
