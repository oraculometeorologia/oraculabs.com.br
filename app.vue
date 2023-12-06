<template>
  <div>
    <div id="top"></div>

    <Navbar />

    <Hero />

    <ProdutosCards />

    <OutrosServicos />

    <QuemSomos />

    <Clients />

    <!-- <Carousel /> -->

    <!-- <FaleConosco /> -->

    <!-- <Newsletter /> -->

    <!-- <div>
      <slot />
    </div> -->

    <FixedComponents />

    <FooterApp />

  </div>
</template>

<script setup>
import "bootstrap-icons/font/bootstrap-icons.css";

onMounted(() => {
  document.title = 'OracuLabs';
})
</script>

<style scoped>
#top {
  position: relative;
}

.bg-blue {
  background-color: #90c3ea;
}

.tres-canvas-container {
  width: 500px;
  height: 500px;
}

.hover-animation:hover {
  transition: all .2s ease;
  color: white;
}

.outline {
  outline: 1px solid black;

}
</style>