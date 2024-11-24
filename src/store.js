// src/store.js
import Vue from 'vue';

export const store = Vue.observable({
  tasks: [] // Aquí se almacenarán todas las tareas
});

export const mutations = {
  addTask(taskName) {
    store.tasks.push({
      todo: taskName,
      completed: false,
      id: Date.now(),
    });
  },
  toggleTaskCompletion(index) {
    store.tasks[index].completed = !store.tasks[index].completed;
  },
  deleteTask(index) {
    store.tasks.splice(index, 1);
  }
};
