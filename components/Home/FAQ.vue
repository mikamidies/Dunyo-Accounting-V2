<template>
  <div class="wrap">
    <ApplicationModal ref="appModal" />

    <div class="container">
      <h4 class="title">{{ $store.state.translations["main.faq"] }}</h4>
      <div class="grid">
        <div class="left">
          <div class="buttons">
            <button
              v-for="item in faq"
              :key="item.id"
              @click="activeTab = item.id"
              :class="{ active: activeTab == item.id }"
            >
              {{ item.question }}
            </button>
          </div>
        </div>
        <div class="right">
          <div class="cards">
            <div class="cardo">
              <img src="@/assets/img/palm.png" alt="" class="palm" />

              <div
                class="content"
                v-for="item in faq"
                :key="item.id"
                :class="{ active: activeTab == item.id }"
              >
                <h4 class="name">{{ item.question }}</h4>
                <div class="sub" v-html="item.answer"></div>
              </div>

              <div class="call" @click="openAppModal()">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M18 16.5V14.8541C18 14.0363 17.5021 13.3008 16.7428 12.9971L14.7086 12.1835C13.7429 11.7971 12.6422 12.2156 12.177 13.146L12 13.5C12 13.5 9.5 13 7.5 11C5.5 9 5 6.5 5 6.5L5.35402 6.32299C6.28438 5.85781 6.70285 4.75714 6.31654 3.79136L5.50289 1.75722C5.19916 0.997903 4.46374 0.5 3.64593 0.5H2C0.895431 0.5 0 1.39543 0 2.5C0 11.3366 7.16344 18.5 16 18.5C17.1046 18.5 18 17.6046 18 16.5Z"
                      fill="#216FBF"
                    />
                  </svg>

                  {{ $store.state.translations["main.contact-us"] }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: this.faq[0]?.id,
    };
  },

  props: ["faq"],

  mounted() {
    console.log(this.faq);
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
  padding: 120px 0;
  background: #f9f9fa;
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
  margin-bottom: 40px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
}
.buttons {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.buttons button {
  color: var(--Black, #020105);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  padding: 24px 32px;
  display: flex;
  width: 100%;
}
.buttons button.active {
  border-radius: 8px;
  background: var(--White, #fff);
  color: #216fbf;
}
.cardo {
  border-radius: 8px;
  background: var(--White, #fff);
  padding: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 232px;
}
.palm {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 300px;
  object-fit: cover;
}
.name {
  color: #216fbf;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 38.4px */
  margin-bottom: 40px;
}
.sub {
  color: var(--Black, #020105);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
}
.sub :deep(p) {
  margin-bottom: 12px;
  display: flex;
}
.sub :deep(ul) {
  padding-left: 24px;
}
.sub :deep(li) {
  list-style: disc;
  margin-bottom: 12px;
}
.call button {
  color: #216fbf;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  padding: 12px 24px;
  display: inline-flex;
  align-items: center;
  gap: 24px;
  border-radius: 8px;
  background: #f9f9fa;
}
.content {
  display: none;
}
.content.active {
  display: block;
}
@media screen and (max-width: 1024px) {
  .grid {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .cardo {
    padding: 16px;
    gap: 24px;
    border-radius: 8px;
    background: var(--White, #fff);
  }
  .name {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 8px;
  }
  .sub {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .palm {
    display: none;
  }
  .call button {
    width: 100%;
    justify-content: center;
    gap: 8px;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    padding: 12px;
  }
  .buttons button {
    width: 100%;
    padding: 12px 24px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
  }
  .wrap {
    padding: 48px 0;
  }
}
</style>
