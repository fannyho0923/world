<template>
  <div>
    <Nav v-if="!isShow" />
    <NavBar v-if="isShow" />
    <div class="blog">123456</div>
    <Bg class="bg" />
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import NavBar from "@/components/NavBar";
import Bg from "@/components/Bg";
export default {
  data() {
    return {
      isShow: false
    };
  },
  components: {
    Nav,
    NavBar,
    Bg
  },
  watch: {
    screenWidth() {
      if (document.body.offsetWidth < 992) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  },
  created() {
    if (document.body.offsetWidth < 992) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      window.screenWidth = document.body.clientWidth;
      that.screenWidth = window.screenWidth;
    };
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
