<template>
  <div class="wrapper" :class="{ show: modalHandle == true }">
    <div class="space" @click="closeModal()"></div>
    <div class="body">
      <div class="x" @click="closeModal()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M27.0718 12.929L12.9297 27.0711M27.0718 27.071L12.9297 12.9289"
            stroke="#0D0539"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div class="form">
        <h4 class="title">
          Do you need a trusted accountant to guide you in the right direction?
        </h4>
        <p class="sub">
          By sending the informations, you agree with the conditions for
          processing personal data
        </p>
        <form>
          <div class="inputs">
            <input type="text" placeholder="Phone number" />
            <input type="text" placeholder="E-mail" />
          </div>
          <textarea placeholder="Comments"></textarea>
          <div class="bottom">
            <div class="check">
              <input type="checkbox" id="checker" />
              <label for="checker"
                >I agree to the terms of the Privacy Policy
              </label>
            </div>
            <button type="submit">
              Submit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="11"
                viewBox="0 0 15 11"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.0303 4.96967C14.3232 5.26256 14.3232 5.73744 14.0303 6.03033L10.0303 10.0303C9.73744 10.3232 9.26256 10.3232 8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967L11.6893 6.25L1.5 6.25C1.08579 6.25 0.75 5.91421 0.75 5.5C0.75 5.08579 1.08579 4.75 1.5 4.75L11.6893 4.75L8.96967 2.03033C8.67678 1.73744 8.67678 1.26256 8.96967 0.96967C9.26256 0.676776 9.73744 0.676776 10.0303 0.96967L14.0303 4.96967Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalHandle: false,
    };
  },

  methods: {
    openModal() {
      this.modalHandle = true;
    },

    closeModal() {
      this.modalHandle = false;
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.4s;
}
.wrapper.show {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
}
.space {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 98;
}
.body {
  z-index: 99;
  position: relative;
  min-width: 1400px;
  border-radius: 16px;
  background: #fff;
  padding: 80px 0;
  position: relative;
}
.x {
  position: absolute;
  top: 32px;
  right: 32px;
  cursor: pointer;
}
.form {
  max-width: 952px;
  margin: 0 auto;
}
.title {
  margin-bottom: 16px;
  color: #0d0539;
  font-family: var(--decor-sm);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 38.4px */
  text-transform: uppercase;
}
.sub {
  color: #9a999b;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  margin-bottom: 40px;
}
.inputs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;
}
.inputs input {
  color: #4a617e;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  padding-bottom: 8px;
  border-bottom: 1px solid #c2c2c3;
}
textarea {
  width: 100%;
  min-height: 133px;
  resize: none;
  background: transparent;
  color: #4a617e;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid #c2c2c3;
}
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
}
.check {
  display: flex;
  align-items: center;
  gap: 12px;
}
.check label {
  color: #667b8c;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
}
.bottom button {
  border-radius: 8px;
  background: #03509f;
  padding: 12px 40px;
  color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 220px;
}
</style>
