<template>
  <div class="container pt-4 pb-5"  id="quem-somos">
    <!-- <div class="container text-center ">
      <h1>Quem somos</h1>
    </div> -->
    <div class="text-center card rounded-4" id="quemSomos-scroll">
      <div class="mb-4" id="txtQuemSomos">
        <NuxtLink to="/#hero"  class="navbar-brand" id="logoQuemSomos">
          <img class="imgQuemSomos" src="/images/logos_oraculabs/logo-oraculabs-white.png"  alt="Oraculabs" aria-label="Oraculabs"/>
        </NuxtLink>
      </div>
      <div class="mb-5" id="txtQuemSomos">
        Somos especialistas em software com background científico. <br/>
        Nossa equipe é formada por  doutores em meteorologia, física, oceanografia e desenvolvedores web. <br/>
        Acreditamos que seu negócio terá grandes
        diferenciais com nossas soluções.
      </div>

      <div>
        <CtaButton />
      </div>
    </div>
  </div>
</template>

<script setup>

onMounted(() => {
  window.addEventListener('scroll', function () {
    const rect = document.getElementById("quemSomos-scroll").getBoundingClientRect();
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      document.title = "Oraculabs | Quem Somos"
    }
  })
})

</script>

<style scoped>

img {
  max-width: 350px;
  padding-bottom: 20px;
}

#txtQuemSomos {
  font-size: 24px;
}

#txtRazaoSocial {
  margin-top: 30px;
  font-size: 20px;
}

#quemSomos-scroll {
  background-image: url('/images/banner/bg-hero.jpg');
  background-size: cover;
  margin-bottom: -70px;
  position: relative;
  z-index: 10;
  color: white;
  padding: 40px;
  font-size: 2rem;
  min-height: 420px;
}

.imgQuemSomos {
  width: 100%;
}

@media (max-width: 576px) {
  p,
  li {
    font-size: 1rem;
    text-align: left;
  }

  #txtQuemSomos {
    font-size: 18px;
    width: 100%;
    height: auto;
  }

  img {
    margin-left: -20px;
  }

}
</style>