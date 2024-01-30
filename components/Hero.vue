<template>
  <section id="hero" class="text-left">
    <div class="container">

      <div style="max-width: 580px">
        <h1>Soluções digitais para suas necessidades</h1>
        <p>Criamos sistemas digitais personalizados para atender as necessidades de seu negócio e
          diminuir seus custos e despesas.
        </p>
        <div style="margin-top: 20px;">
          <CtaButton />
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
  width: 100%;
  min-height: 550px;
}

p {
  color: white;
  font-size: 24px;
  line-height: 40px;
}

#hero img {
  width: 30%;
  margin-top: 90px;
  margin-right: auto;
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
  font-size: 2.7rem;
}

}

@media (max-width: 576px) {

  #hero {
    background-position-x: center;
    min-height: 530px;
  }

  #hero img {
    margin-top: 80px;
    width: 50%;
  }

  .container{
    margin-left: 12px;
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