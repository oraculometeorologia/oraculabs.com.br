<template>
  <section class="py-4 " id="produtos">
    <div class="container text-center">
      <h1 class="mt-5">O que oferecemos</h1>
      <hr class="hr-title">


      <div class="row ">


        <div class="col-md-3 mb-3">
          <div class="card h-100 p-4 shadow-sm bg-purple-gradient flex-column justify-content-center">
            <div class="row ">
              <div class="col-md-12 mb-10 pt-2 text-center flex-column ">
                <i class="bi bi-database fs-1 pb-2 text-white" />
                <h3 class="mt-2 text-white">Organize seus dados</h3>
                <p class="mt-3 text-white">Centralize seus dados com segurança e fácil acesso para extrair informações relevantes.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3 mb-3">
          <div class="card h-100 p-4 p-md-5 shadow-sm bg-purple-gradient flex-column justify-content-center">
            <div class="row ">
              <div class="col-md-12 mb-10 pt-2 text-center  flex-column">
                <i class="bi bi-gear fs-1 pb-2 text-white" />
                <h3 class="mt-2 text-white">Automatize seus processos</h3>
                <p class="mt-3 text-white">Facilite a integração dos seus sistemas e aumente a produtividade de sua equipe.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3 mb-3">
          <div class="card h-100 p-4 p-md-5 shadow-sm bg-purple-gradient flex-column justify-content-center">
            <div class="row ">
              <div class="col-md-12 mb-10 pt-2 text-center  flex-column">
                <i class="bi bi-bar-chart-line-fill fs-1 pb-2 text-white" />
                <h3 class="mt-2 text-white">Visualize informações estratégicas </h3>
                <p class="mt-3 text-white">Acompanhe gráficos e relatórios personalizados para eliminar gargalos na sua empresa.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3 mb-3">
          <div class="card h-100 p-4 p-md-5 shadow-sm bg-purple-gradient flex-column justify-content-center">
            <div class="row">
              <div class="col-md-12 mb-10 pt-2 text-center">
                <div class="">
                  <i class="bi bi-globe fs-1 pb-2 text-white" />
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

<script setup></script>

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

.text-left {
  text-align: left;
}

.azullogo {
  background-color: #3894DB;
}

.cinzaAzulado {
  background-color: #c8d4ec;
}
.azulClaro{
  background-color:  #a3bef3;
}
.laranja {
  background-color: #EFBB89;
}

.avermelhado {
  background-color: #E57861;
}

.marrom {
  background-color: #A45C71;
}

.bg-purple-gradient {
  background-image: linear-gradient(145deg, #564288 , #51558b);
}
</style>