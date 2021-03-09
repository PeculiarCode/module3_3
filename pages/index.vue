<template>
  <div class="container">
    <Header />
    <div class="scope">
      <div class="content">
        <h1>conduit</h1>
        <p>A place to share your knowledge</p>
      </div>
    </div>
    <div class="page">
      <div class="content">
        <div class="col-header">
          <ul>
            <li
              v-for="(item, index) in tabList"
              :key="index"
              @click="handleTabClick(index)"
              :class="{ active: currentIndex === index }"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <Tags @tagClick="tagClick" />
        <ul class="page-ul">
          <li v-for="item in list" :key="item.slug">
            <div class="info">
              <div class="left" @click="handleAvatar(item.author.username)">
                <img v-if="item.author.image" :src="item.author.image" alt="" />
                <img v-else src="@/assets/image/gift.jpg" alt="" />
                <div class="detail">
                  <p>{{ item.author.username }}</p>
                  <span>{{ item.createdAt }}</span>
                </div>
              </div>
              <div
                class="right"
                @click="handleFavorite(item)"
                :class="{ active: item.favorited }"
              >
                ❤ {{ item.favoritesCount }}
              </div>
            </div>
            <div class="area" @click="handleArticle">
              <div class="title">{{ item.slug }}</div>
              <div class="desc">{{ item.description }}</div>
              <h6 class="more">read more...</h6>
            </div>
          </li>
        </ul>
      </div>
      <div class="btns">
        <ul>
          <li
            v-for="(item, index) in totalCount"
            :key="index"
            @click="handlePage(index)"
          >
            <button :class="{ active: btnIndex === index }">
              {{ item }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from "vue";
import Header from "@/components/Header";
import Tags from "@/components/Tag";
import { articles, personArticle, favorite } from "@/api/article";
export default Vue.extend({
  middleware: ["auth"],
  components: {
    Header,
    Tags
  },
  data() {
    return {
      list: [],
      currentIndex: 0,
      btnIndex: 0,
      tabList: ["GlobalFeed", "Your Feed"],
      totalCount: [],
      tag: ""
    };
  },
  methods: {
    initData() {
      this.getArticles(0, true);
      //没有登录不展示tab信息
      if (!this.$store.state.user) {
        this.tabList.pop();
      }
    },
    tagClick(data) {
      if (this.tabList.length > 2) {
        this.tabList.pop();
      }
      this.tabList.push(`#${data}`);
      this.currentIndex = 2;
      this.btnIndex = 0;
      this.tag = data;
      this.handleTagList(0);
    },
    handleTabClick(index) {
      this.currentIndex = index;
      //初始化feedList数组
      this.btnIndex = 0;
      if (this.tabList.length > 2 && index !== 2) {
        this.tabList.pop();
      }
      if (index === 0) {
        this.initData();
      } else if (index === 1) {
        this.handleFeedArticle(0, true);
      }
    },
    handleFeedArticle(index, falg) {
      const token = this.$store.state.user.token;
      const offset = index * 10;
      personArticle(token, { limit: 10, offset }).then(res => {
        this.list = res.data.articles;
        if (falg) {
          this.totalCount = Math.ceil(res.data.articlesCount / 10);
        }
      });
    },
    handleAvatar(userName) {
      this.$router.push({
        name: "person",
        query: { userName, from: "index" }
      });
    },
    handleArticle() {},
    getArticles(index, flag) {
      //获取文章数据
      const offset = index * 10;
      articles({ limit: 10, offset }).then(res => {
        this.list = res.data.articles;
        if (flag) {
          this.totalCount = Math.ceil(res.data.articlesCount / 10);
        }
      });
    },
    handleFavorite(item) {
      const slug = item.slug;
      const token = this.$store.state.user.token;
      const method = item.favorited ? "delete" : "post";
      favorite(token, slug, method).then(res => {
        //点赞完成将状态设置成返回的状态
        item.favoritesCount = res.data.article.favoritesCount;
        item.favorited = res.data.article.favorited;
      });
    },
    handleTagList(index) {
      const offset = index * 10;
      articles({ limit: 10, offset, tag: this.tag }).then(res => {
        this.list = res.data.articles;
        this.totalCount = Math.ceil(res.data.articlesCount / 10);
      });
    },
    handlePage(index) {
      this.btnIndex = index;
      if (this.currentIndex === 0) {
        this.getArticles(index, false);
      } else if (this.currentIndex === 1) {
        this.handleFeedArticle(index, false);
      } else {
        this.handleTagList(index);
      }
    }
  },
  mounted() {
    if (!this.$store.state.user) {
      this.tabList.pop();
    }
    this.initData();
  },

});
</script>

<style lang="scss" scoped>
.content {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.scope {
  background: #5cb85c;
  text-align: center;
  height: 150px;
  h1 {
    padding-top: 34px;
    text-shadow: 0px 1px 3px rgb(255, 255, 255);
    font-weight: 700;
    font-size: 44px;
    color: #fff;
  }
  p {
    font-weight: 300;
    color: #fff;
    font-size: 20px;
    padding-top: 24px;
  }
}
.page {
  .col-header {
    width: 800px;
    border-bottom: 1px solid rgb(199, 199, 199);
    margin-top: 40px;
    padding-bottom: 10px;
    ul {
      display: flex;
      align-items: center;
      li {
        margin: 0 10px;
        cursor: pointer;
        &.active {
          color: #5cb85c;
        }
      }
    }
  }
  .page-ul {
    width: 800px;
    li {
      border-bottom: 1px solid #bbb;
      padding-bottom: 20px;
      .info {
        width: 800px;
        display: flex;
        justify-content: space-between;
        padding-top: 30px;
        .left {
          display: flex;
          align-items: center;
          img {
            height: 32px;
            width: 32px;
            border-radius: 50%;
          }
          .detail {
            margin-left: 10px;
            cursor: pointer;
            p {
              color: #5cb85c;
              font-size: 10px;
            }
            span {
              color: #bbb;
              font-size: 10px;
            }
          }
        }
        .right {
          cursor: pointer;
          border: 1px solid #ddd;
          border: 1px solid #ddd;
          padding: 8px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          &.active {
            background: #5cb85c;
          }
        }
      }
      .title {
        font-size: 20px;
        margin: 15px 0 10px 0;
      }
      .desc {
        color: #999;
        font-size: 15px;
      }
      .more {
        margin-top: 10px;
        font-size: 12px;
        color: #bbb;
      }
    }
  }
  .btns {
    width: 1200px;
    margin: 0 auto;
    ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      li {
        button {
          margin: 10px;
          padding: 2px 10px;
          &.active {
            background: #5cb85c;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
