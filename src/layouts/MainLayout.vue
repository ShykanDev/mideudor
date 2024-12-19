<template>
  <div class="">
    <header
      class="sticky top-0 z-50 flex items-center justify-between w-full px-4 py-4 overflow-hidden text-black bg-white shadow-md ">
      <div class="relative flex items-center justify-start">
        <h1
          :class="{ 'animate-fade-down': title1, 'opacity-0': title2, 'text-sky-800': router.name === 'home', 'text-purple-800': router.name == 'types', 'text-orange-700': router.name === 'examples' }"
          class="text-xl font-medium text-center transition-all duration-500 ease-in-out text-cyan-800 font-kanit">
          mideudor.com</h1>
        <h1
          :class="{ 'animate-fade-up': title2, 'opacity-0 animate-none': title1, 'text-sky-800': router.name === 'home', 'text-purple-800': router.name == 'types', 'text-orange-700': router.name === 'examples' }"
          class="absolute text-xl font-medium text-center transition-all duration-500 ease-in-out text-cyan-900 font-montserrat">
          misdeudores.com</h1>
      </div>
      <img class="absolute left-[16%] w-24" src="../assets/SSL Secured Blue.svg" alt="">

      <div class="">
        <nav class="space-x-6 font-poppins">
          <RouterLink :to="{ name: 'home' }" class="text-cyan-900"><i class="fas fa-home"></i> Inicio</RouterLink>
          <RouterLink :to="{ name: 'comment' }" class="text-cyan-900"><i class="fas fa-comment"></i> Comentar

          </RouterLink>
          <RouterLink v-if="!useSystemValues().getUserStatus" :to="{ name: 'login' }" class="text-cyan-900"><i
              class="mr-2 fas fa-sign-in-alt"></i>Iniciar
            Sesion
          </RouterLink>
          <RouterLink v-if="!useSystemValues().getUserStatus" :to="{ name: 'register' }" class="text-cyan-900"><i
              class="fas fa-laptop"></i> Registrarse
          </RouterLink>
          <RouterLink :to="{ name: 'about' }" class="text-cyan-900"><i class="mr-2 fas fa-user-plus"></i>Nosotros
          </RouterLink>
          <RouterLink :to="{ name: 'privacy' }" class="text-cyan-900"> <i class="mr-2 fas fa-lock"></i>Politica de
            Privacidad
          </RouterLink>
          <RouterLink :to="{ name: 'terms' }" class="text-cyan-900"><i class="mr-2 fas fa-info-circle"></i>Terminos
          </RouterLink>
        </nav>
      </div>
      <!-- changin text color based on route -->

    </header>
    <main>
      <slot class="" name="main">

      </slot>

    </main>


    <footer class="mt-4 bg-white rounded-lg shadow font-poppins">
      <div class="w-full max-w-screen-xl p-4 mx-auto md:py-8">
        <!-- Título del sitio -->
        <div class="mb-6 text-center">
          <h2 class="text-2xl font-semibold text-cyan-800">misdeudores.com</h2>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Este sitio es completamente seguro y utiliza cifrado SSL para proteger su información.
            <i class="ml-1 fas fa-lock text-cyan-700"></i>
          </p>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Diseñado como una
            herramienta de apoyo social, su uso es gratuito y sin costos ocultos.
            <i class="ml-1 fas fa-shield-alt text-cyan-700"></i>
          </p>
        </div>
        <!-- Enlaces principales -->
        <div class="flex justify-center">
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <router-link to="/about" class="hover:underline me-4 md:me-6">
                <i class="mr-1 fas fa-info-circle"></i> Acerca de
              </router-link>
            </li>
            <li>
              <router-link to="/policy" class="hover:underline me-4 md:me-6">
                <i class="mr-1 fas fa-file-alt"></i> Política de privacidad
              </router-link>
            </li>
            <li>
              <router-link to="/terms" class="hover:underline me-4 md:me-6">
                <i class="mr-1 fas fa-scroll"></i> Términos y condiciones
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="hover:underline">
                <i class="mr-1 fas fa-envelope"></i> Contacto
              </router-link>
            </li>
          </ul>
        </div>
        <!-- Línea divisoria -->
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <!-- Derechos reservados -->
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <router-link to="/" class="hover:underline text-cyan-700">Mis Deudores</router-link>. Todos los
          derechos reservados.
        </span>
      </div>
    </footer>



  </div>
</template>

<script lang="ts" setup>
import { useSystemValues } from '@/stores/systemValues';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const router = useRoute();

const title1 = ref(true);
const title2 = ref(false);

const switchTitle = () => {
  title1.value = !title1.value;
  title2.value = !title2.value;
}

onMounted(() => {
  setInterval(switchTitle, 3000);
})
</script>

<style scoped></style>
