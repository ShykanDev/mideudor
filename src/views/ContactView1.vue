<template>
  <div>
    <MainLayout>
      <template #main>
        <section class="flex items-center justify-center py-10 bg-gradient-to-r from-sky-50 to-sky-100">
          <div class="w-full max-w-3xl p-8 bg-white shadow-lg rounded-3xl">
            <h2 class="mb-6 text-3xl font-bold text-center text-teal-800">Contáctanos</h2>
            <p class="mb-6 text-center text-gray-600">
              Completa este formulario y nos pondremos en contacto contigo lo antes posible.
            </p>
            <form @submit.prevent="sendEmail" class="space-y-6">
              <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label for="name" class="block mb-2 text-sm font-semibold text-teal-700">Nombre</label>
                  <input v-model="name" type="text" id="name" name="name" :class="{ 'border-red-500': noName }" required
                    placeholder="Daniel Rodriguez"
                    class="block w-full px-4 py-3 text-gray-700 placeholder-gray-400 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500" />
                  <p v-if="noName" class="mt-1 text-xs text-red-500">Este campo es obligatorio.</p>
                </div>
                <div>
                  <label for="subject" class="block mb-2 text-sm font-semibold text-teal-700">Asunto</label>
                  <input v-model="subject" type="text" id="subject" name="subject"
                    :class="{ 'border-red-500': noSubject }" required placeholder="Informes"
                    class="block w-full px-4 py-3 text-gray-700 placeholder-gray-400 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500" />
                  <p v-if="noSubject" class="mt-1 text-xs text-red-500">Este campo es obligatorio.</p>
                </div>
              </div>

              <div>
                <label for="email" class="block mb-2 text-sm font-semibold text-teal-700">Correo Electrónico</label>
                <input v-model="email" type="email" id="email" name="email" :class="{ 'border-red-500': noEmail }"
                  required placeholder="correo@ejemplo.com"
                  class="block w-full px-4 py-3 text-gray-700 placeholder-gray-400 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500" />
                <p v-if="noEmail" class="mt-1 text-xs text-red-500">Este campo es obligatorio.</p>
              </div>

              <div>
                <label for="message" class="block mb-2 text-sm font-semibold text-teal-700">Mensaje</label>
                <textarea id="message" name="message" rows="5" v-model="message"
                  :class="{ 'border-red-500': noMessage }" required placeholder="Escriba su mensaje"
                  class="block w-full px-4 py-3 text-gray-700 placeholder-gray-400 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"></textarea>
                <p v-if="noMessage" class="mt-1 text-xs text-red-500">Este campo es obligatorio.</p>
              </div>

              <div class="text-center">
                <button type="submit"
                  class="inline-block px-8 py-3 text-lg font-medium text-white bg-teal-600 rounded-full shadow-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </section>


      </template>
    </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';
import emailjs from '@emailjs/browser';
import { Notyf } from 'notyf';

const name = ref('');
const subject = ref('');
const email = ref('');
const message = ref('');

const noName = ref(false);
const noSubject = ref(false);
const noEmail = ref(false);
const noMessage = ref(false);

const notyf = new Notyf({
  duration: 4000,
  position: { x: 'right', y: 'top' }
});

const sendEmail = async () => {
  if (!name.value || !subject.value || !email.value || !message.value) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  const templateParams = {
    name: name.value,
    subject: subject.value,
    email: email.value,
    message: message.value,
    reply_to: email.value
  };

  try {
    await emailjs.send(
      'service_3nl9wkf.', // Reemplaza con tu Service ID
      'template_2q2mc52', // Reemplaza con tu Template ID
      templateParams,
      'fXlbInB-wrOGPiUbH' // Reemplaza con la clave pública que obtuviste
    );
    notyf.success('Correo enviado correctamente.');
    name.value = '';
    subject.value = '';
    email.value = '';
    message.value = '';

  } catch (error) {
    console.error('Error al enviar el correo:', error);

  }
};




</script>

<style scoped>
/* Puedes añadir más estilos personalizados si lo deseas */
</style>
