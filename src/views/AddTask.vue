<template>
<h1 data-v-198bdaee="" class="text-center text-success mb-4">Añadir Tarea</h1>        <h1>Añadir Tarea</h1>
        <div class="input-group">
            <input 
                v-model="newTask" 
                @keyup.enter="addTask" 
                placeholder="Añadir nueva tarea" 
                class="task-input"
            />
            <button @click="addTask" class="add-button">Añadir</button>
        </div>

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
    </div>
</template>

<script>
import { store, mutations } from '@/store';

export default {
    name: "AddTask",
    data() {
        return {
            newTask: "", // Campo de entrada para la nueva tarea
        };
    },
    computed: {
        tasks() {
            return store.tasks; // Obtiene las tareas del estado global
        }
    },
    methods: {
        addTask() {
            if (this.newTask.trim() === "") return;
            mutations.addTask(this.newTask); // Añade la tarea al estado global
            this.newTask = ""; // Limpiar el campo de entrada después de agregar
        },

        // Elimina una tarea específica de la lista
        deleteTask(task) {
            const taskIndex = store.tasks.findIndex((t) => t.id === task.id);
            if (taskIndex !== -1) {
                mutations.deleteTask(taskIndex); // Elimina la tarea del estado global
            }
        },

        // Cambia el estado de la tarea entre completada y no completada
        toggleTaskCompletion(task) {
            const taskIndex = store.tasks.findIndex((t) => t.id === task.id);
            if (taskIndex !== -1) {
                mutations.toggleTaskCompletion(taskIndex); // Cambia el estado de la tarea
            }
        },
    },
};
</script>

<style scoped>
.add-task-container {
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
}

.input-group {
    display: flex;
    margin-bottom: 10px;
}

.task-input {
    flex-grow: 1;
    padding: 8px;
    margin-right: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.add-button {
    padding: 8px 12px;
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
.container[data-v-198bdaee] {
    max-width: 800px;
    padding: 20px;
}
.mt-4 {
    margin-top: 1.5rem !important;
}
.mb-4 {
    margin-bottom: 1.5rem !important;
}
.text-center {
    text-align: center !important;
}


</style>
