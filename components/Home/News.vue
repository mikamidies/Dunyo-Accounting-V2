<template>
  <div class="wrap">
    <img src="@/assets/img/news-bird.png" alt="" class="bird" />

    <div class="container">
      <div class="header">
        <h4 class="title">News</h4>

        <div class="buttons">
          <div class="prev">
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
          <div class="next">
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
          <div class="swiper-slide">
            <div class="cardo">
              <NuxtLink to="/">
                <div class="img">
                  <img src="@/assets/img/new.jpg" alt="" />
                </div>
                <div class="tags">
                  <div class="tag">Мировые новости</div>
                  <div class="tag">Мировые новости</div>
                </div>
                <div class="bottom">
                  <div class="content">
                    <h2 class="name">Corporate Bank Account Opening</h2>
                    <p class="sub">
                      Data can be taken from an unlimited number of Camunda BPM
                      microservices and applications, as well as ot
                    </p>
                  </div>
                  <div class="date">
                    <p>1.5.2024</p>

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
          <div class="swiper-slide">
            <div class="cardo">
              <NuxtLink to="/">
                <div class="img">
                  <img src="@/assets/img/new.jpg" alt="" />
                </div>
                <div class="tags">
                  <div class="tag">Мировые новости</div>
                  <div class="tag">Мировые новости</div>
                </div>
                <div class="bottom">
                  <div class="content">
                    <h2 class="name">Corporate Bank Account Opening</h2>
                    <p class="sub">
                      Data can be taken from an unlimited number of Camunda BPM
                      microservices and applications, as well as ot
                    </p>
                  </div>
                  <div class="date">
                    <p>1.5.2024</p>

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
          <div class="swiper-slide">
            <div class="cardo">
              <NuxtLink to="/">
                <div class="img">
                  <img src="@/assets/img/new.jpg" alt="" />
                </div>
                <div class="tags">
                  <div class="tag">Мировые новости</div>
                  <div class="tag">Мировые новости</div>
                </div>
                <div class="bottom">
                  <div class="content">
                    <h2 class="name">Corporate Bank Account Opening</h2>
                    <p class="sub">
                      Data can be taken from an unlimited number of Camunda BPM
                      microservices and applications, as well as ot
                    </p>
                  </div>
                  <div class="date">
                    <p>1.5.2024</p>

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
          <div class="swiper-slide">
            <div class="cardo">
              <NuxtLink to="/">
                <div class="img">
                  <img src="@/assets/img/new.jpg" alt="" />
                </div>
                <div class="tags">
                  <div class="tag">Мировые новости</div>
                  <div class="tag">Мировые новости</div>
                </div>
                <div class="bottom">
                  <div class="content">
                    <h2 class="name">Corporate Bank Account Opening</h2>
                    <p class="sub">
                      Data can be taken from an unlimited number of Camunda BPM
                      microservices and applications, as well as ot
                    </p>
                  </div>
                  <div class="date">
                    <p>1.5.2024</p>

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
  mounted() {
    new Swiper(this.$refs.newsSwiper, {
      slidesPerView: 3,
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
.prev,
.next {
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
</style>
