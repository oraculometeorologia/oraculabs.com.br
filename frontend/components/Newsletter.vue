<template>
    <div class="container d-flex  justify-content-around p-5">
        <div class="heading-container d-flex align-items-center">
            <h4 class="h2">Assine nossa newsletter</h4>
        </div>
        <div class="form-container">
            <form action="" class="d-flex flex-column">
                <input type="text" placeholder="Nome" class="mb-3 p-2">
                <input type="email" placeholder="E-mail" class="p-2">
            </form>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.container {
    background-color: rgb(231, 231, 231);
    border-radius: 10px;
}

.form-container input {
    width: 500px;
    font-size: 20px;
    border: none;
    border-bottom: 1px solid gray;
}


input:focus {
    outline: none;
    box-shadow: none;
}

textarea:focus {
    outline: none;
    box-shadow: none;
}
</style>
