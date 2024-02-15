<template>
  <section id="servicos" aria-label="O que oferecemos" class="py-4 ">
    <div class="container text-center mt-5">
      <div>
        <h1 class="w-auto d-inline-block"  id="product">O que oferecemos</h1>
        <hr class="hr-title">
      </div>


      <div class="row ">


        <div  id="services-scroll"  class="col-lg-3 col-md-6 col-sm-12 mb-3">
          <div class="card h-100 p-4 shadow-sm bg-purple-gradient flex-column justify-content-center">
            <div class="row ">
              <div class="col-md-12 mb-10 pt-2 text-center flex-column ">
                <i class="bi bi-database fs-1 pb-2 text-white" aria-label="ícone banco de dados"></i>
                <h3 class="mt-2 text-white">Organize seus dados</h3>
                <p class="mt-3 text-white">Centralize seus dados com segurança e fácil acesso para extrair informações
                  relevantes.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
          <div class="card h-100 p-4 p-md-5 shadow-sm bg-purple-gradient flex-column justify-content-center">
            <div class="row ">
              <div class="col-md-12 mb-10 pt-2 text-center  flex-column">
                <i class="bi bi-gear fs-1 pb-2 text-white" aria-label="ícone engranagem"></i>
                <h3 class="mt-2 text-white">Automatize seus processos</h3>
                <p class="mt-3 text-white">Facilite a integração dos seus sistemas e aumente a produtividade de sua
                  equipe.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
          <div class="card h-100 p-4 p-md-5 shadow-sm bg-purple-gradient flex-column justify-content-center">
            <div class="row ">
              <div class="col-md-12 mb-10 pt-2 text-center  flex-column">
                <i class="bi bi-bar-chart-line-fill fs-1 pb-2 text-white" aria-label="ícone gráfico"></i>
                <h3 class="mt-2 text-white">Visualize informações estratégicas </h3>
                <p class="mt-3 text-white">Acompanhe gráficos e relatórios personalizados para eliminar gargalos na sua
                  empresa.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
          <div class="card h-100 p-4 p-md-5 shadow-sm bg-purple-gradient flex-column justify-content-center">
            <div class="row">
              <div class="col-md-12 mb-10 pt-2 text-center">
                <div class="">
                  <i class="bi bi-globe fs-1 pb-2 text-white" aria-label="ícone globo"></i>
                  <h3 class="mt-2 text-white">Evolua seu software</h3>
                  <p class="mt-3 text-white">Modernize seus sistemas e aumente sua competitividade no mercado.</p>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
      <CtaButton class="mt-4" />

    </div>
  </section>
</template>

<script setup>

onMounted(() => {
  window.addEventListener('scroll', function () {
    const rect = document.getElementById("services-scroll").getBoundingClientRect();
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      document.title = "Oraculabs | Produtos"
    }
  })
})

</script>

<style scoped>
i {
  color: #101F40;
}

.card {
  transition: all .25s;
  transition-timing-function: ease-in-out;
  border: none;

}

.card:hover {
  /*background-color: rgba(0, 0, 0, .03);*/
  /*box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;*/
  transition: all .25s;
  transition-timing-function: ease-in-out;

}

h3 {
  color: #101F40;
  font-size: 1.5rem;
  font-weight: 700;
}

p {
  margin-top: 30px;
  font-size: 18px;
}

.p-md-5 {
  padding: 1rem 1rem !important;
}


.bg-purple-gradient {
  background-image: linear-gradient(145deg, #564288, #51558b);
}
</style>