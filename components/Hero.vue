<template>
  <section id="hero" class="text-center">
    <div class="container">
      <h1>Soluções digitais para suas necessidades</h1>
    </div>
  </section>
</template>

<style scoped>
#hero {
  background-image: url('/images/banner/bg-hero.jpg');
  background-size: contain;
  background-attachment: fixed;
  height: 500px;
}

#hero img {
  margin-top: 100px;
  margin-left: 30px;
  margin-right: auto;
  padding-left: 14px;
  padding-right: 14px;
}

#hero h1 {
  font-size: 3rem !important;
  font-family: 'Oxygen', sans-serif;
  padding-top: 210px;
  color: white;
  font-weight: bolder;
  margin: 0!important;
  border-bottom: 0;
}

@media (max-width: 576px) {
  #hero {
    background-image: url('/images/banner/hero-bg.jpg');
    background-size: cover;
    background-attachment: fixed;
    height: 550px;
  }

  #hero img {
    margin-top: 220px;
  }

  #hero h1 {
    font-size: 1.5rem;
    font-family: 'Oxygen', sans-serif;
    padding-top: 30px;
  }


}
</style>