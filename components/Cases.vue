<template>
<section aria-label="Alguns de nossos projetos" class="pt-4" id="projetos">
  <div class="container mt-4">
    <h1 class="mt-5 text-center">Alguns de nossos projetos</h1>
    <hr class="hr-title">
  
    <div class="row">
      
      <div class="col-sm-12 col-md-4 my-5 ">
        <div class="text-center ">
          <div class="row ">
            <div class="col-12 mb-2">
              <i class="bi bi-display pb-2 azulLogo2 "  aria-label="ícone display"   ></i>
            </div>
            <div class="col-12 tituloCase">
              ERP Customizado
            </div>
            <div class="col-12  empresa">
              Omega Energia/ Serena Energy </div>
            <p class="mb-2 descricao">A Omega Energia, atualmente Serena Energy, é uma das principais geradoras e
              comercializadoras de energia do Brasil e, junto a eles, desenvolvemos diversos módulos de sistemas internos
              para gestão de geração e manutenção de parques eólicos e solares.</p>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-4 my-5  ">
        <div class="text-center ">
          <div class="row ">
            <div class="col-12 mb-2">
              <i class="bi bi-pin-map pb-2 azulLogo2 " aria-label="ícone mapa"  ></i>
            </div>
            <div class="col-12 tituloCase   ">
              Plataforma de Georreferenciamento
            </div>
            <div class="col-12 empresa">
              Lots Group </div>
              <p class="mb-2 descricao">A Lots Group é uma divisão de logística da Scania, montadora de caminhões, junto a
            eles prestamos serviço através de uma <b>plataforma para monitoramento de chuva em tempo real</b> para
            auxiliar o planejamento de coleta de uma demanda de produção agrícola.</p>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-4 my-5  ">
        <div class="text-center ">
          <div class="row ">
            <div class="col-12 mb-2">
              <i class="bi bi-gear-wide pb-2 azulLogo2 " aria-label="ícone engrenagem"  ></i>
            </div>
            <div class="col-12 tituloCase   ">
              Automatização de APIs
            </div>
            <div class="col-12 empresa">
              Grão Direto </div>
              <p class="mb-2 descricao">
                A Grão Direto é um marketplace de comercialização de grãos. Junto a eles tivemos uma parceria para geração de previsão meteorológica de curto e longo prazo, via API, mapas e conteúdos agrometeorológicos para a base de produtores rurais do marketplace.
              </p>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-4 my-5">
        <div class="text-center ">
          <div class="row ">
            <div class="col-12 mb-2">
              <i class="bi bi-pie-chart pb-2 azulLogo2 " aria-label="ícone gráfico" ></i>
            </div>
            <div class="col-12 tituloCase   ">
              Visualização de Dados
            </div>
            <div class="col-12 empresa">
              CropView </div>
              <p class="mb-2 descricao">A CropView é uma empresa de monitoramento de safras, junto a eles desenvolvemos APIs
            de previsão do tempo e automatizações para geração de imagens, que foram utilizadas em diversos programas do
            canal Notícias agrícolas.</p>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-4 my-5">
        <div class="text-center ">
          <div class="row ">
            <div class="col-12 mb-2">
              <i class="bi bi-lightbulb pb-2 azulLogo2 " aria-label="ícone luz"  ></i>
            </div>
            <div class="col-12 tituloCase   ">
              App para Gestão Operacional
            </div>
            <div class="col-12 empresa">
              Uniggel Sementes</div>
              <p class="mb-2 descricao">A Uniggel Sementes é uma grande produtora de sementes de grãos, junto a eles
            prestamos serviços para diversas safras e safrinhas, auxiliando desde o plantio, pulverizações e colheita
            com monitoramento em tempo real, previsões de curto e médio prazo através de uma plataforma web e um
            aplicativo.</p>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-4 my-5">
        <div class="text-center ">
          <div class="row ">
            <div class="col-12 mb-2">
              <i class="bi bi-database-fill-lock pb-2 azulLogo2 " aria-label="ícone banco de Dados"  ></i>
            </div>
            <div class="col-12 tituloCase   ">
              Laudo de Sinistro para Seguros
            </div>
            <div class="col-12 empresa">
              Gracos</div>
              <p class="mb-2 descricao">
            Elaboração de levantamentos de dados e laudos meteorológicos para clientes que precisavam comprovar avarias
            derivadas de fenômenos meteorológicos extremos como ventos e tempestades com raios. Nossos relatórios
            assinados por meteorologistas comprovaram diversos sinistros.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
</template>
  
<script setup>

</script>
  
<style scoped>
div {
  line-height: 2.1rem;
}

p {
  line-height: 1.75rem;
}

i {
  margin-top: 30px;
  font-size: 3rem !important;
}


.tituloCase {
  font-size: 20px !important;
  font-weight: bolder;
  color: #3894DB;
}

.empresa {
  font-size: 16px !important;
  font-weight: bold;
  text-align: center;
  margin-top: 22px;
}


.descricao {
  font-size: 16px;
}


.azulLogo2 {
  color: #3894DB !important;
}

</style>