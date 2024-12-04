<script setup>
import { ref, computed, onMounted, onUpdated } from "vue";
import { useToast } from "vue-toastification";
import axios from "axios";
const Toast = useToast();
const completedTasks = ref(true);
const newTask = ref("");
const tasks = ref([]);

const addTask = async () => {
  if (newTask.value.trim() === "") {
    Toast.error("Task cannot be empty");
    return;
  }
  const task = await axios.post("/api/tasks/", {
    title: newTask.value,
    is_done: false
    });
  newTask.value = "";
  tasks.value.push(task.data);
  Toast.success("Task added successfully");
};

const editTask = async (taskId) => {
    const task = tasks.value.find((task) => task._id === taskId);
    const updatedTask = {
        is_done: task.is_done
    }
    const updated = await axios.post(`/api/tasks/${taskId}`, updatedTask);
    task.is_done = updated.data.is_done;
    Toast.success("Task Updated successfully");

};

const deleteTask = async (taskId) => {
    await axios.delete(`/api/tasks/${taskId}`);
    tasks.value = tasks.value.filter((task) => task._id !== taskId);
    Toast.success("Task deleted successfully");
};

const toggleCompleted = async () => {
  completedTasks.value = !completedTasks.value;
  const response = await axios.get(`/api/tasks/?completed=${completedTasks.value}`);
  tasks.value = response.data;
}

const allTasks = async () => {
    const response = await axios.get("/api/tasks/");
    tasks.value = response.data;
}

onMounted(async () => {
  try {
    const response = await axios.get("/api/tasks/");
    const tasksData = response.data;
    tasksData.forEach((task) => {
      tasks.value.push(task);
    });
  } catch (err) {
    console.log(err);
  }
});


</script>
<template>
  <div class="container">
    <header class="header">
      <h1>My Todo List</h1>
    </header>

    <main class="todo-app">
      <form @submit.prevent="addTask" class="todo-form">
        <input
          type="text"
          placeholder="Add a new task..."
          required
          v-model="newTask"
        />
        <button type="submit">Add Task</button>
      </form>

      <div class="todo-filters">
        <button @click.prevent="allTasks" class="filter-btn">All</button>
        <button @click.prevent="toggleCompleted" class="filter-btn">{{ completedTasks ? 'Pending' : "Completed" }}</button>
      </div>

      <ul class="todo-list">
        <li v-for="task in tasks" :key="task" :class="['todo-item', task.is_done ? 'completed' : '']">
          <input type="checkbox" v-model="task.is_done" @change="editTask(task._id)" />  
          <label for="task1">{{ task.title }}</label>
          <button class="btn-end" @click="deleteTask(task._id)">
            <span>X</span>
          </button>
        </li>
      </ul>
    </main>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
.container {
  font-family: "Poppins", sans-serif;
  width: 100%;
  max-width: 700px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 2rem auto;
}

.header {
  background: #2196f3;
  color: white;
  padding: 1.5rem;
  text-align: center;
}

.header h1 {
  font-size: 1.8rem;
  font-weight: 600;
}

.todo-app {
  padding: 1.5rem;
}

.todo-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.todo-form input {
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.todo-form button {
  padding: 0.8rem 1.5rem;
  background: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.todo-form button:hover {
  background: #1976d2;
}

.todo-filters {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.filter-btn {
  padding: 0.5rem 1rem;
  background: #f5f5f5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.filter-btn.active {
  background: #2196f3;
  color: white;
}

.todo-list {
  list-style: none;
  color: #050303;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #050303;
}

.todo-item:last-child {
  border-bottom: none;
}

.todo-item input[type="checkbox"] {
  margin-right: 1rem;
  width: 18px;
  height: 18px;
}

.todo-item.completed label {
  text-decoration: line-through;
  color: #080303;
}
.btn-end {
    margin-left: auto;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 0.5rem 1rem;
}
</style>
