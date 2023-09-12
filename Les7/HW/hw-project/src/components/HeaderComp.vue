<template>
    <header class="header center">
        <div class="header_left">
            <a class="header_left__link" href="#">
                <img class="header_left__link__logo logo" src="../assets/logo.svg" alt="Logo">
            </a>
        </div>

        <nav class="header_right">
            <a class="header_right__link" href="#">Home</a>
            <a class="header_right__link" href="#">Project</a>
            <a class="header_right__link" href="#">Blog</a>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComp',
    };
</script>

<style lang="sass" scoped>
    .header
        display: flex
        justify-content: space-between
        align-items: center
        padding-top: 53px
        padding-bottom: 57px

        &_right
            display: flex
            justify-content: space-between
            width: 243px

            &__link
                color: #292F36
                text-align: center
                font-family: Jost
                font-size: 20px
                font-style: normal
                font-weight: 400
</style>