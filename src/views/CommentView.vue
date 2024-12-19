<template>
  <MainLayout>
    <template #main>
      <article class="fixed top-0 left-0 w-full h-full bg-gray-100 bg-opacity-80 -z-10">
        <img
          src="https://images.unsplash.com/photo-1722237476242-4aea48b20565?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="" class="w-full animate-fade-up">
      </article>

      <section class="max-w-4xl p-6 mx-auto my-2 bg-white rounded-lg shadow-lg bg-opacity-95 font-poppins">
        <h2 class="mb-4 text-2xl font-bold text-cyan-800"><i class="mr-2 fas fa-comments"></i>Nuevo Comentario</h2>
        <form>
          <div class="mb-4">
            <label for="titulo" class="block mb-2 font-bold text-gray-700">Título
              del
              Comentario</label>
            <input type="text" id="titulo" name="titulo" v-model="title"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe el título de tu comentario">
          </div>
          <div class="mb-4">
            <label for="categoria" class="block mb-2 font-bold text-gray-700"><i
                class="mr-2 fas fa-list-alt"></i>Categoría</label>
            <small class="block mb-2 text-sm text-gray-500">Seleccione la categoría de su comentario</small>
            <div class="relative">
              <select v-model="subject" id="categoria" name="categoria"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="Monetario">Monetario</option>
                <option value="Moral">Moral</option>
                <option value="Social">Social</option>
                <option value="Gubernamental">Gubernamental</option>
                <option value="Familiar">Familiar</option>
                <option value="Profesional">Profesional</option>
                <option value="Ambiental">Ambiental</option>
                <option value="Religioso">Religioso</option>
                <option value="Educativo">Educativo</option>
                <option value="Histórico">Histórico</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <label for="comentario" class="block mb-2 font-bold text-gray-700"><i
                class="mr-2 fas fa-comment-dots"></i>Comentario</label>
            <textarea id="comentario" name="comentario" rows="5" v-model="comment"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe tu comentario aquí"></textarea>
          </div>
          <div class="flex justify-end">
            <button type="submit" @click.prevent="hanleSubmit"
              class="px-6 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Comentar<i class="ml-2 fas fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </section>

    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { useSystemValues } from '@/stores/systemValues';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { ref } from 'vue';


const db = getFirestore();
const comment = ref('');
const name = useSystemValues().getUserName ?? 'Usuario';
const subject = ref('Histórico');
const time = ref();
const title = ref('');


const hanleSubmit = async () => {
  if (
    comment.value &&
    // name &&
    subject.value &&
    title.value
  ) {
    try {
      time.value = new Date().toLocaleString();
      await addDoc(
        collection(db, 'comments'),
        {
          comment: comment.value,
          name: name,
          subject: subject.value,
          time: time.value,
          title: title.value
        })

      comment.value = '';
      // name.value = '';
      // subject.value = '';
      time.value = '';
      title.value = '';
    } catch (error) {
      console.log(error);

    }
  }
}
</script>

<style scoped></style>
