<template>
  <div class="">
    <MainLayout>
      <template #main>
        <h2>Comentarios</h2>
        <div v-for="comment in comments" :key="comment">
          {{ comment }}
        </div>
      </template>
    </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';
import { onMounted, onUnmounted, ref } from 'vue';

const db = getFirestore();

const commentsCollection = collection(db, 'comments');

const comments = ref();

let unsuscribe: () => void;

onMounted(() => {
  unsuscribe = onSnapshot(commentsCollection, (snapshot) => {
    comments.value = snapshot.docs.map(doc => doc.data());
  })
})

onUnmounted(() => {
  if (unsuscribe) {
    unsuscribe();
  }
})

</script>

<style scoped></style>
