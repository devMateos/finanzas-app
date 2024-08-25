<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const router = useRouter()
const auth = getAuth()

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('Usuario autenticado:', user)
    } else {
      console.log('No hay usuario autenticado')
    }
  })
})
</script>

<style>
/* Estilos globales */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 15px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
