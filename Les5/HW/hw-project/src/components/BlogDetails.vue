<template>
    <div>
        <div class="title">
        </div>

        <BlogList/>
    </div>
</template>

<script>
import BlogList from './BlogList.vue'

export default {
    name: 'BlogDetails',

    components: {
        BlogList,
    },
};
</script>

<style lang="sass" scoped>
.title
    display: flex
    align-items: flex-end
    justify-content: center
    height: 356px
    background-image: url(../assets/banner_photo3.png)
    background-repeat: no-repeat
    background-size: cover
    background-position: 25% 0
</style>