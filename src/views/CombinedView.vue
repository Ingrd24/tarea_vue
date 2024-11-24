<template>
    <div class="combined-view-container">
      <h1>Vista Combinada</h1>
  
      <!-- Sección para agregar tarea -->
      <div class="input-group">
        <input 
          v-model="newTask" 
          @keyup.enter="addTask" 
          placeholder="Añadir nueva tarea" 
          class="task-input"
        />
        <button @click="addTask" class="add-button">Añadir</button>
      </div>
  
      <!-- Sección para mostrar las tareas -->
      <div v-if="tasks.length > 0" class="task-list">
        <div v-for="task in tasks" :key="task.id" class="task-item">
          <span :class="{ completed: task.completed }">{{ task.todo }}</span>
          <div>
            <button @click="toggleTaskCompletion(task)">
              {{ task.completed ? 'Desmarcar' : 'Completar' }}
            </button>
            <button @click="deleteTask(task)">Eliminar</button>
          </div>
        </div>
      </div>
  
      <!-- Mensaje si no hay tareas -->
      <div v-if="tasks.length === 0" class="no-tasks">
        No hay tareas en la lista.
      </div>
    </div>
  </template>
  
  <script>
  import { store, mutations } from '@/store'; // Importamos el store para el manejo global de tareas
  
  export default {
    name: "CombinedView",
    data() {
      return {
        newTask: "", // Tarea nueva que se añadirá
      };
    },
    computed: {
      tasks() {
        return store.tasks; // Obtenemos las tareas del estado global
      },
    },
    methods: {
      addTask() {
        if (this.newTask.trim() === "") return; // Evitar añadir tareas vacías
        mutations.addTask(this.newTask); // Añadir tarea al estado global
        this.newTask = ""; // Limpiar campo de entrada después de agregar la tarea
      },
  
      // Elimina una tarea del estado global
      deleteTask(task) {
        const taskIndex = store.tasks.findIndex((t) => t.id === task.id);
        if (taskIndex !== -1) {
          mutations.deleteTask(taskIndex); // Eliminar la tarea del estado global
        }
      },
  
      // Cambia el estado de la tarea a completada o no
      toggleTaskCompletion(task) {
        const taskIndex = store.tasks.findIndex((t) => t.id === task.id);
        if (taskIndex !== -1) {
          mutations.toggleTaskCompletion(taskIndex); // Cambiar estado de completada
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .combined-view-container {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .input-group {
    display: flex;
    margin-bottom: 15px;
  }
  
  .task-input {
    flex-grow: 1;
    padding: 8px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .add-button {
    padding: 8px 15px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  
  .task-list {
    margin-top: 20px;
  }
  
  .task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
  
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  
  .no-tasks {
    margin-top: 20px;
    text-align: center;
    font-style: italic;
  }
  </style>
  