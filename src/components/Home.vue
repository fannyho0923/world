<template>
  <div>
    <Nav v-if="!isShow" />
    <NavBar v-if="isShow" />
    <Bg class="bg" />
    <div class="about">
      <a class="more" @click.prevent="goAbout">More About Me?</a>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import NavBar from "@/components/NavBar";
import Bg from "@/components/Bg";

export default {
  data() {
    return {
      isShow: false,
      screenWidth: document.body.clientWidth
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
  mounted() {
    const that = this;
    window.onresize = () => {
      window.screenWidth = document.body.clientWidth;
      that.screenWidth = window.screenWidth;
    };
  },
  created() {
    if (document.body.offsetWidth < 992) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
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

.show {
  visibility: visible;
}
.hide {
  visibility: hidden;
}
</style>
