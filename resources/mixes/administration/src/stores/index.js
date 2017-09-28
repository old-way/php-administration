import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

const state = {
    debug: false,
    design: false,
    navigation: {},
    setting: {},
    sidebar: {},
    title: 'Notadd Administration',
    token: {},
    user: {
        avatar: 'https://almsaeedstudio.com/themes/AdminLTE/dist/img/user2-160x160.jpg',
        name: 'Admin',
    },
};

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
});