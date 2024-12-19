<template>
  <div class="max-w-sm mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="object-cover w-full h-48 md:w-48" :src="image" :alt="name">
      </div>
      <div class="p-8">
        <div class="text-sm font-semibold tracking-wide uppercase text-emerald-800">Tipo de deuda: {{ category }}</div>
        <a href="#" class="block mt-1 text-lg font-medium leading-tight text-black hover:underline">{{ title }}</a>
        <p class="mt-2 text-gray-500">{{ date }}</p>
        <p class="mt-2 text-gray-500">{{ history }}</p>
        <p class="mt-2 text-gray-500">{{ name }}</p>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>

const props = defineProps({
  image: {
    type: String,
    required: true,
    default: 'https://via.placeholder.com/150'
  },
  category: {
    type: String,
    required: true,
    default: 'Category'
  },
  title: {
    type: String,
    required: true,
    default: 'Title'
  },
  date: {
    type: String,
    required: true,
    default: 'Date'
  },
  history: {
    type: String,
    required: true,
    default: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas. Quisquam, voluptas. Quisquam, voluptas.'
  },
  name: {
    type: String,
    required: true,
    default: 'Name'
  }
})
</script>

<style scoped></style>
