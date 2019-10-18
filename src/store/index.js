import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        testbind: 'zjz'
    },
    mutations: {
        increment(state) {
            state.count++
        },
        TESTBIND(state, val) {
            state.testbind = val
        }
    }
})

export default store
