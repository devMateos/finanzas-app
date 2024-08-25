<template>
  <div id="app">
    <h1>Bienvenido a la App de Finanzas</h1>
  </div>
</template>

<script>
import { db } from './firebase'

export default {
  name: 'App',
  mounted() {
    console.log('Firestore:', db)
  }
}
</script>
