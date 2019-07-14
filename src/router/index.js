import Vue from 'vue';
import router from 'vue-router';

import ShowBlog from '@/show/ShowBlog.vue';
import CreateBlog from '@/create/CreateBlog.vue';

Vue.use(router);

export default new router({
    mode: 'history',
    routes: [{
        name: 'ShowBlog',
        path: '/',
        component: ShowBlog,
    }, {
        name: 'CreateBlog',
        path: '/create-blog',
        component: CreateBlog,
    }],
});