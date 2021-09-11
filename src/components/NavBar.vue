<template>
  <div>
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="bg-dark p-4">
        <h5 class="text-white h4">Collapsed content</h5>
        <span class="text-muted">Toggleable via the navbar brand.</span>
      </div>
    </div>
    <nav class=" navbar navbar-dark bg-dark">
      <div class="nav container-fluid right">
        <div>
          <a class="link1" @click.prevent="goHome">Fanny's World</a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click.prevent="show"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    <div v-if="isShow" class="links">
      <a class="link2" @click.prevent="goAbout">About</a>
      <a class="link2" @click.prevent="goBlog">Blog</a>
    </div>
  </div>
</template>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
  crossorigin="anonymous"
></script>

<script>
export default {
  data() {
    return {
      isShow: false
    };
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
    },
    show() {
      if (this.isShow) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.right {
  display: flex;
}
.link1 {
  cursor: pointer;
  font-family: "VT323";
  color: #fff;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
}
.nav {
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.links {
  background-color: #212529 !important;
}
.link2 {
  display: block;
  width: 90%;
  font-family: "VT323";
  color: hsla(0, 0%, 100%, 0.55);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  margin: 0 auto;
}
</style>
