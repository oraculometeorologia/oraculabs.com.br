<template>
    <section class="py-4 " id="produtos">
        <div class="container text-center">
            <h1 class="mt-5">Acontece...</h1>
            <hr class="hr-title">


            <div class="row ">


                <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div class="card h-100  shadow-sm bg-purple-gradient flex-column justify-content-center">
                        <div class="row ">
                            <div>
                                <img src="/images/blog/blog1.jpg" />
                            </div>
                            <div>
                                <h4>Organize seus dados</h4>
                                <p class="mt-3">Centralize seus dados com segurança e fácil acesso para extrair informações
                                    relevante
                                    Centralize seus dados com segurança e fácil acesso para extrair informações relevante
                                </p>
                            </div>
                            <span class="leiamais">Leia mais...</span>
                        </div>
                    </div>
                </div>


                <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div class="card h-100  shadow-sm bg-purple-gradient flex-column justify-content-center">
                        <div class="row ">
                            <div>
                                <img src="/images/blog/blog2.jpg" />
                            </div>
                            <div>
                                <h4>Organize seus dados</h4>
                                <p class="mt-3">Centralize seus dados com segurança e fácil acesso para extrair informações
                                    relevante
                                    Centralize seus dados com segurança e fácil acesso para extrair informações relevante
                                </p>
                            </div>
                            <span class="leiamais">Leia mais...</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div class="card h-100  shadow-sm bg-purple-gradient flex-column justify-content-center">
                        <div class="row ">
                            <div>
                                <img src="/images/blog/blog3.jpeg" />
                            </div>
                            <div>
                                <h4>Organize seus dados</h4>
                                <p class="mt-3">Centralize seus dados com segurança e fácil acesso para extrair informações
                                    relevante
                                    Centralize seus dados com segurança e fácil acesso para extrair informações relevante
                                </p>
                            </div>
                            <span class="leiamais">Leia mais...</span>
                        </div>
                    </div>
                </div>




            </div>


        </div>
    </section>
</template>

<script setup></script>

<style scoped>
section{
    background-color: burlywood;
}
.card {
    transition: all .25s;
    transition-timing-function: ease-in-out;
}

.card:hover {
    background-color: rgba(0, 0, 0, .03);
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
    transition: all .25s;
    transition-timing-function: ease-in-out;

}

h4 {
    color: #101F40;
    font-size: 1rem;
    font-weight: 700;
}

img {
    width: inherit;
    height: 180px;
    border-radius: 5px 5px 0 0;
    margin-bottom: 10px;
}

p{
    padding: 0 10px;
}
.leiamais {
    text-align: right;
    font-size: 12px;
    color: brown;
    padding: 0 30px 10px 0;
}
</style>