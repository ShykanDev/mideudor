<template>
  <div class="w-full max-w-md p-6 bg-white shadow-md rounded-3xl">
    <div class="flex items-center mb-4">
      <!-- <img src="https://via.placeholder.com/40" alt="Avatar" class="mr-4 rounded-full"> -->
      <div>
        <h2 class="text-2xl font-semibold border-b-2 border-emerald-900">{{ title }}</h2>
        <h2 class="my-1 text-lg italic font-semibold">{{ name }}</h2>
        <p class="text-sm text-gray-500">{{ time }}</p>
      </div>
    </div>
    <p class="mb-4 text-gray-700">{{ comment }}</p>
    <div class="flex items-center justify-between">
      <small class="my-3 text-gray-500 font-poppins">Tema: Deudor {{ subject }}</small>
      <button class="flex items-center text-gray-500 hover:text-blue-700">
        <i class="mr-2 fas fa-thumbs-up"></i>
        <span>Like</span>
      </button>
      <div class="flex items-center space-x-2">
        <i class="text-gray-500 fas fa-comment-alt"></i>
        <RouterLink to="/comment" class="text-gray-500 hover:text-blue-700">Responder</RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSystemValues } from '@/stores/systemValues';

const props = defineProps({
  name: {
    type: String,
    default: 'John Doe'
  },
  comment: {
    type: String,
    default: 'This is a sample comment.'
  },
  time: {
    type: String,
    default: '2 hours ago'
  },
  title: {
    type: String,
    default: 'Sample Title'
  },
  subject: {
    type: String,
    default: 'Monetario'
  }

})
</script>

<style scoped></style>
