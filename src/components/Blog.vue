<template>
  <div>
    <Nav class="nav" />
    <div class="blog">123456</div>
    <Bg class="bg" />
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Bg from "@/components/Bg";
export default {
  components: {
    Nav,
    Bg
  }
};
</script>

<style scoped>
.blog {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
}
.bg {
  position: absolute;
  top: 0;
}
</style>
