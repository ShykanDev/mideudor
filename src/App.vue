<script setup lang="ts">
import 'overlayscrollbars/overlayscrollbars.css';

import { RouterLink, RouterView } from 'vue-router'
import { useSystemValues } from './stores/systemValues';

useSystemValues().setCurrentPhoto();

</script>

<template>
  <RouterView />
</template>

<style scoped></style>
