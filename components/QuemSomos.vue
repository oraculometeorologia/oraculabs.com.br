<template>
  <div class="  pt-4 pb-5 ">
    <div class="container text-center ">
      <h2 class="fs-1 py-4 ">Quem somos</h2>
    </div>
    <div class="container text-left card " id="quemSomos">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <p class="mb-5">Somos especialistas em software com background científico. Nossa equipe é formada por
            doutores em meteorologia, física, oceanografia e desenvolvedores web. Acreditamos que seu negócio terá grandes
            diferenciais com nossas soluções.</p>
          <ul class="text-left list-inline mb-0 mb-md-5">
            <li>Fundação: 2015.</li>
            <li>Razão social: IGAM4 Consultoria Científica e Tecnológica Ltda.</li>
            <li>Localização: São Paulo / SP.</li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-6">
          <form action="" class="d-flex flex-column">
                <input type="text" placeholder="Nome" class="mb-3 p-2">
                <input type="email" placeholder="E-mail" class="mb-3 p-2">
                <input type="text" placeholder="Mensagem" class="mb-3 p-2">
                <button type="button" class="btn btn-primary mt-3 px-5 py-2">FALE CONOSCO</button>
            </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
#quemSomos {
  background-color: #EFBB89;
  margin-bottom: -121px;
  position: relative;
  z-index: 10;
  color: white;
  padding: 40px;
  font-size: 2rem;
}

h2{
  color: #2D356D;
}


@media (max-width: 576px) {

  p,
  li {
    font-size: 1rem;
    text-align: left;
  }
}
</style>