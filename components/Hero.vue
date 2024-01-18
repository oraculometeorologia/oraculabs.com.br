<template>
  <section id="hero" class="text-left">
    <div class="container">
      <div class="row">
        <div class="col-sm-6" style="padding-right: 70px;">
          <div class="row">

            <div class="col-sm-12">
              <h1>Soluções digitais para suas necessidades</h1>
            </div>
            <div class="col-sm-12">
              <p>texto em tres linhas texto em tres linhas texto emtexto em tres linhas texto em treslinhas texto em tres linhas texto em tres  linhas texto em tres linhas texto em tres linhas
              </p>
            </div>
            <div class="col-sm-12" style="margin-top: 40px; ">

              <button style="font-size: 24px;     border-radius: 50px !important;" type="button" class="btn btn-primary mt-3 px-5 py-2">Fale Conosco</button>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6">
          <img class="banner" src="/images/banner/hero.webp" />
        </div>
      </div>
    </div>
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
  padding-top: 120px;
  color: white;
  font-weight: bolder;
  margin: 10px 0 10px 10px  !important;
  border-bottom: 0;
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
    font-size: 2rem;
    font-family: 'Oxygen', sans-serif;
    padding-top: 30px;
  }


}
</style>