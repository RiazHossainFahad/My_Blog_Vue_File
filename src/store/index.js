/* eslint-disable quotes */
import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    posts: [],
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    getPosts({ commit }) {
      axios.get('/api/blogs')
        .then(result => commit('updatePosts', result.data))
        .catch(err => console.log(err));
    },
    // setPosts({ state }, post) {
    //   const posts = [...state.posts, post];
    //   return axios.post('https://jsonplaceholder.typicode.com/posts', posts);
    // },
    // // eslint-disable-next-line no-unused-vars
    // deletePost(val) {
    //   return axios.delete(`https://jsonplaceholder.typicode.com/posts/{&val}`);
    // },
  },
});
