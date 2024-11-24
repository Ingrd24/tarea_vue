<template>
    <div class="task-list-container">
        <h1 data-v-246463e7="" class="text-center text-primary mb-4 title">Lista de Tareas</h1>
  
      <!-- Botón para cargar tareas -->
      <button @click="loadTasks" class="load-tasks-button">Cargar Tareas</button>
  
      <!-- Mostrar lista de tareas solo si showTasks es true -->
      <div v-if="showTasks" class="task-list">
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
        <div v-else class="no-tasks">No hay tareas disponibles.</div>
      </div>
    </div>
  </template>
  
  <script>
  import { store, mutations } from '@/store'; // Importamos el store global
  
  export default {
    name: "TaskList",
    data() {
      return {
        showTasks: false, // Controla si las tareas se deben mostrar
      };
    },
    computed: {
      tasks() {
        return store.tasks; // Acceder al estado global de tareas
      },
    },
    methods: {
      // Método para cargar tareas (muestra las tareas al hacer clic en el botón)
      loadTasks() {
        console.log("Cargando tareas...");
        this.showTasks = true; // Cambiar a true para mostrar las tareas
      },
  
      // Eliminar tarea del estado global
      deleteTask(task) {
        const taskIndex = store.tasks.findIndex((t) => t.id === task.id);
        if (taskIndex !== -1) {
          mutations.deleteTask(taskIndex);
        }
      },
  
      // Cambiar el estado de completado de la tarea
      toggleTaskCompletion(task) {
        const taskIndex = store.tasks.findIndex((t) => t.id === task.id);
        if (taskIndex !== -1) {
          mutations.toggleTaskCompletion(taskIndex);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .task-list-container {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .load-tasks-button {
    padding: 10px 15px;
    background-color: #00bcd4;
    color: white;
    border: none;
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
  .title[data-v-246463e7] {
    font-size: 2.5rem;
    font-weight: 700;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, .3);
    margin-bottom: 30px;
}
.text-primary {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}
.text-center {
    text-align: center !important;
}
.mb-4 {
    margin-bottom: 1.5rem !important;
}
  </style>
  