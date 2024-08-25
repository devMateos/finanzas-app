<template>
  <div>
    <h1>Bienvenido a la App de Finanzas</h1>
    <p>Gestiona tus ingresos y gastos de manera eficiente.</p>
    <router-link to="/login">Iniciar Sesión</router-link>
    <router-link to="/register">Registrarse</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Gestiona tus ingresos y gastos de manera eficiente.')
</script>

<style scoped>
h1 {
  color: #42b983;
}

p {
  font-size: 1.2em;
  margin: 20px 0;
}

a {
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  color: white;
  background-color: #42b983;
  text-decoration: none;
  border-radius: 5px;
}

a:hover {
  background-color: #369f6b;
}
</style>
