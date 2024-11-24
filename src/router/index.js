import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddTask from '@/views/AddTask.vue';
import TaskList from '@/views/TaskList.vue';
import CombinedView from '@/views/CombinedView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addtask',
    name: 'AddTask',
    component: AddTask // Componente para añadir tareas
  },
  {
    path: '/tasklist',
    name: 'TaskList',
    component: TaskList // Componente para listar tareas
  },
  {
    path: '/combinedview',
    name: 'CombinedView',
    component: CombinedView // Componente para la vista combinada
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
