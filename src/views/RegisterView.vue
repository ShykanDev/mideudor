<template>
  <MainLayout>
    <template #main>
      <section class="fixed flex w-full h-full -z-10 ">
        <img class="w-full animate-fade-down"
          src="https://images.unsplash.com/photo-1531143649673-c46c71c7bbd2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="">
      </section>
      <div class="w-full max-w-4xl p-8 py-4 mx-auto bg-white border border-gray-300 rounded-2xl font-poppins">
        <div class="mb-12 text-cIntroducir">
          <h1 class="text-3xl font-bold text-sky-800">Registrarse</h1>
        </div>

        <form class="">
          <div class="space-y-3">
            <div>
              <label class="block mb-2 text-sm text-gray-800">Nombre</label>
              <input name="nombre" type="text" v-model="name"
                class="w-full px-4 py-3 text-sm text-gray-800 bg-white border border-gray-300 rounded-md outline-blue-500"
                placeholder="Introducir contraseña" />
            </div>
            <div>
              <label class="block mb-2 text-sm text-gray-800">Correo</label>
              <input name="email" type="text" v-model="email"
                class="w-full px-4 py-3 text-sm text-gray-800 bg-white border border-gray-300 rounded-md outline-blue-500"
                placeholder="Introducir correo" />
            </div>
            <div>
              <label class="block mb-2 text-sm text-gray-800">Contraseña</label>
              <input name="password" type="password" v-model="password"
                class="w-full px-4 py-3 text-sm text-gray-800 bg-white border border-gray-300 rounded-md outline-blue-500"
                placeholder="Introducir contraseña" />
            </div>
            <div>
              <label class="block mb-2 text-sm text-gray-800">Confirmar Contraseña</label>
              <input name="cpassword" type="password" v-model="cpassword"
                class="w-full px-4 py-3 text-sm text-gray-800 bg-white border border-gray-300 rounded-md outline-blue-500"
                placeholder="Confirmar contraseña" />
            </div>

            <div class="flex items-cIntroducir">
              <input v-model="remember" id="remember-me" name="remember-me" type="checkbox"
                class="w-4 h-4 text-blue-600 border-gray-300 rounded shrink-0 focus:ring-blue-500" />
              <label for="remember-me" class="block ml-3 text-sm text-gray-800">
                Acepto los <a href="javascript:void(0);"
                  class="ml-1 font-semibold text-blue-600 hover:underline">Términos y condiciones</a>
              </label>
            </div>
          </div>

          <div class="!mt-12">
            <button @click="handleCreateAccount" type="button"
              class="w-full px-4 py-3 text-sm font-semibold tracking-wider text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none">
              Crear cuenta
            </button>
          </div>
          <p class="mt-6 text-sm text-gray-800 text-cIntroducir">¿Ya tiene una cuenta? <a href="javascript:void(0);"
              class="ml-1 font-semibold text-blue-600 hover:underline">Iniciar Sesión</a></p>
        </form>
      </div>
      <!-- </div> -->
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';

import { ref } from 'vue';

const email = ref('');
const password = ref('');
const name = ref('');
const cpassword = ref('');
const remember = ref(false);

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte
import { useRouter } from 'vue-router';

// Create an instance of Notyf
const notyf = new Notyf();

const auth = getAuth();

const router = useRouter();

const handleCreateAccount = async () => {
  // verify if values are valid
  if (email.value === '' || password.value === '' || name.value === '' || cpassword.value === '' || !remember.value) {
    notyf.error({
      message: 'Por favor, complete todos los campos y acepte los términos y condiciones.',
      dismissible: true,
      duration: 4000,
      ripple: true,
      position: {
        x: 'right',
        y: 'top'
      },
    })
    return;
  }

  if (password.value.length < 6) {
    notyf.error({
      message: 'La contraseña debe tener al menos 6 caracteres.',
      dismissible: true,
      duration: 4000,
      ripple: true,
      position: {
        x: 'right',
        y: 'top'
      },
    })
    return
  }

  if (password.value !== cpassword.value) {
    notyf.error({
      message: 'Las contraseñas no coinciden.',
      dismissible: true,
      duration: 4000,
      ripple: true,
      position: {
        x: 'right',
        y: 'top'
      },
    })
    return;
  }
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email.value, password.value);

    const user = userCredentials.user;

    await updateProfile(user, {
      displayName: name.value,
    });
    if (user) {
      notyf.success({
        message: `${user.displayName} su cuenta se ha creado correctamente, por favor verifique su correo`,
        dismissible: true,
        duration: 15000,
        ripple: true,
        position: {
          x: 'right',
          y: 'top'
        },

      })

      setTimeout(() => {
        notyf.success({
          message: `Será redirigido automaticamente al Inicio de Sesión en breve`,
          dismissible: true,
          duration: 9000,
          ripple: true,
          position: {
            x: 'right',
            y: 'top'
          },
        })
        router.push({ name: 'login' })
      }, 2000);

    }
  } catch (error) {

    notyf.error({
      message: `Hubo un error al crear la cuenta, intentelo más tarde: ${error}aa`,
      dismissible: true,
      duration: 10000,
      ripple: true,
      position: {
        x: 'right',
        y: 'top'
      },

    })

  }
}

</script>



<style scoped></style>
