import { createStore } from 'vuex'
import users from "./modules/users/users"
import modal from "./modules/modal/modal"
export default createStore({
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    users,
    modal
  }
})