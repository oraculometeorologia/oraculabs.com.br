<template>

  <NuxtLink to="/#hero">
    <button  aria-label="Voltar para o Topo" class="btn rounded-circle bg-blue-1 text-white" title="Voltar para o topo">
      <i class="bi bi-chevron-up fs-4" aria-label="ícone topo" ></i>
    </button>
  </NuxtLink>

</template>

<script setup>
</script>

<style scoped>
button {
  width: 60px;
  height: 60px;
}

button.btn:hover, button.btn:active {
  background-color: rgb(90, 160, 222) !important;
}
</style>