const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  fetchTodos: ({ commit }) => {
    if (localStorage.getItem("todos")) {
      commit("setTodos", JSON.parse(localStorage.getItem("todos")));
    }
  },
  addTodo: ({ commit }, todo) => {
    commit("newTodo", todo);
  },
  deleteTodo: ({ commit }, id) => {
    commit("removeTodo", id);
  },
  markCompleted: ({ commit }, id) => {
    commit("markTodoCompleted", id);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => {
    state.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(state.todos));
  },
  removeTodo: (state, id) => {
    state.todos = state.todos.filter(todo => todo.id != id);
    localStorage.setItem("todos", JSON.stringify(state.todos));
  },
  markTodoCompleted: (state, id) => {
    state.todos = state.todos.map(todo => {
      let temp = Object.assign({}, todo);
      if (temp.id === id) {
        temp.completed = !temp.completed;
      }
      return temp;
    });
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
