<template>
  <div class="tags" v-if="$store.state.user">
    <p>Popular Tags</p>
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        @click="handleTabClick(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="js">
import { tags } from "@/api/tags";
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    tags().then(res => {
      this.list = res.data.tags.slice(10);
    });
  },
  methods: {
    handleTabClick(data) {
      this.$emit("tagClick", data);
    }
  }
};
</script>

<style lang="scss" scoped>
.tags {
  position: absolute;
  right: 170px;
  padding: 5px 10px 10px 10px;
  background: #f3f3f3;
  border-radius: 4px;
  width: 200px;
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    li {
      padding: 6px 10px;
      border-radius: 10px;
      background-color: rgb(150, 150, 150);
      margin: 4px;
      color: #fff;
      font-size: 12px;
      cursor: pointer;
      &:hover {
        background: rgb(109, 109, 109);
      }
    }
  }
}
</style>
