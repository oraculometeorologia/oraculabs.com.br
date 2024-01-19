<template>
  <section class="py-4 py-md-5" id="produtos">
    <div class="container text-center">
      <div class="row gx-4">
        <div class="col-sm-6 col-md-3 mb-3">
        <div class="card h-100 p-4 p-md-5 ">    <!--shadow-sm -->
          <img class="w50 pl50" src="/images/icon/foco.png" />
          <h3>Foco total no seu sucesso</h3>
            <p>Aumente o seu poder de tomada de decisões com nossos sistemas customizados</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-3  azullogo ">
          <div class="card h-100 p-4 p-md-5 ">
            <img class="w60 pl40" src="/images/icon/mao2.png" style="padding-bottom: 0;" />
            <h3>Se torne líder de mercado</h3>
            <p>Nós cuidamos da parte tecnológica para você se dedicar a crescer seu negócio.</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-3">
          <div class="card h-100 p-4 p-md-5  laranja">
            <img class="w50 pl50" src="/images/icon/mordomo.png" />
            <h3>Experiência<br/>única</h3>
            <p>Priorizamos o atendimento e o desenvolvimento sem enrolação para que tenha a melhor experiência conosco.</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-3">
          <div class="card h-100 p-4 p-md-5  avermelhado ">
            
            <img class="w60 pl40" src="/images/icon/dor.png" />
            <h3>Terceirize sua dor de cabeça</h3>
            <p>Reduza custos de contratação e treinamento de uma equipe própria de TI.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.w70{
  width: 70%;
}
.w60{
  width: 60%;
}

.w50{
  width: 50%;
}
.w40{
  width: 40%;
}
.pl30{
  margin-left: 30px;
}
.pl40{
  margin-left: 40px;
}
.pl50{
  margin-left: 50px;
}
.pl60{
  margin-left: 60px;
}

img{
  margin-bottom: 10px;
  text-align: center;
  position: absolute;
}
.card {
  transition: all .25s;
  transition-timing-function: ease-in-out;
  border: none;
  background: #fff;
  padding: 1rem 2rem !important;
  border: 1px solid #c8d4ec;
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
  color: #101F40;
  font-weight: 700;
  margin-top: 170px;
}

i{
  height: 100px;
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