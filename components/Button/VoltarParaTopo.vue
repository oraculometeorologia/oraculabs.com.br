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
  width: 80px;
  height: 80px;
  background-color: rgb(43, 128, 147);
}

button:hover {
  background-color: rgb(110, 188, 206);
}

i {
  color: white;
}
</style>