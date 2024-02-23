<template>
  <section aria-label="Nossos Diferenciais" class="py-4 py-md-5" id="produtos-servicos">
    <div id="diferenciais-scroll" class="container text-center">
      <div class="row gx-4">
        <div class="col-lg-3 col-md-6 col-sm-12  mb-3">
          <div class="card h-100 p-4 p-md-5 mx-auto"> <!--shadow-sm -->
            <img  class=" mx-auto" src="/images/icon/foco.png"  alt="Foco total no seu sucesso" aria-label="Foco total no seu sucesso" />
            <h3>Foco total no seu sucesso</h3>
            <p>Aumente o seu poder de tomada de decisões com nossos sistemas customizados</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-3  ">
          <div class="card h-100 p-4 p-md-5 mx-auto">
            <img  class=" mx-auto" src="/images/icon/mao2.png" style="padding-bottom: 0;"  alt="Se torne líder de mercado" aria-label="Se torne líder de mercado"/>
            <h3>Se torne líder de mercado</h3>
            <p>Nós cuidamos da parte tecnológica para você se dedicar a crescer seu negócio.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
          <div class="card h-100 p-4 p-md-5 ">
            <img  class=" mx-auto" src="/images/icon/mordomo.png"  alt="Experiência única" aria-label="Experiência única"/>
            <h3>Experiência<br />única</h3>
            <p>Priorizamos o atendimento e o desenvolvimento sem enrolação para que tenha a melhor experiência conosco.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
          <div class="card h-100 p-4 p-md-5 ">

            <img  class=" mx-auto" src="/images/icon/dor.png"  alt="Terceirize sua dor de cabeça" aria-label="Terceirize sua dor de cabeça"/>
            <h3>Terceirize sua dor de cabeça</h3>
            <p>Reduza custos de contratação e treinamento de uma equipe própria de TI..</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
onMounted(() => {
  window.addEventListener('scroll', function () {
    const rect = document.getElementById("diferenciais-scroll").getBoundingClientRect();
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      document.title = "Desenvolvimento de Software | OracuLabs"
    }
  })
})

</script>

<style scoped>

img {
  margin-bottom: 10px;
  text-align: center !important;
  max-width: 190px;
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
  box-shadow: 0 .25rem 0.5rem rgba(0, 0, 0, .15) !important;
  transition: all .25s;
  transition-timing-function: ease-in-out;
}

.card:hover p {
  color: black;
}

#produtos-servicos {
  margin-bottom: 0;
  padding-bottom: 0 !important;
  margin-top: -90px;
}

h3 {
  color: #101F40;
  font-weight: 700;
}



  




</style>