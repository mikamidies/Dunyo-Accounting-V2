<template>
  <div class="wrap">
    <ApplicationModal ref="appModal" />

    <div class="container">
      <div class="left">
        <div class="images">
          <img src="@/assets/img/logo/brand.png" alt="" class="brand" />
          <img src="@/assets/img/logo/flag.png" alt="" class="flag" />
        </div>
        <ul>
          <li>
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
                d="M13.5303 5.53033C13.8232 5.23744 13.8232 4.76256 13.5303 4.46967L9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967C8.17678 0.762563 8.17678 1.23744 8.46967 1.53033L11.1893 4.25H1C0.585787 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585787 5.75 1 5.75H11.1893L8.46967 8.46967C8.17678 8.76256 8.17678 9.23744 8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033L13.5303 5.53033Z"
                fill="#CBB356"
              />
            </svg>
            Unlock Your Financial Potential with Proven Strategies and
            Personalized
          </li>
          <li>
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
                d="M13.5303 5.53033C13.8232 5.23744 13.8232 4.76256 13.5303 4.46967L9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967C8.17678 0.762563 8.17678 1.23744 8.46967 1.53033L11.1893 4.25H1C0.585787 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585787 5.75 1 5.75H11.1893L8.46967 8.46967C8.17678 8.76256 8.17678 9.23744 8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033L13.5303 5.53033Z"
                fill="#CBB356"
              />
            </svg>
            Unlock Your Financial Potential with Proven Strategies
          </li>
          <li>
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
                d="M13.5303 5.53033C13.8232 5.23744 13.8232 4.76256 13.5303 4.46967L9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967C8.17678 0.762563 8.17678 1.23744 8.46967 1.53033L11.1893 4.25H1C0.585787 4.25 0.25 4.58579 0.25 5C0.25 5.41421 0.585787 5.75 1 5.75H11.1893L8.46967 8.46967C8.17678 8.76256 8.17678 9.23744 8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033L13.5303 5.53033Z"
                fill="#CBB356"
              />
            </svg>
            Unlock Your Financial Potential with Proven Strategies and
            Personalized Advice for Wealth
          </li>
        </ul>
        <div class="button">
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
            Связаться с нами
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.container {
  max-width: 1200px;
}
.wrap {
  padding: 206px 0 260px 0;
  background: url(@/assets/img/world.jpg) center no-repeat;
  background-size: cover;
  position: relative;
}
.wrap::after {
  background: linear-gradient(180deg, #023475 0%, rgba(2, 52, 117, 0) 100%),
    linear-gradient(180deg, #023475 0%, rgba(2, 52, 117, 0) 100%);
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 237px;
}
.wrap::before {
  background: linear-gradient(180deg, #023475 0%, rgba(2, 52, 117, 0) 100%),
    linear-gradient(180deg, #023475 0%, rgba(2, 52, 117, 0) 100%);
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 237px;
  transform: rotate(180deg);
}
.images {
  display: flex;
  align-items: center;
  gap: 22px;
  margin-bottom: 56px;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 72px;
  max-width: 367px;
}
li {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  display: grid;
  grid-template-columns: 24px 1fr;
  align-items: baseline;
  gap: 12px;
}
.button button {
  border-radius: 8px;
  background: var(--yellow, #f9e567);
  padding: 12px 24px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--Dark-yellow, #866719);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
}
</style>
