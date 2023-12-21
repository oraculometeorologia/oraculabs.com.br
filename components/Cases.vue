<template>
  <section id="clientes">
    <div class="container py-4 text-dark text-center">
      <h2 class="fs-1 py-4 py-md-5">Clientes | Parceiros</h2>
      <div class="row mb-4 mb-md-5">
        <div v-for="value in clients" class="col-sm-6 col-md-3">
          <img :src="'/images/clients/logos/' + value.imgUrl" alt="" class="w-5 client-logo">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const clients = [
  {
    imgUrl: 'logo-chilli-beans.webp',
    alt: 'Chilli Beans Logo'
  },
  {
    imgUrl: 'logo-fapesp.webp'
  },
  {
    imgUrl: 'logo-lots-group-scania.webp'
  },
  {
    imgUrl: 'logo-omega-energia.webp'
  },
  {
    imgUrl: 'logo-sebrae.webp'
  },
  {
    imgUrl: 'logo-startup-farm.webp'
  },
  {
    imgUrl: 'logo-uniggel-sementes.webp'
  },
]
</script>

<style >
.client-logo {
  transform: scale(0.9);
  transition: all 0.3s ease;
}

.client-logo:hover {
  transform: scale(0.99);
}
</style>