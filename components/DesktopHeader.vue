<template>
  <div class="wrap" id="navbar">
    <ApplicationModal ref="appModal" />

    <div class="container">
      <div class="left">
        <NuxtLink class="brand-main" :to="localePath('/')"
          ><img src="@/assets/img/logo/brand.svg" alt=""
        /></NuxtLink>
        <NuxtLink class="brand-colored" :to="localePath('/')"
          ><img src="@/assets/img/logo/colored.svg" alt=""
        /></NuxtLink>
        <ul>
          <li>
            <NuxtLink class="link" :to="localePath('/')"> Main </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" :to="localePath('/about')">
              About us
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" :to="localePath('/services')">
              Services
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" :to="localePath('/news')"> News </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" :to="localePath('/contacts')">
              Contacts
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="right">
        <a-dropdown>
          <a-menu slot="overlay">
            <a-menu-item key="1">
              <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
            </a-menu-item>
            <a-menu-item key="2">
              <NuxtLink :to="switchLocalePath('ar')">Arab</NuxtLink>
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
        <button class="tel" @click="openAppModal()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M18 16.5V14.8541C18 14.0363 17.5021 13.3008 16.7428 12.9971L14.7086 12.1835C13.7429 11.7971 12.6422 12.2156 12.177 13.146L12 13.5C12 13.5 9.5 13 7.5 11C5.5 9 5 6.5 5 6.5L5.35402 6.32299C6.28438 5.85781 6.70285 4.75714 6.31654 3.79136L5.50289 1.75722C5.19916 0.997903 4.46374 0.5 3.64593 0.5H2C0.895431 0.5 0 1.39543 0 2.5C0 11.3366 7.16344 18.5 16 18.5C17.1046 18.5 18 17.6046 18 16.5Z"
              fill="#F9E567"
            />
          </svg>
          Связаться с нами
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openAppModal() {
      this.$refs.appModal.openModal();
    },

    closeAppModal() {
      this.$refs.appModal.closeModal();
    },
  },

  mounted() {
    function scrollHeader() {
      const navbar = document.getElementById("navbar");
      if (this.scrollY >= 50) {
        navbar.classList.add("scroll");
      } else {
        navbar.classList.remove("scroll");
      }
    }
    window.addEventListener("scroll", scrollHeader);
  },
};
</script>

<style scoped>
.brand-main {
  display: block;
  width: 105px;
}
.brand-colored {
  display: none;
  width: 105px;
}
a img {
  width: 105px;
  height: 105px;
  object-fit: contain;
}
.wrap {
  padding: 40px 0;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: 0.4s;
}
.wrap.scroll {
  padding: 16px 0;
  background: var(--blue);
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left {
  display: flex;
  align-items: center;
  gap: 138px;
}
.left ul {
  display: flex;
  align-items: center;
  gap: 40px;
}
.left a {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.right {
  display: flex;
  align-items: center;
  gap: 32px;
}
.right button {
  border-radius: 8px;
  border: 1px solid var(--yellow, #f9e567);
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--yellow, #f9e567);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
}
.lang {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  display: flex;
  align-items: center;
  gap: 8px;
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
