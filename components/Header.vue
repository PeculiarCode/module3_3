<template>
  <div class="content">
    <div class="header">
      <div class="left">conduit</div>
      <div class="right">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link v-if="!hasToken" to="/sign?id=1">SignIn</nuxt-link>
        <nuxt-link v-if="!hasToken" to="/sign?id=2">SignOut</nuxt-link>
        <nuxt-link v-if="hasToken" to="/article">Article</nuxt-link>
        <nuxt-link ref="setActive" v-if="hasToken" to="/setting"
          >Setting</nuxt-link
        >
        <nuxt-link v-if="hasToken" to="/person">{{
          $store.state.user.username
        }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from "vue";
export default Vue.extend({
  name: "Header",
  data() {
    return {
      HomeList: [
        {
          name: "Home",
          id: 0
        },
        {
          name: "SignIn",
          id: 1
        },
        {
          name: "SignOut",
          id: 2
        }
      ],
      curentIndex: 0
    };
  },
  mounted() {
    if (this.$route.query.from === "person") {
      this.$refs.setActive.$el.className = "nuxt-link-exact-active";
    }
  },
  computed: {
    hasToken() {
      return this.$store.state.user ? true : false
    }
  }
});
</script>

<style lang="scss" scoped>
.content {
  width: 1200px;
  margin: 0 auto;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.3);
  .left {
    color: #5cb85c;
    font-size: 24px;
  }
  .right {
    display: flex;
    align-items: center;
    a {
      margin: 0 5px;
      color: rgba(0, 0, 0, 0.3);
    }
    .nuxt-link-exact-active {
      color: rgba(0, 0, 0, 0.8);
    }
  }
}
</style>
