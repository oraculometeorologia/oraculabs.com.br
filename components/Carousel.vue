<template>
  <section aria-label="Destaques na Mídia" class="py-4 py-md-5 bg-blue">
    <div class="container">
      <h2 class="fs-1 py-4 py-md-5 text-center">Destaques</h2>
      
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <img src="/images/img-placeholder.jpg" class="d-block w-100" alt="...">
            <div class="pt-3">
              <h3>Oráculo na GloboNews</h3>
              <p>Nossos co-fundadores Takao e Matheus tiveram o prazer de participar de uma matéria sobre Startups que agregam tecnologia ao Agronegócio, no programa Conta Corrente da GloboNews. Clique aqui para ver a reportagem completa!</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="/images/img-placeholder.jpg" class="d-block w-100" alt="...">
            <div class="pt-3">
              <h3>PIPE-FAPESP</h3>
              <p>No dia 12 ocorreu a cerimônia de anúncio dos projetos aprovados pelo PIPE-FAPESP, que apoia a execução de pesquisa científica e/ou tecnológica em empresas do Estado de São Paulo. A Oráculo teve a satisfação de estar entre os selecionados, com um projeto voltado para  o aprimoramento das previsões meteorológicas para produtores rurais.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="/images/img-placeholder.jpg" class="d-block w-100" alt="...">
            <div class="pt-3">
              <h3>Campus Party 10</h3>
              <p>Nos dias 3 e 4, a Oráculo Meteorologia participou novamente da Campus Party, na área Startups & Makers. Tivemos a oportunidade de mais uma vez trazer ao público de que forma é possível reduzir custos e aumentar a produtividade no campo utilizando a meteorologia.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="/images/img-placeholder.jpg" class="d-block w-100" alt="...">
            <div class="pt-3">
              <h3>Campus Party 9</h3>
              <p>Fomos selecionados para apresentar a Oráculo Meteorologia na área de Startups & Makers da Campus Party, que aconteceu entre os dias 26 e 31 de janeiro no Anhembi, em São Paulo. A proposta do evento foi abrir espaço para empresas novatas terem oportunidade de apresentar seu negócio, diferenciais e inovações que trazem para o mercado.</p>
            </div>
          </div>
        </div>
        <button  aria-label="Clique para enviar"  class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button  aria-label="Clique para enviar" class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup></script>

<style>
.carousel {
  max-width: 800px;
  margin: auto;
}
.carousel-indicators {
  bottom: -30px;
}
</style>