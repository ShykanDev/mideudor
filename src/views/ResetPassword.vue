<template>
  <MainLayout>
    <template #main>
      <section class="fixed w-full h-full bg-cyan-50 ">

        <div class="container mx-auto">
          <div class="flex justify-center px-6 my-12">
            <!-- Row -->
            <div class="flex w-full xl:w-3/4 lg:w-11/12 ">
              <!-- Col -->
              <div class="hidden w-full h-auto bg-gray-400 bg-cover rounded-l-lg lg:block lg:w-1/2"
                style="background-image: url('https://plus.unsplash.com/premium_photo-1700502264441-cf38978031fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFzc3dvcmR8ZW58MHx8MHx8fDA%3D')">
              </div>
              <!-- Col -->
              <div class="w-full p-5 bg-white rounded-lg shadow-2xl lg:w-1/2 lg:rounded-l-none">
                <div class="px-8 mb-4 text-center">
                  <h3 class="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
                  <p class="mb-4 text-sm text-gray-700">
                    We get it, stuff happens. Just enter your email address below and we'll send you a
                    link to reset your password!
                  </p>
                </div>
                <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div class="mb-4">
                    <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                      Email
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email" type="email" placeholder="Enter Email Address..." />
                  </div>
                  <div class="mb-6 text-center">
                    <button
                      class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                      type="button">
                      Reset Password
                    </button>
                  </div>
                  <hr class="mb-6 border-t" />
                  <div class="text-center">
                    <a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="#">
                      Create an Account!
                    </a>
                  </div>
                  <div class="text-center">
                    <a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="#">
                      Already have an account? Login!
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped></style>
