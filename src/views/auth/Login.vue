<template>
  <div>
    <h1>Bienvenido a la App de Finanzas</h1>
    <p>Gestiona tus ingresos y gastos de manera eficiente.</p>
    <div class="buttons">
      <button @click="loginWithGoogle">Iniciar Sesión con Google</button>
      <button @click="registerWithGoogle">Registrarse con Google</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, signInWithPopup } from 'firebase/auth'
import { provider } from '@/firebase'

const auth = getAuth()
const router = useRouter()

const loginWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider)
    alert('Inicio de sesión exitoso')
    router.push('/dashboard') // Redirige al Dashboard
  } catch (error) {
    alert('Error al iniciar sesión: ' + error.message)
  }
}

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

p {
  font-size: 1.2em;
  margin: 20px 0;
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
.buttons {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  max-width: 100%;
  padding: 0 24px;
}
</style>
