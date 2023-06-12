<template>
  <img src="../assets/logo.png" alt="" />
  <div>
    <h2>You have {{ todoLength }} Todos!</h2>
    <input
      @keyup.enter="addTodo"
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
import { ref, computed } from "vue";
export default {
  setup() {
    let inputValue = ref("");
    let todoList = ref([]);

    let todoLength = computed(() => {
      return todoList.value.length;
    });

    function addTodo() {
      let newTodo = {
        id: new Date(),
        todoName: inputValue.value,
      };
      if (inputValue.value == "") {
        return;
      } else {
        todoList.value.push(newTodo);
        inputValue.value = "";
      }
    }

    function deleteTodo(index) {
      todoList.value.splice(index, 1);
    }

    return {
      inputValue,
      todoList,
      addTodo,
      deleteTodo,
      todoLength,
    };
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
