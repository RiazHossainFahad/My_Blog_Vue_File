<template>
  <div>
    <div v-if="getLoading">LOADING DATA...</div>
    <div v-else>
      <div v-for="(post,i) in returnPosts" :key="i" class="preview-section">
        <div class="preview">
          <div class="image">
            <img :src="require(`@/assets/${post.url}`)"
            alt="ImageOfPost" width="120px" height="100px" />
          </div>
          <div class="text">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
          </div>
          <div class="delete-btn">
            <button @click="callDelete(post.id)" class="btn">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'ShowBlog',
  data() {
    return {
      loading: true,
      postList: [],
    };
  },
  computed: {
    ...mapState({
      posts: state => state.posts,
    }),
    getLoading() {
      return this.loading;
    },
    returnPosts() {
      return this.postList;
    },
  },
  created() {
    this.getPosts().then(() => { this.postList = this.posts; this.loading = false; });
  },
  methods: {
    ...mapActions(['getPosts', 'deletePost']),
    callDelete(id) {
      this.deletePost(id);
      // alert('Delete suceessfull. Your deleted post title: '
      //          +res.data[100].title)
    },
  },
};
</script>

<style scoped>
.preview-section {
  margin: 15px 10px;
  background: rgb(241, 232, 232);
  padding: 20px;
}

.preview {
  display: flex;
}

.btn {
  background: red;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
