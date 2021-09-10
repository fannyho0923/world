<template>
  <nav class="body">
    <div class="links">
      <div>
        <a class="link1" @click.prevent="goHome">Fanny's World</a>
      </div>
      <div>
        <a class="link2" @click.prevent="goAbout">About</a>
        <a class="link2" @click.prevent="goBlog">Blog</a>
      </div>
      <div class="link3"></div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goHome() {
      this.$router.push("/").catch(() => {});
    },
    goAbout() {
      this.$router.push("/about").catch(() => {});
    },
    goBlog() {
      this.$router.push("/blog").catch(() => {});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  cursor: pointer;
  text-decoration: none;
}
.body {
  background-color: #212529 !important;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  line-height: 1.5;
}
.links {
  display: flex;
  width: 90%;
  margin: 0 auto;
  line-height: 1.5;
  align-items: center;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
}
.link1 {
  font-family: "VT323";
  color: #fff;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
}
.link2 {
  font-family: "VT323";
  color: hsla(0, 0%, 100%, 0.55);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
.link3 {
  display: none;
}
</style>
