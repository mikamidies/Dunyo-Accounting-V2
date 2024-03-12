<template>
  <div class="wrap">
    <div class="container">
      <div class="header">
        <h4 class="title">{{ $store.state.translations["main.partners"] }}</h4>
        <div class="buttons">
          <div class="partPrev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M18.668 9.3335L13.3346 16.0002L18.668 22.6668"
                stroke="#023475"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="partNext">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M13.332 9.3335L18.6654 16.0002L13.332 22.6668"
                stroke="#023475"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="swiper partnersSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in partners" :key="item.id">
            <img :src="item.image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";

export default {
  props: ["partners"],

  mounted() {
    new Swiper(".partnersSwiper", {
      slidesPerView: 2,
      loop: true,
      navigation: {
        nextEl: ".partNext",
        prevEl: ".partPrev",
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
        },
      },
      autoplay: {
        delay: 2000,
      },
    });
  },
};
</script>

<style scoped>
.wrap {
  padding: 120px 0;
}
.header {
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.buttons {
  display: flex;
  align-items: center;
  gap: 16px;
}
.partPrev,
.partNext {
  border-radius: 50%;
  border: 1px solid #71b1fa;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.title {
  color: var(--Black, #020105);
  font-family: var(--decor-sm);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 57.6px */
  padding-left: 16px;
  border-left: 4px solid #bba14f;
}
.swiper {
  border: 1px solid var(--grey-8, #ebebeb);
  border-right: 0;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #ebebeb;
  height: 152px;
}
.swiper-slide img {
  width: 182px;
  height: 70%;
  object-fit: contain;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 48px 0;
  }
  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
  }
  .buttons {
    display: none;
  }
  .header {
    margin-bottom: 24px;
  }
  .swiper-slide {
    height: 74px;
  }
  .swiper-slide img {
    width: 80%;
  }
  .swiper {
    border-right: 1px solid #ebebeb;
  }
}
</style>
