import * as constants from './app.constants'
import { getPostsData, doDeletePost, doChangePost } from '../../services/app.service'

export const appModule = {
    namespaced: true,
    state: {
        posts: []
    },
    getters: {
        postsData: (state) => state.posts
    },
    actions: {
        loadPostsData({ commit }) {
            getPostsData()
            .then((response) => commit(constants.SAVE_POSTS_DATA, response));
        },
        deletePost({ commit}, payload) {
            doDeletePost(payload)
            .then((response) => commit(constants.DELETE_POST, response))
        },
        editPostBody({ commit }, payload) {
            doChangePost(payload[0], payload[1])
            .then((response) =>  commit(constants.CHANGE_POST_BODY, response));
        }
    },
    mutations: {
        [constants.SAVE_POSTS_DATA]: (state, payload) => {
            state.posts = payload;
        },
        [constants.DELETE_POST]: (state, payload) => {
            state.posts = state.posts.filter((item) => item.id !== payload);
        },
        [constants.CHANGE_POST_BODY]: (state, payload) => {
            const post = state.posts.find((post) => post.id===payload.id);
            post.text = payload.body;
        }
    }
}