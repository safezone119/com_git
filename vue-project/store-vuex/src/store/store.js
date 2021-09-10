import Vue from 'vue'
import Vuex from 'vuex'
// import App from './App.vue'

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        inputItems: []
    }
});