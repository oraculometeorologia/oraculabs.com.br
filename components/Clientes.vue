<template>
  <section id="client-scroll" aria-label="Empresas que já contaram conosco">
    <div class="container pb-4 text-center" id="clientes">
      <h1 class="mt-5 text-center">Empresas que já contaram conosco</h1>
      <hr class="hr-title">

      <div class="row mb-4 mb-md-5 gx-4">
        <div v-for="value in clients" class="col-sm-6 col-md-3">
          <img :src="'/images/clients/logos/' + value.imgUrl" :alt="value.alt" class="w-5 client-logo">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

onMounted(() => {
  window.addEventListener('scroll', function () {
    const rect = document.getElementById("client-scroll").getBoundingClientRect();
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      document.title = "Oraculabs | Clientes"
    }
  })
})


const clients = [
  {
    imgUrl: 'chilli-beans-logo.webp',
    alt: 'Chilli Beans Logo'
  },
  {
    imgUrl: 'serena-energia-logo.webp',
    alt: 'Serena Energia Logo'
  },
  {
    imgUrl: 'lots-group-scania-logo.webp',
    alt: 'Lots Group Scania Logo'
  },

  {
    imgUrl: 'uniggel-sementes-logo.webp',
    alt: 'Uniggel Sementes Logo'
  },


  {
    imgUrl: 'cropview-logo.webp',
    alt: 'Cropview Logo'
  },
  {
    imgUrl: 'gracos-seguros-logo.webp',
    alt: 'Gracos Seguros Logo'
  },
  {
    imgUrl: 'grao-direto-logo.webp',
    alt: 'Grao Direto Logo'
  },
  {
    imgUrl: 'logo-sebrae.webp',
    alt: 'Sebrae Logo'
  },
  {
    imgUrl: 'logo-fapesp.webp',
    alt: 'Fapesp Logo'
  },
  {
    imgUrl: 'startup-farm-logo.webp',
    alt: 'startup-farm Logo'
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