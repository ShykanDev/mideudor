<template>
  <div class="slider">
    <div class="space-x-4 slide-track">
      <div class="flex items-center mr-2 slide">
        <img class="imo max-h-10" src="../assets/img/Banco_Santander_Logotipo.svg" alt="" />
      </div>
      <div class="flex items-center mr-2 slide">
        <img class="imo max-h-14" src="../assets/img/Citibanamex_logo.svg" alt="" />
      </div>
      <div class="flex items-center mr-2 slide">
        <img class="imo max-h-16" src="../assets/img/Grupo_Elektra_logo.svg" alt="" />
      </div>
      <div class="flex items-center mr-2 slide">
        <img class="imo max-h-14" src="../assets/img/HSBC_logo_(2018).svg" alt="" />
      </div>
      <div class="flex items-center mr-2 slide">
        <img class="imo max-h-14" src="../assets/img/Logo_de_Banco_Azteca.svg" alt="" />
      </div>
      <div class="flex items-center mr-2 slide">
        <img class="imo max-h-14" src="../assets/img/Logo_de_BanCoppel.svg" alt="" />
      </div>
      <div class="flex items-center mr-2 slide">
        <img class="imo max-h-14" src="../assets/img/Logo_de_Banorte.svg" alt="" />
      </div>
      <div class="flex items-center mr-2 slide">
        <img class="imo max-h-14" src="../assets/img/Logo_de_Inbursa.svg" alt="" />
      </div>
      <div class="flex items-center mr-2 slide">
        <img class="imo max-h-14" src="../assets/img/Scotiabank_logo.svg" alt="" />
      </div>
      <div class="flex items-center mr-2 slide">
        <img class="imo max-h-14" src="../assets/img/Banco_Santander_Logotipo.svg" alt="" />
      </div>
      <div class="flex items-center mr-2 slide">
        <img class="imo max-h-14" src="../assets/img/Citibanamex_logo.svg" alt="" />
      </div>
      <div class="flex items-center mr-2 slide">
        <img class="imo max-h-16" src="../assets/img/Grupo_Elektra_logo.svg" alt="" />
      </div>
      <div class="flex items-center mr-2 slide">
        <img class="imo max-h-14" src="../assets/img/HSBC_logo_(2018).svg" alt="" />
      </div>
      <div class="flex items-center mr-2 slide">
        <img class="imo max-h-14" src="../assets/img/Logo_de_Banco_Azteca.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

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
