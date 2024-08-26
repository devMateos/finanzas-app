<template>
  <div>
    <h2>Añadir Transacción</h2>
    <form @submit.prevent="addTransaction">
      <input type="text" v-model="description" placeholder="Descripción" required />
      <input type="number" v-model="amount" placeholder="Monto" required />
      <select v-model="type" required>
        <option value="income">Ingreso</option>
        <option value="expense">Gasto</option>
      </select>
      <button type="submit">Añadir</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import { getAuth } from 'firebase/auth'

const description = ref('')
const amount = ref(0)
const type = ref('income')
const auth = getAuth()

const addTransaction = async () => {
  if (!description.value || !amount.value || !type.value) {
    alert('Por favor, completa todos los campos.')
    return
  }

  try {
    const user = auth.currentUser
    await addDoc(collection(db, 'transactions'), {
      description: description.value,
      amount: parseFloat(amount.value),
      type: type.value,
      date: new Date().toISOString(),
      uid: user.uid // Añadir el uid del usuario
    })
    alert('Transacción añadida con éxito')
    description.value = ''
    amount.value = 0
    type.value = 'income'
  } catch (error) {
    alert('Error al añadir transacción: ' + error.message)
  }
}
</script>

<style scoped>
h2 {
  color: #42b983;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input,
select {
  margin: 10px 0;
  padding: 10px;
  width: 80%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
