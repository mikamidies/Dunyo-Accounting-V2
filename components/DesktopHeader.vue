<template>
  <div class="wrap" id="navbar">
    <ApplicationModal ref="appModal" />

    <div class="container">
      <div class="left">
        <NuxtLink class="brand-main" to="/"
          ><img src="@/assets/img/logo/brand.svg" alt=""
        /></NuxtLink>
        <NuxtLink class="brand-colored" to="/"
          ><img src="@/assets/img/logo/colored.svg" alt=""
        /></NuxtLink>
        <ul>
          <li>
            <NuxtLink class="link" to="/"> Main </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/about"> About us </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/services"> Services </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/news"> News </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/contacts"> Contacts </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="lang">
          Eng
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.414376 1.03151C0.673133 0.70806 1.1451 0.655619 1.46855 0.914376L6.00003 4.53956L10.5315 0.914376C10.855 0.655619 11.3269 0.70806 11.5857 1.03151C11.8444 1.35495 11.792 1.82692 11.4685 2.08568L6.46855 6.08568C6.19464 6.30481 5.80542 6.30481 5.53151 6.08568L0.531506 2.08568C0.20806 1.82692 0.155619 1.35495 0.414376 1.03151Z"
              fill="white"
            />
          </svg>
        </div>
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
</style>
