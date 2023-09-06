Vue.component('blog-list', {
    data() {
        return {
            news: [
                {
                    id: 1,
                    img: 'img/news1.png',
                    design: 'Kitchen',
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    tag: ['Kitchen', 'Kitchen Planning', ''],
                },
                {
                    id: 2,
                    img: 'img/news2.png',
                    design: 'Living',
                    title: 'Low Cost Latest Invented Interior Designing Ideas',
                    date: '22 December,2022',
                    tag: ['Bedroom', ''],
                },
                {
                    id: 3,
                    img: 'img/news3.png',
                    design: 'Interior',
                    title: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                    tag: ['Building', 'Architecture', ''],
                },
                {
                    id: 4,
                    img: 'img/news4.png',
                    design: 'Kitchen',
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                    tag: ['Kitchen', 'Kitchen Planning', ''],
                },
                {
                    id: 5,
                    img: 'img/news5.png',
                    design: 'Living',
                    title: 'Low Cost Latest Invented Interior Designing Ideas',
                    date: '22 December,2022',
                    tag: ['Bedroom', ''],
                },
                {
                    id: 6,
                    img: 'img/news6.png',
                    design: 'Interior',
                    title: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                    tag: ['Building', 'Architecture', ''],
                },
            ],
            filterTag: '',
            detailedBlog: 1,
        }
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

        detailes(id) {
            this.detailedBlog = id;
        }
    },

    template: `
        <main class="blog center">
            <section class="blog_details">

                <slot name="blogDetails">
                    <blog-details
                        :news="news"
                        :detailedBlog="detailedBlog">
                    </blog-details>
                </slot>
    
                <div class="news_box">

                    <slot name="blog">
                        <blog
                            v-for="item in filteredList"
                            :news="item"
                            @detailes="detailes"
                            :key="item.id"
                        ></blog>
                    </slot>
                </div>
            </section>

            <slot name="tags">
                <tags
                    @filteredTag="filteredTag"
                ></tags>
            </slot>
        </main>`,
});