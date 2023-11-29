<template>
  <a href="whatsapp://send?text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND" title="Share on whatsapp"
    class="btn rounded-circle d-inline-block">
    <i class="bi bi-whatsapp"></i>
  </a>
</template>

<script setup></script>

<style scoped>
a {
  background-color: #25D366;
  color: white;
  height: 60px;
  width: 60px;
}

a:hover {
  color: white;
  background-color: #128C7E;
}

i {
  font-size: 30px;
}
</style>
