<template>
  <OverlayScrollbarsComponent
    class="p-4 mx-auto bg-white border border-gray-200 rounded-lg  max-w-[650px] max-h-[900px] hover:shadow-lg transition-shadow ease-in-out duration-500"
    element="span">
    <div class="">
      <img alt="Imágen" class="object-cover w-full h-48 rounded-lg animate-fade animate-duration-[3s]" height="200"
        :src="info.img[useSystemValues().gteCurrentPhoto]" :key="useSystemValues().gteCurrentPhoto" width="300" />
      <h2 class="pb-2 mt-4 text-2xl font-semibold text-center border-b-2 border-gray-300 text-[#164E63] font-merienda">
        {{ info.title
        }}</h2>
      <button
        class="w-full p-2 my-2 text-white transition-colors duration-300 rounded-md bg-[#164E63] font-kanit hover:bg-emerald-800 focus:outline-none focus:bg-emerald focus:ring-2 focus:ring-offset-2 focus:ring-emerald-900">Comentar
        como {{ info.title }}</button>
      <div class="overflow-hidden">
        <SliderBanks v-if="info.title == 'Deudor Monetario'" />
      </div>
      <h3 class="pb-2 mt-4 text-lg font-semibold text-left border-b-2 border-gray-300">{{ info.description }}</h3>
      <h4 class="py-4 pb-2 mt-4 text-xl font-semibold text-center border-b-2 border-gray-300">
        Ejemplos de <span class="italic text-emerald-800">{{ info.title }}</span>
      </h4>

      <div v-for="example in info.mainExamples" :key="example.exampleTitle" class="mb-4">
        <h4 class="pb-2 font-semibold text-left border-b-2 border-gray-300 text-emerald-800">{{ example.exampleTitle }}
        </h4>
        <p class="text-left text-gray-700">{{ example.exampleText }}</p>
      </div>

      <h3 class="pb-2 mt-4 text-lg font-semibold text-center border-b-2 border-gray-300">Ejemplos Adicionales</h3>
      <div v-for="example in info.additionalExamples" :key="example.exampleTitle" class="mb-4">
        <h4 class="pb-2 font-semibold text-left border-b-2 border-gray-300 text-emerald-800">{{ example.exampleTitle }}
        </h4>
        <p class="italic text-left text-gray-700">{{ example.exampleText }}</p>
      </div>
    </div>
  </OverlayScrollbarsComponent>

</template>


<script lang="ts" setup>

import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
import SliderBanks from "./SliderBanks.vue";
import { useSystemValues } from "@/stores/systemValues";
interface Example {
  exampleTitle: string;
  exampleText: string;
}

interface Debtor {
  title: string;
  img: Array<string>;
  description: string;
  mainExamples: Example[];
  additionalExamples: Example[];
}


const props = defineProps({
  info: {
    type: Object as () => Debtor,
    default: () => {
      return {}
    }
  }
})

const scrollbarOptions = {
  scrollbars: {
    visibility: 'auto',
    autoHide: 'leave',
    autoHideDelay: 500,
    theme: 'os-theme-dark', // Puedes cambiar esto a 'os-theme-light' si prefieres un tema claro
    dragScrolling: true,
    clickScrolling: true,
  },
};
</script>

<style lang="scss"></style>
