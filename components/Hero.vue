<template>
  <section id="hero" class="text-white text-center">
    <div class="container">
      <img src="/images/logos_oraculo/logo-oraculo-meteorologia-white.png" />
      <h1>Software com background científico</h1>
    </div>
  </section>
</template>

<style scoped>
#hero {
  background-image: url('/images/banner/hero-bg.jpg');
  background-size: cover;
  background-attachment: fixed;
  height: 780px;
}

#hero img {
  width: 700px;
  margin-top: 275px;
  margin-left: auto;
  margin-right: auto;
}

#hero h1 {
  font-size: 2.2rem;
  font-family: 'Oxygen', sans-serif;
  padding-top: 30px;
}

@media (max-width: 576px) {
  #hero {
    background-image: url('/images/banner/hero-bg.jpg');
    background-size: cover;
    background-attachment: fixed;
    height: 710px;
  }

  #hero img {
    width: 350px;
    margin-top: 275px;
  }

  #hero h1 {
    font-size: 1.75rem;
    font-family: 'Oxygen', sans-serif;
    padding-top: 30px;
  }
}
</style>