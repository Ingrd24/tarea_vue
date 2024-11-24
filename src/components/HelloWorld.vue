<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p data-v-8301eee8="" class="lead text-secondary mb-4">
      Esta aplicación te permite gestionar tus tareas de manera eficiente. Puedes añadir nuevas tareas manualmente o extraerlas desde una API. 
      <img alt="Vue logo" src="../assets/logo.png" class="img-fluid img-hover img-thumbnail d-block mx-auto mb-4 logo rounded-circle">
    </p>
    <h2 data-v-8301eee8="" class="text-info mt-4">Secciones de la Aplicación</h2>
    <p data-v-8301eee8="" class="text-muted"> Permite ingresar nuevas tareas manualmente. <strong data-v-8301eee8="">Añadir Tarea:</strong><br data-v-8301eee8=""><strong data-v-8301eee8="">Lista de Tareas:</strong> Muestra todas las tareas extraídas desde la API, permitiendo marcarlas como completadas o eliminarlas. <br data-v-8301eee8=""><strong data-v-8301eee8="">Vista Combinada:<br data-v-8301eee8=""></strong> Combina las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo. </p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.img-hover {
  transition: transform 0.3s ease; /* Transición suave */
}

.img-hover:hover {
  transform: scale(0.9); /* Reduce el tamaño al pasar el cursor */
}

.mb-4 {
    margin-bottom: 1.5rem !important;
}
.img-fluid, .img-thumbnail {
    max-width: 100%;
    height: auto;
}
.logo[data-v-8301eee8] {
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 123, 255, .5);
    transition: transform .3s, box-shadow .3s;
}
.lead[data-v-8301eee8] {
    font-size: 1.25rem;
}
.text-secondary {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;
}
.text-info {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important;
}
.mt-4 {
    margin-top: 1.5rem !important;
}
.text-muted[data-v-8301eee8] {
    font-size: 1rem;
}
.text-muted {
    --bs-text-opacity: 1;
    color: var(--bs-secondary-color) !important;
}
p {
    margin-top: 0;
    margin-bottom: 1rem;
}


</style>
