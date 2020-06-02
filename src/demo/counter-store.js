import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    count: 0,
    todoLists: [
      {
        id: 1,
        name: 'STORE 1',
        description: 'THIS IS A STORE!'
      },
      {
        id: 2,
        name: 'STORE 2',
        description: 'THIS IS A STORE!'
      },
      {
        id: 3,
        name: 'STORE 3',
        description: 'THIS IS A STORE!'
      },
      {
        id: 4,
        name: 'STORE 4',
        description: 'THIS IS A STORE!'
      },
      {
        id: 5,
        name: 'STORE 5',
        description: 'THIS IS A STORE!'
      },
      {
        id: 6,
        name: 'STORE 6',
        description: 'THIS IS A STORE!'
      },
      {
        id: 7,
        name: 'STORE 7',
        description: 'THIS IS A STORE!'
      },
      {
        id: 8,
        name: 'STORE 8',
        description: 'THIS IS A STORE!'
      },
      {
        id: 9,
        name: 'STORE 9',
        description: 'THIS IS A STORE!'
      },
      {
        id: 10,
        name: 'STORE 10',
        description: 'THIS IS A STORE!'
      },
    ]
  },
  mutations: {
    increment (state) {
      state.count++;
    }
  },
  getters: {
    getTodoListById: (state) => (id) => {
      return state.todoLists.find(l=>l.id === id);
    }
  }
});

