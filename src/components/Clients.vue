<template>
  <section id="clientes">
      <div class="container p-5 text-dark text-center">
        <h3 class="pb-3">Clientes | Parceiros</h3>
        <div class="row">
            <div v-for="value in clients" class="col-3 p-3">
                <img :src="value.imgUrl" alt="" class="w-5 client-logo">
            </div>
        </div>
      </div>
    </section>
</template>

<script setup>

const clients = [
    {
        imgUrl: 'assets/images/clients/logos/logo-chilli-beans.webp',
        alt: 'Chilli Beans Logo'
    },
    {
        imgUrl: 'assets/images/clients/logos/logo-fapesp.webp'
    },
    {
        imgUrl: 'assets/images/clients/logos/logo-lots-group-scania.webp'
    },
    {
        imgUrl: 'assets/images/clients/logos/logo-omega-energia.webp'
    },
    {
        imgUrl: 'assets/images/clients/logos/logo-sebrae.webp'
    },
    {
        imgUrl: 'assets/images/clients/logos/logo-startup-farm.webp'
    },
    {
        imgUrl: 'assets/images/clients/logos/logo-uniggel-sementes.webp'
    },

]


</script>

<style lang="scss" scoped>
.client-logo {
    transform: scale(0.9);
    cursor: pointer;
    transition: all 0.3s ease;
}

.client-logo:hover {
    transform: scale(0.99);

    // transform: translateZ(0);
}

</style>