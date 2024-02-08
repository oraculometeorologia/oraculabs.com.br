<template>
  <section aria-label="Empresas que já contaram conosco" >
    <div class="container pb-4 text-center" id="clientes">
      <h1 class="mt-5 text-center">Empresas que já contaram conosco</h1>
      <hr class="hr-title">

      <div class="row mb-4 mb-md-5 gx-4">
        <div v-for="value in clients" class="col-sm-6 col-md-3">
          <img :src="'/images/clients/logos/' + value.imgUrl" :alt="value.alt" class="w-5 client-logo" >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const clients = [
  {
    imgUrl: 'chilli-beans-logo.webp',
    alt: 'Chilli Beans Logo'
  },
  {
    imgUrl: 'serena-energia-logo.webp',
    alt: 'Serena Energia Logo'
  },
  // {
  //   imgUrl: 'logo-fapesp.webp'
  // },
  {
    imgUrl: 'lots-group-scania-logo.webp',
    alt: 'Lots Group Scania Logo'
  },
  
  // {
  //   imgUrl: 'logo-sebrae.webp'
  // },
  // {
  //   imgUrl: 'logo-startup-farm.webp'
  // },
  {
    imgUrl: 'uniggel-sementes-logo.webp',
    alt: 'Uniggel Sementes Logo'
  },
]
</script>

<style >
.client-logo {
  transform: scale(0.7);
  transition: all 0.3s ease;
}

.client-logo:hover {
  transform: scale(0.99);
}
</style>