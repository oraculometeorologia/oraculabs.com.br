<template>
  <section id="hero" class="text-left">
    <div class="container">
      <img class="w-100" src="/images/logos_oraculabs/logo-oraculabs-white.png" />
      <h1>Entregando Soluções para suas necessidades</h1>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 590px;
}


.container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
    margin-right: 0  !important;
    margin-left: 30px !important;
}

#hero {
  background-image: url('/images/banner/tecno2.jpg');
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
  font-size: 1.8rem;
  font-family: 'Oxygen', sans-serif;
  padding-top: 30px;
  color: white;
  margin-left: 50px;
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