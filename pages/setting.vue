<template>
  <div class="setting">
    <Header />
    <div class="content">
      <input
        type="text"
        v-model="userInfo.image"
        placeholder="Url of person picture"
      />
      <input type="text" v-model="userInfo.username" placeholder="username" />
      <textarea
        type="text"
        v-model="userInfo.bio"
        placeholder="short bio about you"
      />
      <input type="email" v-model="userInfo.email" placeholder="email" />
      <input
        type="text"
        v-model="userInfo.password"
        placeholder="new password"
      />
      <div class="btn">
        <button @click="handleUpdate">Update Setting</button>
        <button @click="handleLogOut">logout</button>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { setting } from "@/api/article";
import Header from "@/components/Header";
export default {
  components: {
    Header
  },
  data() {
    return {
      userInfo: {
        bio: "",
        email: "",
        image: "",
        password: "",
        username: ""
      }
    };
  },
  mounted() {
    if (this.$route.query.from === "person") {
      this.userInfo = this.$store.state.user;
    }
  },
  methods: {
    handleLogOut() {
      const Cookie = process.client ? require("js-cookie") : undefined;
      Cookie.remove("user");
      this.$store.commit("setUser", null);
      this.$router.replace({
        name: "index"
      });
    },
    handleUpdate() {
      const token = this.$store.state.user.token;
      setting(token, { user: this.userInfo }).then(res => {
        this.$router.push({
          name: "person",
          query:{
            userName:this.userInfo.username,
            from:'setting'
          }
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.setting {
  .content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    input {
      border: 1px solid #ddd;
      padding: 6px;
      border-radius: 10px;
      margin: 10px;
      font-size: 14px;
    }
    textarea {
      border: 1px solid #ddd;
      padding: 6px;
      border-radius: 10px;
      font-size: 14px;
      width: 97.5%;
      height: 200px;
      margin-left: 10px;
    }
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 97.5%;
    margin: 10px auto;
    button {
      bottom: -37px;
      color: #fff;
      border-color: #419641;
      background: #419641;
      padding: 6px;
      border-radius: 4px;
      font-size: 14px;
    }
  }
}
</style>
