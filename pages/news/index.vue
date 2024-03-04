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

  async asyncData({ $axios, query, i18n }) {
    const news = await newsApi.getNews($axios, {
      params: query,
      headers: {
        Language: i18n.locale,
      },
    });
    const newsCategories = await newsApi.getNewsCategories($axios, {
      params: query,
      headers: {
        Language: i18n.locale,
      },
    });

    return {
      news,
      newsCategories,
    };
  },
};
</script>

<style scoped></style>
