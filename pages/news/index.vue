<template>
  <div class="master">
    <SiteTop :title="$store.state.translations['main.news']" />
    <NewsGrid :news="news" :newsCategories="newsCategories" />
    <HomeContacts />
  </div>
</template>

<script>
import newsApi from "@/api/news";

export default {
  layout: "white",

  async asyncData({ $axios }) {
    const news = await newsApi.getNews($axios);
    const newsCategories = await newsApi.getNewsCategories($axios);

    return {
      news,
      newsCategories,
    };
  },
};
</script>

<style scoped></style>
