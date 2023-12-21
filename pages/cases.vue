<template>
  <NuxtLayout>
    <div class="container mt-4">
      <h1 class="mb-4 text-center">Cases</h1>
      
      <div class="row">
        <div class="col-sm-12 col-md-6 mb-4">
          <div class="card h-100 p-3 round">
            <img src="/images/img-placeholder.jpg" class="mb-3" />
            <h2 class="fs-4">Omega Energia/ Serena Energy - software customizado (2019 até o momento)</h2>
            <p class="mb-2">A Omega Energia, atualmente Serena Energy, é uma das principais geradoras e comercializadoras de energia do Brasil e, junto a eles, desenvolvemos diversos módulos de sistemas internos para gestão de geração e manutenção de parques eólicos e solares.</p>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 mb-4">
          <div class="card h-100 p-3 round">
            <img src="/images/img-placeholder.jpg" class="mb-3" />
            <h2 class="fs-4">Lots Group - monitoramento para logística (2019)</h2>
            <p>A Lots Group é uma divisão de logística da Scania, montadora de caminhões, junto a eles prestamos serviço através de uma <b>plataforma para monitoramento de chuva em tempo real</b> para auxiliar o planejamento de coleta de uma demanda de produção agrícola.</p>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 mb-4">
          <div class="card h-100 p-3 round">
            <img src="/images/img-placeholder.jpg" class="mb-3" />
            <h2 class="fs-4">Grão Direto - API agrícola</h2>
            <p>asdf.</p>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 mb-4">
          <div class="card h-100 p-3 round">
            <img src="/images/img-placeholder.jpg" class="mb-3" />
            <h2 class="fs-4">CropView - API notícias agrícolas (2019)</h2>
            <p>A CropView é uma empresa de monitoramento de safras, junto a eles desenvolvemos APIs de previsão do tempo e automatizações para geração de imagens, que foram utilizadas em diversos programas do canal Notícias agrícolas.</p>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 mb-4">
          <div class="card h-100 p-3 round">
            <img src="/images/img-placeholder.jpg" class="mb-3" />
            <h2 class="fs-4">Uniggel Sementes - App de previsão voltada ao agro (2017 a 2020)</h2>
            <p>A Uniggel Sementes é uma grande produtora de sementes de grãos, junto a eles prestamos serviços para diversas safras e safrinhas, auxiliando desde o plantio, pulverizações e colheita com monitoramento em tempo real, previsões de curto e médio prazo através de uma plataforma web e um aplicativo.</p>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 mb-4">
          <div class="card h-100 p-3 round">
            <img src="/images/img-placeholder.jpg" class="mb-3" />
            <h2 class="fs-4">Chilli Beans - monitoramento de evento <a href="http://agsmash.com.br/case/148" target="_blank">(Festival Chilli Beans 2017)</a></h2>
            <p>A marca de óculos Chilli Beans realizou um festival para colaboradores em 2017, e o evento contou com o nosso monitoramento em tempo real (nowcasting) de chuva e risco de raios para gerenciamento da segurança do festival.</p>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 mb-4">
          <div class="card h-100 p-3 round">
            <img src="/images/img-placeholder.jpg" class="mb-3" />
            <h2 class="fs-4">Gracos Seguros - 2015 a 2018</h2>
            <p>Elaboração de levantamentos de dados e laudos meteorológicos para clientes que precisavam comprovar avarias derivadas de fenômenos meteorológicos extremos como ventos e tempestades com raios. Nossos relatórios assinados por meteorologistas comprovaram diversos sinistros.</p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
onMounted(() => {
  document.title = 'OracuLabs - Cases';
})
</script>

<style>
h2 {
  line-height: 2.1rem;
}

p {
  line-height: 1.75rem;
}
</style>