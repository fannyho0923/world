<template>
  <div
    :class="{
      left: i % 2 == 0,
      right: i % 2 == 1
    }"
    class="body"
  >
    <main class="main">
      <section class="top">
        <div class="tit-top">{{ data.title }}</div>
        <div>{{ data.time }}</div>
      </section>
      <section class="mid">
        <label class="tit-mid">What have I Do???</label>
        <div class="skills" v-for="(item, index) in data.skills" :key="index">
          <div class="skillBox">
            <a :href="data.skills[index].url" target="_blank">{{
              data.skills[index].name
            }}</a>
            <img :src="data.skills[index].img" alt="" />
          </div>
          <p class="skp" v-for="(item, i) in data.skills[index].desc" :key="i">
            {{ data.skills[index].desc[i] }}
          </p>
        </div>
        <a class="more" href="">More Reference</a>
      </section>
      <section class="bottom">
        <label>jasonMini:~ jasonsiuaw$</label>
        <span>|...</span>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true
    };
  },
  props: {
    data: { type: Object },
    i: { type: Number }
  }
};
</script>

<style scoped>
* {
  font-family: "VT323";
  color: rgb(74, 246, 38);
}
img {
  width: 7%;
  height: 7%;
}
.left {
  display: flex;
}
.right {
  display: flex;
  flex-direction: row-reverse;
}

.body {
  width: 100%;
  border-radius: calc(0.3rem - 1px);
  margin: 3rem 0;
}
.main {
  width: 100%;
  background-color: rgb(33, 37, 41);
}
.tit-top {
  font-size: 24px;
}
.tit-mid {
  font-size: 25px;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
}
.mid {
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
}
.bottom {
  padding: 0.3rem 0.75rem;
}
.bottom label {
  font-size: 18px;
}
.more {
  display: block;
  font-size: 20px;
  color: rgb(0, 95, 255);
  margin-top: 2rem;
}
.skillBox {
  font-size: 20px;
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
}
.skp + .skp {
  margin-top: 0.75rem;
}
span {
  animation: blink 1s infinite;
}
@keyframes blink {
  to {
    color: transparent;
  }
}
@media (min-width: 576px) {
  .main {
    max-width: 500px !important;
  }
}
</style>
