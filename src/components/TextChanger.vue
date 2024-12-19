<template>
  <div>
    <h3 class="animate-fade">Deudor <span :key="dynamicValue"> {{ dynamicValue }}</span></h3>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const values = [
  'Monetario',
  'Moral',
  'Social',
  'Gubernamental',
  'Familiar',
  'Profesional',
  'Ambiental',
  'Religioso',
  'Educativo',
  'Histórico'
];

const dynamicValue = ref(values[0]);
let intervalId: number | undefined;

const updateDynamicValue = () => {
  const currentIndex = values.indexOf(dynamicValue.value);
  const nextIndex = (currentIndex + 1) % values.length;
  dynamicValue.value = values[nextIndex];
};

onMounted(() => {
  intervalId = window.setInterval(updateDynamicValue, 3000); // Cambia el valor cada 3 segundos
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style scoped>
/* Estilos opcionales */
h3 {
  font-size: 1.5em;
  margin-bottom: 1em;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 0.5em;
}
</style>
