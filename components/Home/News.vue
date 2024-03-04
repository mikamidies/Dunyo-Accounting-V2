<template>
  <div class="wrap">
    <img src="@/assets/img/news-bird.png" alt="" class="bird" />

    <div class="container">
      <div class="header">
        <h4 class="title">News</h4>

        <div class="buttons">
          <div class="newsPrev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M18.668 9.33325L13.3346 15.9999L18.668 22.6666"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="newsNext">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M13.332 9.33325L18.6654 15.9999L13.332 22.6666"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div ref="newsSwiper" class="swiper newsSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in news" :key="item.id">
            <div class="cardo">
              <NuxtLink :to="localePath(`/news/${item.slug}`)">
                <div class="img">
                  <img :src="item.image" alt="" />
                </div>
                <div class="tags">
                  <div class="tag">{{ item.category.title }}</div>
                </div>
                <div class="bottom">
                  <div class="content">
                    <h2 class="name">{{ item.title }}</h2>
                    <div v-html="item.text" class="sub"></div>
                  </div>
                  <div class="date">
                    <p>{{ item.date }}</p>

                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10 7L14 12L10 17"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </NuxtLink>
            </div>
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
  props: ["news"],

  mounted() {
    new Swiper(this.$refs.newsSwiper, {
      slidesPerView: 1.3,
      spaceBetween: 16,
      navigation: {
        prevEl: ".newsPrev",
        nextEl: ".newsNext",
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      },
    });
  },
};
</script>

<style scoped>
.wrap {
  padding: 96px 0;
  position: relative;
  background: #023475;
}
.bird {
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.3;
  pointer-events: none;
}
.title {
  color: var(--White, #fff);
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-left: 16px;
  border-left: 4px solid #bba14f;
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
.newsPrev,
.newsNext {
  border-radius: 50%;
  border: 1px solid #71b1fa;
  width: 48px;
  height: 48px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.img img {
  width: 100%;
  height: 263px;
  object-fit: cover;
  display: flex;
}
.tags {
  margin-top: 13px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.tag {
  padding: 8px 12px;
  border-radius: 53px;
  background: rgba(255, 255, 255, 0.24);
  color: var(--White, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}
.name {
  color: var(--White, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  margin-bottom: 8px;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sub {
  color: #c6e3ff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sub :deep(a) {
  color: white;
}
.date {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid #c6e3ff;
}
.date p {
  color: var(--White, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
}
.bottom {
  display: flex;
  flex-direction: column;
  height: 45%;
  justify-content: space-between;
}
.cardo {
  height: 608px;
  transition: 0.4s;
  overflow: hidden;
}
.cardo a {
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.cardo:hover {
  background: rgba(255, 255, 255, 0.1);
}
.swiper {
  min-width: 0;
  display: block;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 64px 0;
  }
  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
  }
  .header {
    margin-bottom: 24px;
  }
  .buttons {
    display: none;
  }
  .bird {
    top: 50%;
    transform: translateY(-50%);
    right: -30%;
  }
  .cardo a {
    padding: 0;
  }
  .swiper {
    margin-right: -16px;
    padding-right: 16px;
  }
  .img img {
    height: 156px;
  }
  .tag {
    padding: 4px 8px;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .name {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 4px;
  }
  .sub {
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    max-width: 90%;
    -webkit-line-clamp: 2;
  }
  .cardo {
    height: 330px;
  }
}
</style>
