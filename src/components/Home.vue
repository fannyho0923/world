<template>
  <div>
    <Nav />
    <Bg class="bg" />
    <div class="about">
      <a @click.prevent="goAbout">More About Me?</a>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Bg from "@/components/Bg";

export default {
  components: {
    Nav,
    Bg
  },
  methods: {
    goAbout() {
      this.$router.push("/about").catch(() => {});
    }
  }
};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}
a {
  cursor: pointer;
  margin-top: 20px;
  font-family: "VT323";
  font-size: 20px;
  color: green;
  text-align: center;
  text-decoration: underline;
}
.bg {
  position: absolute;
  top: 0;
}
</style>
