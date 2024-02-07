<template>
  <nav class="navbar navbar-expand-lg bg-light navbar-light sticky-top shadow">
    <div class="container">
      <NuxtLink to="#" class="navbar-brand" id="logo">
        <img id="navbar-logo" src="/images/logos_oraculabs/logo-oraculabs.png" alt="Oraculabs - Soluções digitais"
          aria-label="Oraculabs - Soluções digitais" />
      </NuxtLink>

      <button aria-label="Menu" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse pt-2 pt-md-0" id="navmenu">
        <ul class="navbar-nav ms-auto">
          <li v-if="!containsPrivacyOrForm" class="nav-item">
            <NuxtLink to="/#projetos">
              <a class="nav-link" hef="/#produtos-servicos" aria-label="Produtos e serviços">Produtos e serviços </a>
            </NuxtLink>
          </li>
          <li v-if="!containsPrivacyOrForm" class="nav-item">
            <NuxtLink to="/#quem-somos">
             <a class="nav-link" aria-label="Quem somos">Quem somos</a>
            </NuxtLink>
          </li>
          <li v-if="!containsPrivacyOrForm" class="nav-item">
            <NuxtLink to="/#clientes">
             <a class="nav-link" aria-label="Clientes e parceiros">Clientes e parceiros</a>
            </NuxtLink>
          </li>
          <li v-if="containsPrivacyOrForm" class="nav-item" aria-label=" Voltar">
            <NuxtLink class="nav-link" to="/">Voltar</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      containsPrivacyOrForm: false
    };
  },
  mounted() {
    this.updateCurrentUrl();
    window.addEventListener("popstate", this.updateCurrentUrl);
  },
  beforeDestroy() {
    window.removeEventListener("popstate", this.updateCurrentUrl);
  },
  methods: {
    updateCurrentUrl() {
      const url = window.location.href;
      this.containsPrivacyOrForm = url.includes("privacidade") || url.includes("termos");
    }
  }
};
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
a {
  text-decoration: none;

}
</style>