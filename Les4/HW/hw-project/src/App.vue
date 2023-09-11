<template>
    <div class="top" id="app">
        <div class="background">
            <div class="background_lines"></div>
        </div>

        <!-- <MainPage/> -->
        <!-- <BlogPage/> -->
        <BlogDetails/>
    </div>
</template>

<script>
// import MainPage from './components/MainPage.vue'
// import BlogPage from './components/BlogPage.vue'
import BlogDetails from './components/BlogDetails.vue'

export default {
  name: 'App',
  components: {
    // MainPage,
    // BlogPage,
    BlogDetails,
  }
}
</script>

<style lang="sass">
*
    padding: 0
    margin: 0
    box-sizing: border-box

a
    text-decoration: none

.top
    position: relative

.center
    padding-left: calc(50% - 1200px / 2)
    padding-right: calc(50% - 1200px / 2)

.background
    position: absolute
    display: flex
    justify-content: center
    height: 100%
    width: 1200px
    left: calc(50% - 1200px / 2)
    border-left: 1px solid #E7E7E7
    border-right: 1px solid #E7E7E7
    z-index: -1

    &_lines
        width: 400px
        border-left: 1px solid #E7E7E7
        border-right: 1px solid #E7E7E7
        z-index: -1

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

.footer
    display: flex
    padding-bottom: 134px

    &_main
        padding-right: 101px
        &__text
            color: #4D5053
            font-family: Jost
            font-size: 22px
            font-style: normal
            font-weight: 400
            line-height: 150%
            letter-spacing: 0.22px
            padding-bottom: 31px
            width: 393px

        &_socials
            display: flex
            gap: 54px

    &_pages
        display: flex
        flex-direction: column
        padding-right: 380px

        &__head
            color: #292F36
            font-family: DM Serif Display
            font-size: 25px
            font-style: normal
            font-weight: 400
            line-height: 125%

        &__link
            color: #4D5053
            font-family: Jost
            font-size: 22px
            font-style: normal
            font-weight: 400
            line-height: 300%
            letter-spacing: 0.22px

    &_contacts
        display: flex
        flex-direction: column
        gap: 25px

        &__head
            color: #292F36
            font-family: DM Serif Display
            font-size: 25px
            font-style: normal
            font-weight: 400
            line-height: 125%

        &__text
            color: #4D5053
            font-family: Jost
            font-size: 22px
            font-style: normal
            font-weight: 400
            line-height: 150%
            letter-spacing: 0.22px
            width: 258px
</style>
