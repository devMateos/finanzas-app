<template>
  <div>
    <h1>Registrarse</h1>
    <button @click="registerWithGoogle">Registrarse con Google</button>
  </div>
</template>

<script setup>
import { getAuth, signInWithPopup } from 'firebase/auth'
import { provider } from '@/firebase'
import { useRouter } from 'vue-router'

const auth = getAuth()
const router = useRouter()

const registerWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider)
    alert('Registro exitoso')
    router.push('/dashboard') // Redirige al Dashboard
  } catch (error) {
    alert('Error al registrarse: ' + error.message)
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}

button {
  padding: 10px 20px;
  color: white;
  background-color: #42b983;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #369f6b;
}
</style>
