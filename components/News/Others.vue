<template>
  <div class="wrap">
    <div class="container small">
      <h4 class="title">Read more</h4>
      <div class="grid">
        <div v-for="item in post.other_news" :key="item.id" class="cardo">
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
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style scoped>
.wrap {
  padding-bottom: 120px;
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
  gap: 40px;
  margin-top: 40px;
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
.name {
  color: var(--black);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  margin-bottom: 8px;
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
.sub :deep(a) {
  color: #5d5d5f;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding-bottom: 48px;
  }
  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    margin: 0;
  }
  .grid {
    margin-top: 24px;
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
    height: auto;
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
}
</style>
