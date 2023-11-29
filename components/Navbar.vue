<template>
    <nav class="navbar navbar-expand-lg bg-light navbar-light sticky-top">
      <div class="container">
        <NuxtLink @click="scrollToSection('top')" class="navbar-brand" id="logo">
          <img id="navbar-logo" src="/images/logos_oraculo/logo-oraculo-meteorologia-purple.png" />
        </NuxtLink>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" @click="scrollToSection('produtos')">Produtos e serviços</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="scrollToSection('quem-somos')">Quem somos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="scrollToSection('clientes')">Clientes e parceiros</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
#navbar-logo {
  height: 35px;
  cursor: pointer;
}

.nav-item {
  cursor: pointer;
  margin-bottom: 0;
}
</style>