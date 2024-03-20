<template>

    <div class="row ">

        <div id="services-scroll" class="col-12 mb-3">


            <div class="row p-100Recommend ">
                <div class="col-md-12 mb-3"><span class="recommend">Você também pode gostar de:</span></div>
            </div>

            <div v-for="value in recommendPosts" class="row p-100Recommend ">
                <div class="col-md-12 ">
                    <div class="card h-100 p-4 shadow-sm">
                        <NuxtLink to="/#quem-somos">
                            <div class="row ">
                                <div class="col-lg-9">
                                    <span class="category">{{ value.category }} </span>
                                    <h5 class="mt-2 ">{{ value.title }} </h5>
                                    <h6 class="mt-2 ">{{ value.subtitle }}</h6>
                                    <div class="dateMini">{{ value.updated_at }}</div>
                                </div>
                                <div class="col-lg-3 text-right">
                                    <img :src="'/images/blog/' + value.image_thumbnail" class="imgTopicos" />
                                </div>
                            </div>
                        </NuxtLink>

                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script setup>
const { $instance } = useNuxtApp();

var recommendPosts = ref([]);



const getRecommend = () => {

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



onMounted(() => {
    getRecommend();
})



</script>



<style scoped>
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



.recommend {
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
</style>