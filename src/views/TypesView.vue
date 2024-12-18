<template>
    <div>
        <MainLayout>
            <template #main class="overflow-hidden">
                <article class="flex items-center justify-center gap-3 mt-2">
                    <div @click="toggleAdvice(true)"
                        :class="{ 'bg-purple-800 text-2xl': showAdvice, 'bg-purple-300 text-base': !showAdvice }"
                        class="p-3 transition duration-300 rounded-lg cursor-pointer hover:bg-purple-900">
                        <h2 class="font-bold text-center text-white ">Consejos</h2>
                    </div>
                    <div @click="toggleAdvice(false)"
                        :class="{ 'bg-purple-800 text-2xl': !showAdvice, 'bg-purple-300 text-base': showAdvice }"
                        class="p-3 transition duration-300 rounded-lg cursor-pointer hover:bg-purple-900 animate-shake">
                        <h2 class="font-bold text-center text-white ">Advertencias</h2>
                    </div>
                </article>
                 <!-- buttons info  -->
                 <div class="flex items-center justify-center gap-1 mt-3 overflow-hidden">
                    <!-- BiInfoCircle vicon -->
                    <v-icon name="bi-info-circle" scale="1.1" class="text-purple-800" />
                    <h3 class="text-sm font-medium text-center text-purple-800 font-poppins animate-fade-right">Clickea en uno de los botones para ver sus consejos</h3>
                    <!-- GiClick vicon -->
                    <v-icon name="gi-click" scale="1.5" class="text-purple-800 md:w-0 lg:w-0"  />
                    <!-- HiSolidCursorClick vicon -->
                    <v-icon name="hi-solid-cursor-click" scale="1.5" class="hidden w-0 text-purple-800 lg:w-auto" />
                </div>
                <!-- section advice -->
                <section v-show="showAdvice" class="mt-5 overflow-hidden font-poppins animate-fade-left">
                    <h3 class="text-2xl font-bold text-center text-purple-800 font-poppins">No caigas en los errores de los demás</h3>
                    <div class="flex flex-wrap justify-center mt-5">
                        <div class="p-6 m-4 bg-white shadow-lg rounded-xl w-80">
                            <h3 class="text-xl font-medium text-center text-purple-800">1. Crea un Presupuesto Realista
                            </h3>
                            <p class="mt-2 text-center">
                                Llevar un control de tus ingresos y gastos es fundamental para mantener tus finanzas en
                                orden. Crea un presupuesto realista que incluya todos tus ingresos y categoriza tus
                                gastos, como alimentos, vivienda, transporte y entretenimiento. Utiliza herramientas
                                digitales o aplicaciones de presupuesto que te ayuden a visualizar tus gastos y a
                                identificar áreas donde puedes ahorrar. Al hacerlo, tendrás una mejor idea de dónde va
                                tu dinero y podrás evitar gastos innecesarios que te lleven a la deuda.
                            </p>
                        </div>
                        <div class="p-6 m-4 bg-white shadow-lg rounded-xl w-80">
                            <h3 class="text-xl font-medium text-center text-purple-800">2. Establece un Fondo de
                                Emergencia</h3>
                            <p class="mt-2 text-center">
                                Un fondo de emergencia es un ahorro reservado para imprevistos, como reparaciones del
                                hogar, gastos médicos o pérdida de empleo. Establecer un fondo de emergencia te ayudará
                                a evitar recurrir a préstamos personales o tarjetas de crédito en momentos de crisis.
                                Idealmente, deberías ahorrar al menos de tres a seis meses de gastos básicos. Empieza
                                con pequeñas contribuciones mensuales y aumenta el monto a medida que te sientas más
                                cómodo con tus ahorros.
                            </p>
                        </div>
                        <div class="p-6 m-4 bg-white shadow-lg rounded-xl w-80">
                            <h3 class="text-xl font-medium text-center text-purple-800">3. Infórmate Antes de Pedir un
                                Préstamo</h3>
                            <p class="mt-2 text-center">
                                Antes de solicitar cualquier tipo de préstamo, tómate el tiempo para investigar las
                                tasas de interés, las condiciones del préstamo y los plazos de pago. No te dejes llevar
                                solo por la publicidad atractiva. Compara diferentes opciones y elige la que mejor se
                                adapte a tu situación financiera. Considera también las consecuencias a largo plazo de
                                tomar un préstamo. Pregúntate: “¿Es realmente necesario?” y “¿Puedo asumir esta deuda
                                sin afectar mi presupuesto?”
                            </p>
                        </div>
                        <div class="p-6 m-4 bg-white shadow-lg rounded-xl w-80">
                            <h3 class="text-xl font-medium text-center text-purple-800">4. Usa el Crédito con
                                Responsabilidad</h3>
                            <p class="mt-2 text-center">
                                Las tarjetas de crédito pueden ser herramientas útiles, pero también pueden llevar a
                                deudas significativas si no se usan con prudencia. Si utilizas una tarjeta de crédito,
                                asegúrate de pagar el saldo completo cada mes para evitar intereses acumulados.
                                Establece un límite de gasto mensual y cúmplelo para no excederte. Recuerda que la clave
                                para usar el crédito de manera responsable es ver tu tarjeta como un medio de pago, no
                                como dinero extra.
                            </p>
                        </div>
                        <div class="p-6 m-4 bg-white shadow-lg rounded-xl w-80">
                            <h3 class="text-xl font-medium text-center text-purple-800">5. Busca Ayuda Profesional si es
                                Necesario</h3>
                            <p class="mt-2 text-center">
                                Si te sientes abrumado por tus deudas, no dudes en buscar ayuda profesional. Existen
                                organizaciones sin fines de lucro que ofrecen asesoramiento financiero y pueden ayudarte
                                a crear un plan de acción para gestionar tus deudas. Un asesor financiero puede
                                ofrecerte estrategias personalizadas para salir de la deuda y mejorar tu situación
                                financiera. No tienes que enfrentarte a la deuda solo; hay recursos disponibles para
                                apoyarte.
                            </p>
                        </div>
                    </div>
                </section>
                <section v-show="!showAdvice" class="mt-5 overflow-hidden font-poppins animate-fade-left">
                    <h2 class="text-2xl font-bold text-center text-purple-800">Evita estos errores comunes</h2>
                    <div class="flex flex-wrap justify-center mt-5">
                        <div class="p-6 m-4 bg-white shadow-lg rounded-xl w-80">
                            <h3 class="text-xl font-medium text-center text-purple-800">1. Ignorar el Presupuesto</h3>
                            <p class="mt-2 text-center">
                                No llevar un presupuesto puede llevarte a gastar más de lo que ingresas. Es fundamental
                                saber cómo se mueve tu dinero para evitar caer en deudas innecesarias. ¡Controla tus
                                finanzas!
                            </p>
                        </div>
                        <div class="p-6 m-4 bg-white shadow-lg rounded-xl w-80">
                            <h3 class="text-xl font-medium text-center text-purple-800">2. No Ahorrar para Emergencias
                            </h3>
                            <p class="mt-2 text-center">
                                Descuidar la creación de un fondo de emergencia puede hacer que te endeudes en
                                situaciones críticas. Siempre prepárate para imprevistos con un ahorro adecuado.
                            </p>
                        </div>
                        <div class="p-6 m-4 bg-white shadow-lg rounded-xl w-80">
                            <h3 class="text-xl font-medium text-center text-purple-800">3. Pedir Préstamos Sin
                                Investigar</h3>
                            <p class="mt-2 text-center">
                                No te apresures a aceptar un préstamo sin comparar opciones. Investiga bien las tasas y
                                condiciones para no terminar pagando más de lo necesario.
                            </p>
                        </div>
                        <div class="p-6 m-4 bg-white shadow-lg rounded-xl w-80">
                            <h3 class="text-xl font-medium text-center text-purple-800">4. Usar el Crédito de Manera
                                Irresponsable</h3>
                            <p class="mt-2 text-center">
                                Cargar tus tarjetas de crédito sin control puede llevarte a deudas abrumadoras. Siempre
                                paga el saldo a tiempo y establece un límite de gasto.
                            </p>
                        </div>
                        <div class="p-6 m-4 bg-white shadow-lg rounded-xl w-80">
                            <h3 class="text-xl font-medium text-center text-purple-800">5. Ignorar las Consecuencias de
                                la Deuda</h3>
                            <p class="mt-2 text-center">
                                No entender las repercusiones de no pagar tus deudas puede tener efectos devastadores en
                                tu salud financiera y emocional. Infórmate sobre lo que puede suceder si no gestionas
                                tus obligaciones.
                            </p>
                        </div>
                        <div class="p-6 m-4 bg-white shadow-lg rounded-xl w-80">
                            <h3 class="text-xl font-medium text-center text-purple-800">6. No Pedir Ayuda</h3>
                            <p class="mt-2 text-center">
                                Si te sientes abrumado por tus deudas, no dudes en buscar ayuda. Ignorar el problema
                                solo lo hará más grande. Existen recursos disponibles para apoyarte.
                            </p>
                        </div>
                        <div class="p-6 m-4 bg-white shadow-lg rounded-xl w-80">
                            <h3 class="text-xl font-medium text-center text-purple-800">7. No Revisar Tu Informe de
                                Crédito</h3>
                            <p class="mt-2 text-center">
                                No revisar tu informe de crédito regularmente puede hacer que te pierdas errores o
                                fraudes que pueden afectar tu capacidad de obtener préstamos en el futuro. Mantente
                                informado.
                            </p>
                        </div>
                        <div class="p-6 m-4 bg-white shadow-lg rounded-xl w-80">
                            <h3 class="text-xl font-medium text-center text-purple-800">8. No Establecer Metas
                                Financieras</h3>
                            <p class="mt-2 text-center">
                                No tener metas claras puede hacer que te desvíes de tu plan financiero. Establece
                                objetivos a corto y largo plazo para mantenerte enfocado y motivado.
                            </p>
                        </div>
                    </div>
                </section>
            </template>
        </MainLayout>
    </div>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { ref } from 'vue';

const showAdvice = ref(true);
const toggleAdvice = (payload: boolean) => {
    showAdvice.value = payload;
};
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>
