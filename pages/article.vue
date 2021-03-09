<template>
  <div class="article">
    <Header />
    <div class="content">
      <div class="errors" v-if="errMsg">
        <ul>
          <li v-for="(item, data) in errMsg" :key="data">
            {{ data }}: {{ item.toString().replace(/\[|]/g, "") }}
          </li>
        </ul>
      </div>
      <input type="text" v-model="article.title" placeholder="Article Title" />
      <input
        type="text"
        v-model="article.description"
        placeholder="whats article about"
      />
      <textarea
        type="text"
        v-model="article.body"
        placeholder="write your article"
      />
      <input type="text" v-model="article.tagList" placeholder="Enter tags" />
      <button @click="handleSubmit">Publish Article</button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { publishArticle } from "@/api/article";
export default {
  components: {
    Header
  },
  data() {
    return {
      article: {
        title: "",
        description: "",
        body: "",
        tagList: []
      },
      errMsg: {}
    };
  },
  mounted() {
    if (this.$route.query.queryInfo) {
      const queryInfo = this.$route.query.queryInfo;
      this.article = queryInfo;
    }
  },
  methods: {
    handleSubmit() {
      const token = this.$store.state.user.token;
      publishArticle({ article: this.article }, token)
        .then(res => {
          this.$router.push({
            name: "slug",
            query: {
              slug: res.data.article.slug
            }
          });
        })
        .catch(err => {
          this.errMsg = err.response.data.errors;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.article {
  .content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    .errors {
      ul {
        li {
          color: #f60000;
          margin: 10px;
        }
      }
    }
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
  button {
    position: absolute;
    right: 0;
    bottom: -37px;
    color: #fff;
    border-color: #419641;
    background: #419641;
    padding: 6px;
    border-radius: 4px;
    font-size: 14px;
  }
}
</style>
