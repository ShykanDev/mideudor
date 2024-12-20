<template>
  <MainLayout>
    <template #main>
      <article class="flex items-center justify-center w-full bg-blue-50 bg-opacity-60 min-h-dvh font-poppins">

        <!-- From Uiverse.io by gharsh11032000 -->
        <div class="bg-red-600 form-container">
          <div class="logo-container">
            Olvidé mi Contraseña
          </div>

          <form class="form">
            <div class="form-group">
              <label for="email">Correo Electrónico</label>
              <input v-model="email" type="text" id="email" name="email" placeholder="Ingresa tu correo electrónico"
                required="true">
            </div>

            <button @click.prevent="handleRestore" class="form-submit-btn" type="submit">Enviar Correo</button>
          </form>

          <p class="signup-link">
            ¿No tienes una cuenta?
            <!-- <router-link to="/register" class="link">Regístrate</router-link> -->
          </p>
        </div>
      </article>

    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Notyf } from 'notyf';
import { ref } from 'vue';

const email = ref('');

const auth = getAuth();

const notyf = new Notyf({
  ripple: true,
  dismissible: true,
  duration: 4000,
  position: {
    x: 'right',
    y: 'top',
  },
});

const handleRestore = async () => {
  try {
    await sendPasswordResetEmail(auth, email.value);
    notyf.success('Correo enviado');
  } catch (error) {
    notyf.error('Error al enviar el correo');
  }

}

</script>

<style scoped>
/* From Uiverse.io by gharsh11032000 */
.form-container {
  max-width: 600px;
  background-color: #fff;
  padding: 32px 24px;
  font-size: 14px;
  font-family: inherit;
  color: #212121;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
}

.form-container button:active {
  scale: 0.95;
}

.form-container .logo-container {
  text-align: center;
  font-weight: 600;
  font-size: 18px;
}

.form-container .form {
  display: flex;
  flex-direction: column;
}

.form-container .form-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.form-container .form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-container .form-group input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 6px;
  font-family: inherit;
  border: 1px solid #ccc;
}

.form-container .form-group input::placeholder {
  opacity: 0.5;
}

.form-container .form-group input:focus {
  outline: none;
  border-color: #1778f2;
}

.form-container .form-submit-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  color: #fff;
  background-color: #212121;
  border: none;
  width: 100%;
  padding: 12px 16px;
  font-size: inherit;
  gap: 8px;
  margin: 12px 0;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
}

.form-container .form-submit-btn:hover {
  background-color: #313131;
}

.form-container .link {
  color: #1778f2;
  text-decoration: none;
}

.form-container .signup-link {
  align-self: center;
  font-weight: 500;
}

.form-container .signup-link .link {
  font-weight: 400;
}

.form-container .link:hover {
  text-decoration: underline;
}
</style>
