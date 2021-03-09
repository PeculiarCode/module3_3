<template>
  <div class="sign">
    <Header />
    <div class="content">
      <div class="inner">
        <h3 v-if="(Status = isLogin ? 'SignIn' : 'SignOut')">
          {{ Status }}
        </h3>
        <p
          v-if="(Desc = isLogin ? 'Need an account?' : 'Have an account?')"
          @click="handleAccount"
        >
          {{ Desc }}
        </p>
        <input
          class="username"
          type="text"
          placeholder="username"
          v-if="!isLogin"
          v-model="userInfo.username"
        />
        <input
          class="email"
          type="email"
          placeholder="Email"
          required
          v-model="userInfo.email"
        />
        <input
          class="password"
          type="password"
          placeholder="Password"
          required
          v-model="userInfo.password"
        />
        <button @click="handleLogic">
          {{ isLogin ? "login" : "register" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Header from "@/components/Header";
import { register } from "@/api/register";
import { login } from "@/api/login";
import { checkEmail } from "@/utils/common";

export default {
  components: Header,
  // middleware: ["auth"],
  data() {
    return {
      Status: "",
      Desc: "",
      userInfo: {
        email: "",
        password: "",
        username: ""
      }
    };
  },
  computed: {
    isLogin() {
      const id = parseInt(this.$route.query.id.toString());
      return id == 1 ? true : false;
    }
  },
  methods: {
    handleAccount() {
      let index = parseInt(this.$route.query.id.toString());
      index = index == 1 ? 2 : 1;
      this.$router.push({
        path: "/sign",
        query: {
          id: index.toString()
        }
      });
    },
    handleLogic() {
      const result = checkEmail(this.userInfo.email);
      if (result) {
        if (!this.isLogin) {
          register({
            user: {
              email: this.userInfo.email,
              password: this.userInfo.password,
              username: this.userInfo.username
            }
          }).then(res => {
            if (res.data.user) {
              this.$router.push({
                path: "/sign?id=1"
              });
              this.userInfo.email = "";
              this.userInfo.password = "";
            }
          });
        } else {
          login({
            user: {
              email: this.userInfo.email,
              password: this.userInfo.password
            }
          }).then(res => {
            if (res.data.user) {
              const Cookie = process.client ? require("js-cookie") : undefined;
              Cookie.set("user", res.data.user);
              this.$store.commit("setUser", res.data.user);
              this.$router.push({
                name: "index"
              });
            }
          });
        }
      } else {
        alert("邮箱格式错误");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 1200px;
  margin: 0 auto;
  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    h3 {
      font-size: 30px;
    }
    p {
      font-size: 12px;
      margin: 10px 0;
      color: #5cb85c;
      cursor: pointer;
    }
    button {
      padding: 10px 20px;
      margin-top: 10px;
      border-radius: 6px;
    }
  }
}
input {
  width: 400px;
  border: 1px solid #ddd;
  padding: 10px 15px;
  margin: 10px 0;
  border-radius: 10px;
  font-size: 12px;
}
</style>
