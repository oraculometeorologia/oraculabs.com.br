<template>
  <section class="py-5 bg-blue">
    <div class="container">
      <h2 class="fs-1 py-4 py-md-5 text-center">Outros serviços</h2>
      <!-- <p class="pt-4 col-7">
          Se sua demanda é afetada pelas variações do tempo e do clima, você
          pode ter informações antecipadas para otimizar sua produção,
          estoque, logística ou venda.
      </p> -->

      <div class="row py-4">
        <div class="col-sm-12 col-md-6">
          <div class="mb-5">
            <h4>Inteligência artificial</h4>
            <ul class="pt-3 fs-5">
              <li>Implementações baseadas em redes neurais;</li>
              <li>Implementações baseadas em aprendizado de máquina.</li>
            </ul>
            <!-- <p class="pb-4">
                <span class="fs-5 hover-animation">Saiba mais</span>
                <i class="bi bi-chevron-right" />
            </p> -->
          </div>

          <div class="mb-5">
            <h4>Analytics</h4>
            <ul class="pt-3 fs-5">
              <li>Arquitetura de banco de dados relacional;</li>
              <li>Desenvolvimentos e manutenções em PostgreSQL;</li>
              <li>Automatizações de processos com Python, Cron e Shell;</li>
              <li>Modelagem matemática.</li>
            </ul>
            <!-- <p class="pb-4">
                <span class="fs-5 hover-animation">Saiba mais</span>
                <i class="bi bi-chevron-right" />
            </p> -->
          </div>

          <div class="mb-5">
            <h4>Desenvolvimento web</h4>
            <ul class="pt-3 fs-5">
              <li>Criação de backend com NestJS, FastAPI ou Django;</li>
              <li>Criação e manutenção de APIs;</li>
              <li>Criação de frontend com Vue.js;</li>
              <li>Organização de repositórios e versionamentos de códigos;</li>
              <li>Websites dinâmicos ou estáticos.</li>
            </ul>
            <!-- <p class="pb-4">
                <span class="fs-5 hover-animation">Saiba mais</span>
                <i class="bi bi-chevron-right" />
            </p> -->
          </div>
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="mb-5">
            <h4>Meteorologia</h4>
            <ul class="pt-3 fs-5">
              <li>Implementação de rotinas com modelos meteorológicos;</li>
              <li>Calibrações em modelos de previsão utilizando IA;</li>
              <li>Previsões do tempo até 15 dias;</li>
              <li>Previsões climáticas até 6 meses;</li>
              <li>Estudos, levantamentos e laudos meteorológicos;</li>
              <li>Modelagem hidrológica.</li>
            </ul>
            <!-- <p class="pb-4">
                <span class="fs-5 hover-animation">Saiba mais</span>
                <i class="bi bi-chevron-right" />
            </p> -->
          </div>

          <div class="mb-5">
            <h4>Oceanografia</h4>
            <ul class="pt-3 fs-5">
              <li>Implementação de rotinas com modelos oceanográficos;</li>
              <li>Calibrações em modelos de previsão utilizando IA;</li>
              <li>Previsões de ondas e correntes;</li>
              <li>Estudos e levantamentos.</li>
            </ul>
            <!-- <p class="pb-4">
                <span class="fs-5 hover-animation">Saiba mais</span>
                <i class="bi bi-chevron-right" />
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style>
li {
  margin-bottom: 12px;
}

@media (max-width: 576px) {
  li {
    font-size: 1rem;
  }
}
</style>