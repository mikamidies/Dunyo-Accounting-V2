<template>
  <div class="wrap">
    <ApplicationModal ref="appModal" />

    <button class="heroPrev">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.46967 4.46967C0.176776 4.76256 0.176776 5.23744 0.46967 5.53033L4.46967 9.53033C4.76256 9.82322 5.23744 9.82322 5.53033 9.53033C5.82322 9.23744 5.82322 8.76256 5.53033 8.46967L2.81066 5.75L13 5.75C13.4142 5.75 13.75 5.41421 13.75 5C13.75 4.58579 13.4142 4.25 13 4.25L2.81066 4.25L5.53033 1.53033C5.82322 1.23744 5.82322 0.762563 5.53033 0.46967C5.23744 0.176777 4.76256 0.176777 4.46967 0.46967L0.46967 4.46967Z"
          fill="white"
        />
      </svg>
    </button>
    <button class="heroNext">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.46967 4.46967C0.176776 4.76256 0.176776 5.23744 0.46967 5.53033L4.46967 9.53033C4.76256 9.82322 5.23744 9.82322 5.53033 9.53033C5.82322 9.23744 5.82322 8.76256 5.53033 8.46967L2.81066 5.75L13 5.75C13.4142 5.75 13.75 5.41421 13.75 5C13.75 4.58579 13.4142 4.25 13 4.25L2.81066 4.25L5.53033 1.53033C5.82322 1.23744 5.82322 0.762563 5.53033 0.46967C5.23744 0.176777 4.76256 0.176777 4.46967 0.46967L0.46967 4.46967Z"
          fill="white"
        />
      </svg>
    </button>

    <video autoplay muted playsinline loop src="/video.mp4"></video>
    <img src="@/assets/img/hero-bird.png" alt="" class="bird" />
    <div class="container">
      <div class="slider">
        <div class="swiper heroSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="content">
                <p class="sup">Trust. Accuracy. Growth</p>
                <h4 class="title">
                  Navigating through the numbers and developing customized
                  solutions
                </h4>
                <p class="sub">
                  Navigating through the numbers and developing customized
                  solutions
                </p>
                <div class="numbers">
                  <button @click="openAppModal()" class="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <path
                        d="M18 16.5V14.8541C18 14.0363 17.5021 13.3008 16.7428 12.9971L14.7086 12.1835C13.7429 11.7971 12.6422 12.2156 12.177 13.146L12 13.5C12 13.5 9.5 13 7.5 11C5.5 9 5 6.5 5 6.5L5.35402 6.32299C6.28438 5.85781 6.70285 4.75714 6.31654 3.79136L5.50289 1.75722C5.19916 0.997903 4.46374 0.5 3.64593 0.5H2C0.895431 0.5 0 1.39543 0 2.5C0 11.3366 7.16344 18.5 16 18.5C17.1046 18.5 18 17.6046 18 16.5Z"
                        fill="#866719"
                      />
                    </svg>
                    Связатся с нами
                  </button>
                  <a href="tel:+971 52 246 4048" class="tel">
                    +971 52 246 4048
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="content">
                <p class="sup">Trust. Accuracy. Growth</p>
                <h4 class="title">
                  Navigating through the numbers and developing customized
                  solutions
                </h4>
                <p class="sub">
                  Navigating through the numbers and developing customized
                  solutions
                </p>
                <div class="numbers">
                  <button @click="openAppModal()">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <path
                        d="M18 16.5V14.8541C18 14.0363 17.5021 13.3008 16.7428 12.9971L14.7086 12.1835C13.7429 11.7971 12.6422 12.2156 12.177 13.146L12 13.5C12 13.5 9.5 13 7.5 11C5.5 9 5 6.5 5 6.5L5.35402 6.32299C6.28438 5.85781 6.70285 4.75714 6.31654 3.79136L5.50289 1.75722C5.19916 0.997903 4.46374 0.5 3.64593 0.5H2C0.895431 0.5 0 1.39543 0 2.5C0 11.3366 7.16344 18.5 16 18.5C17.1046 18.5 18 17.6046 18 16.5Z"
                        fill="#866719"
                      />
                    </svg>
                    Связатся с нами
                  </button>
                  <a href="tel:+971 52 246 4048"> +971 52 246 4048 </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="content">
                <p class="sup">Trust. Accuracy. Growth</p>
                <h4 class="title">
                  Navigating through the numbers and developing customized
                  solutions
                </h4>
                <p class="sub">
                  Navigating through the numbers and developing customized
                  solutions
                </p>
                <div class="numbers">
                  <button @click="openAppModal()">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <path
                        d="M18 16.5V14.8541C18 14.0363 17.5021 13.3008 16.7428 12.9971L14.7086 12.1835C13.7429 11.7971 12.6422 12.2156 12.177 13.146L12 13.5C12 13.5 9.5 13 7.5 11C5.5 9 5 6.5 5 6.5L5.35402 6.32299C6.28438 5.85781 6.70285 4.75714 6.31654 3.79136L5.50289 1.75722C5.19916 0.997903 4.46374 0.5 3.64593 0.5H2C0.895431 0.5 0 1.39543 0 2.5C0 11.3366 7.16344 18.5 16 18.5C17.1046 18.5 18 17.6046 18 16.5Z"
                        fill="#866719"
                      />
                    </svg>
                    Связатся с нами
                  </button>
                  <a href="tel:+971 52 246 4048"> +971 52 246 4048 </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tags">
        <div class="tag">Audit Services</div>
        <div class="tag">Taxation Services</div>
        <div class="tag">Accounting Services</div>
        <div class="tag">Corporate Bank Account Opening</div>
        <div class="tag">Business Consulting</div>
        <div class="tag">Business in UAE</div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";

export default {
  mounted() {
    new Swiper(".heroSwiper", {
      loop: true,
      navigation: {
        nextEl: ".heroNext",
        prevEl: ".heroPrev",
      },
    });
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
  position: relative;
  height: 100vh;
}
.wrap::after {
  background: linear-gradient(
    0deg,
    rgba(0, 12, 77, 0.8) 0%,
    rgba(0, 12, 77, 0.8) 100%
  );
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}
video {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
.bird {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  opacity: 0.2;
}
.container {
  height: 100%;
  min-width: 0;
}
.slider {
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}
.swiper {
  z-index: 8;
  width: 100%;
  margin-top: 100px;
}
.sup {
  margin-bottom: 16px;
  color: var(--White, #fff);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
}
.title {
  color: var(--White, #fff);
  font-size: 56px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 22px;
  max-width: 955px;
}
.sub {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.numbers {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 48px;
}
.numbers button {
  border-radius: 8px;
  background: var(--yellow, #f9e567);
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--Dark-yellow, #866719);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
}
.numbers a:last-child {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
}
.tags {
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
  z-index: 9;
  margin-top: -24px;
}
.tag {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  border-radius: 70px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  padding: 8px 24px;
}
.heroPrev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 24px;
  z-index: 99;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  border-radius: 50%;
}
.heroNext {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 24px;
  z-index: 99;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  border-radius: 50%;
}
.heroNext svg {
  transform: rotate(180deg);
}
</style>
