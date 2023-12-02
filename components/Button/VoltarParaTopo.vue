<template>
  <button @click="scrollToSection('top')" class="btn rounded-circle" title="Voltar para o topo">
    <i class="bi bi-chevron-up fs-4"></i>
  </button>
</template>

<script setup>
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped>
button {
  width: 60px;
  height: 60px;
  background-color: rgb(56, 148, 219);
}

button.btn:hover, button.btn:active {
  background-color: rgb(90, 160, 222);
}

i {
  color: white;
}
</style>