<template>
  <footer class="text-white pt-5 bg-dark-blue-1">
    <div class="container">


      <div class="row mt-3 ">
        <!-- <div class="col-3">
          <div class="logo-container pb-4">
            <a @click="$scrollTo('top')" class="link text-decoration-none text-light" style="cursor: pointer">
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
        </div> -->
        <div class="col-lg-1 col-sm-12 col-md-2 alignDinamic">
          <img src="/images/icon/fundacao.png"  alt="Fundação" aria-label="Fundação">
        </div>

        <div class="col-lg-7 col-sm-12 col-md-7 alignDinamic  ">
          <ul>
            <li><b>UMA EMPRESA DO GRUPO:</b> </li>
            <li>IGAM4 Consultoria Científica e Tecnológica Ltda</li>
            <li>São Paulo / SP</li>
          </ul>
        </div>


        <div class="col-lg-4 col-sm-12 col-md-3 mt-3">
          <ul>
            <li class="pb-3 alignDinamicPolitic ">
              <NuxtLink to="/politica-de-privacidade">Política de privacidade</NuxtLink>
            </li>

            <li class="pb-3 alignDinamicTermos ">
              <NuxtLink to="/termos-de-uso">Termos de uso</NuxtLink>
            </li>

          </ul>
        </div>

        <!-- <div class="col-3">
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

        </div> -->
      </div>

      <!-- <div class="row pb-5">
        <div class="col-3">
          <div class="logo-container pb-4">
            <a @click="$scrollTo('top')" class="link text-decoration-none text-light" style="cursor: pointer">
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
      <hr>
      <div class="row ">
        <div class="col-12 ">
          <p class="text-center"><span class="copyright">&copy;</span> 
            <span class="direitos-reservados">OracuLabs</span> - 2024</p>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>

.alignDinamicTermos{
  text-align: right;
}

.alignDinamic{
  text-align: left;
}

.alignDinamicPolitic{
  text-align: right;
}

a {
  text-decoration: none;
  width: auto;
  display: inline-block;
  color: white;
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
  margin-top: 4px;
}

ul {
  margin: 0;
  padding: 0;
  font-size: 14px;

}

img {
  width: 80px;
}


.direitos-reservados {
  font-weight: 600;
}

@media only screen and (max-width: 600px) {
  .mt-5 {
    margin-top: 0 !important;
  }

  .alignDinamic{
  text-align: center;
}

.alignDinamicPolitic{
  text-align: center;
}

.alignDinamicTermos{
  text-align: center;
}

}
</style>