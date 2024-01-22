<template>
  <!-- <div id="footer" class="rr-footer default ">


    <section class="" id="rodapeGoogle">
      <QuemSomos />

    </section>
  </div> -->


  <div class="d-flex fixed-bottom justify-content-between m-3">
    <ButtonVoltarParaTopo />
    <ButtonWhatsapp />
  </div>
</template>

<script setup></script>

<style scoped>
#rodapeGoogle {
  padding-top: 10px;
  color: white;
}

.backgroundAzul {
  z-index: 1;
  background-color: #2D356D !important;
}

#rodapeGoogle a ul li {
  color: white;
}

ul {
  list-style-type: none;
  text-align: left;
  padding-left: 0;
}

a,
a:link,
a:visited {
  color: #FFF;
  text-decoration: none;
  font-size: 16px;
}

@media (max-width: 576px) {
  .m-3 {
    margin: 0rem 3rem 0rem 0.5rem !important;
  }
}

/* */</style>


