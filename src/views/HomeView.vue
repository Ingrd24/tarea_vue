<template>
  <div class="home text-primary display-4">
    <HelloWorld msg="Bienvenido a la Aplicación de Tareas con Vue"/>     
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>
.home {
  margin: 20px;
  color: rgb(17, 44, 217);
}
.mb-4 {
    margin-bottom: 1.5rem !important;
}
.text-primary {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}
.display-4 {
    font-size: calc(1.475rem + 2.7vw);
    font-weight: 300;
    line-height: 1.2;
}
</style>