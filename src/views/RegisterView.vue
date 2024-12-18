<template>
  <MainLayout>
    <template #main>
      <section class="fixed flex w-full h-full -z-10 ">
        <img class="w-full animate-fade-up"
          src="https://images.unsplash.com/photo-1531143649673-c46c71c7bbd2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="">
      </section>
      <div class="w-full max-w-lg p-8 py-4 mx-auto bg-white border border-gray-300 rounded-2xl font-poppins">
        <div class="mb-12 text-cIntroducir">
          <h1 class="text-3xl font-bold text-sky-800">Registrarse</h1>
        </div>

        <form>
          <div class="space-y-6">
            <div>
              <label class="block mb-2 text-sm text-gray-800">Correo</label>
              <input name="email" type="text"
                class="w-full px-4 py-3 text-sm text-gray-800 bg-white border border-gray-300 rounded-md outline-blue-500"
                placeholder="Introducir correo" />
            </div>
            <div>
              <label class="block mb-2 text-sm text-gray-800">Contraseña</label>
              <input name="password" type="password"
                class="w-full px-4 py-3 text-sm text-gray-800 bg-white border border-gray-300 rounded-md outline-blue-500"
                placeholder="Introducir contraseña" />
            </div>
            <div>
              <label class="block mb-2 text-sm text-gray-800">Nombre</label>
              <input name="password" type="password"
                class="w-full px-4 py-3 text-sm text-gray-800 bg-white border border-gray-300 rounded-md outline-blue-500"
                placeholder="Introducir contraseña" />
            </div>
            <div>
              <label class="block mb-2 text-sm text-gray-800">Confirmar Contraseña</label>
              <input name="cpassword" type="password"
                class="w-full px-4 py-3 text-sm text-gray-800 bg-white border border-gray-300 rounded-md outline-blue-500"
                placeholder="Confirmar contraseña" />
            </div>

            <div class="flex items-cIntroducir">
              <input id="remember-me" name="remember-me" type="checkbox"
                class="w-4 h-4 text-blue-600 border-gray-300 rounded shrink-0 focus:ring-blue-500" />
              <label for="remember-me" class="block ml-3 text-sm text-gray-800">
                Acepto los <a href="javascript:void(0);"
                  class="ml-1 font-semibold text-blue-600 hover:underline">Términos y condiciones</a>
              </label>
            </div>
          </div>

          <div class="!mt-12">
            <button type="button"
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


</script>

<style scoped></style>
