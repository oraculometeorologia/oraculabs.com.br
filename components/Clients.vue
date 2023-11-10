<template>
  <section id="clientes">
      <div class="container p-5 text-dark text-center">
        <h3 class="pb-3">Clientes | Parceiros</h3>
        <div class="row">
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