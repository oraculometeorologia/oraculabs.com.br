<template>
    <nav class="navbar navbar-expand-lg bg-light navbar-light sticky-top">
      <div class="container">
        <NuxtLink href="#" :to="{ hash: '#top' }" class="navbar-brand" id="logo">
          <img id="navbar-logo" src="./images/logos_oraculo/logo-oraculo-meteorologia-purple.png" />
        </NuxtLink>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <NuxtLink :to="{ hash: '#produtos' }" class="nav-link">Produtos e serviços</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink :to="{ hash: '#quem-somos' }" class="nav-link">Quem somos</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink :to="{ hash: '#clientes' }" class="nav-link">Clientes e parceiros</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script setup></script>

<style scoped>
#navbar-logo {
  height: 35px;
}

</style>