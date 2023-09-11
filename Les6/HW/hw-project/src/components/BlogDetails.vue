<template>
    <div>
        <HeaderTitle :active="false"/>

        <BlogList/>
    </div>
</template>

<script>
import BlogList from './BlogList.vue'
import HeaderTitle from './HeaderTitle.vue'

export default {
    name: 'BlogDetails',

    components: {
        BlogList,
        HeaderTitle,
    },
};
</script>

<style lang="sass" scoped>

</style>