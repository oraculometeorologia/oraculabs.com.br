<template>
  <section id="hero" class="text-left">
    <div class="container">

      <div style="max-width: 580px">
        <h1>Soluções digitais para suas necessidades</h1>
        <p>Criamos sistemas digitais personalizados para atender as necessidades de seu negócio e 
          diminuir seus custos e despesas
        </p>
        <div style="margin-top: 40px;">
          <CtaButton />
        </div>
      </div>
    </div>
    <!-- <div class="col-lg-6 col-sm-6">
      <img class="banner" src="/images/banner/hero.webp" />
    </div> -->
  </section>
</template>

<style scoped>
#hero {
  background-image: url('/images/banner/bg-hero.jpg');
  background-size: cover;
  background-attachment: fixed;
  height: 75vh;
  width: 100vw;
}
.banner{
  width: 650px !important;
}
p {
  color: white;
  font-size: 24px;
  line-height: 40px;
}

#hero img {
  width: 30%;
  margin-top: 120px;
  margin-right: auto;
  padding-right: 14px;
}

#hero h1 {
  text-align: left;
  font-size: 3.2rem;
  font-family: 'Oxygen', sans-serif;
  padding-top: 130px;
  margin-bottom: 30px;
  color: white;
  font-weight: bolder;
}

@media (max-width: 576px) {
  #hero {
    background-image: url('/images/banner/hero-bg.jpg');
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    width: 100vw;
  }

  #hero img {
    margin-top: 80px;
    width: 50%;
  }

  .btn-primary {
    padding: 10px;
    margin: 20px;
    font-size: 24px !important;
  }

  #hero h1 {
    font-size: 2.6rem;
    font-family: 'Oxygen', sans-serif;
    padding-top: 70px;
    padding-bottom: 10px;
    line-height: 3rem;
  }

  #hero p {
    font-size: 1.4rem;
    line-height: 2.1rem;
  }


}
</style>