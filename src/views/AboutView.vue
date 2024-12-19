<template>
  <MainLayout>
    <template #main>
      <div class="w-full p-8 shadow-2xl bg-cyantext-cyan-800 bg-gradient-to-r">
        <h1 class="mb-8 text-4xl font-extrabold text-center text-cyan-800">Sobre Nosotros</h1>

        <section class="mb-8">
          <h2 class="pb-2 mb-4 text-3xl font-semibold border-b-4 text-cyan-800 border-cyantext-cyan-800">Nuestro
            Objetivo</h2>
          <p class="text-cyan-800">Nuestro objetivo principal es ayudar a las personas a compartir sus experiencias, ya
            sean positivas o negativas, relacionadas con las amas del hogar. Queremos que te sientas cómodo al compartir
            tus historias y que encuentres un espacio seguro y acogedor para hacerlo.</p>
        </section>

        <section class="mb-8">
          <h2 class="pb-2 mb-4 text-3xl font-semibold border-b-4 text-cyan-800 border-cyantext-cyan-800">Nuestra Misión
          </h2>
          <p class="text-cyan-800">Esta página fue creada con el propósito de ser totalmente gratuita para los usuarios,
            sin ningún tipo de cobro o suscripción oculta. Queremos asegurarnos de que todos puedan expresar sus
            vivencias sin preocupaciones económicas.</p>
        </section>

        <section class="mb-8">
          <h2 class="pb-2 mb-4 text-3xl font-semibold border-b-4 text-cyan-800 border-cyantext-cyan-800">Nuestro
            Compromiso</h2>
          <p class="text-cyan-800">Estamos aquí para servirles. Nuestro equipo está comprometido con ofrecer un espacio
            seguro y útil para la comunidad, donde cada experiencia es valiosa. Tu voz es importante para nosotros.</p>
        </section>

        <section class="mb-8">
          <h2 class="pb-2 mb-4 text-3xl font-semibold border-b-4 text-cyan-800 border-cyantext-cyan-800">Transparencia y
            Honestidad
          </h2>
          <p class="text-cyan-800">Creemos en la importancia de la transparencia y la honestidad. Por eso, nos
            esforzamos
            en mantener una plataforma libre de publicidad invasiva y de cualquier tipo de manipulación de contenido.
            Queremos que te sientas libre de compartir tus experiencias de manera auténtica y sin filtros.</p>
        </section>

        <section class="mb-8">
          <h2 class="pb-2 mb-4 text-3xl font-semibold border-b-4 text-cyan-800 border-cyantext-cyan-800">Nuestro Equipo
          </h2>
          <p class="text-cyan-800">Nuestro equipo está compuesto por profesionales dedicados que trabajan
            incansablemente
            para mejorar la plataforma y asegurarse de que sea un lugar seguro y confiable para todos. Valoramos cada
            comentario y sugerencia que recibimos, y estamos comprometidos a hacer de esta página un recurso valioso
            para la comunidad.</p>
        </section>

        <section class="mb-8">
          <h2 class="pb-2 mb-4 text-3xl font-semibold border-b-4 text-cyan-800 border-cyantext-cyan-800">Contacto</h2>
          <p class="text-cyan-800">Si tienes alguna duda, no dudes en contactarnos a través del correo electrónico <a
              href="mailto:informes@parasadan.mx" class="text-blue-200 hover:text-blue-400">informes@parasadan.mx</a>.
          </p>
          <div class="flex items-center mt-4 text-cyan-800">
            <i class="mr-2 text-lg fas fa-envelope"></i>
            <span>informes@parasadan.mx</span>
          </div>
        </section>
      </div>

    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped></style>
