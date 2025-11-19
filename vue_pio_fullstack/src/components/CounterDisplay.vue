<script setup lang="ts">
const props = defineProps<{ count: number; double: number }>()
// Evitar el uso de tipos "tuple" en el parámetro genérico (causa
// "Unresolvable type: TSTupleType" en algunos entornos).
// Usamos el array en tiempo de ejecución para registrar el evento.
const emit = defineEmits(['increment'])
function onIncrement() {
  emit('increment')
}
</script>

<template>
  <div>
    <h2>Componente hijo: CounterDisplay</h2>
    <p>Cuenta (prop): {{ count }}</p>
    <p>Doble (prop): {{ double }}</p>
    <button @click="onIncrement">Incrementar desde hijo</button>
  </div>
</template>

<style scoped>
h2 {
  margin: 0 0 0.5rem;
}
</style>
