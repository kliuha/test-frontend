<template>
  <div class="home">
    <div class="card-wrapper">
      <Post
      v-for="post in historyList"
      :post="post"
      :key="post.id"
      @editPost="doEditPost"
      @deletePost="doDeletePost"
      />
    </div>
    <v-pagination
      v-model="page"
      :length="pages"
      @input="updatePage"
    ></v-pagination>
  </div>
</template>

<script>
import Post from '@/components/Post.vue'
import {mapGetters, mapActions} from 'vuex'


export default {
  name: 'Home',
  components: {
    Post
  },
  data () {
    return {
      listCount: 0,
      historyList: [],
      page: 1,
      pageSize: 6
    }
  },
  computed: {
    ...mapGetters('appModule',['postsData']),
    pages() {
    if (this.pageSize == null || this.listCount == null) return 0;
    return Math.ceil(this.listCount / this.pageSize);
    }
  },
  async mounted() {
    await this.fetchData();
    this.initPage();
    this.updatePage(this.page);
  },
  watch: {
    postsData: function() {
      this.initPage()
    }
  },
  methods: {
    ...mapActions('appModule',['deletePost','loadPostsData', 'editPostBody']),
    async fetchData () {
      await this['loadPostsData']();
    },
    initPage: function() {
      this.listCount = this['postsData'].length;
      if (this.listCount < this.pageSize) {
        this.historyList = this['postsData'];
      } else {
        this.historyList = this['postsData'].slice(0, this.pageSize);
      }
    },
    updatePage: function(pageIndex) {
      let start = (pageIndex - 1) * this.pageSize;
      let end = pageIndex * this.pageSize;
      this.historyList = this['postsData'].slice(start, end);
      this.page = pageIndex;
      window.scrollTo(0,0);
      },
    async doDeletePost(id) {
      await this['deletePost'](id);
      this.page = 1;
    },
    async doEditPost([newBody,id]) {
      await this['editPostBody']([newBody,id]);
    }
  }
}
</script>
<style scoped>
.card-wrapper{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.card-class:not(:nth-last-child(-n+3)){
  margin: 15px;
}
</style>
