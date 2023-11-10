<template>
        <div class="container p-5 text-dark text-center border mt-5 mb-5">
            <h3>Fale Conosco!</h3>
    
            <form>
                <div class="row m-2">
                    <input type="text" placeholder="Nome" class="form-control col m-2">
                    <input type="text" placeholder="Sobrenome" class="form-control col m-2">
                </div>
                <div class="row m-2">
                    <input type="email" placeholder="E-mail" class="form-control col m-2">
                </div>
                <div class="row m-2">
                    <input type="text" placeholder="Empresa" class="form-control col m-2">
                    <input type="text" placeholder="Website" class="form-control col m-2">
                </div>
                <div class="row m-2">
                    <textarea name="text" id="" cols="" rows="6" placeholder="Conte-nos..." class="form-control col m-2"></textarea>
                </div>

                <div class="row m-2">
                    <input type="text" placeholder="Como nos conheceu" class="form-control col m-2">
                </div>

                <button type="button" class="btn btn-primary mt-3 px-5 py-2">Enviar</button>
            </form>
        </div>
</template>

<script setup></script>

<style scoped>
.container {
    background-color: rgb(238, 241, 242);
}

input:focus {
    outline: none;
    box-shadow: none;
}

textarea:focus {
    outline: none;
    box-shadow: none;
}

button {
    font-size: 20px;
}

</style>