<template>
    <section class="text-dark px-5 pb-5 text-center" id="hero">
      <div class="container">
        <div>
          <img id="hero-logo" src="/images/logos_oraculo/logo-oraculo-meteorologia-white.png" />
          <h1>Software com background científico</h1>
        </div>
      </div>
    </section>
</template>

<style scoped>
#hero {
  background-image: url('/images/banner/hero-bg.jpg');
  background-size: cover;
  background-attachment: fixed;
  height: 610px;

}

#hero-logo {
  width: 700px;
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
}

#hero h1 {
  color: white;
  font-size: 2.2rem;
  font-family: 'Oxygen', sans-serif;
  padding-top: 30px;
}
</style>