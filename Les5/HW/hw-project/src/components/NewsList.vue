<template>
    <div class="news_box_element">
            <img class="news_box_element__img" :src="require(`@/assets/${news.img}`)" alt="news_photo">
            <a class="news_box_element__link"  href="#">{{ news.design }} Design</a>
            
            <h2 class="news_box_element__title">{{ news.title }}</h2>
            
            <div class="news_box_element_description">
                <p class="news_box_element_description__text">{{ news.date }}</p>
                

                <a @click="detailes(news.id)" class="news_box_element_description__link" href="#"><svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
                    <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
</template>

<script>
export default {
    name: 'VueJsNewsList',
    props: ['news'],

    methods: {
        detailes(blog) {
            this.$emit('detailes', blog)
        }
    },
};
</script>

<style lang="sass">

</style>