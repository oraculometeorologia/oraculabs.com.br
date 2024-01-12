<template>
  <section class="py-4 " id="produtos">
    <div class="container text-center">
      <h2 class="fs-1 py-4 ">Produtos e Serviços</h2>

      <div class="row gx-4">
        <div class="col-sm-12 col-md-6 mb-4">
          <div class="card h-100 p-4 p-md-5 shadow-sm">
            <i class="bi bi-cloud-arrow-up-fill fs-1 pb-2" />
            <h3>Banco de dados e infraestrutura cloud</h3>
            <p>Organize a infraestrutura de armazenamento de dados e de acesso via nuvem.</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 mb-4">
          <div class="card h-100 p-4 p-md-5 shadow-sm">
            <i class="bi bi-database fs-1 pb-2" />
            <h3>Automatização de rotinas e criação de APIs</h3>
            <p>Automatize todo o processo de download, tratamento e disponibilização dos dados.</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 mb-4">
          <div class="card h-100 p-4 p-md-5 shadow-sm">
            <i class="bi bi-laptop fs-1 pb-2" />
            <h3>Criação de Interfaces Web</h3>
            <p>Visualize as informações de forma customizada, via dashboards e relatórios.</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 mb-4">
          <div class="card h-100 p-4 p-md-5 shadow-sm">
            <i class="bi bi-laptop fs-1 pb-2" />
            <h3>Manutenção e Sustentação</h3>
            <p>Visualize as informações de forma customizada, via dashboards e relatórios.</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 mb-4">
          <div class="card h-100 p-4 p-md-5 shadow-sm">
            <i class="bi bi-laptop fs-1 pb-2" />
            <h3>Consultoria</h3>
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
}

.card:hover {
  background-color: rgba(0,0,0,.03);
  /*box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;*/
  transition: all .25s;
  transition-timing-function: ease-in-out;
}

h2{
  color: #2D356D
}

</style>