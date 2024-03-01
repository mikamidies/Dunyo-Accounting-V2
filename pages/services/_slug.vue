<template>
  <div class="master">
    <SiteTop />

    <div class="container small">
      <div class="html">
        <h4 class="sub_title">
          <img src="@/assets/img/logo/quote.png" alt="" />

          Accounting and bookkeeping need not be overwhelming tasks. We're here
          to streamline your accounting processes and maintain your financial
          records with precision.
        </h4>

        <p>
          Our expert team provides comprehensive bookkeeping and accounting
          services, ensuring your financial data is accurately recorded and
          organized for easy access and analysis. Let us take the burden of
          financial management off your shoulders, making your accounting and
          bookkeeping effortless and error-free. Trust us to keep your finances
          in order, allowing you to focus on what you do best: growing your
          business.
        </p>

        <img src="@/assets/img/image-1.jpg" alt="" />
      </div>

      <div class="html">
        <h4 class="sub_title">
          <img src="@/assets/img/logo/quote.png" alt="" />

          Accounting and bookkeeping need not be overwhelming tasks. We're here
          to streamline your accounting processes and maintain your financial
          records with precision.
        </h4>

        <p>
          Our expert team provides comprehensive bookkeeping and accounting
          services, ensuring your financial data is accurately recorded and
          organized for easy access and analysis. Let us take the burden of
          financial management off your shoulders, making your accounting and
          bookkeeping effortless and error-free. Trust us to keep your finances
          in order, allowing you to focus on what you do best: growing your
          business.
        </p>

        <img src="@/assets/img/image-1.jpg" alt="" />
      </div>

      <div class="button">
        <button>
          Заказать услугу

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M18.6667 10.6666L24 16M24 16L18.6667 21.3333M24 16L8 16"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "white",
};
</script>

<style scoped>
.sub_title {
  color: var(--Bg-background, #0d0539);
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 38.4px */
  margin-bottom: 16px;
  position: relative;
}

.html p,
.html span,
.html li {
  color: var(--grey-80, #353437);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
}
.html img {
  width: 100%;
  height: 536px;
  border-radius: 8px;
  object-fit: cover;
  display: flex;
  margin: 40px 0 0 0;
}
.button {
  margin-top: 64px;
  margin-bottom: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.html {
  margin-bottom: 64px;
}
.button button {
  border-radius: 8px;
  background: #03509f;
  padding: 12px 24px;
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 470px;
  gap: 24px;
}

.sub_title img {
  position: absolute;
  left: -52px;
  top: 0;
  width: 36px;
  height: auto;
  object-fit: contain;
  border-radius: 0;
  margin: 0;
}
</style>
