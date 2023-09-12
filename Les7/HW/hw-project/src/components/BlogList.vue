<template>
    <div class="blog center">
        <section class="blog_details">

            <BlogInfo
            :news="news"
            :detailedBlog="detailedBlog"
            />
            
            <div class="news_header">
                <h1 class="news_header__title">Articles & News</h1>
            </div>

            <div class="news_box">
                
                <NewsList
                v-for="item in filteredList"
                :news="item"
                @detailes="detailes"
                :key="item.id"
                />
            </div>
        </section>
        
        <TagsFilter
        @filteredTag="filteredTag"
        />
    </div>
</template>

<script>

import BlogInfo from './BlogInfo.vue'
import NewsList from './NewsList.vue'
import TagsFilter from './TagsFilter.vue'

export default {
    name: 'BlogList',

    data() {
        return {
            news: [
                {
                    id: 1,
                    img: 'news1.png',
                    design: 'Kitchen',
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    tag: ['Kitchen', 'Kitchen Planning', ''],
                },
                {
                    id: 2,
                    img: 'news2.png',
                    design: 'Living',
                    title: 'Low Cost Latest Invented Interior Designing Ideas',
                    date: '22 December,2022',
                    tag: ['Bedroom', ''],
                },
                {
                    id: 3,
                    img: 'news3.png',
                    design: 'Interior',
                    title: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                    tag: ['Building', 'Architecture', ''],
                },
                {
                    id: 4,
                    img: 'news4.png',
                    design: 'Kitchen',
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    tag: ['Kitchen', 'Kitchen Planning', ''],
                },
                {
                    id: 5,
                    img: 'news5.png',
                    design: 'Living',
                    title: 'Low Cost Latest Invented Interior Designing Ideas',
                    date: '22 December,2022',
                    tag: ['Bedroom', ''],
                },
                {
                    id: 6,
                    img: 'news6.png',
                    design: 'Interior',
                    title: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                    tag: ['Building', 'Architecture', ''],
                },
            ],
            filterTag: '',
            detailedBlog: 1,
        };
    },

    components: {
        BlogInfo,
        NewsList,
        TagsFilter,
    },

    computed: {
        filteredList() {
            return this.news.filter(item => item.tag.includes(this.filterTag))
        },
    },

    methods: {
        filteredTag(tag) {
            this.filterTag = tag;
        },

        detailes(blog) {
            this.detailedBlog = blog;
        }
    },
};
</script>

<style lang="sass" scoped>
.blog
    display: grid
    gap: 52px
    grid-template-columns: 2fr 1fr
    padding-top: 200px

.news_header
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
.news_box
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 30px
    margin-bottom: 96px
</style>