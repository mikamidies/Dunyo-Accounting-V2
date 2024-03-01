<template>
  <div class="master">
    <ApplicationModal ref="appModal" />

    <SiteTop :title="service.title" />

    <div class="container small">
      <div v-for="item in service.data" :key="item.id" class="html">
        <h4 class="sub_title">
          <img src="@/assets/img/logo/quote.png" alt="" />

          {{ item.title }}
        </h4>

        <div class="text" v-html="item.text"></div>

        <img :src="item.image" alt="" />
      </div>

      <div class="button">
        <button @click="openAppModal()">
          Заказать услугу

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M18.6667 10.6666L24 16M24 16L18.6667 21.3333M24 16L8 16"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import servicesApi from "@/api/services";

export default {
  layout: "white",

  async asyncData({ params, $axios }) {
    const service = await servicesApi.getService(params.slug, $axios);

    console.log(service);

    return {
      service,
    };
  },

  methods: {
    openAppModal() {
      this.$refs.appModal.openModal();
    },

    closeAppModal() {
      this.$refs.appModal.closeModal();
    },
  },
};
</script>

<style scoped>
.sub_title {
  color: var(--Bg-background, #0d0539);
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 38.4px */
  margin-bottom: 16px;
  position: relative;
}

.html p,
.html span,
.html li {
  color: var(--grey-80, #353437);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
}
.html img {
  width: 100%;
  height: 536px;
  border-radius: 8px;
  object-fit: cover;
  display: flex;
  margin: 40px 0 0 0;
}
.button {
  margin-top: 64px;
  margin-bottom: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.html {
  margin-bottom: 64px;
}
.button button {
  border-radius: 8px;
  background: #03509f;
  padding: 12px 24px;
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 470px;
  gap: 24px;
}

.sub_title img {
  position: absolute;
  left: -52px;
  top: 0;
  width: 36px;
  height: auto;
  object-fit: contain;
  border-radius: 0;
  margin: 0;
}
.text :deep(p) {
  color: var(--grey-80, #353437);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
}
</style>
