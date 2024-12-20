<template>
  <div class="">
    <MainLayout>
      <template #main>
        <!-- top image and title intro -->
        <!-- Title section -->
        <h1 class="px-3 text-5xl font-semibold text-left uppercase text-slate-700 font-kanit">Sitio para
          <span class="text-sky-800">compartir experiencias</span> sobre
          el deudor <span class="italic text-orange-500 uppercase animate-fade-down" :key="dynamicValue"> {{
            dynamicValue }} </span>
          <span class="text-cyan-600"> en sus diversas formas:</span>
          experiencias, consecuencias y
          lecciones.
        </h1>
        <div class="my-5 overflow-hidden">
          <SliderDebtors />
          <!-- <TextChanger /> -->
        </div>

        <div class="flex flex-col gap-8 mt-6 text-gray-800 md:flex-row font-poppins">
          <div></div>
          <h3 class="max-w-md text-lg leading-relaxed">
            En este espacio, usted podrá compartir sus experiencias como deudor o sobre las deudas que otros han
            contraído con usted, abarcando diversos tipos de deudas. A lo largo de esta página, encontrará categorías
            específicas que le permitirán comentar y acceder a información detallada sobre cada tipo de deuda.
            <div class="flex flex-col items-center gap-4 mt-6 font-poppins">
              <div class="flex flex-wrap justify-center gap-4">
                <router-link :to="{ name: 'home' }"
                  class="flex items-center px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-md btn hover:bg-gray-200">
                  <i class="mr-2 fas fa-home"></i> Inicio
                </router-link>
                <a href="#comentarios"
                  class="flex items-center px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-md btn hover:bg-gray-200">
                  <i class="mr-2 fas fa-comment-dots"></i> Comentarios
                </a>
                <router-link v-if="!useSystemValues().getUserStatus" :to="{ name: 'login' }"
                  class="flex items-center px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-md btn hover:bg-gray-200">
                  <i class="mr-2 fas fa-sign-in-alt"></i> Iniciar Sesión
                </router-link>
                <router-link v-if="!useSystemValues().getUserStatus" :to="{ name: 'register' }"
                  class="flex items-center px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-md btn hover:bg-gray-200">
                  <i class="mr-2 fas fa-user-plus"></i> Registrarse
                </router-link>
                <router-link :to="{ name: 'about' }"
                  class="flex items-center px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-md btn hover:bg-gray-200">
                  <i class="mr-2 fas fa-info-circle"></i> Sobre Nosotros
                </router-link>
                <router-link :to="{ name: 'privacy' }"
                  class="flex items-center px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-md btn hover:bg-gray-200">
                  <i class="mr-2 fas fa-balance-scale"></i> Políticas TyC
                </router-link>
                <a href="#seguridad"
                  class="flex items-center px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-md btn hover:bg-gray-200">
                  <i class="mr-2 fas fa-lock"></i> Seguridad
                </a>
                <a href="#historias"
                  class="flex items-center px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-md btn hover:bg-gray-200">
                  <i class="mr-2 fas fa-book-open"></i> Historias
                </a>
                <a href="mailto:informes@grupochimex.com"
                  class="flex items-center px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-md btn hover:bg-gray-200">
                  <i class="mr-2 fas fa-envelope"></i> Contacto
                </a>
              </div>
              <!-- Botón de Registrarse -->
              <router-link v-if="!useSystemValues().getUserStatus" :to="{ name: 'register' }"
                class="flex items-center justify-center w-48 px-4 py-2 text-lg font-semibold text-white transition duration-300 rounded-lg shadow-md bg-cyan-800 hover:bg-cyan-700">
                <i class="mr-2 fas fa-user-plus"></i>
                Registrarse
              </router-link>

              <!-- Botón de Iniciar Sesión -->
              <router-link v-if="!useSystemValues().getUserStatus" :to="{ name: 'login' }"
                class="flex items-center justify-center w-48 px-4 py-2 text-lg font-semibold transition duration-300 bg-gray-100 rounded-lg shadow-md text-cyan-800 hover:bg-gray-200">
                <i class="mr-2 fas fa-sign-in-alt"></i>
                Iniciar Sesión
              </router-link>
            </div>

          </h3>

          <div class="container p-8 space-y-8 border border-gray-200 rounded-lg shadow-lg bg-gray-50">
            <!-- Título principal -->
            <h3 class="text-xl text-gray-800">
              Explore nuestra plataforma para conocer las experiencias de otros usuarios relacionadas con diferentes
              tipos
              de deudas: monetarias, morales, sociales y más. Este sitio ha sido diseñado para fomentar el diálogo y el
              intercambio de vivencias de manera segura y sin costo alguno. Regístrese y participe en una comunidad
              comprometida con el entendimiento, la reflexión y la transparencia.
            </h3>
            <div class="max-w-[100%]">
            </div>

            <!-- Redes Sociales -->
            <div class="flex items-center justify-center space-x-6">
              <p class="text-lg font-medium text-gray-700">
                Síguenos en nuestras redes sociales:
              </p>
              <a href="https://www.instagram.com/_prasadam_/?hl=es-la" target="_blank"
                class="p-2 text-pink-500 transition duration-300 border rounded-full hover:text-pink-500 hover:shadow-md hover:border-pink-500">
                <i class="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=525562516687&text&type=phone_number&app_absent=0"
                target="_blank"
                class="p-2 text-green-500 transition duration-300 border rounded-full hover:text-green-500 hover:shadow-md hover:border-green-500">
                <i class="fab fa-whatsapp fa-lg"></i>
              </a>
              <a href="https://x.com/_prasadam_" target="_blank"
                class="p-2 text-blue-400 transition duration-300 border rounded-full hover:text-blue-400 hover:shadow-md hover:border-blue-400">
                <i class="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://www.facebook.com/AyurevedaPrasadam" target="_blank"
                class="p-2 text-blue-500 transition duration-300 border rounded-full hover:text-blue-600 hover:shadow-md hover:border-blue-600">
                <i class="fab fa-facebook fa-lg"></i>
              </a>
            </div>

            <!-- Tipos de Deudas -->
            <div class="p-6 space-y-4 bg-white rounded-lg shadow-md">
              <p class="text-lg font-medium text-gray-800">
                Tipos de Deudas a explorar:
              </p>
              <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                <a href="#Deudor Monetario"
                  class="flex items-center gap-3 p-3 transition transform rounded-lg bg-sky-100 hover:bg-sky-200 hover:shadow-lg hover:-translate-y-1">
                  <i class="fas fa-coins text-sky-600"></i>
                  <span class="font-semibold text-sky-800">Monetario</span>
                </a>
                <a href="#Deudor Moral"
                  class="flex items-center gap-3 p-3 transition transform rounded-lg bg-sky-100 hover:bg-sky-200 hover:shadow-lg hover:-translate-y-1">
                  <i class="fas fa-heart text-sky-600"></i>
                  <span class="font-semibold text-sky-800">Moral</span>
                </a>
                <a href="#Deudor Social"
                  class="flex items-center gap-3 p-3 transition transform rounded-lg bg-sky-100 hover:bg-sky-200 hover:shadow-lg hover:-translate-y-1">
                  <i class="fas fa-users text-sky-600"></i>
                  <span class="font-semibold text-sky-800">Social</span>
                </a>
                <a href="#Deudor Gubernamental"
                  class="flex items-center gap-3 p-3 transition transform rounded-lg bg-sky-100 hover:bg-sky-200 hover:shadow-lg hover:-translate-y-1">
                  <i class="fas fa-gavel text-sky-600"></i>
                  <span class="font-semibold text-sky-800">Gubernamental</span>
                </a>
                <a href="#Deudor Familiar"
                  class="flex items-center gap-3 p-3 transition transform rounded-lg bg-sky-100 hover:bg-sky-200 hover:shadow-lg hover:-translate-y-1">
                  <i class="fas fa-home text-sky-600"></i>
                  <span class="font-semibold text-sky-800">Familiar</span>
                </a>
                <a href="#Deudor Profesional"
                  class="flex items-center gap-3 p-3 transition transform rounded-lg bg-sky-100 hover:bg-sky-200 hover:shadow-lg hover:-translate-y-1">
                  <i class="fas fa-briefcase text-sky-600"></i>
                  <span class="font-semibold text-sky-800">Profesional</span>
                </a>
                <a href="#Deudor Ambiental"
                  class="flex items-center gap-3 p-3 transition transform rounded-lg bg-sky-100 hover:bg-sky-200 hover:shadow-lg hover:-translate-y-1">
                  <i class="fas fa-tree text-sky-600"></i>
                  <span class="font-semibold text-sky-800">Ambiental</span>
                </a>
                <a href="#Deudor Religioso"
                  class="flex items-center gap-3 p-3 transition transform rounded-lg bg-sky-100 hover:bg-sky-200 hover:shadow-lg hover:-translate-y-1">
                  <i class="fas fa-om text-sky-600"></i>
                  <span class="font-semibold text-sky-800">Religioso</span>
                </a>
              </div>
              <div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
                <a href="#Deudor Educativo"
                  class="flex items-center gap-3 p-3 transition transform rounded-lg bg-sky-100 hover:bg-sky-200 hover:shadow-lg hover:-translate-y-1">
                  <i class="fas fa-graduation-cap text-sky-600"></i>
                  <span class="font-semibold text-sky-800">Educativo</span>
                </a>
                <a href="#Deudor Histórico"
                  class="flex items-center gap-3 p-3 transition transform rounded-lg bg-sky-100 hover:bg-sky-200 hover:shadow-lg hover:-translate-y-1">
                  <i class="fas fa-landmark text-sky-600"></i>
                  <span class="font-semibold text-sky-800">Histórico</span>
                </a>
                <div class="md:col-span-2 lg:col-span-2">
                  <a href="#comentarios"
                    class="flex items-center justify-center w-full px-4 py-2 text-base text-white transition duration-300 rounded-lg shadow-md font-kanit bg-cyan-800 hover:bg-cyan-700">
                    <i class="mr-2 fas fa-info animate-pulse"></i>
                    ¡Alerte a Otros! No deje que otros caigan en las mismas trampas. ¡Comparta su experiencia!
                  </a>
                </div>

              </div>

            </div>
          </div>


        </div>

        <section class="relative justify-center w-full overflow-hidden">
          <!-- info about debtors -->
          <h3 class="my-4 text-5xl font-bold text-left text-sky-800 mt-14">Tipos de Deudas</h3>
          <h3 class="my-4 text-2xl font-semibold text-left text-slate-600">Explore las diferentes categorías de deudas:
            monetarias, morales, sociales y más.</h3>
          <section class="flex flex-wrap justify-around gap-4 px-2 mt-5">
            <DebtorsCard v-for=" info in info" :key="info.title" :info="info" />
          </section>
          <section>
            <h2 id="historias" class="my-8 text-4xl font-bold text-center text-cyan-800">Historias</h2>

            <section class="grid grid-cols-1 gap-6 px-3 lg:grid-cols-2">
              <HistoriesCard v-for="history in histories" :key="history.title" :image="history.image"
                :category="history.category" :title="history.title" :date="history.date" :history="history.history"
                :name="history.name" />
            </section>
          </section>
          <article class="py-4" id="comentarios">

          </article>
          <section class="flex justify-between px-2 mt-5 text-center font-poppins">
            <ButtonDebtor btn-name="Monetario" icon="fa-coins" img />
            <ButtonDebtor btn-name="Moral" icon="fa-heart" />
            <ButtonDebtor btn-name="Social" icon="fa-users" />
            <ButtonDebtor btn-name="Gubernamental" icon="fa-gavel" />
            <ButtonDebtor btn-name="Familiar" icon="fa-home" />
            <ButtonDebtor btn-name="Profesional" icon="fa-briefcase" />
            <ButtonDebtor btn-name="Ambiental" icon="fa-tree" />
            <ButtonDebtor btn-name="Religioso" icon="fa-om" />
            <ButtonDebtor btn-name="Educativo" icon="fa-graduation-cap" />
            <ButtonDebtor btn-name="Histórico" icon="fa-landmark" />
          </section>

          <section>



            <section class="p-6 rounded-lg shadow-md bg-gray-50">

              <h2 class="mb-4 text-2xl font-bold text-center text-emerald-800 font-kanit">Comentarios para
                <span class="text-2xl font-bold text-cyan-800">DEUDOR {{
                  useSystemValues().getCurrentDebtor.toUpperCase() }}</span>
              </h2>
              <!-- Ejemplo de tarjeta de comentario -->
              <section class="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <!-- <p>{{ useSystemValues().getCurrentDebtor }}</p> -->
                <CommentCard v-if="comments"
                  v-for="comment in comments.filter((e: any) => e.subject.toLowerCase() == useSystemValues().getCurrentDebtor)"
                  :key="comment.id" :name="comment.name" :comment="comment.comment" :title="comment.title"
                  :time="comment.time" :subject="comment.subject" />
              </section>


            </section>
          </section>

          <!-- TypesSection -->

          <!-- Debtors  -->
          <section class="py-12 bg-gray-100">
            <div class="">
              <h2 class="mb-8 text-3xl font-bold text-center text-gray-800">Seguridad y Privacidad</h2>
              <div class="px-8 font-poppins">
                <p class="mb-6 text-lg text-gray-700">
                  <i class="mr-2 text-emerald-600 fas fa-shield-alt"></i>
                  Este sitio es completamente seguro y utiliza tecnologías de seguridad avanzadas para proteger sus
                  datos. Nos tomamos muy en serio la privacidad y la seguridad de nuestros usuarios.
                </p>
                <p class="mb-6 text-lg text-gray-700">
                  <i class="mr-2 text-emerald-600 fas fa-lock"></i>
                  Su información está protegida con cifrado SSL, asegurando que sus datos personales estén siempre
                  seguros. Puede confiar en que sus datos están en buenas manos.
                </p>
                <p class="mb-6 text-lg text-gray-700">
                  <i class="mr-2 text-emerald-600 fas fa-hand-holding-heart"></i>
                  El uso de este sitio es gratuito y no cobramos por ninguno de nuestros servicios. Siéntase libre de
                  explorar y utilizar todas nuestras funcionalidades sin preocupaciones. Estamos aquí para ayudarle y
                  hacer su experiencia lo más agradable posible.
                </p>
                <p class="mb-6 text-lg text-gray-700">
                  <i class="mr-2 text-emerald-600 fas fa-smile"></i>
                  Nuestro sitio busca ayudarle, diseñado para que cualquier persona pueda navegar y
                  encontrar lo que necesita sin complicaciones. Queremos que su experiencia sea lo más placentera
                  posible.
                </p>
                <p class="mb-6 text-lg text-gray-700">
                  <i class="mr-2 text-emerald-600 fas fa-globe"></i>
                  Estamos comprometidos a ofrecerle la mejor experiencia posible y a garantizar su seguridad y
                  privacidad en todo momento. Gracias por elegirnos y confiar en nosotros.
                </p>
                <p class="mb-6 text-lg text-gray-700">
                  <i class="mr-2 text-emerald-600 fas fa-thumbs-up"></i>
                  Si tiene alguna pregunta o necesita asistencia, no dude en contactarnos. Estamos aquí para ayudarle
                  en todo lo que necesite.
                </p>
              </div>
            </div>
          </section>
        </section>
      </template>
    </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import ButtonDebtor from '@/components/ButtonDebtor.vue';
import CommentCard from '@/components/CommentCard.vue';
import DebtorsCard from '@/components/DebtorsCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { useSystemValues } from '@/stores/systemValues';
import { onMounted, onUnmounted } from 'vue';
import HistoriesCard from '@/components/HistoriesCard.vue';

const info = [
  {
    title: "Deudor Monetario",
    description: "Un deudor monetario es una persona o entidad que tiene la obligación de devolver una cantidad de dinero prestada a una persona, banco o entidad financiera. Este tipo de deuda incluye préstamos personales, créditos bancarios, tarjetas de crédito, hipotecas, y deudas comerciales. Si el deudor no cumple con los pagos según los términos acordados, puede enfrentar intereses adicionales, penalizaciones, o incluso procedimientos legales como la ejecución de bienes o la quiebra. La deuda monetaria afecta tanto a individuos como a empresas, y el incumplimiento de los pagos puede tener graves consecuencias financieras a largo plazo.",
    img: [
      'https://images.pexels.com/photos/7534779/pexels-photo-7534779.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4968385/pexels-photo-4968385.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/7680365/pexels-photo-7680365.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/5900158/pexels-photo-5900158.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/6963924/pexels-photo-6963924.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    // Ejemplos principales
    mainExamples: [
      {
        exampleTitle: "Préstamo Personal No Pagado",
        exampleText: "Una persona que solicita un préstamo personal de $50,000 para comprar un automóvil y acuerda un plan de pagos mensuales durante tres años. Después de seis meses, esta persona comienza a tener dificultades para pagar, y se retrasa varios meses. El prestamista cobra intereses adicionales por el retraso y la deuda sigue creciendo. Finalmente, la persona recibe un aviso de embargo de su coche para recuperar la deuda impaga. En este caso, la persona pierde el automóvil y se ve enfrentada a cargos adicionales y una calificación crediticia muy dañada."
      },
      {
        exampleTitle: "Tarjetas de Crédito",
        exampleText: "Una persona que utiliza una tarjeta de crédito para hacer compras cotidianas, pero no paga el saldo total cada mes. A medida que pasan los meses, los intereses acumulados sobre la deuda original se suman, y la persona se ve incapaz de saldar la deuda total. El saldo sigue creciendo, afectando no solo su capacidad de pago, sino también su historial crediticio. Eventualmente, la persona se enfrenta a cargos adicionales y la posibilidad de ser demandada por el emisor de la tarjeta."
      },
      {
        exampleTitle: "Hipoteca Impaga",
        exampleText: "Una persona adquiere una casa mediante una hipoteca a 30 años, pero debido a la pérdida de su empleo, no puede realizar los pagos mensuales. Después de varios meses de atraso, el banco inicia un proceso de ejecución hipotecaria y la propiedad es retirada de la persona. La deuda no solo le cuesta su hogar, sino también le afecta de manera significativa su puntaje de crédito."
      },
      {
        exampleTitle: "Deuda Comercial",
        exampleText: "Un pequeño negocio toma un préstamo para financiar su expansión. Después de un tiempo, las ventas no aumentan como se esperaba, y el negocio no puede cumplir con los pagos mensuales. A medida que los pagos atrasados se acumulan, el negocio enfrenta cargos por intereses altos, y los acreedores comienzan a tomar acciones legales para recuperar el dinero prestado."
      },
      {
        exampleTitle: "Préstamo Estudiantil No Saldo",
        exampleText: "Un joven solicita un préstamo estudiantil para financiar su educación universitaria, pero después de graduarse, no consigue empleo en su campo. Durante los años siguientes, el joven lucha por conseguir un trabajo estable y, debido a la falta de pagos, los intereses sobre el préstamo aumentan, aumentando significativamente la deuda total."
      }
    ],

    // Ejemplos adicionales
    additionalExamples: [
      {
        exampleTitle: "Deuda de Alquiler",
        exampleText: "Un inquilino de una propiedad no paga su alquiler durante varios meses debido a dificultades económicas. El propietario decide iniciar un proceso legal de desalojo, y además, el inquilino se ve obligado a pagar una multa por el incumplimiento del contrato de alquiler. La deuda se acumula, afectando su situación financiera y su historial de alquiler."
      },
      {
        exampleTitle: "Deuda de Servicios Públicos",
        exampleText: "Una persona que no paga sus facturas de servicios públicos (agua, electricidad, gas) durante varios meses. La empresa proveedora de servicios corta el suministro de electricidad y agua y comienza a cobrar cargos por pago atrasado, además de agregar tarifas adicionales por la reconexión de los servicios. Esto genera una deuda creciente, afectando la capacidad de la persona de utilizar estos servicios básicos."
      },
      {
        exampleTitle: "Deuda de Tarjeta de Crédito por Emergencias Médicas",
        exampleText: "Una persona utiliza su tarjeta de crédito para cubrir gastos médicos de emergencia. Debido a los altos intereses, la deuda se acumula rápidamente, y aunque realiza algunos pagos, la deuda sigue siendo difícil de manejar. Eventualmente, la persona se enfrenta a problemas financieros graves y a una mala calificación crediticia."
      },
      {
        exampleTitle: "Deuda de Auto No Pagada",
        exampleText: "Una persona compra un automóvil a crédito, pero debido a la falta de pagos durante varios meses, la institución financiera inicia el proceso de recuperación del vehículo. Además de perder el automóvil, la persona se enfrenta a cargos adicionales por la deuda no pagada y su puntuación crediticia se ve afectada."
      },
      {
        exampleTitle: "Deuda por Impuestos No Pagados",
        exampleText: "Una persona no paga sus impuestos durante varios años, lo que lleva a un endeudamiento con la agencia tributaria. Como resultado, la persona recibe multas, intereses y el riesgo de enfrentarse a acciones legales para cobrar la deuda. La deuda crece de manera significativa debido a los intereses y penalidades acumuladas."
      }
    ]
  },
  {
    title: "Deudor Moral",
    img: [
      'https://images.pexels.com/photos/2467396/pexels-photo-2467396.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3651632/pexels-photo-3651632.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/928199/pexels-photo-928199.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=600'

    ],
    description: "Un deudor moral es una persona que ha fallado en cumplir con sus compromisos éticos o promesas hechas a otras personas, sin necesidad de que exista una deuda monetaria involucrada. La deuda moral se refiere a la responsabilidad de cumplir con expectativas de comportamiento, ayuda o apoyo, ya sea en el ámbito personal, familiar, profesional o social. El incumplimiento de estas expectativas puede causar daño emocional o social a los demás, y la deuda moral puede generar una sensación de culpa o remordimiento en el deudor.",

    // Ejemplos principales
    mainExamples: [
      {
        exampleTitle: "Promesas No Cumplidas",
        exampleText: "Una persona promete ayudar a un amigo con una tarea importante, como mudarse a una nueva casa. Sin embargo, en el día acordado, decide no presentarse sin una razón válida ni aviso previo. El amigo se siente decepcionado, ya que confiaba en el apoyo. Aunque no hay un intercambio monetario, la persona que incumplió la promesa acumula una deuda moral por su falta de compromiso y responsabilidad."
      },
      {
        exampleTitle: "Engaño en una Relación de Confianza",
        exampleText: "Una pareja promete ser honesta y leal, pero uno de los miembros rompe esa confianza al ser infiel. Aunque no se trata de una deuda económica, la traición emocional que causa es profunda. La otra persona se siente herida, y quien cometió la infidelidad enfrenta una deuda moral con la otra parte, ya que no ha cumplido con los principios fundamentales de la relación."
      },
      {
        exampleTitle: "No Ayudar a un Compañero de Trabajo",
        exampleText: "En un entorno laboral, un empleado se compromete a ayudar a un compañero con una tarea urgente. Sin embargo, no cumple con su promesa y no ofrece su apoyo cuando se le necesita. El compañero de trabajo tiene que lidiar con la carga extra solo. Aunque no hay una transacción de dinero, la falta de ayuda genera una deuda moral con la persona afectada, ya que no se cumplió con el deber de apoyo."
      },
      {
        exampleTitle: "Negarse a Cumplir un Compromiso Familiar",
        exampleText: "Una persona promete a su familia asistir a un evento importante, como una reunión o celebración, pero decide no asistir sin una justificación clara. Esta falta de compromiso genera malestar en los demás miembros de la familia, que esperaban su presencia y apoyo. En este caso, la persona que no cumplió con su promesa está en deuda moral con su familia."
      },
      {
        exampleTitle: "Dejar a Alguien en una Situación Difícil",
        exampleText: "Un amigo promete estar allí para otro que está atravesando una crisis emocional, pero en el momento de necesidad, no cumple con su palabra y no ofrece su apoyo. Esto crea una deuda moral, ya que la persona afectada se siente abandonada en un momento crítico."
      }
    ],

    // Ejemplos adicionales
    additionalExamples: [
      {
        exampleTitle: "No Cumplir con un Compromiso Escolar",
        exampleText: "Un estudiante promete a su compañero de clase trabajar juntos en un proyecto importante. Sin embargo, no cumple con su parte del trabajo y deja a su compañero con toda la carga. Esto genera frustración y una deuda moral con la otra persona, que esperaba colaboración y responsabilidad."
      },
      {
        exampleTitle: "Mentir a un Ser Querido",
        exampleText: "Una persona miente a un ser querido sobre una situación importante, ocultando la verdad para evitar un conflicto. A pesar de no haber dinero involucrado, la mentira crea un daño emocional significativo, lo que genera una deuda moral con esa persona, que siente que su confianza ha sido traicionada."
      },
      {
        exampleTitle: "Romper una Promesa Familiar",
        exampleText: "Un padre o madre promete a su hijo que lo llevará a un evento especial, pero no cumple. El niño, que esperaba con ilusión ese momento, se siente triste y decepcionado. Aunque no existe una transacción monetaria, el incumplimiento de la promesa crea una deuda moral con el hijo."
      },
      {
        exampleTitle: "No Defender a Alguien en Público",
        exampleText: "Un amigo presencia una situación en la que otro amigo está siendo atacado o criticado injustamente, pero no interviene para defenderlo. Aunque no hay un intercambio de dinero, el amigo que no defendió al otro está en deuda moral, ya que no cumplió con el principio de apoyo mutuo."
      },
      {
        exampleTitle: "Prometer Ayuda y No Cumplir",
        exampleText: "Una persona promete ayudar a alguien en una tarea importante, como cuidar a un familiar enfermo, pero al final no lo hace sin explicar por qué. Esto genera frustración y una deuda moral, ya que la persona que no cumplió con la promesa deja a la otra persona en una situación difícil."
      }
    ]
  },
  {
    title: "Deudor Social",
    img: [
      'https://images.pexels.com/photos/7551678/pexels-photo-7551678.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/6457563/pexels-photo-6457563.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/5684382/pexels-photo-5684382.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/7979605/pexels-photo-7979605.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    description: "Un deudor social es una persona que ha fallado en cumplir con sus responsabilidades y expectativas dentro de la sociedad o en una comunidad. Este tipo de deuda se refiere a comportamientos que afectan el bienestar común, como el no respetar normas sociales, contribuir a la cohesión social o ayudar a aquellos que están en necesidad. El incumplimiento de estas responsabilidades puede resultar en el aislamiento social, la pérdida de confianza de los demás o incluso repercusiones en la estructura social y comunitaria. Aunque no necesariamente involucra una deuda económica, el deudor social acumula un tipo de deuda que afecta a la convivencia y el tejido social.",

    // Ejemplos principales
    mainExamples: [
      {
        exampleTitle: "No Cumplir con Normas Comunitarias",
        exampleText: "Un vecino se compromete a cumplir con las reglas de la comunidad, como el mantenimiento de áreas comunes y la puntualidad en las cuotas. Sin embargo, decide no cumplir con sus responsabilidades, lo que genera malestar entre los otros vecinos. El incumplimiento de estas normas puede crear un conflicto social y dañar la cohesión dentro de la comunidad."
      },
      {
        exampleTitle: "Desatender las Necesidades Sociales",
        exampleText: "Una persona se da cuenta de que su comunidad local está pasando por dificultades, como la falta de recursos para los más necesitados. Aunque tiene los medios para ayudar, decide no hacerlo. Al no tomar acción, esta persona acumula una deuda social, ya que no contribuyó a mejorar la situación colectiva y dejó que otros sufrieran."
      },
      {
        exampleTitle: "Involucrarse en Comportamientos Disruptivos",
        exampleText: "Un miembro de un grupo social o familiar comienza a involucrarse en comportamientos disruptivos, como el abuso de sustancias o el crimen. Estos comportamientos afectan a los demás y crean un ambiente tóxico. Este tipo de deudor social impacta negativamente en el bienestar de la comunidad y la confianza entre las personas."
      },
      {
        exampleTitle: "No Participar en Iniciativas Sociales",
        exampleText: "En un evento comunitario o una acción solidaria organizada para ayudar a personas necesitadas, algunos miembros de la comunidad deciden no participar, aunque tienen la capacidad de hacerlo. La falta de participación en estas iniciativas puede generar resentimiento y un sentimiento de abandono entre aquellos que intentan generar un cambio positivo."
      },
      {
        exampleTitle: "Falta de Responsabilidad en el Entorno de Trabajo",
        exampleText: "Una persona dentro de una empresa no cumple con sus responsabilidades laborales, afectando el rendimiento del equipo y el bienestar de sus compañeros. Aunque no hay una deuda económica directa, el incumplimiento de las normas sociales dentro de la empresa crea una deuda social con el resto del equipo, afectando la colaboración y la moral."
      }
    ],

    // Ejemplos adicionales
    additionalExamples: [
      {
        exampleTitle: "No Respetar los Derechos de los Demás",
        exampleText: "Una persona constantemente interrumpe o invade el espacio personal de los demás, ya sea en el trabajo o en la vida social. Este comportamiento perjudica las relaciones y crea un sentimiento de incomodidad. La falta de respeto hacia los demás genera una deuda social, ya que no se cumplen las expectativas de convivencia y respeto mutuo."
      },
      {
        exampleTitle: "Abandonar una Causa Social",
        exampleText: "Alguien se involucra en un proyecto de voluntariado para ayudar a una causa social, pero cuando la situación se pone difícil o requiere un mayor compromiso, decide abandonar el proyecto. Esto deja a las personas en necesidad sin el apoyo esperado, acumulando una deuda social con la comunidad que dependía de su ayuda."
      },
      {
        exampleTitle: "Causar Divisiones en una Comunidad",
        exampleText: "Una persona comienza a difundir rumores y chismes dentro de una comunidad, lo que provoca divisiones y enfrentamientos entre los miembros. Este comportamiento dañino afecta la confianza y la solidaridad en la comunidad, generando una deuda social, ya que la persona no contribuye a la unidad ni al bienestar general."
      },
      {
        exampleTitle: "Egoísmo en la Comunidad",
        exampleText: "Un miembro de una comunidad siempre prioriza sus propios intereses por encima de las necesidades de los demás. Este egoísmo contribuye a la desconfianza y la desigualdad social. Aunque no haya dinero involucrado, el comportamiento crea una deuda social, ya que la persona no está contribuyendo al bienestar colectivo."
      },
      {
        exampleTitle: "No Asumir Responsabilidades en el Ámbito Familiar",
        exampleText: "Un miembro de una familia no se involucra en las tareas y responsabilidades que le corresponden, dejando todo el trabajo a otros. Esto genera una carga extra para los demás miembros de la familia, creando una deuda social en la que el miembro que no cumplió con su parte se ve afectado por su falta de compromiso."
      }
    ]
  },
  {
    title: "Deudor Gubernamental",
    description: "Un deudor gubernamental es un individuo, una institución o un país que no cumple con sus obligaciones frente a sus ciudadanos o el resto del mundo. Este tipo de deuda involucra promesas incumplidas, mal manejo de los recursos públicos, o no ejecutar políticas que beneficien a la sociedad. En muchos casos, se refiere a la falta de cumplimiento de políticas públicas, leyes o el no proveer servicios básicos que son una responsabilidad del gobierno. El incumplimiento de estas responsabilidades puede generar desconfianza en la administración pública, descontento social y, a veces, crisis políticas o económicas.",
    img: [
      'https://images.pexels.com/photos/6172597/pexels-photo-6172597.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/28409827/pexels-photo-28409827.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3880204/pexels-photo-3880204.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/7845331/pexels-photo-7845331.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1367274/pexels-photo-1367274.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    // Ejemplos principales
    mainExamples: [
      {
        exampleTitle: "Promesas Electorales No Cumplidas",
        exampleText: "Un presidente o líder político promete durante su campaña electoral diversas reformas o mejoras sociales, pero al llegar al poder, no lleva a cabo estas promesas. Por ejemplo, se prometen mejoras en el sistema de salud, pero no se invierte lo necesario ni se implementan cambios significativos. Esto genera una deuda social con los ciudadanos que esperaban esos beneficios."
      },
      {
        exampleTitle: "Manejo Ineficiente de los Recursos Públicos",
        exampleText: "Un gobierno destina grandes cantidades de dinero para proyectos de infraestructura que finalmente no se completan o no tienen el impacto esperado. Estos proyectos, mal gestionados, dejan a la población con la sensación de que los recursos públicos no fueron utilizados adecuadamente. Este mal manejo genera una deuda gubernamental con los ciudadanos, ya que no reciben los beneficios prometidos por el uso de sus impuestos."
      },
      {
        exampleTitle: "Falta de Respuesta ante Crisis Sociales o Económicas",
        exampleText: "Durante una crisis económica o un desastre natural, el gobierno no toma medidas rápidas ni efectivas para mitigar el impacto en la población. Esto se traduce en un aumento de la pobreza, la desnutrición o la inseguridad, dejando a los ciudadanos a merced de la situación sin apoyo adecuado. La falta de acción por parte del gobierno crea una deuda con la población que espera una respuesta más eficaz."
      },
      {
        exampleTitle: "Desigualdad en la Distribución de Servicios Públicos",
        exampleText: "En un país, el gobierno se ve incapaz o no tiene la voluntad de distribuir servicios esenciales, como la educación o la salud, de manera equitativa. Algunas regiones o grupos sociales reciben menos recursos o atención que otros, creando un círculo de desigualdad. Esta deuda gubernamental genera tensiones sociales y descontento en aquellas zonas más desfavorecidas."
      },
      {
        exampleTitle: "Falta de Justicia en la Aplicación de la Ley",
        exampleText: "Un gobierno no garantiza que todas las personas sean tratadas de manera justa ante la ley. Esto puede suceder cuando se otorgan privilegios a ciertos sectores de la sociedad o se aplica la ley de manera selectiva. Esta falta de equidad y justicia genera un sentimiento de deuda con la sociedad, ya que no se está protegiendo por igual los derechos de todos los ciudadanos."
      }
    ],

    // Ejemplos adicionales
    additionalExamples: [
      {
        exampleTitle: "Corrupción en el Gobierno",
        exampleText: "Un gobierno es señalado por casos de corrupción donde funcionarios públicos se benefician de manera personal a costa del bienestar común. Estos fondos destinados a proyectos públicos son desviados para uso personal, lo que afecta gravemente el desarrollo de la nación. Esta corrupción crea una deuda con la población, ya que los recursos que deberían haberse destinado a mejoras sociales se han malgastado."
      },
      {
        exampleTitle: "Proyectos Incompletos o Abandonados",
        exampleText: "Un gobierno pone en marcha grandes proyectos de infraestructura, pero a mitad del proceso, debido a la falta de fondos, intereses o mala planificación, estos proyectos se abandonan. Las obras inconclusas representan una deuda con los ciudadanos, que nunca ven los beneficios prometidos."
      },
      {
        exampleTitle: "Promoción de Políticas que Favorecen a una Minoría",
        exampleText: "El gobierno implementa políticas que benefician a un pequeño grupo de personas o empresas, mientras que la mayoría de la población queda desprotegida. Esto aumenta las disparidades sociales y económicas, y crea una deuda gubernamental con aquellos que no se benefician de estas políticas."
      },
      {
        exampleTitle: "Falta de Transparencia en la Gestión Pública",
        exampleText: "Un gobierno no informa adecuadamente a los ciudadanos sobre cómo se están utilizando los fondos públicos, ni publica informes transparentes sobre sus acciones. Esto crea una deuda de confianza con la ciudadanía, que no sabe cómo se están utilizando sus recursos y no puede exigir rendición de cuentas."
      },
      {
        exampleTitle: "Deuda Externa No Controlada",
        exampleText: "Un país acumula grandes cantidades de deuda externa debido a préstamos que no puede pagar. Los gobiernos sucesivos no logran controlar la deuda ni negociar condiciones favorables, lo que pone en riesgo el bienestar económico de la población, generando una deuda gubernamental con las futuras generaciones que tendrán que enfrentar los efectos de esta crisis."
      }
    ]
  },
  {
    title: "Deudor Familiar",
    description: "Un deudor familiar es una persona que no cumple con sus responsabilidades dentro del núcleo familiar, ya sea financiera, emocional o de apoyo. Las deudas familiares pueden ser de tipo económico, como no cumplir con la manutención de hijos o no cumplir con compromisos económicos con los padres o familiares cercanos. También puede ser una deuda de tiempo o de apoyo emocional, como no brindar el cuidado necesario a un miembro de la familia enfermo. Este tipo de deuda genera tensiones familiares, resentimiento y puede afectar las relaciones a largo plazo.",
    img: [
      'https://images.pexels.com/photos/302083/pexels-photo-302083.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/160994/family-outdoor-happy-happiness-160994.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1835927/pexels-photo-1835927.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1914982/pexels-photo-1914982.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3204051/pexels-photo-3204051.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],

    // Ejemplos principales
    mainExamples: [
      {
        exampleTitle: "Falta de Manutención de Hijos",
        exampleText: "Un padre separado tiene la obligación legal de proveer manutención económica a sus hijos, pero decide no cumplir con los pagos acordados. La madre, que se hace cargo de los hijos, tiene que asumir toda la carga económica. El incumplimiento por parte del padre genera una deuda familiar significativa, pues afecta directamente a las necesidades básicas de los niños y crea una falta de confianza y resentimiento en la relación."
      },
      {
        exampleTitle: "No Cuidar a un Miembro Enfermo de la Familia",
        exampleText: "Un hermano mayor se niega a cuidar a su hermana que está enferma y necesita apoyo. Aunque es su responsabilidad como miembro de la familia, no asume el compromiso y deja que otros familiares se encarguen. Esto crea una deuda emocional y de apoyo, ya que la hermana siente la falta de compromiso y la ausencia de apoyo familiar, lo cual genera resentimiento y deteriora la relación."
      },
      {
        exampleTitle: "Negarse a Ayudar Económicamente a los Padres",
        exampleText: "Una persona que tiene la capacidad económica para ayudar a sus padres, pero decide no hacerlo. Los padres, que están jubilados y con recursos limitados, pasan por dificultades económicas, y su hijo se niega a apoyarlos. Esta falta de apoyo financiero crea una deuda emocional, pues los padres sienten que su hijo no valora lo que hicieron por él en el pasado."
      },
      {
        exampleTitle: "Desentenderse de las Responsabilidades de los Hermanos Menores",
        exampleText: "Un hermano mayor tiene la responsabilidad de guiar y apoyar a sus hermanos menores, pero decide no involucrarse en sus vidas ni ayudarlos cuando tienen problemas. Esto crea una deuda emocional y de apoyo familiar, ya que los hermanos menores sienten que no pueden contar con el apoyo de su familia para superar sus dificultades."
      },
      {
        exampleTitle: "Falta de Participación en el Cuidado de los Abuelos",
        exampleText: "Los nietos tienen la responsabilidad de cuidar y asistir a sus abuelos, pero prefieren no involucrarse. Dejan que otros familiares asuman todo el cuidado. Esto genera una deuda familiar, pues los abuelos sienten la falta de afecto y atención por parte de sus nietos, lo que afecta la relación familiar."
      }
    ],

    // Ejemplos adicionales
    additionalExamples: [
      {
        exampleTitle: "No Cumplir con los Compromisos de Vivir Juntos",
        exampleText: "Dos miembros de la familia deciden vivir juntos para compartir gastos y responsabilidades, pero uno de ellos no cumple con los compromisos financieros acordados, lo que pone en aprietos al otro miembro que tiene que asumir toda la carga. Esto genera tensiones y desconfianza entre los miembros de la familia."
      },
      {
        exampleTitle: "Ignorar los Sentimientos de los Miembros de la Familia",
        exampleText: "Una persona no toma en cuenta los sentimientos o necesidades de los demás miembros de la familia. Por ejemplo, un hijo no escucha las preocupaciones de sus padres y se muestra indiferente. Esta falta de empatía crea una deuda emocional, ya que los padres o hermanos se sienten desatendidos y rechazados."
      },
      {
        exampleTitle: "No Participar en los Eventos Familiares Importantes",
        exampleText: "Un miembro de la familia decide no asistir a celebraciones importantes, como cumpleaños o reuniones familiares, sin una justificación válida. Esto genera resentimiento, ya que la familia siente que no está comprometido con ellos, creando una deuda emocional que afecta la relación a largo plazo."
      },
      {
        exampleTitle: "No Ayudar en la Educación de los Hijos",
        exampleText: "Un padre o madre decide no involucrarse en la educación de sus hijos, no ayudándoles con los estudios o no apoyándolos en sus necesidades académicas. Esto crea una deuda familiar, ya que el hijo siente que no tiene el respaldo de sus padres en su educación, lo cual afecta su rendimiento y autoestima."
      },
      {
        exampleTitle: "No Proteger a un Familiar de una Relación Abusiva",
        exampleText: "Un miembro de la familia es testigo de una situación abusiva hacia un familiar cercano, pero decide no intervenir o no brindar apoyo. Esto crea una deuda familiar, pues el familiar abusado se siente desprotegido y abandonado, lo que perjudica gravemente la relación familiar."
      }
    ]
  },
  {
    title: "Deudor Profesional",
    description: "Un deudor profesional es una persona que no cumple con sus responsabilidades dentro del ámbito laboral o profesional. Esto puede incluir no cumplir con un contrato, no pagar por servicios prestados, o no ofrecer el apoyo necesario a sus colegas o subordinados. Las deudas profesionales también pueden involucrar incumplimiento de plazos, deshonestidad en los negocios, o falta de ética profesional. Estas deudas afectan tanto al individuo como a las empresas y pueden dañar la reputación profesional de la persona involucrada.",
    img: [
      'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/261841/pexels-photo-261841.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    // Ejemplos principales
    mainExamples: [
      {
        exampleTitle: "Incumplimiento de Contrato Laboral",
        exampleText: "Un empleado firma un contrato laboral donde se compromete a cumplir con ciertas tareas y plazos. Sin embargo, el empleado no cumple con sus responsabilidades y no entrega su trabajo a tiempo. Como resultado, la empresa enfrenta retrasos y pérdidas económicas debido al incumplimiento de este contrato, lo que afecta su desempeño y reputación profesional."
      },
      {
        exampleTitle: "No Pagar por Servicios Prestados",
        exampleText: "Un cliente contrata a un profesional para realizar un trabajo específico, como la creación de una página web, pero luego de recibir el servicio, no paga el monto acordado. El profesional no solo se ve afectado económicamente, sino que también pierde tiempo y recursos en la gestión de la deuda, lo que puede llevar a la pérdida de confianza y daño a su reputación."
      },
      {
        exampleTitle: "Falta de Cumplimiento con Plazos",
        exampleText: "Un proveedor de servicios tiene un acuerdo con una empresa para entregar productos en un plazo específico. Sin embargo, el proveedor no cumple con los plazos establecidos, lo que genera retrasos en la producción de la empresa y afecta sus operaciones. Este incumplimiento genera una deuda profesional, ya que la empresa sufre pérdidas económicas y daños a su reputación."
      },
      {
        exampleTitle: "Deshonestidad en los Negocios",
        exampleText: "Un profesional que trabaja en ventas decide falsear datos sobre la calidad de un producto para hacer una venta. Esto no solo viola principios éticos, sino que también daña la confianza del cliente. Como resultado, el cliente se siente engañado y decide no volver a hacer negocios con esa persona, lo que afecta a largo plazo su carrera profesional."
      },
      {
        exampleTitle: "No Cumplir con Compromisos Éticos",
        exampleText: "Un abogado que tiene la obligación de defender a su cliente con honestidad y diligencia, pero decide actuar de manera negligente o deshonesta, perjudica el caso y la relación con su cliente. Este comportamiento puede afectar su licencia profesional y su capacidad de ejercer, creando una deuda profesional de ética y confianza."
      }
    ],

    // Ejemplos adicionales
    additionalExamples: [
      {
        exampleTitle: "Incumplimiento con Proyectos Colaborativos",
        exampleText: "Un trabajador en un equipo de desarrollo de software no cumple con sus tareas asignadas, lo que retrasa todo el proyecto. Esto afecta no solo a sus compañeros, sino también al cliente final, quien no recibe el producto a tiempo. El incumplimiento genera una deuda profesional de responsabilidad y colaboración."
      },
      {
        exampleTitle: "Falta de Actualización Profesional",
        exampleText: "Un profesional en el sector tecnológico no se actualiza con las últimas tendencias y tecnologías, lo que afecta su desempeño en el trabajo. A medida que sus habilidades se vuelven obsoletas, pierde relevancia en su industria. Este descuido genera una deuda profesional, ya que no cumple con el estándar de desempeño esperado."
      },
      {
        exampleTitle: "Conflictos de Interés en el Trabajo",
        exampleText: "Un miembro de un comité de compras de una empresa toma decisiones basadas en sus intereses personales y no en los mejores intereses de la empresa. Esto genera una deuda profesional, ya que la empresa pierde recursos debido a decisiones sesgadas que afectan su rendimiento y confianza en ese profesional."
      },
      {
        exampleTitle: "Falta de Liderazgo y Dirección",
        exampleText: "Un gerente no asume la responsabilidad de liderar a su equipo y no proporciona una dirección clara. Esto crea confusión y falta de motivación entre los empleados, lo que afecta el rendimiento del equipo y las metas organizacionales. Este tipo de falta de liderazgo genera una deuda profesional, ya que el equipo no puede alcanzar su máximo potencial."
      },
      {
        exampleTitle: "No Proveer Retroalimentación a los Subordinados",
        exampleText: "Un jefe no proporciona retroalimentación constructiva a sus empleados, lo que impide su crecimiento profesional. Los empleados no saben en qué áreas mejorar y cómo avanzar en su carrera. Esta falta de apoyo y orientación crea una deuda profesional, ya que afecta tanto a los empleados como a la empresa en general."
      }
    ]
  },
  {
    title: "Deudor Ambiental",
    description: "Un deudor ambiental es una persona, empresa o entidad que no cumple con las responsabilidades de proteger el medio ambiente, ya sea por acciones directas o por negligencia. Esto puede incluir la contaminación del aire, el agua o el suelo, la destrucción de hábitats naturales, el desperdicio de recursos naturales, o la falta de cumplimiento de las normativas ambientales. Las consecuencias de ser un deudor ambiental incluyen sanciones legales, daño a la biodiversidad, y la creación de problemas a largo plazo para las generaciones futuras. El deudor ambiental está en deuda con la naturaleza y la sociedad debido al daño que causa al entorno.",
    img: [
      'https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/7048040/pexels-photo-7048040.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/761297/pexels-photo-761297.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1549528/pexels-photo-1549528.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/929385/pexels-photo-929385.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    // Ejemplos principales
    mainExamples: [
      {
        exampleTitle: "Contaminación del Aire por Industrias",
        exampleText: "Una fábrica que emite grandes cantidades de gases tóxicos al aire sin el tratamiento adecuado. La contaminación del aire afecta la salud de los habitantes cercanos y contribuye al cambio climático. Las autoridades imponen multas a la empresa por no cumplir con los estándares de emisión, lo que demuestra que la empresa es un deudor ambiental."
      },
      {
        exampleTitle: "Vertido de Residuos Tóxicos en el Agua",
        exampleText: "Una planta industrial desecha residuos tóxicos directamente en un río cercano sin ningún tipo de tratamiento, contaminando el agua y afectando la fauna acuática. Esto crea una deuda ambiental ya que los daños causados a los ecosistemas acuáticos y a las comunidades que dependen de esos recursos son significativos. La empresa enfrenta acciones legales y sanciones por no respetar las regulaciones ambientales."
      }
    ],

    // Ejemplos adicionales
    additionalExamples: [
      {
        exampleTitle: "Deforestación para la Construcción",
        exampleText: "Una empresa de construcción decide talar grandes áreas de bosque para construir complejos turísticos sin considerar los impactos ambientales. La deforestación no solo destruye el hábitat de miles de especies, sino que también contribuye a la erosión del suelo y al cambio climático. Las leyes ambientales imponen sanciones a la empresa por dañar un ecosistema tan delicado, y se le exige restaurar parte del área talada."
      },
      {
        exampleTitle: "Desperdicio de Recursos Naturales en la Agricultura",
        exampleText: "Un agricultor utiliza agua de manera excesiva e ineficiente para regar sus cultivos, sin tener en cuenta la disponibilidad del recurso. El desperdicio de agua afecta a las comunidades cercanas que dependen de esa fuente para su consumo, y contribuye a la escasez de agua en la región. El agricultor es considerado un deudor ambiental por no utilizar prácticas sostenibles."
      },
      {
        exampleTitle: "Uso de Plásticos en Productos de un Solo Uso",
        exampleText: "Una cadena de tiendas decide seguir utilizando productos de plástico de un solo uso, como bolsas y envases, sin considerar alternativas biodegradables. Estos plásticos terminan en vertederos y en el mar, afectando la vida marina. El uso irresponsable de plásticos representa una deuda ambiental, ya que contribuye a la contaminación global."
      },
      {
        exampleTitle: "Contaminación del Suelo por Desperdicio de Productos Químicos",
        exampleText: "Una empresa agrícola desecha productos químicos y pesticidas en la tierra sin cumplir con las normativas de disposición segura. Esto contamina el suelo, afecta la biodiversidad local, y puede tener consecuencias perjudiciales para la salud humana a largo plazo. La empresa es vista como un deudor ambiental debido a sus acciones negligentes."
      },
      {
        exampleTitle: "Explotación Minera Descontrolada",
        exampleText: "Una empresa minera lleva a cabo actividades de extracción de minerales sin considerar los daños al medio ambiente, como la contaminación del agua y la destrucción de paisajes naturales. La empresa no sigue las regulaciones para mitigar el impacto ambiental y es sancionada por ser un deudor ambiental."
      }
    ]
  },
  {
    title: "Deudor Religioso",
    description: "Un deudor religioso es una persona o entidad que no cumple con las obligaciones que tiene hacia su fe o creencias religiosas. Esto puede incluir la falta de respeto por las enseñanzas de una religión, el incumplimiento de las prácticas religiosas establecidas, o la incapacidad de contribuir a las causas sociales o caritativas impulsadas por la religión. El incumplimiento de estas responsabilidades puede afectar no solo la relación del individuo con su comunidad religiosa, sino también su sentido de pertenencia y de paz interior. En muchos casos, los deudores religiosos enfrentan sentimientos de culpa o insatisfacción personal debido a su desconexión con los principios espirituales.",
    img: [
      'https://images.pexels.com/photos/1024900/pexels-photo-1024900.jpeg?auto=compress&cs=tinysrgb&w=600https://images.pexels.com/photos/1024900/pexels-photo-1024900.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/257037/pexels-photo-257037.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/918778/pexels-photo-918778.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/87500/pexels-photo-87500.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2258240/pexels-photo-2258240.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    // Ejemplos principales
    mainExamples: [
      {
        exampleTitle: "Falta de Participación en la Comunidad Religiosa",
        exampleText: "Una persona que ha sido parte activa de su comunidad religiosa durante años decide alejarse de las actividades espirituales y no participa en los servicios religiosos semanales ni en eventos benéficos organizados por la iglesia. Este alejamiento de la comunidad y la falta de apoyo a las causas religiosas generan una deuda moral y espiritual hacia la comunidad, ya que la persona no está cumpliendo con sus responsabilidades religiosas."
      },
      {
        exampleTitle: "No Cumplir con los Diezmos o Contribuciones Religiosas",
        exampleText: "Un miembro de una iglesia que se compromete a donar un porcentaje de sus ingresos (como el diezmo) para apoyar las actividades religiosas y las obras de caridad decide no cumplir con este compromiso. Esto crea una deuda dentro de la comunidad religiosa, ya que las contribuciones son esenciales para el funcionamiento de la iglesia y la ayuda a los necesitados. El incumplimiento de esta obligación genera una sensación de culpa y desconexión espiritual."
      }
    ],

    // Ejemplos adicionales
    additionalExamples: [
      {
        exampleTitle: "Romper los Votos Religiosos",
        exampleText: "Una persona que ha hecho un voto religioso, como un voto de castidad, pobreza o obediencia, decide romperlo por motivos personales. Esto se considera un incumplimiento de su compromiso con su fe y una deuda religiosa, ya que la persona no está cumpliendo con lo prometido ante su fe y su comunidad."
      },
      {
        exampleTitle: "Negarse a Ayudar a los Necesitados",
        exampleText: "En muchas religiones, ayudar a los pobres y necesitados es una obligación moral. Un individuo que tiene la capacidad de ayudar pero decide no hacerlo, incumpliendo las enseñanzas de su fe, se convierte en un deudor religioso. Esta falta de acción es vista como una deuda hacia los demás y hacia los principios espirituales que promueven la solidaridad."
      },
      {
        exampleTitle: "Desobedecer las Enseñanzas Espirituales",
        exampleText: "Una persona que constantemente ignora las enseñanzas espirituales y los principios fundamentales de su religión, como la compasión, el perdón y la humildad, se ve como un deudor religioso. Esta falta de adherencia a las prácticas religiosas y su filosofía puede generar sentimientos de desconexión espiritual."
      },
      {
        exampleTitle: "Abandonar las Prácticas de Oración o Meditación",
        exampleText: "Alguien que solía practicar la oración o la meditación de manera regular, pero que, por diversas razones, deja de hacerlo, se convierte en un deudor religioso. Abandonar estas prácticas esenciales para el crecimiento espiritual puede generar una sensación de vacío o culpa, ya que la persona no está cumpliendo con su deber espiritual."
      },
      {
        exampleTitle: "Desatender la Educación Religiosa de los Hijos",
        exampleText: "Un padre o madre que ha sido educado dentro de una fe religiosa y ha prometido enseñar a sus hijos los principios de esa fe, pero que no cumple con esta responsabilidad, se convierte en un deudor religioso. No educar a los niños en los valores y prácticas religiosas es visto como una deuda hacia los niños y la comunidad religiosa."
      }
    ]
  },
  {
    title: "Deudor Educativo",
    description: "Un deudor educativo es una persona que no cumple con sus responsabilidades relacionadas con su educación, ya sea en términos de aprendizaje, compromiso académico o el pago de deuda estudiantil. Este tipo de deuda incluye tanto el incumplimiento en el pago de préstamos estudiantiles como la falta de aprovechamiento de las oportunidades educativas disponibles. Ser un deudor educativo puede tener repercusiones en el desarrollo personal y profesional de la persona, además de afectar su futuro financiero si no paga sus deudas o no se compromete con su educación.",
    img: [
      'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],

    // Ejemplos principales
    mainExamples: [
      {
        exampleTitle: "Deuda de Préstamo Estudiantil No Saldo",
        exampleText: "Un joven solicita un préstamo estudiantil para financiar su educación universitaria, pero después de graduarse, no consigue empleo en su campo de estudio. La deuda del préstamo se acumula debido a la falta de pagos, y la persona enfrenta altos intereses que aumentan el total adeudado. A pesar de las dificultades económicas, la falta de esfuerzos por encontrar soluciones para pagar la deuda genera una carga financiera a largo plazo."
      },
      {
        exampleTitle: "Falta de Aprovechamiento Académico",
        exampleText: "Un estudiante recibe una beca completa para estudiar en una universidad prestigiosa, pero no aprovecha la oportunidad de aprender, no asiste a clases con regularidad, y no realiza los trabajos o exámenes asignados. Aunque la universidad proporciona todos los recursos necesarios para su éxito, el estudiante no se dedica al aprendizaje. Esta falta de esfuerzo y compromiso crea una deuda educativa moral, ya que no se cumple con el deber de aprovechar la educación recibida."
      }
    ],

    // Ejemplos adicionales
    additionalExamples: [
      {
        exampleTitle: "Deuda por No Terminar la Carrera",
        exampleText: "Un estudiante que se inscribe en un programa universitario y recibe financiamiento o apoyo para terminar la carrera decide abandonarlo por razones personales sin completar el curso. Al no terminar la carrera, el estudiante no solo pierde los beneficios educativos obtenidos, sino que también queda con la deuda del préstamo estudiantil sin haber obtenido el título que justifique el esfuerzo y la inversión."
      },
      {
        exampleTitle: "No Cumplir con los Compromisos de Capacitación Profesional",
        exampleText: "Un empleado recibe una beca o financiamiento para completar un curso de capacitación profesional, pero no cumple con los requisitos establecidos para terminar el curso o no asiste a las clases. Aunque el curso fue proporcionado para mejorar sus habilidades y avanzar en su carrera, el trabajador no muestra compromiso con su educación continua, lo que representa una deuda educativa tanto con su empleador como consigo mismo."
      },
      {
        exampleTitle: "Deuda por No Pagar Matrícula",
        exampleText: "Un estudiante de una universidad que no paga su matrícula después de inscribirse en los cursos y recibe acceso a clases, material educativo y recursos de la institución. A pesar de disfrutar de los beneficios, no cumple con su responsabilidad financiera. Esto puede resultar en la suspensión de su inscripción y la imposibilidad de continuar con su educación en esa institución."
      },
      {
        exampleTitle: "Falta de Responsabilidad en el Uso de Recursos Educativos",
        exampleText: "Un estudiante que recibe becas o ayudas económicas para realizar investigaciones o asistir a cursos de formación continúa sin cumplir con los requisitos. Aunque se le brindan los recursos, no utiliza correctamente el tiempo y las oportunidades para avanzar en su educación, lo que refleja una deuda educativa en términos de esfuerzo y aprovechamiento de los recursos proporcionados."
      },
      {
        exampleTitle: "Desinterés por la Educación Continuada",
        exampleText: "Un profesional que ya tiene un título universitario decide no seguir formándose ni mejorar sus habilidades a pesar de las oportunidades de educación continua disponibles en su campo. Este desinterés por el aprendizaje constante puede hacer que la persona pierda competitividad en el mercado laboral, y se convierte en un deudor educativo porque no está aprovechando las oportunidades para crecer académicamente."
      }
    ]
  },
  {
    title: "Deudor Histórico",
    description: "Un deudor histórico es una persona o entidad que tiene una deuda que proviene de eventos pasados, ya sea debido a la falta de resolución de conflictos, promesas incumplidas o situaciones que aún afectan a la parte afectada. Este tipo de deuda puede ser moral o emocional, y suele involucrar la falta de reparación de daños o la no atención a problemas históricos que siguen afectando a generaciones o individuos. Aunque la deuda histórica no siempre tiene un componente financiero directo, su impacto puede ser profundo y duradero.",
    img: [
      'https://images.pexels.com/photos/26800347/pexels-photo-26800347/free-photo-of-person-sitting-cross-legged-with-chain-around-hands.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4356144/pexels-photo-4356144.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlzdG9yeXxlbnwwfHwwfHx8Mg%3D%3D',
      'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGlzdG9yeXxlbnwwfHwwfHx8Mg%3D%3D',
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhpc3Rvcnl8ZW58MHx8MHx8fDI%3D'
    ],
    // Ejemplos principales
    mainExamples: [
      {
        exampleTitle: "Desplazamiento de Comunidades Indígenas",
        exampleText: "A lo largo de la historia, diversas comunidades indígenas han sido desplazadas de sus tierras por gobiernos y empresas sin recibir compensación o reconocimiento por las pérdidas sufridas. Este despojo de tierras y cultura continúa siendo un tema de deuda histórica, ya que las generaciones actuales siguen luchando por recuperar su identidad, derechos y propiedades. A pesar de las disculpas públicas, muchos de estos pueblos aún esperan una reparación adecuada."
      },
      {
        exampleTitle: "Deuda de Promesas No Cumplidas en Conflictos Bélicos",
        exampleText: "Tras la finalización de una guerra, ciertos países o gobiernos prometen ayudar a los veteranos o reparar los daños causados a las regiones afectadas por el conflicto. Sin embargo, muchas de estas promesas no se cumplen, dejando a los afectados sin el apoyo necesario. Esta falta de cumplimiento con las promesas se convierte en una deuda histórica que persiste con el tiempo, afectando a quienes se vieron directamente involucrados."
      }
    ],

    // Ejemplos adicionales
    additionalExamples: [
      {
        exampleTitle: "Colonización y Explotación de Recursos",
        exampleText: "Los países colonizadores deben aún muchas reparaciones a las naciones que fueron colonizadas. Durante siglos, los recursos naturales fueron explotados sin consideración por el bienestar de las poblaciones locales. Este daño histórico sigue siendo una deuda pendiente, ya que muchas de las naciones colonizadas aún luchan por recuperar su autonomía económica y social."
      },
      {
        exampleTitle: "Desigualdad Racial y Derechos Humanos No Reconocidos",
        exampleText: "El legado de la esclavitud y la discriminación racial aún persiste en muchos países, especialmente en aquellos donde las poblaciones afrodescendientes no han recibido reparaciones por los abusos sufridos. Aunque se han logrado avances en cuanto a derechos humanos, aún persisten desigualdades significativas, lo que convierte la discriminación histórica en una deuda social y moral que necesita ser resuelta."
      },
      {
        exampleTitle: "Explotación Laboral en la Revolución Industrial",
        exampleText: "Durante la Revolución Industrial, los trabajadores fueron sometidos a condiciones laborales extremas, con largas jornadas y bajos salarios. A pesar de los avances sociales y laborales posteriores, las generaciones afectadas por la explotación laboral siguen enfrentando las consecuencias, como la pobreza heredada y la falta de acceso a educación y recursos. Esta situación sigue siendo una deuda histórica."
      },
      {
        exampleTitle: "Destrucción de Ecosistemas por la Industria",
        exampleText: "La industrialización en el siglo XIX y XX trajo consigo la explotación y destrucción de ecosistemas naturales para la expansión de la agricultura, la minería y la construcción. Aunque hoy se reconocen los daños causados al medio ambiente, muchas áreas todavía sufren las consecuencias de la deforestación, contaminación y pérdida de biodiversidad. Este daño a largo plazo es una deuda histórica que aún debe resolverse."
      },
      {
        exampleTitle: "Deuda de Reparaciones a Víctimas de Dictaduras",
        exampleText: "En muchos países, las dictaduras militares de los siglos XX y XXI cometieron violaciones masivas de derechos humanos, incluyendo desapariciones forzadas, torturas y asesinatos. A pesar de los juicios y la búsqueda de justicia, muchas de las víctimas y sus familias no han recibido reparaciones adecuadas por el sufrimiento y las pérdidas sufridas. Esta deuda histórica persiste hasta el día de hoy, ya que la reparación completa aún está pendiente."
      }
    ]
  }
]

const histories = [
  {
    "name": "Ana Gómez",
    "date": "2023-01-10",
    "title": "La Deuda Monetaria de Ana",
    "history": "Ana Gómez era una mujer trabajadora que siempre había luchado por mantener a su familia. Sin embargo, una serie de desafortunados eventos la llevaron a acumular una gran deuda monetaria. Ana había pedido un préstamo para iniciar un pequeño negocio, pero las ventas no fueron como esperaba y pronto se encontró sin poder pagar las cuotas. La presión de los acreedores y la amenaza de perder su hogar la llevaron al borde de la desesperación. Ana decidió buscar ayuda y encontró una organización sin fines de lucro que ofrecía asesoramiento financiero y apoyo emocional a personas en situaciones similares. Con su ayuda, Ana pudo reestructurar su deuda y encontrar un trabajo adicional que le permitió poco a poco salir del agujero financiero. La experiencia le enseñó la importancia de la planificación financiera y la gestión responsable del dinero. Ana no solo logró saldar su deuda, sino que también se convirtió en una defensora de la educación financiera en su comunidad, ayudando a otros a evitar los errores que ella había cometido. Ana comenzó a ofrecer talleres y charlas sobre cómo manejar el dinero de manera efectiva, y su historia inspiró a muchos a tomar el control de sus finanzas. Con el tiempo, Ana se convirtió en una figura respetada en su comunidad, conocida por su sabiduría financiera y su compromiso con ayudar a los demás. Además, Ana decidió volver a la universidad para estudiar finanzas y así poder ofrecer un mejor asesoramiento a quienes lo necesitaran. Su dedicación y esfuerzo la llevaron a obtener un título en finanzas, lo que le permitió abrir su propia consultoría financiera. Ana no solo ayudó a cientos de personas a mejorar su situación financiera, sino que también se convirtió en un ejemplo de superación y resiliencia para su comunidad.",
    "category": "Monetario",
    "image": 'https://i.ibb.co/KD7Z9mF/5fda5f0c-11ce-4246-81db-860f07405e65.jpg'
  },
  {
    "name": "Carlos Rodríguez",
    "date": "2023-12-05",
    "title": "El Dilema de Carlos",
    "history": "Carlos Rodríguez era un joven abogado que había dedicado su vida a luchar por la justicia y los derechos humanos. Desde sus primeros años en la universidad, Carlos había mostrado un profundo compromiso con la ética y la moral, y había trabajado incansablemente para defender a aquellos que no podían defenderse por sí mismos. Su carrera estaba en auge y era respetado tanto por sus colegas como por sus clientes. Sin embargo, un día se encontró frente a un dilema moral que pondría a prueba todos sus principios. Un poderoso empresario, conocido por sus prácticas corruptas y su falta de escrúpulos, se acercó a Carlos con una oferta tentadora. El empresario estaba enfrentando serias acusaciones de fraude y necesitaba la mejor defensa posible. A cambio, ofrecía a Carlos una suma de dinero que podría cambiar su vida y la de su familia para siempre. Carlos se encontró en una encrucijada. Por un lado, aceptar el caso significaría traicionar todos los principios que había defendido durante años. Por otro lado, rechazar la oferta podría significar perder una oportunidad única para asegurar el futuro de su familia. Carlos decidió tomarse un tiempo para reflexionar. Recordó las palabras de su mentor, un viejo abogado que siempre le había dicho que la verdadera justicia no se mide en términos de dinero, sino en la integridad y la honestidad con la que se defienden los derechos de las personas. Carlos decidió rechazar la oferta del empresario y seguir adelante con sus propios términos. La decisión no fue fácil y tuvo consecuencias inmediatas. Algunos de sus colegas y amigos cuestionaron su juicio y varios clientes potenciales retiraron su apoyo.",
    "category": "Moral",
    "image": 'https://i.ibb.co/QMc5c8Y/8e995ec1-0c48-4625-a779-ffc41ed7bc4c.jpg'
  },
  {
    "name": "Laura Martínez",
    "date": "2023-03-20",
    "title": "La Deuda Social de Laura",
    "history": "Laura Martínez era una activista social que había dedicado su vida a luchar por los derechos de los más vulnerables. Sin embargo, un día se encontró en una situación complicada. Laura había organizado una campaña para recaudar fondos y apoyar a una comunidad marginada, pero los fondos recaudados no fueron suficientes para cubrir todas las necesidades. Laura se sintió en deuda con la comunidad y decidió buscar otras formas de ayudar. Con la colaboración de varias organizaciones y voluntarios, Laura logró conseguir más recursos y apoyo. La comunidad, agradecida por su esfuerzo y dedicación, le mostró su gratitud y reconocimiento. Laura aprendió que la deuda social no siempre se mide en términos monetarios, sino en el compromiso y la dedicación hacia los demás. Su experiencia le enseñó la importancia de la solidaridad y el trabajo en equipo para lograr cambios significativos en la sociedad. Laura continuó su labor social, organizando más campañas y proyectos para ayudar a otras comunidades en necesidad. Su ejemplo inspiró a muchos a unirse a la causa y a trabajar juntos por un mundo más justo y equitativo. Laura se convirtió en una líder respetada en su comunidad, conocida por su incansable lucha por los derechos de los más vulnerables y su compromiso con la justicia social. Además, Laura decidió fundar una organización sin fines de lucro dedicada a apoyar a comunidades marginadas. Con el tiempo, su organización creció y se convirtió en un referente en el ámbito social, ayudando a miles de personas a mejorar sus condiciones de vida. Laura no solo logró hacer una diferencia en su comunidad, sino que también dejó un legado de solidaridad y compromiso social que inspiraría a muchos a seguir sus pasos.",
    "category": "Social",
    "image": 'https://i.ibb.co/5nZtRQM/52bbb9e7-d89f-4ec0-861e-3d8b6867be70.jpg'
  },
  {
    "name": "Pedro Sánchez",
    "date": "2023-04-30",
    "title": "La Deuda Gubernamental de Pedro",
    "history": "Pedro Sánchez era un funcionario público que había trabajado durante años en el gobierno local. Sin embargo, un día se encontró en una situación difícil. Pedro había sido responsable de un proyecto de infraestructura que había fracasado debido a la corrupción y la mala gestión. La comunidad, decepcionada y enojada, exigía respuestas y soluciones. Pedro se sintió en deuda con la comunidad y decidió tomar medidas para corregir la situación. Con la ayuda de otros funcionarios honestos y la colaboración de la comunidad, Pedro logró reestructurar el proyecto y asegurar su éxito. La comunidad, al ver su esfuerzo y dedicación, perdonó a Pedro y lo aceptó de nuevo con los brazos abiertos. Pedro aprendió una valiosa lección sobre la importancia de la transparencia y la responsabilidad en la gestión pública. Su experiencia le enseñó que la deuda gubernamental no solo se mide en términos económicos, sino en la confianza y el respeto hacia los ciudadanos. Pedro continuó su carrera en el servicio público, trabajando incansablemente para asegurar que todos los proyectos bajo su responsabilidad fueran manejados con transparencia y ética. Su ejemplo inspiró a otros funcionarios a seguir sus pasos y a trabajar por un gobierno más justo y transparente. Además, Pedro decidió implementar una serie de reformas en su departamento para mejorar la transparencia y la rendición de cuentas. Sus esfuerzos no solo mejoraron la eficiencia y la honestidad en su departamento, sino que también sentaron un precedente para otros funcionarios y departamentos. Pedro se convirtió en un líder respetado en su comunidad, conocido por su compromiso con la transparencia y la ética en la gestión pública.",
    "category": "Gubernamental",
    "image": 'https://i.ibb.co/Bctw2Fk/ded179ce-673c-414c-a8d3-abb5bf61e56f.jpg'
  },
  {
    "name": "Sofía Ramírez",
    "date": "2023-05-15",
    "title": "La Deuda Familiar de Sofía",
    "history": "Sofía Ramírez era una mujer que siempre había valorado la unidad y el apoyo de su familia. Sin embargo, un día se encontró en una situación complicada. Sofía había pedido un préstamo a su hermano para iniciar un negocio, pero las cosas no salieron como esperaba y pronto se encontró sin poder devolver el dinero. La relación con su hermano se tensó y la familia se vio afectada por la situación. Sofía se sintió en deuda con su hermano y decidió buscar una solución. Con la ayuda de otros miembros de la familia y un plan de pago, Sofía logró saldar su deuda y restaurar la confianza y la unidad familiar. La experiencia le enseñó la importancia de la comunicación y el apoyo mutuo en la familia. Sofía aprendió que la deuda familiar no solo se mide en términos monetarios, sino en el amor y el respeto hacia los seres queridos. Sofía continuó trabajando en su negocio y, con el tiempo, logró convertirlo en un éxito. Su historia inspiró a su familia a mantenerse unida y a apoyarse mutuamente en los momentos difíciles. Sofía se convirtió en un ejemplo de resiliencia y amor familiar, demostrando que con comunicación y apoyo, cualquier desafío puede ser superado. Además, Sofía decidió organizar reuniones familiares regulares para fortalecer los lazos y la comunicación dentro de la familia. Estas reuniones no solo ayudaron a mantener la unidad familiar, sino que también permitieron a los miembros de la familia compartir sus problemas y encontrar soluciones juntos. Sofía se convirtió en una figura central en su familia, conocida por su sabiduría y su capacidad para unir a las personas.",
    "category": "Familiar",
    "image": 'https://i.ibb.co/BgLmRht/09c28758-8797-4d1e-a491-191488ed3b79.jpg'
  },
  {
    "name": "Javier Fernández",
    "date": "2023-06-25",
    "title": "La Deuda Profesional de Javier",
    "history": "Javier Fernández era un ingeniero que había trabajado durante años en una empresa de construcción. Sin embargo, un día se encontró en una situación difícil. Javier había cometido un error en un proyecto importante que había causado grandes pérdidas a la empresa. La presión de sus superiores y la amenaza de perder su empleo lo llevaron al borde de la desesperación. Javier decidió buscar ayuda y encontró un mentor que le ofreció apoyo y orientación. Con su ayuda, Javier pudo corregir su error y encontrar una solución que beneficiara a la empresa. La experiencia le enseñó la importancia de la responsabilidad y el aprendizaje continuo en el ámbito profesional. Javier no solo logró salvar su empleo, sino que también se convirtió en un ejemplo de superación y crecimiento profesional para sus colegas. Javier continuó su carrera en la empresa, asumiendo nuevos desafíos y responsabilidades. Su ejemplo inspiró a otros ingenieros a seguir sus pasos y a trabajar con responsabilidad y dedicación. Javier se convirtió en un líder respetado en su campo, conocido por su ética de trabajo y su compromiso con la excelencia. Además, Javier decidió compartir su conocimiento y experiencia con otros ingenieros más jóvenes, ofreciendo mentoría y apoyo. Su dedicación a la enseñanza y al desarrollo profesional de otros lo convirtió en una figura respetada y admirada en su industria. Javier no solo ayudó a muchos jóvenes ingenieros a alcanzar su potencial, sino que también dejó un legado de responsabilidad y excelencia en el ámbito profesional.",
    "category": "Profesional",
    "image": 'https://i.ibb.co/25DCknq/cc5705e2-37ed-4df9-ac39-7df7350eac31.jpg'
  },
  {
    "name": "Elena Torres",
    "date": "2023-07-10",
    "title": "La Deuda Ambiental de Elena",
    "history": "Elena Torres era una ambientalista que había dedicado su vida a proteger el medio ambiente. Sin embargo, un día se encontró en una situación complicada. Elena había organizado una campaña para limpiar un río contaminado, pero los esfuerzos no fueron suficientes para restaurar el ecosistema. Elena se sintió en deuda con la naturaleza y decidió buscar otras formas de ayudar. Con la colaboración de varias organizaciones y voluntarios, Elena logró conseguir más recursos y apoyo. La comunidad, agradecida por su esfuerzo y dedicación, le mostró su gratitud y reconocimiento. Elena aprendió que la deuda ambiental no solo se mide en términos de limpieza y conservación, sino en el compromiso y la dedicación hacia la naturaleza. Su experiencia le enseñó la importancia de la colaboración y el trabajo en equipo para lograr cambios significativos en el medio ambiente. Elena continuó su labor ambiental, organizando más campañas y proyectos para proteger y restaurar ecosistemas. Su ejemplo inspiró a muchos a unirse a la causa y a trabajar juntos por un planeta más saludable y sostenible. Elena se convirtió en una líder respetada en el movimiento ambiental, conocida por su incansable lucha por la protección de la naturaleza. Además, Elena decidió fundar una organización sin fines de lucro dedicada a la conservación del medio ambiente. Con el tiempo, su organización creció y se convirtió en un referente en el ámbito ambiental, ayudando a proteger y restaurar numerosos ecosistemas en todo el mundo. Elena no solo logró hacer una diferencia en el medio ambiente, sino que también dejó un legado de compromiso y dedicación hacia la naturaleza que inspiraría a muchos a seguir sus pasos.",
    "category": "Ambiental",
    "image": 'https://i.ibb.co/NLLgJ3V/f8a84625-e966-4da7-bec5-c7c2877b203d.jpg'
  },
  {
    "name": "Miguel Herrera",
    "date": "2023-08-20",
    "title": "La Deuda Religiosa de Miguel",
    "history": "Miguel Herrera era un hombre devoto que siempre había seguido los principios de su fe. Sin embargo, un día se encontró en una situación complicada. Miguel había prometido a su comunidad religiosa que organizaría un evento de caridad, pero debido a problemas personales, no pudo cumplir con su promesa. La comunidad se sintió traicionada y Miguel se sumió en una profunda depresión. Miguel decidió buscar ayuda y encontró a un líder espiritual que le ofreció apoyo y orientación. Con su ayuda, Miguel pudo organizar el evento de caridad y restaurar la confianza de su comunidad. La experiencia le enseñó la importancia de la fe y el compromiso en la vida religiosa. Miguel no solo logró cumplir con su promesa, sino que también se convirtió en un ejemplo de redención y crecimiento espiritual para su comunidad. Miguel continuó su labor en la comunidad religiosa, organizando más eventos y actividades para fortalecer la fe y el compromiso de sus miembros. Su ejemplo inspiró a muchos a seguir sus pasos y a trabajar por una comunidad más unida y espiritual. Miguel se convirtió en un líder respetado en su comunidad, conocido por su dedicación y su compromiso con la fe. Además, Miguel decidió escribir un libro sobre su experiencia y su camino hacia la redención. Su libro se convirtió en una guía inspiradora para muchos, ayudándoles a encontrar su propio camino espiritual y a fortalecer su fe. Miguel no solo ayudó a muchas personas a encontrar paz y propósito en sus vidas, sino que también dejó un legado de fe y compromiso que inspiraría a muchos a seguir sus pasos.",
    "category": "Religioso",
    "image": 'https://i.ibb.co/D4Cn796/6cd17c30-3ec8-462c-9df1-e97fd82e8a38.jpg'
  },
  {
    "name": "Lucía García",
    "date": "2023-09-05",
    "title": "La Deuda Educativa de Lucía",
    "history": "Lucía García era una maestra que había dedicado su vida a la educación de los niños. Sin embargo, un día se encontró en una situación complicada. Lucía había prometido a sus estudiantes que organizaría un proyecto educativo, pero debido a la falta de recursos, no pudo cumplir con su promesa. Los estudiantes se sintieron decepcionados y Lucía se sintió en deuda con ellos. Lucía decidió buscar ayuda y encontró a un grupo de padres y voluntarios que le ofrecieron apoyo y recursos. Con su ayuda, Lucía pudo organizar el proyecto educativo y restaurar la confianza de sus estudiantes. La experiencia le enseñó la importancia de la colaboración y el compromiso en la educación. Lucía no solo logró cumplir con su promesa, sino que también se convirtió en un ejemplo de dedicación y crecimiento educativo para sus estudiantes. Lucía continuó su labor educativa, implementando más proyectos y actividades para enriquecer el aprendizaje de sus estudiantes. Su ejemplo inspiró a otros maestros a seguir sus pasos y a trabajar con dedicación y compromiso. Lucía se convirtió en una líder respetada en su comunidad educativa, conocida por su innovación y su compromiso con la educación de calidad. Además, Lucía decidió fundar una organización sin fines de lucro dedicada a apoyar la educación en comunidades desfavorecidas. Con el tiempo, su organización creció y se convirtió en un referente en el ámbito educativo, ayudando a miles de niños a acceder a una educación de calidad. Lucía no solo logró hacer una diferencia en la educación, sino que también dejó un legado de dedicación y compromiso educativo que inspiraría a muchos a seguir sus pasos.",
    "category": "Educativo",
    "image": 'https://i.ibb.co/dQbY0Sm/Face-11.jpg'
  },
  {
    "name": "Ricardo López",
    "date": "2023-10-15",
    "title": "La Deuda Histórica de Ricardo",
    "history": "Ricardo López era un historiador que había dedicado su vida a preservar y difundir la historia de su país. Sin embargo, un día se encontró en una situación complicada. Ricardo había prometido a su comunidad que organizaría una exposición sobre la historia local, pero debido a problemas logísticos, no pudo cumplir con su promesa. La comunidad se sintió decepcionada y Ricardo se sintió en deuda con ellos. Ricardo decidió buscar ayuda y encontró a un grupo de colegas y voluntarios que le ofrecieron apoyo y recursos. Con su ayuda, Ricardo pudo organizar la exposición y restaurar la confianza de su comunidad. La experiencia le enseñó la importancia de la colaboración y el compromiso en la preservación de la historia. Ricardo no solo logró cumplir con su promesa, sino que también se convirtió en un ejemplo de dedicación y crecimiento histórico para su comunidad. Ricardo continuó su labor histórica, organizando más exposiciones y eventos para preservar y difundir la historia de su país. Su ejemplo inspiró a otros historiadores a seguir sus pasos y a trabajar con dedicación y compromiso. Ricardo se convirtió en un líder respetado en su comunidad, conocido por su pasión por la historia y su compromiso con la preservación del patrimonio cultural. Además, Ricardo decidió escribir un libro sobre la historia de su país, destacando la importancia de preservar y difundir el patrimonio cultural. Su libro se convirtió en una obra de referencia para muchos, ayudándoles a comprender y apreciar la rica historia de su país. Ricardo no solo ayudó a muchas personas a conectarse con su pasado, sino que también dejó un legado de dedicación y compromiso con la preservación de la historia que inspiraría a muchos a seguir sus pasos.",
    "category": "Histórico",
    "image": 'https://i.ibb.co/Lxb0YJj/8ba1690d-59d7-4544-8849-fa6794c73ff8.jpg'
  }
]

// 3700 128 4 juegos digitales
onMounted(() => {
  useSystemValues().setCurrentPage(true);
})
onUnmounted(() => {
  useSystemValues().setCurrentPage(false);
})


const values = [
  'Monetario',
  'Moral',
  'Social',
  'Gubernamental',
  'Familiar',
  'Profesional',
  'Ambiental',
  'Religioso',
  'Educativo',
  'Histórico'
];

const dynamicValue = ref(values[0]);
let intervalId: number | undefined;

const updateDynamicValue = () => {
  const currentIndex = values.indexOf(dynamicValue.value);
  const nextIndex = (currentIndex + 1) % values.length;
  dynamicValue.value = values[nextIndex];
};

onMounted(() => {
  intervalId = window.setInterval(updateDynamicValue, 3000); // Cambia el valor cada 3 segundos
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';
import { ref } from 'vue';
import SliderDebtors from '@/components/SliderDebtors.vue';
import TextChanger from '@/components/TextChanger.vue';

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

<style scoped lang="scss">
body {
  align-items: center;
  background: #E3E3E3;
  display: flex;
  height: 100vh;
  justify-content: center;
}

.imo max-h-14 {
  height: 100px;
  width: 250px;
}

slide>img {
  height: 100px;
  width: 250px;
}

@mixin white-gradient {
  background: linear-gradient(to right, rgba(0, 34, 184, 0.027) 0%, rgba(255, 255, 255, 0) 100%);
}

$animationSpeed: 100s;

// Animation
@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-250px * 7))
  }
}


// Styling
.slider {
  background: white;
  // box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100vw;


  &::before,
  &::after {
    @include white-gradient;
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  .slide-track {
    animation: scroll $animationSpeed linear infinite;
    display: flex;
    width: calc(250px * 14);
  }

  .slide {
    height: 100px;
    width: 250px;
  }
}
</style>
