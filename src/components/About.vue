<template>
  <div>
    <Nav v-if="!isShow" />
    <NavBar v-if="isShow" />
    <Bg class="bg" />
    <div class="contentBox">
      <Content
        class="content"
        :data="item"
        v-for="(item, index) in datas"
        :key="index"
        :i="index"
      />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import NavBar from "@/components/NavBar";
import Bg from "@/components/Bg";
import Content from "@/components/Content";
export default {
  data() {
    return {
      isShow: false,
      datas: [
        {
          title: "Full-Stack Developer",
          time: "2021/5/1 to 2021/7/31",
          skills: [
            {
              name: "AWS",
              url: "https://aws.amazon.com/?nc1=h_ls",
              img: require("@/assets/aws.png"),
              desc: [
                "Lambda serverless With NodeJS \+ APIGateway",
                "S3 \+ Cloudfont \+ Certification Manager \+ Godaddy For Web Hosting",
                "postgreSQL DataBase"
              ]
            },
            {
              name: "React",
              url: "https://reactjs.org/",
              img: require("@/assets/react.png"),
              desc: ["react + redux + redux-saga", "Material-UI"]
            }
          ]
        },
        {
          title: "Backend Developer",
          time: "2021/1/1 to 2021/3/31",
          skills: [
            {
              name: "AWS",
              url: "https://aws.amazon.com/?nc1=h_ls",
              img: require("@/assets/aws.png"),
              desc: [
                "Lambda serverless With Python + APIGateway",
                "TCP Server With NodeJS",
                "DynamoDB",
                "S3 For Data storage",
                "SES"
              ]
            },
            {
              name: "Firebase",
              url: "https://firebase.google.com/",
              img: require("@/assets/firebase.png"),
              desc: ["Web Hosting", "FCM Notification"]
            },
            {
              name: "Other",
              url: "https://0.0.1.148/",
              img: require("@/assets/other.png"),
              desc: ["every8d SMS Notification"]
            }
          ]
        }
      ]
    };
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
  },
  components: {
    Nav,
    Bg,
    Content,
    NavBar
  }
};
</script>

<style scoped>
.contentBox {
  width: 65%;
  height: auto;
  margin: 0 auto;
}

.content {
  width: 100%;
}
.bg {
  position: absolute;
  top: 0;
}
@media (max-width: 576px) {
  .contentBox {
    width: 90%;
  }
}
</style>
