<template>
    <main class="blog center">
            <section class="blog_details">
                <BlogInfo
                :news="news"
                ></BlogInfo>

                
                <div class="news_header">
                    <h1 class="news_header__title">Articles & News</h1>
                </div>

                <div class="news_box">
                    <NewsList
                    v-for="item in filteredList"
                    :news="item"
                    @detailes="detailes"
                    :key="item.id"
                    ></NewsList>
                </div>
            </section>

            <div class="blog_tags">
                <h1 class="blog_tags__title">Tags</h1>

                <TagsFilter
                @filteredTag="filteredTag"
                ></TagsFilter>
            </div>
    </main>
</template>

<script>

import BlogInfo from './BlogInfo.vue'
import NewsList from './NewsList.vue'
import TagsFilter from './TagsFilter.vue'

export default {
    name: 'VueJsBlogList',

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
        }
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

<style lang="sass">

</style>