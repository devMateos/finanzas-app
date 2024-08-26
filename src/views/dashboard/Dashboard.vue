<template>
  <div>
    <h1>Panel de Control</h1>
    <p>Bienvenido, {{ user.displayName }}</p>
    <button @click="logout">Cerrar Sesión</button>
    <div class="summary">
      <h2>Resumen Financiero</h2>
      <p>Ingresos Totales: {{ totalIncome }}</p>
      <p>Gastos Totales: {{ totalExpenses }}</p>
    </div>
    <div class="actions">
      <AddTransaction @transaction-added="fetchTransactions" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAuth, signOut } from 'firebase/auth'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
import AddTransaction from '@/components/AddTransation.vue'

const auth = getAuth()
const user = ref(auth.currentUser)
const totalIncome = ref(0)
const totalExpenses = ref(0)

const fetchTransactions = async () => {
  totalIncome.value = 0
  totalExpenses.value = 0
  const q = query(collection(db, 'transactions'), where('uid', '==', user.value.uid))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    const data = doc.data()
    if (data.type === 'income') {
      totalIncome.value += data.amount
    } else if (data.type === 'expense') {
      totalExpenses.value += data.amount
    }
  })
}

const logout = async () => {
  try {
    await signOut(auth)
    alert('Sesión cerrada con éxito')
  } catch (error) {
    alert('Error al cerrar sesión: ' + error.message)
  }
}

onMounted(() => {
  fetchTransactions()
})
</script>

<style scoped>
h1 {
  color: #42b983;
}

.summary,
.actions {
  margin: 20px 0;
}

button {
  padding: 10px 20px;
  color: white;
  background-color: #42b983;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
}

button:hover {
  background-color: #369f6b;
}
</style>
