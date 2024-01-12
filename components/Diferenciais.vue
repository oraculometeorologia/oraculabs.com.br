<template>
  <section class="py-4 py-md-5" id="produtos">
    <div class="container text-center">
      <div class="row gx-4">
        <div class="col-sm-6 col-md-3 mb-3">
        <div class="card h-100 p-4 p-md-5 ">    <!--shadow-sm -->
            <h3>Foco no <br/> Canudo</h3>
            <i class="bi bi-database fs-1 pb-2" />
            <p>Organize a infraestrutura de armazenamento de dados e de acesso via nuvem.</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-3  azullogo ">
          <div class="card h-100 p-4 p-md-5 ">
            
            <h3>Transparência Transparência </h3>
            <i class="bi bi-cloud-arrow-up-fill fs-1 pb-2  marrom" />
            <p>Visualize as informações de forma customizada, via dashboards e relatórios.</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-3">
          <div class="card h-100 p-4 p-md-5  laranja">
            <h3>Equipe Multidisciplinar</h3>
            <i class="bi  bi-graph-up-arrow fs-1 pb-2" />
            <p>Automatize todo o processo de download, tratamento e disponibilização dos dados.</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-3">
          <div class="card h-100 p-4 p-md-5  avermelhado ">
            
            <h3>Reedução de <br/>custo</h3>
            <i class="bi bi-database fs-1 pb-2" />
            <p>Visualize as informações de forma customizada, via dashboards e relatórios.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.card {
  transition: all .25s;
  transition-timing-function: ease-in-out;
  border: none;
  background: #fff;
  padding: 1rem 2rem !important;
  
}
.card p {
  color: black;
}

.card:hover {
  background-color: rgba(200, 212, 232);
  box-shadow: 0 .25rem 0.5rem rgba(0,0,0,.15)!important;
  transition: all .25s;
  transition-timing-function: ease-in-out;
}
.card:hover p {
  color: black;
}

#produtos{
  margin-top: -130px;
  margin-bottom: 0;
  padding-bottom: 0 !important;
}
h3{
  color: #3894DB
}

i{
  height: 130px;
}

.fs-1 {
    font-size: calc(1.375rem + 2.5vw)!important;
}
/* passar para constantes TODO */
.azullogo{
  color:#3894DB;
}
.cinzaAzulado{
  color: #c8d4ec ;
}
.laranja{
  color: #EFBB89;
}
.avermelhado{
  color:#E57861;
}
.marrom{
  color:#A45C71;
}


</style>



.fs-1 {
  font-size: calc(1.375rem + 3.5vw)!important;
}