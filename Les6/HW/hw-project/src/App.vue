<template>
  <div id="app">
    <HeaderComp/>
    <!-- <MainPage/> -->
    <!-- <BlogPage/> -->
    <!-- <BlogDetails/> -->
    <OurProjects/>
    <FooterComp/>
  </div>
</template>

<script>
import FooterComp from './components/FooterComp.vue'
import HeaderComp from './components/HeaderComp.vue'
// import MainPage from './components/MainPage.vue'
// import BlogPage from './components/BlogPage.vue'
// import BlogDetails from './components/BlogDetails.vue'
import OurProjects from './components/OurProjects.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    // MainPage,
    // BlogPage,
    // BlogDetails,
    OurProjects,
    FooterComp,
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

.homeWork
    height: 400px
    background-color: #292F36
    font-size: 30px
    color: #f0f0f0

button
    font-size: 30px

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


.banner

    &_description
        display: flex
        align-items: flex-start
        flex-direction: column
        justify-content: center

        background-image: url(assets/banner_photo1.png)
        background-repeat: no-repeat
        background-size: cover
        background-position: 25% 0
        border-radius: 50px

        height: 758px

        &_info
            display: flex
            width: 472px
            flex-direction: column
            align-items: flex-start
            gap: 21px
            padding-left: 52px

            &__head
                color: #292F36
                font-family: DM Serif Display
                font-size: 65px
                font-style: normal
                font-weight: 400

            &__text
                color: #4D5053
                font-family: Jost
                font-size: 22px
                font-style: normal
                font-weight: 400

            &__startButton
                color: #FFF
                font-family: Jost
                font-size: 18px
                font-weight: 600

                padding: 26px 49px 26px 48px

                border-radius: 18px
                background: #292F36
                box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35)

.main
    margin-top: 96px
    margin-bottom: 96px

    &_header
        display: flex
        flex-direction: column
        text-align: center
        align-items: center
        margin-bottom: 93px

        &__title
            color: #292F36
            text-align: center
            font-family: DM Serif Display
            font-size: 50px
            font-style: normal
            font-weight: 400
            line-height: 125%
            letter-spacing: 1px

        &__text
            color: #4D5053
            text-align: center
            font-family: Jost
            font-size: 22px
            font-style: normal
            font-weight: 400
            line-height: 150%
            letter-spacing: 0.22px
            width: 737px

    &_box
        display: flex
        flex-direction: column
        gap: 56px

        &_line
            display: flex
            justify-content: space-between

            &_product
                display: flex
                flex-direction: column
                gap: 24px
                width: 548px

                .first_product
                    border-top-right-radius: 50px

                .second_product
                    border-top-left-radius: 50px

                .third_product
                    border-bottom-right-radius: 50px

                .fourth_product
                    border-bottom-left-radius: 50px

                &_description
                    display: flex
                    align-items: center
                    justify-content: space-between

                    &_text
                        &__title
                            color: #292F36
                            font-family: DM Serif Display
                            font-size: 25px
                            font-style: normal
                            font-weight: 400
                            line-height: 125%
                            letter-spacing: 0.5px

                        &__text
                            color: #4D5053
                            font-family: Jost
                            font-size: 22px
                            font-style: normal
                            font-weight: 400
                            line-height: 150%
                            letter-spacing: 0.22px

.experience
    display: flex
    justify-content: center
    background-color: #F4F0EC

    height: 457px
    margin-bottom: 96px

    &_numbers
        display: flex
        align-items: center
        gap: 76px

        &_unik:not(:last-child)
            border-right: 1px solid #CDA274

        &_unik
            display: flex
            flex-direction: column
            align-items: center
            padding-right: 54px

            &__number
                color: #CDA274
                font-family: DM Serif Display
                font-size: 85px
                font-style: normal
                font-weight: 400
                line-height: 125%
                letter-spacing: 1.7px

            &__text
                color: #4D5053
                font-family: Jost
                font-size: 22px
                font-style: normal
                font-weight: 400
                line-height: 150%
                letter-spacing: 0.22px

.news
    padding-bottom: 96px

    &_header
        display: flex
        flex-direction: column
        text-align: center
        align-items: center
        padding-bottom: 52px

        &__title
            color: #292F36
            text-align: center
            font-family: DM Serif Display
            font-size: 50px
            font-style: normal
            font-weight: 400
            line-height: 125%
            letter-spacing: 1px

        &__text
            color: #4D5053
            text-align: center
            font-family: Jost
            font-size: 22px
            font-style: normal
            font-weight: 400
            line-height: 150%
            letter-spacing: 0.22px
            width: 811px

    &_box
        display: grid
        grid-template-columns: repeat(3, 1fr)
        gap: 22px
        justify-items: center

        &_element
            position: relative
            padding: 21px

            border-radius: 62px
            border: 1px solid #E7E7E7
            box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25)

            transition: background-color 0.3s

            &:hover
                background-color: #F4F0EC

            &:hover circle
                fill: #FFF

            &__img
                border-radius: 45px 45px 0px 0px

            &__link
                position: absolute
                left: 41px
                top: 249px

                color: #4D5053
                font-family: Jost
                font-size: 16px
                font-style: normal
                font-weight: 400
                line-height: 150%
                letter-spacing: 0.16px
                text-transform: capitalize

                border-radius: 8px 8px 8px 0px
                background: #FFF
                padding: 10px

                transition: background-color 0.3s
                &:hover
                    background-color: #F4F0EC

            &__title
                color: #292F36
                font-family: DM Serif Display
                font-size: 25px
                font-style: normal
                font-weight: 400
                line-height: 125%
                letter-spacing: 0.5px
                padding-top: 21px
                padding-bottom: 30px

            &_description
                display: flex
                justify-content: space-between
                align-items: center

                &__text
                    color: #4D5053
                    font-family: Jost
                    font-size: 16px
                    font-style: normal
                    font-weight: 400
                    line-height: 150%
                    letter-spacing: 0.16px
                    text-transform: capitalize

                circle
                    transition: fill 0.3s
</style>
