import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state(){
    return {
      count: 0,
      todos: [
        { id: 1, text: 'todo1', done: true },
        { id: 2, text: 'todo2', done: false }
      ]
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    increment (state) {
      state.count++;
    }
  },
  actions: {
  },
  modules: {
  }
})
