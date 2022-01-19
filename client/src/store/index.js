import { createStore } from 'vuex'
import users from "./modules/users/users"
export default createStore({
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    users,
  }
})