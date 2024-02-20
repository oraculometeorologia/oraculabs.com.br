<template>
  <section aria-label="Oraculabs - Soluções digitais" id="hero" class="text-left">
    <div class="container">
      <div>
        <div class="row ">
          <div class="col-lg-6 col-md-6 col-sm-12 mb-5">
            <h1 id="hero-scroll">Soluções digitais para suas necessidades</h1>
            <p>Criamos sistemas digitais personalizados para atender as necessidades de seu negócio e
              diminuir seus custos e despesas.
            </p>
            <div style="margin-top: 20px;">
              <CtaButton />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 text-right ">
            <img src="../public/images/hero/hero_art.svg"  alt="Oraculabs - Soluções digitais" aria-label="Oraculabs - Soluções digitais"/>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

  
<script setup>

onMounted(() => {
    window.addEventListener('scroll', function () {
        const rect = document.getElementById("hero-scroll").getBoundingClientRect();
        if (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        ) {
            document.title = "Desenvolvimento de Software | OracuLabs"
        }
    })
})

</script>

<style scoped>
.text-right {
  text-align: right;
}

img {
  text-align: right !important;
  margin: 100px 0 0 0;
  width: 65%;
}

#hero {
  background-image: url('/images/banner/bg-hero.jpg');
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  min-height: 550px;
}

p {
  color: white;
  font-size: 24px;
  line-height: 40px;
}


#hero h1 {
  text-align: left;
  font-size: 3.2rem;
  font-family: 'Oxygen', sans-serif;
  padding-top: 80px;
  margin-bottom: 30px;
  color: white;
  font-weight: bolder;
}


@media (max-width: 1000px) {
  #hero {
    min-height: 540px;
  }

  #hero h1 {
    font-size: 2.2rem;
  }

  #hero p {
    font-size: 1.4rem;
    line-height: 2.1rem;
  }

  img {
  text-align: right !important;
  margin: 100px 0 0 0;
  width: 85%;
}

}

@media (max-width: 576px) {

  #hero {
    background-position-x: center;
    min-height: 560px;
  }

  #hero h1 {
    font-size: 2.6rem;
    font-family: 'Oxygen', sans-serif;
    padding-top: 30px;
    padding-bottom: 0px;
    line-height: 3rem;
  }

  #hero p {
    font-size: 1.4rem;
    line-height: 2.1rem;
  }

  .text-right {
    text-align: center;
  }

  img {
    text-align: center !important;
    margin: 0 0 20px 0;
    width: 65%;
  }

}
</style>