<template>
  <div class="master">
    <AboutTop />
    <AboutWorld />
    <AboutContent />
    <!-- <AboutImages :media="media" />
    <AboutWhy />
    <AboutTeam :staff="staff" /> -->
    <HomeContacts class="contacts" />
  </div>
</template>

<script>
import mediaApi from "@/api/media";
import staffApi from "@/api/staff";

export default {
  async asyncData({ $axios }) {
    const staff = await staffApi.getStaff($axios);
    const media = await mediaApi.getMedia($axios);

    return {
      staff,
      media,
    };
  },
};
</script>

<style scoped>
.contacts {
  padding-top: 120px;
}
</style>
