<template>
  <div class="slug">
    <Header />
    <div class="detail">
      <div class="content">
        <div class="title">{{ slugInfo.body }}</div>
        <div class="introduce">
          <div class="self">
            <img src="@/assets/image/gift.jpg" alt="" />
            <div class="name">
              <p>{{ userName }}</p>
              <h5>{{ createTime }}</h5>
            </div>
          </div>
          <button @click="handleEdit">Edit</button>
          <button @click="handleDelArticle">Delete</button>
        </div>
      </div>
    </div>
    <div class="bodys">{{ slugInfo.body }}</div>
    <div class="comment"><textarea v-model="commentValue" /></div>
    <div class="btn">
      <img src="@/assets/image/gift.jpg" alt="" />
      <button @click="handleSubmit">comment</button>
    </div>
    <div class="comments" v-if="commentUser.length > 0">
      <ul>
        <li v-for="item in commentUser" :key="item.id">
          <div class="input-content">{{ item.body }}</div>
          <div class="bottom">
            <div class="left">
              <img src="@/assets/image/gift.jpg" />
              <h6>{{ item.author.username }}</h6>
              <p>{{ item.createdAt.toString().substring(0, 10) }}</p>
            </div>
            <button @click="handleDelete(item.id)">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { slug, discuss, deleteComment, deleteArticle } from "@/api/article";
import Header from "@/components/Header";
export default {
  computed: {
    Header
  },
  data() {
    return {
      slugInfo: {},
      commentUser: {},
      userName: "",
      createTime: "",
      commentValue: ""
    };
  },
  async mounted() {
    const token = this.$store.state.user.token;
    const slugParams = this.$route.query.slug;
    slug(token, slugParams).then(res => {
      this.slugInfo = res.data.article;
      this.userName = this.slugInfo.author.username;
      this.createTime = this.slugInfo.createdAt.substring(0, 10);
    });
    this.getComments(token, slugParams, "get");
  },
  methods: {
    getComments(token, slugParams, method) {
      discuss(token, slugParams, method).then(res => {
        this.commentUser = res.data.comments;
      });
    },
    handleSubmit() {
      if (this.commentValue == "") {
        alert("comment can not be blank");
      } else {
        const token = this.$store.state.user.token;
        const slugParams = this.$route.query.slug;
        discuss(token, slugParams, "post", {
          comment: { body: this.commentValue }
        }).then(res => {
          this.getComments(token, slugParams, "get");
        });
      }
    },
    handleDelete(id) {
      const token = this.$store.state.user.token;
      const slugParams = this.$route.query.slug;
      deleteComment(token, slugParams, id).then(res => {
        this.getComments(token, slugParams, "get");
      });
    },
    handleDelArticle() {
      const token = this.$store.state.user.token;
      const slugParams = this.$route.query.slug;
      deleteArticle(token, slugParams).then(res => {
        this.$router.replace({
          path: "/"
        });
      });
    },
    handleEdit() {
      const token = this.$store.state.user.token;
      const slugParams = this.$route.query.slug;
      slug(token, slugParams).then(res => {
        this.$router.push({
          name: "article",
          query: {
            queryInfo: res.data.article
          }
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.slug {
  .detail {
    background: rgb(51, 51, 51);
    color: #fff;
    .content {
      width: 1200px;
      margin: 0 auto;
      .title {
        padding-top: 30px;
        font-size: 30px;
      }
      .introduce {
        display: flex;
        align-items: center;
        padding: 30px 0;
        .self {
          display: flex;
          align-items: center;
          margin-right: 10px;
          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }
          .name {
            margin-left: 10px;
            font-size: 12px;
            h5 {
              margin-top: 4px;
              color: #fff;
            }
          }
        }
        button {
          border-radius: 4px;
          padding: 1px 10px;
          margin: 0 2px;
          font-size: 12px;
          background: none;
          border: 1px solid #ddd;
        }
      }
    }
  }
  .bodys {
    width: 1200px;
    margin: 20px auto;
    padding-bottom: 20px;
    border-bottom: 1px solid #f5f5f5;
  }
  .comment {
    margin: 0 auto;
    width: 600px;
    textarea {
      width: 600px;
      border: 1px solid #ddd;
      height: 200px;
      border-radius: 6px;
    }
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 600px;
    margin: 0 auto;
    background: #f5f5f5;
    padding: 10px;
    border-radius: 6px;
    img {
      height: 30px;
      width: 30px;
      border-radius: 50%;
    }
    button {
      color: #fff;
      background-color: #5cb85c;
      border-color: #5cb85c;
      font-size: 14px;
      padding: 6px;
      border-radius: 6px;
    }
  }
  .comments {
    width: 600px;
    margin: 10px auto;
    ul {
      padding-bottom: 20px;
      li {
        border: 1px solid #bbb;
        border-radius: 10px;
        margin: 10px auto;
        .input-content {
          border-bottom: 1px solid #bbb;
          padding: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 600px;
        }
        .bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px;
          background: #e5e5e5;
          border-radius: 0 0 10px 10px;
          .left {
            display: flex;
            align-items: center;
            font-size: 12px;
            img {
              height: 20px;
              width: 20px;
              border-radius: 50%;
            }
            h6 {
              margin: 0 10px;
              color: #5cb85c;
            }
            p {
              color: #bbb;
            }
          }
          button {
            background: #5cb85c;
            font-size: 12px;
            border-radius: 4px;
            padding: 2px 4px;
          }
        }
      }
    }
  }
}
</style>
