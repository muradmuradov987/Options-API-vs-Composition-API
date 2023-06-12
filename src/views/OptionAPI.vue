<template>
  <img src="../assets/logo.png" alt="" />
  <div>
    <h2>You have {{ todoLength }} Todos!</h2>
    <input
      @keyup.enter="addTodo()"
      v-model="inputValue"
      type="text"
      placeholder="Add a todo"
    />
    <ul>
      <li v-for="(item, index) in todoList" :key="item.id">
        {{ item.todoName }} <button @click="deleteTodo(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
      todoList: [],
      
    };
  },
  computed: {
    todoLength() {
      return this.todoList.length;
    },
  },
  methods: {
    addTodo() {
      let newTodo = {
        id: new Date(),
        todoName: this.inputValue,
      };
      if (this.inputValue == "") {
        return;
      } else {
        this.todoList.push(newTodo);
        this.inputValue = "";
      }
    },
    deleteTodo(index) {
      this.todoList.splice(index, 1);
    },
  },
};
</script>

<style scoped>
input {
  width: 250px;
  padding: 8px;
}
ul {
  width: 300px;
  margin: 30px auto;
  padding: 0;
  list-style: none;
  text-align: center;
}
ul li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 18px;
  background: #f3f3f3;
  padding: 5px;
}
</style>
