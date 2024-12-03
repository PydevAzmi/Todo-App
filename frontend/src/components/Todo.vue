<script setup>
import { ref, computed } from 'vue'
import { useToast } from 'vue-toastification';

const Toast = useToast();
const newTask = ref('');
const tasks = ref([]);
const fullTaskTitle = ref('');

const addTask = () => {
    if (newTask.value.trim() === '') {
        Toast.error('Task cannot be empty')
        return;
    }
    tasks.value.push(newTask.value)
    newTask.value = '';
    Toast.success('Task added successfully')
}


</script>

<template>
    <section class="section">
    <div class="container">
        <div>
        <h1 class="title">Todo List</h1>
        <form @submit.prevent="addTask" class="form-group">
            <div >
                <input class="form-item"  v-model="newTask" type="text" placeholder="Add Task">
                <button type="submit" class="form-item primary-color">Add</button>
            </div>

        </form>
        </div>
    </div>
    <div class="container">
        <h1 class="title">Tasks</h1>
            <div class="list-group">
                <div class="todo-item"  v-for="(task ,idx) in tasks" :key="task">
                    <div>
                        <input type="checkbox"  name="task" id="idx">
                        <span class="task-text">{{ task }}</span>
                        <button class="btn danger-color" @click="deleteTask(idx)">
                        <span>Delete</span> 
                        </button>
                    </div>
                </div>
            </div>
    </div>


</section>
</template>

<style scoped>
.section{
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.container{
    padding-top: 15;
    margin: 10px;
    background-color: rgb(187, 187, 187);
    border-radius: 5px;
}

.form-group{
    display: flex;
    padding: 15px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.form-item{
    align-items: center;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.title{
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin: 10px;
}

.primary-color{
    color: green;
}
.secondary-color{
    color: rgba(146, 9, 126, 0.329);
}
.danger-color{
    color: red;
}


.btn{
    margin: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.todo-item{
    display: inline-block;
    align-items: center;
    padding: 10px;
    margin: 10px;
    border-radius: 4px;
}
.task-text{
    margin-left: 10px;
}
</style>