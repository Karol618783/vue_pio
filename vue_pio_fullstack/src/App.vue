<script setup lang="ts">
import { computed } from 'vue'
import CounterDisplay from './components/CounterDisplay.vue'
import { useCounterStore } from './stores/counter'

const counter = useCounterStore()
const count = computed(() => counter.count)
const doubleCount = computed(() => counter.doubleCount)

function increment() {
  counter.increment()
}
</script>

<template>
  <main>
    <h1>Ejemplo:Pinia + Componentes en Vue 3</h1>
    <p>Este ejemplo usa el store desde `useCounterStore` desde `src/stores/counter.ts` y muestra como usarlo en componentes.</p>

    <section>
      <p>Valor {{ count }}</p>
      <p>El doble: {{ doubleCount }}</p>
      <button @click="increment">Incrementar desde App</button>
    </section>

    <hr />

    <CounterDisplay :count="count" :double="doubleCount" @increment="increment" />
  </main>
</template>

<style scoped>
main {
  font-family: system-ui, sans-serif;
  padding: 1rem;
}
section {
  margin-bottom: 1rem;
}
button {
  padding: 0.5rem 1rem;
}
</style>
