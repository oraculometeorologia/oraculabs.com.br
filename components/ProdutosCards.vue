<template>
  <section class="py-4 " id="produtos">
    <div class="container text-center">
      <h1 class="mt-5 ">O que Oferecemos</h1>


      <div class="row ">


        <div class="col-md-6 mb-6">
          <div class="card h-100 p-4 p-md-5 shadow-sm azullogo">
            <div class="row ">
              <div class="col-md-2 mb-2">
                <i class="bi bi-database fs-1 pb-2" />
              </div>
              <div class="col-md-10 mb-10 text-left ">
                <h3>Organize seus dados</h3>
                <p>Centralize seus dados com segurança e fácil acesso para extrair informações relevantes.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 mb-6">
          <div class="card h-100 p-4 p-md-5 shadow-sm cinzaAzulado">
            <div class="row ">
              <div class="col-md-2 mb-2">
                <i class="bi bi-laptop fs-1 pb-2" />
              </div>
              <div class="col-md-10 mb-10  text-left ">
                <h3>Automatize seus processos</h3>
                <p>Facilite a integração dos seus sistemas e aumente a produtividade de sua equipe.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 mb-6">
          <div class="card h-100 p-4 p-md-5 shadow-sm mt-4 laranja ">
            <div class="row ">
              <div class="col-md-2 mb-2">
                <i class="bi bi-graph-up-arrow fs-1 pb-2" />
              </div>
              <div class="col-md-10 mb-10  text-left ">
                <h3>Visualize informações estratégicas </h3>
                <p>Acompanhe gráficos e relatórios personalizados para eliminar gargalos na sua empresa.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 mb-6">
          <div class="card h-100 p-4 p-md-5 shadow-sm mt-4 marrom">
            <div class="row">
              <div class="col-md-2 mb-2">
                <i class="bi bi-cloud-arrow-up-fill fs-1 pb-2" />
              </div>
              <div class="col-md-10 mb-10  text-left ">
                <h3>Evolua seu software</h3>
                <p>Modernize seus sistemas e aumente sua competitividade no mercado.</p>
              </div>
            </div>
          </div>
        </div>


      </div>

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
  height: 250px !important;

}

.card:hover {
  background-color: rgba(0, 0, 0, .03);
  /*box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;*/
  transition: all .25s;
  transition-timing-function: ease-in-out;
  height: 250px !important;
}

h3 {
  color: #101F40;
  font-size: 2rem;
  font-weight: 700;
}

p{
  font-size: 24px;
}

.p-md-5 {
  padding: 2rem 1rem !important;
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

.laranja {
  background-color: #EFBB89;
}

.avermelhado {
  background-color: #E57861;
}

.marrom {
  background-color: #A45C71;
}</style>