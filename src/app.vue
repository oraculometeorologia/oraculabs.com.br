<template>
  <div>
    <div id="top"></div>


    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-light navbar-light sticky-top">
      <div class="container">
        <NuxtLink href="#" :to="{hash: '#top'}" class="navbar-brand" id="logo">
          <img id="navbar-logo" src="assets/images/logos oraculo/logo-oraculo-meteorologia-purple.png" />
        </NuxtLink>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <NuxtLink :to="{ hash: '#produtos' }" class="nav-link"
                >Produtos e serviços</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink :to="{ hash: '#quem-somos' }" class="nav-link"
                >Quem somos</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink :to="{ hash: '#clientes' }" class="nav-link"
                >Clientes e parceiros</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Navbar -->

    <!-- Hero -->
    <section class="text-dark px-5 pb-5 text-center" id="hero">
      <div class="container">
        <div>
          <img id="hero-logo" src="assets/images/logos oraculo/logo-oraculo-meteorologia-white.png" />
          <h1>Previsão meteorológica sob demanda</h1>
        </div>
      </div>
    </section>
    <!-- Hero -->

    <!-- Cards -->
    <section class="p-5" id="produtos">
      <div class="container">
        <div class="p-5 text-center">
          <h2 class="h1">Principais produtos e serviços</h2>
        </div>
        <div class="row text-center">
          <div class="col-lg card m-3 p-5 hover-effect-light-gray">
            <div class="pb-2">
              <BootstrapIcon name="database" class="h1" />
            </div>
            <h3 class="card-title h3">Banco de dados meteorológicos</h3>
            <p class="card-text">
              Desenvolvemos todo o processo de Download, tratamento e
              disponibilização de diversos modelos meteorológicos via interface
              web ou via API para o sistema de sua preferência
            </p>
          </div>
          <div class="col-lg card m-3 p-5 hover-effect-light-gray">
            <div class="pb-2">
              <BootstrapIcon name="cloud-arrow-up-fill" class="h1" />
            </div>
            <h3 class="card-title h3">Infraestrutura local ou em nuvem</h3>
            <p>
              Preparamos toda a insfraestrutura de armazenamento de dados e
              atualização automática das previsões, podendo ser em sistema cloud
              ou em seu próprio data center.
            </p>
          </div>
        </div>

        <div class="row text-center">
          <div class="col-lg card m-3 p-5 hover-effect-light-gray">
            <div class="pb-2">
              <BootstrapIcon name="laptop" class="h1" />
            </div>
            <h3 class="card-title h3">Interfaces web dinâmicas</h3>
            <p>
              Criamos todos os dashboards (de forma customizada) para
              visualização das previsões de forma independente (só previsões) ou
              relacionamos como dados e informações de seu negócio
              (personalizado).
            </p>
          </div>
          <div class="col-lg card m-3 p-5 hover-effect-light-gray">
            <div class="pb-2">
              <BootstrapIcon name="graph-up-arrow" class="h1" />
            </div>
            <h3 class="card-title h3">Análise e tratamento de dados</h3>
            <p>
              Realizamos diversos tipos de análises estatísticas tanto de
              meteorologia quanto da relação dela com seu negócio. Tenha os
              dados corrigidos e as informações adaptadas para as necessidades
              do seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Cards -->

    <!-- Section -- Como a meteorologia pode me ajudar -->
    <section class="p-5 text-dark bg-blue">
      <div class="container">
        <div class="row justify-content-center">
          <div class="text-center pb-5 col-6">
            <h2 class="p-2">Como a meteorologia pode me ajudar?</h2>
            <p>
              Se sua demanda é afetada pelas variações do tempo e do clima, você
              pode ter informações antecipadas para otimizar sua produção,
              estoque, logística ou venda.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-6 border-top">
            <h4 class="pt-3">Meteorologia para todas as decisões</h4>
            <p>
              As variáveis meteorológicas, em seus diferentes níveis temporais,
              influenciam o humor e o consumo das pessoas, afetando todos os
              setores da indústria.As variáveis meteorológicas, em seus
              diferentes níveis temporais, influenciam
            </p>
            <p class="pb-4">
              <span class="fs-5 hover-animation">Saiba mais</span>
              <BootstrapIcon name="chevron-right" />
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-6 border-top">
            <h4 class="pt-3">Consultoria meteorológica</h4>
            <p>
              Para desenvolver um projeto, montamos uma equipe dedicada para
              desenvolver soluções baseadas em modelagem meteorológica,
              interfaces web e análises estatísticas.
            </p>
            <p class="pb-4">
              <span class="fs-5 hover-animation">Saiba mais</span>
              <BootstrapIcon name="chevron-right" />
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-6 border-top">
            <h4 class="pt-3">Observação de dados para previsão de demanda</h4>
            <p>
              Quando relacionamos demandas passadas com a meteorologia,
              começamos a entender como podemos otimizar a oferta.
            </p>
            <p class="pb-4">
              <span class="fs-5 hover-animation">Saiba mais</span>
              <BootstrapIcon name="chevron-right" />
            </p>
          </div>
        </div>
      </div>
    </section>

    <QuemSomos />

    <Clients />

    <div>
      <!-- <section>
    <div class="outline-red-2px">
      <img src="assets\images\banner\oraculo-logo-grande.jpeg" alt="">
    </div>
  </section> -->
      <slot />
    </div>

    <!-- Botão de voltar -->
    <div class="sticky-bottom">
      <NuxtLink
        :to="{ hash: '#top' }"
        class="btn btn-dark text-decoration-none text-light m-5"
        id="button-padding"
      >
        <BootstrapIcon name="arrow-up" />
      </NuxtLink>
    </div>
    <!-- Botão de voltar -->
  </div>
</template>

<script setup>

// console.log('swiper setup: ', swiper)
</script>

<style lang="scss">
#top {
  // border: 1px dashed black;
  position: relative;
  // top: -100px;
}

  #navbar-logo {
    height: 35px;
  }

  #hero {
    background-image: url('@/assets/images/banner/hero-bg.jpg');
    background-size: cover;
    background-attachment: fixed;
    height: 610px;
    // background-position: bottom;
    // object-position: center;

  }

  #hero-logo {
    width: 700px;
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
  }

  #hero h1 {
    color: white;
    font-size: 2.2rem;
    font-family: 'Oxygen', sans-serif;
    padding-top: 30px;
  }

#button-padding {
  padding: 10px;
  margin: 10px;
}

.bg-blue {
  background-color: #3894DB;
}

.tres-canvas-container {
  width: 500px;
  height: 500px;
}

.hover-animation:hover {
  transition: all .2s ease;
  color: white;
}
</style>