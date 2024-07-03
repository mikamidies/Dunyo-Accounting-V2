<template>
  <div class="wrap">
    <ApplicationModal ref="appModal" />

    <video autoplay muted playsinline loop src="/video.mp4"></video>
    <img src="@/assets/img/hero-bird.png" alt="" class="bird" />
    <div class="container">
      <div class="slider">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="content">
                <p class="sup">
                  {{ $store.state.translations["main.hero-sup"] }}
                </p>
                <h4 class="title">
                  {{ $store.state.translations["main.hero-title"] }}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tags">
        <NuxtLink
          :to="localePath(`/services/${item.slug}`)"
          class="tag"
          v-for="item in services"
          :key="item.id"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import infoApi from "@/api/info";

import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";

export default {
  props: ["services"],

  data() {
    return {
      info: "",
    };
  },

  async mounted() {
    const infoData = await infoApi.getInfo(this.$axios);

    this.info = infoData.data;

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
  overflow: hidden;
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
  transform: scale(1.1);
}
.bird {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  opacity: 0.2;
  height: 100%;
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
  row-gap: 12px;
  flex-wrap: wrap;
  position: relative;
  z-index: 9;
  margin-top: -24px;
}
.tag {
  color: var(--White, #fff) !important;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  border-radius: 70px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  padding: 8px 24px;
  white-space: nowrap;
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
@media screen and (max-width: 1024px) {
  .wrap {
    overflow: hidden;
  }
  .sup {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 12px;
  }
  .title {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    margin-bottom: 12px;
  }
  .sub {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
  .numbers {
    flex-direction: column;
    margin-top: 32px;
    gap: 8px;
  }
  .numbers button {
    width: 100%;
    justify-content: center;
    gap: 8px;
    padding: 10px 24px;
  }
  .numbers a:last-child {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .heroNext,
  .heroPrev {
    display: none;
  }
  .slider {
    height: 90%;
  }
  .tags {
    gap: 8px;
    overflow-x: auto;
    margin: 0 -16px;
    padding: 0 16px;
  }
  .tags::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .tags {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .tag {
    white-space: nowrap;
  }
  .bird {
    display: none;
  }
  .tags {
    flex-wrap: nowrap;
  }
}
</style>
