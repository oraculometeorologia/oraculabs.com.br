<template>
  <NuxtLayout>
    <Hero />
    <Diferenciais />
    <ProdutosCards />
    
    <!-- <Clients /> -->
    <!-- <Carousel /> -->
    <!-- <FaleConosco /> -->
    <!-- <Newsletter /> -->

    <Case/>
    <Cases/>
    <FixedComponents />
  </NuxtLayout>
</template>

<script setup>
import "bootstrap-icons/font/bootstrap-icons.css";

onMounted(() => {
  document.title = 'OracuLabs';
})
</script>

<style>
h1{
  color: #101F40;
  border-bottom: 1px solid #101F40;
  margin-bottom: 60px;
  text-align: center;
  padding-bottom: 30px;
  margin: 0 250px 43px 250px !important;
  font-weight: 700;
}

</style>
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