<template>
    <nav class="navbar navbar-expand-lg bg-light navbar-light sticky-top shadow">
      <div class="container">
        <NuxtLink @click="$scrollTo('top')" class="navbar-brand" id="logo">
          <img id="navbar-logo" src="/images/logos_oraculabs/logo-oraculabs.png" />
        </NuxtLink>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse pt-2 pt-md-0" id="navmenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" @click="$scrollTo('produtos')">Produtos e serviços</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="$scrollTo('quem-somos')">Quem somos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="$scrollTo('clientes')">Clientes e parceiros</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script setup>
</script>

<style scoped>
#navbar-logo {
  cursor: pointer;
  height: 30px;
  margin-top: -5px;
}

.nav-item {
  cursor: pointer;
  margin-bottom: 0;
}
</style>