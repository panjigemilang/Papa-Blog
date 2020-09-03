<template>
  <div>
    <h1>Articles</h1>
    <Contents v-if="posts.length" :postsProps="posts" :key="page" />
    <div class="btn-box">
      <button @click.prevent="nextPage">Next</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Contents from "./SubPages/Contents";

export default {
  name: "Articles",
  data() {
    return {
      offset: 0,
      posts: [],
      page: 1,
    };
  },
  components: {
    Contents,
  },
  props: ["limit"],
  methods: {
    ...mapActions(["getPosts"]),
    ...mapGetters(["getState"]),
    reqPosts() {
      const data = {
        limit: 4,
        offset: this.offset,
      };

      this.getPosts(data).then(() => (this.posts = this.getState().posts));
    },
    nextPage() {
      this.offset += 2;
    },
  },
  created() {
    console.log("Created Data : ", this.posts);
    this.reqPosts();
    // const data = {
    //   limit: 4,
    //   offset: this.offset,
    // };

    // this.getPosts(data).then(() => (this.posts = this.getState().posts));
  },
  watch: {
    offset(newVal) {
      console.log("Offset changes : ", this.posts);
      this.page += 1;
      this.reqPosts();
    },
  },
};
</script>

<style>
</style>