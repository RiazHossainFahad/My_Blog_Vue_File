/* eslint-disable quotes */
import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';

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
      return axios.get('/api/blogs')
        .then(result => commit('updatePosts', result.data.data))
        .catch(err => console.log(err));
    },
    setPosts({ state }, payload) {
      // console.log(payload);
      axios.post('/api/blogs', payload,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          state.posts = [...state.posts, res];
          router.push('/');
        })
        .catch(err => console.log(err));
    },
    // eslint-disable-next-line no-unused-vars
    deletePost({ commit }, id) {
      axios.delete(`/api/blogs/${id}`).then((res) => { console.log(res); router.go('/'); });
    },
  },
});
