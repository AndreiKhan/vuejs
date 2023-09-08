<template>
    <div class="top">
        <div class="background">
            <div class="background_lines"></div>
        </div>

        <HeaderTitle :title="'Articles & News'" :page="'Home / Blog'" :active="true"/>

        <BlogList></BlogList>
    </div>
</template>

<script>
import BlogList from './BlogList.vue'
import HeaderTitle from './HeaderTitle.vue'

export default {
    name: 'VueJsBlogList',

    data() {
        return {
            
        };
    },

    components: {
        BlogList,
        HeaderTitle,
    },

    methods: {
        
    },
};
</script>

<style lang="sass">
.title
    background-image: url(../assets/banner_photo3.png)
.blog
    display: grid
    gap: 52px
    grid-template-columns: 2fr 1fr
    padding-top: 200px
    
    &_details_description
        &__title
            color: #292F36
            font-family: DM Serif Display
            font-size: 50px
            font-style: normal
            font-weight: 400
            line-height: 125%
            letter-spacing: 1px
            margin-bottom: 21px
        &__titleImg
            border-radius: 50px
            margin-bottom: 46px
        &_info
            display: flex
            justify-content: space-between
            margin-bottom: 48px
            &__date
                color: #4D5053
                font-family: Jost
                font-size: 16px
                font-style: normal
                font-weight: 400
                line-height: 150%
                letter-spacing: 0.16px
                text-transform: capitalize
            &__bread
                color: #4D5053
                font-family: Jost
                font-size: 16px
                font-style: normal
                font-weight: 400
                line-height: 150%
                letter-spacing: 0.16px
                text-transform: capitalize
        &__text
            color: #4D5053
            font-family: Jost
            font-size: 22px
            font-style: normal
            font-weight: 400
            line-height: 150%
            letter-spacing: 0.22px
            margin-bottom: 35px
        &_quote
            display: flex
            flex-direction: column
            align-items: center
            justify-content: center
            height: 267px
            margin-bottom: 27px
            border-radius: 50px
            background: #F4F0EC
            &__text
                color: #CDA274
                text-align: center
                font-family: DM Serif Display
                font-size: 25px
                font-style: italic
                font-weight: 400
                line-height: 125%
                letter-spacing: 0.5px
                width: 351px
        &__subtitle
            color: #292F36
            font-family: DM Serif Display
            font-size: 50px
            font-style: normal
            font-weight: 400
            line-height: 125%
            letter-spacing: 1px
            margin-bottom: 20px
        &__list
            &__item
                display: flex
                gap: 14px
                list-style-type: none
                color: #4D5053
                font-family: Jost
                font-size: 22px
                font-style: normal
                font-weight: 400
                line-height: 150%
                letter-spacing: 0.22px
                margin-bottom: 32px
                width: 735px
                &__number
                    list-style-position: inside
                    list-style-type: decimal
                    color: #CDA274
                    font-family: DM Serif Display
                    font-size: 20px
                    font-style: normal
                    font-weight: 400
                    line-height: 125%
                    letter-spacing: 0.4px
        &__subtitleImg
            border-radius: 50px
            margin-bottom: 35px

    &_tags
        position: sticky
        top: 50px
        height: 200px
        padding-bottom: 250px
        &__title
            color: #292F36
            font-family: DM Serif Display
            font-size: 25px
            font-style: normal
            font-weight: 400
            line-height: 125%
            letter-spacing: 0.5px
            padding-bottom: 24px
        &_filters
            display: flex
            gap: 10px
            flex-wrap: wrap
            &__button
                color: #292F36
                text-align: center
                font-family: Jost
                font-size: 18px
                font-style: normal
                font-weight: 400
                line-height: 125%
                letter-spacing: 0.36px
                padding: 9px 30px
                border-radius: 10px
                background: #F4F0EC
                border: none
                &:hover
                    cursor: pointer
.clicked
    color: #FFF
    background: #292F36
.news_box
    grid-template-columns: repeat(2, 1fr)
    margin-bottom: 96px
</style>