<template>
  <div class="master">
    <img src="@/assets/img/contacts-bird.png" class="bird" alt="" />

    <ContactsTop />
    <ContactsForm />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.master {
  position: relative;
}
.bird {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
</style>
