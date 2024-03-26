<template>
  <div class="wrap">
    <ApplicationModal ref="appModal" />

    <div class="container">
      <div class="top">
        <div class="left">
          <NuxtLink to="/" class="brand">
            <img src="@/assets/img/logo/brand.svg" alt="" />
          </NuxtLink>
        </div>
        <div class="right">
          <!-- <div class="lang">
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item key="1">
                  <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
                </a-menu-item>
                <a-menu-item key="2">
                  <NuxtLink :to="switchLocalePath('ru')">Русский</NuxtLink>
                </a-menu-item>
              </a-menu>
              <a-button style="margin-left: 8px">
                Eng
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="10"
                  viewBox="0 0 20 10"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.691929 0.885845C1.12319 0.346768 1.90981 0.259366 2.44888 0.690628L10.0013 6.7326L17.5538 0.690628C18.0929 0.259366 18.8795 0.346768 19.3108 0.885845C19.742 1.42492 19.6546 2.21154 19.1156 2.6428L10.7822 9.30947C10.3257 9.67469 9.677 9.67469 9.22048 9.30947L0.887146 2.6428C0.348069 2.21154 0.260667 1.42492 0.691929 0.885845Z"
                    fill="white"
                  />
                </svg>
              </a-button>
            </a-dropdown>
          </div> -->
          <div
            class="burger"
            @click="menuHandle = !menuHandle"
            :class="{ x: menuHandle == true }"
          >
            <div class="stick"></div>
          </div>
        </div>
      </div>
      <div class="menu" :class="{ show: menuHandle == true }">
        <div></div>
        <ul>
          <li>
            <NuxtLink class="link" :to="localePath('/')">
              {{ $store.state.translations["main.main"] }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" :to="localePath('/about')">
              {{ $store.state.translations["main.about"] }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" :to="localePath('/services')">
              {{ $store.state.translations["main.services"] }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" :to="localePath('/news')">
              {{ $store.state.translations["main.news"] }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" :to="localePath('/contacts')">
              {{ $store.state.translations["main.contacts"] }}
            </NuxtLink>
          </li>
        </ul>
        <button class="tel" @click="openAppModal()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M15.5 13.8333V12.4617C15.5 11.7802 15.0851 11.1674 14.4523 10.9143L12.7572 10.2362C11.9524 9.91429 11.0352 10.263 10.6475 11.0383L10.5 11.3333C10.5 11.3333 8.41667 10.9167 6.75 9.25C5.08333 7.58333 4.66667 5.5 4.66667 5.5L4.96168 5.35249C5.73698 4.96484 6.08571 4.04761 5.76379 3.2428L5.08574 1.54768C4.83263 0.914919 4.21979 0.5 3.53828 0.5H2.16667C1.24619 0.5 0.5 1.24619 0.5 2.16667C0.5 9.53046 6.46954 15.5 13.8333 15.5C14.7538 15.5 15.5 14.7538 15.5 13.8333Z"
              fill="#F9E567"
            />
          </svg>
          {{ $store.state.translations["main.contact-us"] }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuHandle: false,
    };
  },
  watch: {
    $route() {
      this.menuHandle = false;
    },
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
.wrap {
  background: #023475;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 9;
}
.brand img {
  width: 64px;
  height: 64px;
  object-fit: contain;
}
.lang {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.right {
  display: flex;
  align-items: center;
  gap: 24px;
}
.burger {
  position: relative;
}
.stick {
  width: 30px;
  height: 2px;
  background: white;
  position: relative;
}
.stick::after {
  width: 30px;
  height: 2px;
  background: white;
  position: absolute;
  top: -10px;
  left: 0;
  content: "";
}
.stick::before {
  width: 30px;
  height: 2px;
  background: white;
  position: absolute;
  top: 10px;
  left: 0;
  content: "";
}
.menu {
  height: 100%;
  position: fixed;
  top: 0px;
  padding: 96px 16px;
  left: 0;
  background: #023475;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.4s;

  transform: translateX(-100%);
}
.menu.show {
  transform: translateX(0);
}
.menu ul a {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: white;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid #0d55a3;
  display: flex;
}
ul li:last-child a {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: 0;
}
.tel {
  color: var(--yellow, #f9e567);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 15.6px */
  border-radius: 4px;
  border: 1px solid var(--yellow, #f9e567);
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

.wrap :deep(.ant-btn) {
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
</style>
