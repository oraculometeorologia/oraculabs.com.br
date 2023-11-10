<template>
    <div class="logo-container col row">
        <a href="whatsapp://send?text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND" title="Share on whatsapp" class="link text-decoration-none d-flex justify-content-end">
            <div class="icon-container text-center d-flex align-middle justify-content-center align-items-center">
                <i class="icon bi bi-whatsapp"></i>
            </div>
        </a>
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
    padding: 20px;
}

.icon-container {
    position: relative;
    width: 100px;
    height: 100px;
    margin-right: 20px;
}

.icon {
    position: inherit;
    font-size: 30px;
    /* padding: 10px; */
    padding: 18px;
    padding-left: 24px;
    padding-right: 24px;
    border-radius: 100%;
    background-color: #25D366;
    color: white;
    transition: all .2s ease-in-out;
}

.icon:hover {
    background-color: #128C7E;
}
</style>
