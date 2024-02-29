<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">News</h4>

      <div class="grid">
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
                <h2 class="name">
                  Corporate Bank Account Opening Corporate Bank Account Opening
                </h2>
                <p class="sub">
                  Data can be taken from an unlimited number of Camunda BPM
                  microservices and applications, as well as ot Data can be
                  taken from an unlimited number of Camunda BPM microservices
                  and applications
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
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";

export default {
  mounted() {
    new Swiper(".newsSwiper", {
      slidesPerView: 3,
      spaceBetween: 24,
      slidesPerGroup: 1,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
    });
  },
};
</script>

<style scoped>
.wrap {
  padding: 96px 0;
  background: #023475;
}
.title {
  color: var(--White, #fff);
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 24px;
  padding-left: 16px;
  border-left: 4px solid #bba14f;
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
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.cardo a {
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
