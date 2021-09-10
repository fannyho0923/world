<template>
  <div class="bgBox">
    <img class="bg" src="@/assets/bg.gif" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bgBox {
  position: absolute;
  width: 100%;
}
.bg {
  width: 100%;
  height: 100%;
  position: fixed;
  object-fit: cover;
  z-index: -1;
}
</style>
