<template>
  <div class="  pt-4 pb-5 ">
    <!-- <div class="container text-center ">
      <h1>Quem somos</h1>
    </div> -->
    <div class="container text-center card " id="quemSomos">
      <div class="row">
        <div class="col-sm-12 col-md-12" id="txtQuemSomos">
          <NuxtLink @click="$scrollTo('top')" class="navbar-brand" id="logo">
            <img src="/images/logos_oraculabs/logo-oraculabs-white.png" />
          </NuxtLink>
        </div>
        <div class="col-sm-12 col-md-12" id="txtQuemSomos">
          Somos especialistas em software com background científico. <br/>
          Nossa equipe é formada por  doutores em meteorologia, física, oceanografia e desenvolvedores web. <br/>
          Acreditamos que seu negócio terá grandes
          diferenciais com nossas soluções.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>

img {
  width: 30%;
  padding-bottom: 20px;
}

#txtQuemSomos {
  font-size: 24px;
}

#txtRazaoSocial {
  margin-top: 30px;
  font-size: 20px;
}

#quemSomos {
  background-image: url('/images/banner/bg-hero.jpg');
  margin-bottom: -70px;
  position: relative;
  z-index: 10;
  color: white;
  padding: 40px;
  font-size: 2rem;
  min-height: 420px;
}

@media (max-width: 576px) {

  p,
  li {
    font-size: 1rem;
    text-align: left;
  }
}
</style>