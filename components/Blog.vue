<template>
  <section id="blog-scroll" aria-label="Destaques na Mídia" class="py-4 py-md-5 bg-gray">
    <div class="container">
      <div class="row ">

        <div id="services-scroll" class="col-12 mb-3">
          <div class="card h-100 p-4 shadow-sm bg-white flex-column justify-content-center">
            <div class="row ">
              <div class="col-md-12 ">
                <img :src="'/images/blog/' + data.image_thumbnail" height="390px" width="100%" />
              </div>

              <div class="col-md-12 mb-10 pt-2  flex-column p-100 ">
                <span class="category">{{ data.category }}</span>
                <h1 class="mt-2 ">{{ data.title }}</h1>
                <h2 class="mt-2 ">{{ data.subtitle }}</h2>
                <div class="author">by <b>{{ data.author_name }}</b></div>
                <div class="bodyText" v-html="data.body"></div>
                <div class="authorDown">by <b>span</b></div>
              </div>

            </div>

            <div class="row ">
              <div class="col-md-6  p-100 legenda1">Tags:</div>
              <div class="col-md-6  p-100 legenda2">Compartilhe:</div>
            </div>

            <div class="row mb-5 ">
              <div class="col-md-6  p-100 ">
                <span class="tag">Bitcoin</span>
                <span class="tag">Sistema financeiro</span>
              </div>
              <div class="col-md-6   p-100 text-right ">
                <i class="bi bi-whatsapp share"></i>
                <i class="bi bi-twitter-x share"></i>
                <i class="bi bi-instagram share"></i>
                <i class="bi bi-linkedin share"></i>
              </div>
            </div>
            <BlogRecomend/>

          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>

const { $instance } = useNuxtApp();
var data = ref([]);
var recommendPosts = ref([]);


onMounted(() => {
    window.addEventListener('scroll', function () {
        const rect = document.getElementById("blog-scroll").getBoundingClientRect();
        if (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        ) {
            document.title = "Oraculabs | Blog"
        }
    })
})


const getPosts = () => {

  let url = 'content/1';
  $instance.get(url)
    .then(res => {
      data.value = res.data;
    })
    .catch(err => {
      console.log(err);

    })

  let recommend = 'content';
  $instance.get(recommend)
    .then(res => {
      recommendPosts.value = res.data;
    })
    .catch(err => {
      console.log(err);

    })


}


import BlogRecomend from './BlogRecomend.vue';


onMounted(() => {
  getPosts();
})



onBeforeUnmount(() => {

});

//watch(data, () => getPosts());

</script>



<style scoped>
.carousel {
  max-width: 800px;
  margin: auto;
}

.carousel-indicators {
  bottom: -30px;
}

.bg-gray {
  background-color: lightgrey;
}


h3 {
  font-size: 20px;
}

.dataPost {
  text-align: center;
  font-size: 14px;
  color: gray
}

.p-100 {
  padding: 0 150px;
}

.p-100Recommend {
  margin-top: 10px;
  padding: 0 135px;
}

.category {
  background: blueviolet;
  color: white;
  padding: 3px 16px;
  font-weight: bold;
  font-size: 10px;
}

h1 {
  
  font-weight: 700;
  font-size: 54px;
  line-height: 100%;
  padding: 20px 0;
}

h2 {

  font-family: serif;
  font-size: 22px;
  line-height: 140%;
  font-weight: 700;
  margin: 32px 0 64px;
}

.author {
  font-family: serif;
  width: 100%;
  border-bottom: 1px solid #3894db;
  font-size: 15px;

  padding-bottom: 15px;
  margin-bottom: 30px;
}

.authorDown {
  font-family: serif;
  width: 100%;
  border-top: 1px solid #3894db;
  font-size: 15px;

  padding-bottom: 15px;
  margin-bottom: 30px;
}

p {
  font-family: serif;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 1.7rem;
  font-family: "Merriweather", serif;
}

.share {
  font-size: 19px;
  padding: 3px 7px;
  margin: 3px;
  background-color: #101f40;
  color: white;
  text-align-last: right;
}

.tag {
  font-size: 12px;
  padding: 3px 7px;
  margin: 3px;
  background-color: #101f40;
  color: white;
}

.legenda1 {
  font-weight: 800;
  font-size: 14px;
  color: #101f40;
}

.legenda2 {
  font-weight: 800;
  font-size: 14px;
  color: #101f40;
  text-align: right;
}

.opcao {
  font-family: serif;
  background: #3894db;
  color: white;
  padding: 3px 16px;
  font-weight: bold;
  font-size: 10px;
  margin-bottom: 20px;
}

.text-right {
  text-align: right;
}


h5 {
  font-family: serif;
  font-weight: 700;
  font-size: 34px;
  line-height: 100%;
  padding: 20px 0;
}

h6 {
  font-family: serif;
  font-size: 14px;
  line-height: 140%;
  font-weight: 700;
  margin: 32px 0 20px;
}

.imgTopicos {
  height: 250px;
  width: 200px;
}

a {
  color: #000;
  text-decoration: none;
}

.dateMini {
  color: gray;
}

.bodyText {
  font-family: serif;
  font-size: 20px;
  margin-top: 20px;
}

</style>