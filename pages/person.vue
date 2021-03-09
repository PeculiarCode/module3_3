<template>
  <div class="person">
    <Header />
    <div class="container">
      <div class="avatar">
        <div v-if="Object.keys(userInfo).length > 0">
          <img :src="userInfo.image" />
          <p>{{ userInfo.username }}</p>
          <button
            v-if="location === 'index'"
            @click="handleFlow(userInfo.following)"
          >
            {{ userInfo.following ? "unflow" : "flow" }}
          </button>
          <button v-else @click="handleSetting">
            setting
          </button>
        </div>
      </div>
    </div>
    <ul class="tab">
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="handleTagClick(index)"
      >
        {{ item }}
      </li>
    </ul>
    <div class="article-content">
      <ul class="page-ul">
        <li v-for="item in pageList" :key="item.slug">
          <div class="info">
            <div class="left">
              <img v-if="item.author.image" :src="item.author.image" alt="" />
              <img v-else src="@/assets/image/gift.jpg" alt="" />
              <div class="detail">
                <p>{{ item.author.username }}</p>
                <span>{{ item.createdAt }}</span>
              </div>
            </div>
            <div class="righ">star</div>
          </div>
          <div class="area">
            <div class="title">{{ item.slug }}</div>
            <div class="desc">{{ item.description }}</div>
            <h6 class="more">read more...</h6>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="js">
import { personInfo, articles, follow } from "@/api/article";
import Header from "@/components/Header";
export default {
  components: {
    Header
  },
  mounted() {
    //从首页进入
    this.token = this.$store.state.user.token;
    this.name = this.$route.query.userName || this.$store.state.user.username;
    this.initData(this.token, this.name);
  },
  data() {
    return {
      list: ["MyArticle", "FavoriteArticles"],
      currentIndex: 0,
      userInfo: {},
      name: "",
      token: "",
      pageList: [],
      location: ""
    };
  },
  methods: {
    handleTagClick(index) {
      this.currentIndex = index;
      if (index === 1) {
        articles({
          favorited: this.name,
          limit: 10,
          offset: 0
        }).then(res => {
          this.pageList = res.data.articles;
        });
      } else {
      articles({
        author: this.name,
        limit: 10,
        offset: 0
      }).then(res => {
        this.pageList = res.data.articles;
      });
      }
    },
    initData(token, name) {
      articles({
        author: name,
        limit: 10,
        offset: 0
      }).then(res => {
        this.pageList = res.data.articles;
      });
        this.location = this.$route.query.from;
        personInfo(token, name).then(res => {
          this.userInfo = res.data.profile;
      });
    },
    handleFlow(flag) {
      const method = flag ? "delete" : "post";
      follow(this.token, this.name, method).then(res => {
        this.userInfo.following = res.data.profile.following;
      });
    },
    handleSetting() {
      this.currentIndex = 2;
      this.$router.push({
        name: "setting",
        query: {
          from: "person"
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.person {
  .container {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    background: rgb(243, 243, 243);
    padding-bottom: 20px;
    .avatar {
      .self {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        .linkSet {
          color: #333;
          background: #bbb;
          border: 1px solid #eee;
          padding: 6px;
          border-radius: 10px;
          margin-top: 10px;
        }
      }
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-top: 30px;
      }
      p {
        margin-top: 30px;
      }
      button {
        padding: 4px 12px;
        border-radius: 5px;
        background: #bbb;
        margin-top: 10px;
      }
    }
  }
  .tab {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-top: 20px;
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
    li {
      margin: 0 6px;
      color: #bbb;
      cursor: pointer;
      font-size: 14px;
      &.active {
        background: #fff;
        color: #5cb85c;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 23px;
          width: 100%;
          height: 2px;
          border-radius: 10px;
          background: #5cb85c;
        }
      }
    }
  }
  .article-content {
    width: 1200px;
    margin: 20px auto;
    color: #bbb;
    font-size: 14px;
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
                display: block;
                margin-top: 8px;
                transform: scale(0.9);
                margin-left: -8px;
              }
            }
          }
        }
        .area {
          margin-left: 6px;
          .title {
            color: #333;
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
    }
  }
}
</style>
