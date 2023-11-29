<template>
  <section id="hero" class="text-white text-center">
    <div class="container">
      <img class="w-100" src="/images/logos_oraculo/logo-oraculo-meteorologia-white.png" />
      <h1>Software com background científico</h1>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 700px;
}

#hero {
  background-image: url('/images/banner/hero-bg.jpg');
  background-size: cover;
  background-attachment: fixed;
  height: 800px;
}

#hero img {
  margin-top: 300px;
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