<template>
  <button @click="useSystemValues().setCurrentDebtor(btnName.toLowerCase())"
    :class="{ 'bg-emerald-800': useSystemValues().getCurrentDebtor !== btnName.toLowerCase(), 'bg-emerald-500': useSystemValues().getCurrentDebtor === btnName.toLowerCase() }"
    class="flex items-center px-4 py-2 space-x-2 font-semibold text-white rounded font-montserrat">
    <i v-if="icon" :class="`fas ${icon}`"></i>
    <span class="text-xs font-poppins"> {{ btnName }}</span>
  </button>
</template>

<script lang="ts" setup>
import { useSystemValues } from '@/stores/systemValues';

const props = defineProps({
  btnName: {
    type: String,
    default: 'Button'
  },
  icon: {
    type: String,
    default: '' // Ícono por defecto vacío si no se pasa uno
  },
  btnColor: {
    type: String,
    default: '#064E3B'
  },
  hoverColor: {
    type: String,
    default: 'bg-blue-200'
  }
});
</script>

<style scoped></style>
