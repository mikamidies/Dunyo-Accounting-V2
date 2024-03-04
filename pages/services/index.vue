<template>
  <div class="master">
    <SiteTop title="Services" />
    <HomeServices :services="services" :service="service" class="grid" />
    <HomeContacts />
  </div>
</template>

<script>
import servicesApi from "@/api/services";

export default {
  layout: "white",

  async asyncData({ $axios }) {
    const services = await servicesApi.getServices($axios);
    const service = await servicesApi.getService($axios);

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
