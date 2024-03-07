<template>
  <div class="wrap">
    <img src="@/assets/img/footer-bird.png" class="bird" alt="" />

    <div class="container">
      <div class="grid">
        <div class="sec">
          <h4 class="title">
            {{ $store.state.translations["main.contacts"] }}
          </h4>
          <p class="sub">
            {{ $store.state.translations["main.footer-txt"] }}
          </p>
        </div>
        <div class="sec items" style="justify-items: end">
          <div class="item">
            <p class="sup">{{ $store.state.translations["main.phone"] }}</p>
            <a :href="`tel:${info?.nbm}`" class="value">{{ info?.nbm }}</a>
          </div>

          <div class="item">
            <p class="sup">{{ $store.state.translations["main.office-phone"] }}</p>
            <a :href="`tel:${info?.nbm}`" class="value">{{ $store.state.translations["main.office-phone-value"] }}</a>
          </div>

          <div class="item">
            <p class="sup">{{ $store.state.translations["main.email"] }}</p>
            <a :href="`mailto:${info?.email}`" class="value">
              {{ info?.email }}
            </a>
          </div>
        </div>
        <div class="sec">
          <p class="sup">{{ $store.state.translations["main.office"] }}</p>
          <p class="value">
            {{ info?.adres }}
          </p>
        </div>
        <div class="sec ender">
          <div>
            <p class="sup">{{ $store.state.translations["main.social"] }}</p>
            <div class="socials">
              <a :href="info?.telegram" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                >
                  <path
                    d="M0.896455 6.79637L16.2851 0.145754C17.0088 -0.166999 17.7929 0.441585 17.6695 1.22023L15.5655 14.4962C15.4355 15.3162 14.4206 15.6299 13.8506 15.0262L10.3977 11.3686C9.72058 10.6514 9.66752 9.54749 10.2727 8.76857L12.7107 5.63084C12.8501 5.45146 12.63 5.21549 12.4414 5.34204L7.59406 8.59387C6.77148 9.14569 5.77341 9.37269 4.79309 9.2309L1.15003 8.70401C0.15204 8.55968 -0.0291716 7.1964 0.896455 6.79637Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a :href="info?.facebook" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                >
                  <path
                    d="M12.2861 0C10.1822 0 8.47671 1.79086 8.47671 4C8.47671 4.33382 8.51565 4.65809 8.58903 4.96808C6.56611 4.96808 3.51914 4.55908 0.974438 2.00961C0.636055 1.67059 0.0120846 1.89726 0.035556 2.37567C0.412681 10.0627 3.70477 12.3049 5.4001 12.4444C4.30535 13.5257 2.7151 14.3791 1.11489 14.7622C0.692564 14.8633 0.588236 15.3256 1.0012 15.4599C2.14623 15.8323 3.78516 15.9758 4.66735 16C10.9082 16 15.9806 10.7471 16.0935 4.22229C16.9129 3.68945 17.4377 2.5325 17.7326 1.71291C17.8044 1.5133 17.4773 1.28073 17.2815 1.36226C16.6694 1.61708 15.8923 1.67749 15.2304 1.46181C14.5318 0.569266 13.4722 0 12.2861 0Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a :href="info?.instagram" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clip-path="url(#clip0_713_2387)">
                    <path
                      d="M16.0013 2.66797C19.624 2.66797 20.076 2.6813 21.4973 2.74797C22.9173 2.81464 23.884 3.0373 24.7346 3.36797C25.6146 3.70664 26.356 4.1653 27.0973 4.9053C27.7753 5.57183 28.2999 6.37809 28.6346 7.26797C28.964 8.1173 29.188 9.0853 29.2546 10.5053C29.3173 11.9266 29.3346 12.3786 29.3346 16.0013C29.3346 19.624 29.3213 20.076 29.2546 21.4973C29.188 22.9173 28.964 23.884 28.6346 24.7346C28.3009 25.625 27.7761 26.4315 27.0973 27.0973C26.4306 27.7751 25.6244 28.2996 24.7346 28.6346C23.8853 28.964 22.9173 29.188 21.4973 29.2546C20.076 29.3173 19.624 29.3346 16.0013 29.3346C12.3786 29.3346 11.9266 29.3213 10.5053 29.2546C9.0853 29.188 8.11863 28.964 7.26797 28.6346C6.37774 28.3006 5.57134 27.7759 4.9053 27.0973C4.22718 26.4309 3.70254 25.6246 3.36797 24.7346C3.0373 23.8853 2.81464 22.9173 2.74797 21.4973C2.6853 20.076 2.66797 19.624 2.66797 16.0013C2.66797 12.3786 2.6813 11.9266 2.74797 10.5053C2.81464 9.08397 3.0373 8.11863 3.36797 7.26797C3.70162 6.37754 4.22637 5.57106 4.9053 4.9053C5.57153 4.22694 6.37787 3.70227 7.26797 3.36797C8.11863 3.0373 9.08397 2.81464 10.5053 2.74797C11.9266 2.6853 12.3786 2.66797 16.0013 2.66797ZM16.0013 9.33463C14.2332 9.33464 12.5375 10.037 11.2873 11.2873C10.037 12.5375 9.33464 14.2332 9.33463 16.0013C9.33464 17.7694 10.037 19.4651 11.2873 20.7153C12.5375 21.9656 14.2332 22.668 16.0013 22.668C17.7694 22.668 19.4651 21.9656 20.7153 20.7153C21.9656 19.4651 22.668 17.7694 22.668 16.0013C22.668 14.2332 21.9656 12.5375 20.7153 11.2873C19.4651 10.037 17.7694 9.33463 16.0013 9.33463ZM24.668 9.0013C24.668 8.55927 24.4924 8.13535 24.1798 7.82279C23.8673 7.51023 23.4433 7.33464 23.0013 7.33464C22.5593 7.33464 22.1353 7.51023 21.8228 7.82279C21.5102 8.13535 21.3346 8.55927 21.3346 9.0013C21.3346 9.44333 21.5102 9.86725 21.8228 10.1798C22.1353 10.4924 22.5593 10.668 23.0013 10.668C23.4433 10.668 23.8673 10.4924 24.1798 10.1798C24.4924 9.86725 24.668 9.44333 24.668 9.0013ZM16.0013 12.0013C17.0622 12.0013 18.0796 12.4227 18.8297 13.1729C19.5799 13.923 20.0013 14.9404 20.0013 16.0013C20.0013 17.0622 19.5799 18.0796 18.8297 18.8297C18.0796 19.5799 17.0622 20.0013 16.0013 20.0013C14.9404 20.0013 13.923 19.5799 13.1729 18.8297C12.4227 18.0796 12.0013 17.0622 12.0013 16.0013C12.0013 14.9404 12.4227 13.923 13.1729 13.1729C13.923 12.4227 14.9404 12.0013 16.0013 12.0013Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_713_2387">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a :href="info?.youtube" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clip-path="url(#clip0_883_2405)">
                    <path
                      d="M24.4467 24.452H20.8933V18.8827C20.8933 17.5547 20.8667 15.8453 19.04 15.8453C17.188 15.8453 16.9053 17.2907 16.9053 18.7853V24.452H13.3507V13H16.764V14.56H16.8107C17.288 13.6613 18.448 12.7107 20.1813 12.7107C23.7813 12.7107 24.448 15.0813 24.448 18.1653V24.452H24.4467ZM9.33733 11.4333C9.06607 11.4337 8.79741 11.3805 8.54675 11.2768C8.29609 11.1731 8.06836 11.021 7.87661 10.8291C7.68486 10.6372 7.53287 10.4094 7.42935 10.1587C7.32582 9.90795 7.27281 9.63926 7.27333 9.368C7.2736 8.95978 7.39491 8.5608 7.62192 8.22153C7.84894 7.88225 8.17146 7.61791 8.54871 7.46194C8.92595 7.30596 9.34098 7.26536 9.74131 7.34525C10.1416 7.42515 10.5093 7.62197 10.7977 7.91081C11.0862 8.19965 11.2826 8.56755 11.3619 8.96798C11.4413 9.3684 11.4002 9.78338 11.2437 10.1604C11.0872 10.5375 10.8225 10.8597 10.4829 11.0862C10.1434 11.3128 9.74422 11.4336 9.336 11.4333H9.33733ZM11.1187 24.452H7.55467V13H11.12V24.452H11.1187ZM26.2267 4H5.772C4.79067 4 4 4.77333 4 5.72933V26.2707C4 27.2267 4.792 28 5.77067 28H26.2213C27.2 28 28 27.2267 28 26.2707V5.72933C28 4.77333 27.2 4 26.2213 4H26.2253H26.2267Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_883_2405">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p>{{ $store.state.translations["main.copy"] }}</p>
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
        <div class="by">
          {{ $store.state.translations["main.by"] }}
          <a href="https://ndc.uz/" target="_blank">{{
            $store.state.translations["main.ndc"]
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import infoApi from "@/api/info";

export default {
  data() {
    return {
      info: "",
    };
  },

  async mounted() {
    const infoData = await infoApi.getInfo(this.$axios);

    this.info = infoData.data;
  },
};
</script>

<style scoped>
.wrap {
  background: linear-gradient(94deg, #023475 3.94%, #0459ae 103.12%);
  padding: 72px 0 48px 0;
  position: relative;
}
.bird {
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.5;
  pointer-events: none;
}
.title {
  color: var(--White, #fff);
  font-family: var(--decor-sm);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%; /* 35.2px */
  text-transform: uppercase;
  margin-bottom: 32px;
}
.sub {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  max-width: 640px;
  display: flex;
}
.sup {
  color: #7096c1;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  margin-bottom: 12px;
}
.value {
  color: var(--White, #fff);
  font-family: var(--decor-bd);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 35.2px */
  text-transform: uppercase;
}
.email {
  display: flex;
  align-items: center;
  gap: 8px;
}
.email .logo {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.email p {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 48px;
}
.items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.ender {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.form {
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  margin-top: 18px;
  min-width: 560px;
  display: grid;
  grid-template-columns: 7fr 3fr;
  padding: 8px;
}
.form button {
  border-radius: 4px;
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
.form input {
  width: 100%;
  color: #87aacb;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.socials {
  display: flex;
  align-items: center;
  gap: 40px;
  position: relative;
  z-index: 22;
}
.bottom {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 72px;
}
.bottom p {
  color: #90a7c4;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.bottom ul {
  display: flex;
  align-items: center;
  gap: 48px;
  justify-content: center;
}
.by {
  text-align: end;
}
.bottom a {
  color: var(--White, #fff) !important;
  white-space: nowrap;
  text-decoration: underline;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.by {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.by a {
  color: #f9e567 !important;
}
@media screen and (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
  .items {
    grid-template-columns: repeat(1, 1fr);
    justify-items: flex-start !important;
  }
  .bird {
    display: none;
  }
  .wrap {
    padding: 48px 0;
  }
  .title {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 110%; /* 19.8px */
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .sub {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .sup {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-bottom: 4px;
  }
  .value {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */
    text-transform: uppercase;
  }
  .ender {
    align-items: flex-start;
  }
  .bottom {
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .bottom ul {
    order: 0;
    flex-wrap: wrap;
    margin-bottom: 16px;
    gap: 40px;
    justify-content: flex-start;
    row-gap: 24px;
  }
  .bottom p {
    order: 1;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .by,
  .by a {
    order: 2;
    text-align: left;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
}
</style>
