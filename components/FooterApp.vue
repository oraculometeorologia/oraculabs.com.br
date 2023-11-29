<template>
  <footer class="bg-dark text-white py-4">
    <div class="container">
      <!-- <div class="row pb-5">
        <div class="col-3">
          <div class="logo-container pb-4">
            <a @click="scrollToSection('top')" class="link text-decoration-none text-light" style="cursor: pointer">
              <img src="/images/logos_oraculo/logo-oraculo-meteorologia-white.png" alt="" class="logo">
            </a>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos inventore enim, nesciunt itaque est alias!</p>
        </div>

        <div class="col-3">
          <h4 class="pb-3">Nossos Serviços</h4>
          <ul>
            <li class="pb-3">
              <NuxtLink :to="{ hash: '#quem-somos' }" class="nav-link">Sobre nós</NuxtLink>
            </li>
            <li class="pb-3">Nosso trabalho</li>
            <li class="pb-3">Help center</li>
          </ul>
        </div>

        <div class="col-3">
          <h4 class="pb-3">Contato</h4>
          <ul>
            <li class="pb-3">Endereço: <br><address>R. Ten. Ubirajara Monory, 66 - 54 - Jabaquara, São Paulo - SP, 04345-020</address></li>
            <li class="pb-3">Telefone: <br>(11) 96473-7564</li>
            <li class="pb-3">Email: <a href="mailto: contato@oraculo.me" target="_blank" style="color:#FFFFF6;">contato@oraculo.me</a></li>
          </ul>
        </div>

        <div class="col-3">
          <h4 class="pb-3">Nos siga</h4>
          <p>
            <a href="https://www.linkedin.com/company/or%C3%A1culo-meteorologia/" class="icon-link me-3">
              <i class="bi bi-linkedin" />
            </a>
            <a href="https://www.instagram.com/oraculo.me" class="icon-link mx-3">
              <i class="bi bi-instagram" />
            </a>

            <a href="https://www.facebook.com/oraculo.me" class="icon-link mx-3">
              <i class="bi bi-facebook" />
            </a>

            <a href="https://www.youtube.com/@oraculometeorologia8345" class="icon-link mx-3">
              <i class="bi bi-youtube" />
            </a>
          </p>

        </div>
      </div>

      <hr> -->

      <p class="text-center mb-0"><span class="copyright">&copy;</span> <span class="direitos-reservados">Oráculo Meteorologia</span> - 2023</p>
    </div>

  </footer>
</template>

<script setup>
// const scrollToSection = (sectionId) => {
//   const element = document.getElementById(sectionId);
//   if (element) {
//     element.scrollIntoView({ behavior: 'smooth' });
//   }
// }
</script>

<style scoped>
a {
  text-decoration: none;
  width: auto;
  display: inline-block;
}

a:visited {
  color: inherit;
}

a:hover {
  transition: all 0.1s ease;
  color: rgb(53, 107, 126);
}

li {
  list-style: none;
}

ul {
  margin: 0;
  padding: 0;

}

/* .img-container {
    position: relative;
    width: 100%;
    border: 3px dashed white;
} */

img {
  width: 100%;
}

.img-link {
  width: 90%;
}


.direitos-reservados {
  font-weight: 600;
}

.icon-link {
  font-size: 24px;
  color: white;
}
</style>