<template>
    <div class="logo-container col row">
        <NuxtLink href="#" :to="{ hash: '#top' }" class="link text-decoration-none text-light">
            <div class="icon-container text-center align-middle justify-content-center d-flex align-items-center">
                <i class="icon bi bi-chevron-up"></i>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup></script>

<style scoped>
.logo-container {
    position: relative;
}

.link {
    position: relative;
    margin: 0;
    margin-left: 20px;
    padding: 20px;
}

.icon-container {
    position: relative;
    width: 100px;
    height: 100px;
}

.icon {
    position: inherit;
    font-size: 26px;
    padding: 12px;
    padding-left: 18px;
    padding-right: 18px;
    border-radius: 20px;
    background-color:  rgb(43, 128, 147);
    color: rgb(255, 255, 255);
    transition: all .2s ease-in-out;
}

.icon:hover {
    background-color: rgb(110, 188, 206);
    color: rgb(57, 57, 57);
}

</style>