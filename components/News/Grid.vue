<template>
  <div class="wrap">
    <div class="container">
      <div class="filter">
        <div class="top">
          <div class="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M22 22.5L20 20.5M2 12C2 6.75329 6.25329 2.5 11.5 2.5C16.7467 2.5 21 6.75329 21 12C21 17.2467 16.7467 21.5 11.5 21.5C6.25329 21.5 2 17.2467 2 12Z"
                stroke="#020105"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              v-model="search"
              type="text"
              :placeholder="$store.state.translations[`inner.search`]"
            />
          </div>
          <!-- <div class="sort">
            <a-select default-value="lucy">
              <a-select-option value="jack"> Jack </a-select-option>
              <a-select-option value="lucy"> Lucy </a-select-option>
            </a-select>
          </div> -->
        </div>
        <div class="cats">
          <button
            :class="{ disabled: Object.keys($route.query)?.length == 2 }"
            @click="allNews()"
          >
            {{ $store.state.translations["inner.all-news"] }}
          </button>
          <button
            v-for="category in newsCategories"
            :key="category.id"
            @click="sortCategory(category.id)"
            :class="{ disabled: $route.query.category == category.id }"
          >
            {{ category.title }}
          </button>
        </div>
      </div>

      <div class="grid" v-if="news?.length > 0">
        <div v-for="item in news" :key="item.id" class="cardo">
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

      <div class="empty" v-else>
        <p>No Data</p>
      </div>

      <div class="pager" v-if="news?.length > 6">
        <a-pagination
          v-model="current"
          :total="totalPage"
          :page-size.sync="pageSize"
          show-less-items
          @change="pageChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import newsApi from "@/api/news";

export default {
  props: ["newsCategories"],

  data() {
    return {
      search: "",
      news: "",

      current: 1,
      pageSize: 6,
      totalPage: 1,
    };
  },

  async fetch() {},

  async mounted() {
    try {
      const newsData = await newsApi.getNews(this.$axios, {
        params: { ...this.$route.query, page_size: 6 },
        headers: {
          language: this.$i18n.locale,
        },
      });
      this.news = newsData.results;
      this.totalPage = newsData.total;
    } catch (e) {
      console.log(e);
    }

    if (
      !Object.keys(this.$route.query).includes("page") ||
      !Object.keys(this.$route.query).includes("page_size")
    ) {
      await this.$router.replace({
        path: this.$route.fullPath,
        query: { page: 1, page_size: 6 },
      });
    }
    this.current = Number(this.$route.query.page);
  },

  methods: {
    async pageChange() {
      try {
        const newsData = await newsApi.getNews(this.$axios, {
          params: { ...this.$route.query, page_size: 6 },
          headers: {
            language: this.$i18n.locale,
          },
        });
        this.news = newsData.results;
        this.totalPage = newsData.total;
      } catch (e) {
        console.log(e);
      }
    },

    async sortCategory(value) {
      let query = { ...this.$route.query };
      query.category = value;
      if (!Object.keys(this.$route.query).includes(`${value}`)) {
        await this.$router.replace(
          this.localePath({
            path: this.$route.path,
            query: query,
          })
        );
      }

      this.changeNews();
      this.pageChange();
    },

    async changeNews() {
      const newsData = await newsApi.getNews(this.$axios, {
        params: { ...this.$route.query, page_size: 6 },
        headers: {
          language: this.$i18n.locale,
        },
      });

      this.news = newsData;
    },

    async allNews() {
      await this.$router.replace(
        this.localePath({
          path: `/news`,
          query: { page: 1, page_size: 6 },
        })
      );
      this.changeNews();
      this.pageChange();
    },
  },

  watch: {
    async current(val) {
      if (val != this.$route.query?.page) {
        await this.$router.replace({
          path: this.$route.fullPath,
          query: { ...this.$route.query, page: val },
        });
      }
      this.pageChange();
    },

    async search(val) {
      if (val?.length > 2) {
        const data = await newsApi.getNews(this.$axios, {
          params: { search: val },
          headers: {
            language: this.$i18n.locale,
          },
        });

        this.news = data;
      }
      if (val?.length == 0) {
        const data = await newsApi.getNews(this.$axios, {});

        this.news = data;
      }
    },
  },
};
</script>

<style scoped>
.pager {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 40px;
}
.pager :deep(.ant-pagination-item),
.pager :deep(.ant-pagination-item-link) {
  border: 1px solid var(--grey-8, #ebebeb);
  border-radius: 0;
  min-width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}
.pager :deep(.ant-pagination) {
  display: flex;
  align-items: center;
  gap: 8px;
}
.pager :deep(.ant-pagination-item a) {
  color: var(--Black, #020105);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  margin: 0;
  padding: 0;
}
.pager :deep(.ant-pagination-prev),
.pager :deep(.ant-pagination-next) {
  margin: 0;
  height: 50px;
}
.pager :deep(.ant-pagination-item-active a) {
  color: #03509f;
}
.top {
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;
  margin-top: 40px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 40px;
}
.empty {
  margin-top: 40px;
}
.empty p {
  color: var(--black);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
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
.cats {
  display: flex;
  align-items: center;
  gap: 8px;
}
.tag,
.cats button {
  padding: 8px 12px;
  border-radius: 53px;
  background: #f9f9fa;
  color: #5d5d5f;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}
.cats button.disabled {
  pointer-events: none;
  background: var(--blue);
  color: white;
}
.name {
  color: var(--black);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  margin-bottom: 8px;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sub {
  color: #5d5d5f;
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
  color: #5d5d5f;
}
.date {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--grey-24, #c2c2c3);
}
.date p {
  color: #9a999b;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
}
.date svg path {
  stroke: #020105;
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
  display: flex;
  flex-direction: column;
  height: 100%;
}
.wrap {
  padding-bottom: 120px;
}
.search {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #dddfe2;
}
.search input {
  width: 100%;
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.filter :deep(.ant-select) {
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid #dddfe2;
}
.filter :deep(.ant-select-selection) {
  border: 0;
}
.filter :deep(.ant-select-open .ant-select-selection),
.filter
  :deep(
    .ant-select-focused .ant-select-selection,
    .ant-select-selection:focus,
    .ant-select-selection:active
  ) {
  box-shadow: none;
}
.filter :deep(.ant-select-selection-selected-value) {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding-bottom: 48px;
  }
  .search {
    padding-bottom: 9px;
    gap: 8px;
  }
  .search input {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 24px;
    gap: 16px;
  }
  .cardo a {
    display: grid;
    grid-template-columns: 122px 1fr;
    gap: 12px;
  }
  .tags {
    position: absolute;
    margin: 0;
    left: 134px;
    top: 0;
  }
  .name {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    padding-top: 24px;
  }
  .sub {
    display: none;
  }
  .cardo {
    position: relative;
    height: 125px;
    border-bottom: 1px solid #c2c2c3;
  }
  .img img {
    height: 72px;
  }
  .tag {
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    padding: 2px 8px;
  }
  .date {
    border-bottom: 0;
  }
  .date span {
    display: none;
  }
  .date p {
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .bottom {
    height: 100%;
  }
  .pager {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 24px;
  }
  .pager :deep(.ant-pagination-item),
  .pager :deep(.ant-pagination-item-link) {
    width: 32px;
    height: 32px;
    min-width: 32px;
  }
  .pager :deep(.ant-pagination-prev),
  .pager :deep(.ant-pagination-next) {
    height: 32px;
  }
}
</style>
