<template>
    <div v-if="posts">
        <div v-for="(post,i) in getPosts" :key="i" class="preview-section">
            <div class="preview">
                <div class="image">
                    <img src="@/assets/logo.png" alt="ImageOfPost" width="120px" height="100px">
                </div>
                <div class="text">
                    <h3>{{ post.title }}</h3>
                    <p>{{ post.body }}</p>
                </div>
                <div class="delete-btn">
                    <button @click="deletePost(post.id)" class="btn">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ShowBlog',
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    getPosts() {
      return this.$store.state.posts;
    },
  },
  methods: {
    deletePost(id) {
      this.$store.dispatch('deletePost', id)
        .then(() => console.log('Delete suceessfull'));
      // alert('Delete suceessfull. Your deleted post title: '
      //          +res.data[100].title)
    },
  },

};
</script>

<style scoped>
.preview-section{
    margin: 15px 10px;
    background: rgb(241, 232, 232) ;
    padding: 20px;
}

.preview{
    display:flex;
}

.btn{
    background: red;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
