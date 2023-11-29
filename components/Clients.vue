<template>
  <section id="clientes">
      <div class="container p-5 text-dark text-center">
        <h2 class="fs-1 pt-5 pb-5">Clientes | Parceiros</h2>
        <div class="row mb-5">
            <div v-for="value in clients" class="col-3 p-3">
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
    cursor: pointer;
    transition: all 0.3s ease;
}

.client-logo:hover {
    transform: scale(0.99);
}

</style>