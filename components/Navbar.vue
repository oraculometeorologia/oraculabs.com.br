<template>
  <nav class="navbar navbar-expand-lg bg-light navbar-light sticky-top shadow">
    <div class="container">
      <NuxtLink @click="navigation0" to="#hero" class="navbar-brand" id="logo">
        <img id="navbar-logo" src="/images/logos_oraculabs/logo-oraculabs.png" />
      </NuxtLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse pt-2 pt-md-0" id="navmenu">
        <ul class="navbar-nav ms-auto">
          <li v-if="!containsPrivacyOrForm" class="nav-item">
            <NuxtLink @click="navigation1" to="/#projetos">
              <a class="nav-link" hef="/#produtos-servicos" aria-label="Produtos e serviços">Produtos e serviços </a>
            </NuxtLink>
          </li>
          <li v-if="!containsPrivacyOrForm" class="nav-item">
            <NuxtLink @click="navigation2" to="/#quem-somos">
              <a class="nav-link" aria-label="Quem somos">Quem somos</a>
            </NuxtLink>
          </li>
          <li v-if="!containsPrivacyOrForm" class="nav-item">
            <NuxtLink @click="navigation3" to="/#clientes">
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
    },

    navigation0() {
      document.title = 'Oraculabs ::';
    },

    navigation1() {
      document.title = 'Oraculabs :: Produtos e Serviços';
    },

    navigation2() {
      document.title = 'Oraculabs :: Quem Somos';
    },

    navigation3() {
      document.title = 'Oraculabs :: Clientes e parceiros';
    }
  },
}
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