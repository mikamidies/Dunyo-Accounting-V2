<template>
  <div class="master">
    <SiteTop :title="$store.state.translations[`main.services`]" />
    <HomeServices :services="services" :service="service" class="grid" />
    <HomeContacts />
  </div>
</template>

<script>
import servicesApi from "@/api/services";

export default {
  layout: "white",

  async asyncData({ $axios, query, i18n }) {
    const services = await servicesApi.getServices($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });
    const service = await servicesApi.getService($axios, {
      params: query,
      headers: {
        language: i18n.locale,
      },
    });

    return {
      services,
      service,
    };
  },
};
</script>

<style scoped>
.grid {
  padding: 0 0 120px 0;
}
.grid :deep(.title) {
  display: none;
}
@media screen and (max-width: 1024px) {
  .grid {
    padding-bottom: 48px;
  }
}
</style>
