<template>
    <div>
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

        <div class="title">
            <div class="title_name">
                <h1 class="title_name__head">Articles & News</h1>
                <p class="title_name__text">Home / Blog</p>
            </div>
        </div>

        <section class="latestPost center">
            <h1 class="latestPost__title">Latest Post</h1>

            <div class="latestPost_description">
                <img class="latestPost_description__img" src="../assets/latestPost.png" alt="latest_post_img">
                <div class="latestPost_description_text">
                    <p class="latestPost_description_text__head">Low Cost Latest Invented Interior Designing Ideas</p>
                    <p class="latestPost_description_text__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p>
                    <p class="latestPost_description_text__text">Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>

                    <div class="latestPost_description_text_info">
                        <p class="latestPost_description_text_info__date">26 December,2022</p>
                        <a class="latestPost_description_text_info__link" href="#"><svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
                            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="news center">
            <div class="news_header">
                <h1 class="news_header__title">Articles & News</h1>
            </div>

            <div class="news_box">
                
                <NewsList
                v-for="item in news"
                :news="item"
                :key="item.id"
                />
            </div>

            <footer class="news_footer">
                <div class="news_footer_pages">
                    <a href="#" class="news_footer_pages__link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
                          </svg>

                        <span class="news_footer_pages__link__page">01</span>
                    </a>
                    <a href="#" class="news_footer_pages__link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
                          </svg>
                          <span class="news_footer_pages__link__page">02</span>
                    </a>
                    <a href="#" class="news_footer_pages__link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
                          </svg>
                          <span class="news_footer_pages__link__page">03</span>
                    </a>
                    <a href="#" class="news_footer_pages__link nextPage">
                        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
                            <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                    </a>
                </div>
            </footer>
        </section>

        <footer class="footer center">
            <div class="footer_main">
                <a class="footer_main__link" href="#">
                    <img class="footer_main__link__logo logo" src="../assets/logo.svg" alt="Logo">
                </a>

                <p class="footer_main__text">It is a long established fact that a reader will be distracted lookings.</p>

                <div class="footer_main_socials">
                    <a class="footer_main_socials__twitter" href="#"><svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z" fill="#292F36"/>
                        </svg>
                    </a>

                    <a class="footer_main_socials__instagram" href="#"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297 4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375 7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109 9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922 9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188 13.1055 10.9023V16H16.3398Z" fill="#292F36"/>
                        </svg>
                    </a>
                </div>
            </div>

            <div class="footer_pages">
                <h1 class="footer_pages__head">Pages</h1>
                <a class="footer_pages__link" href="#">Home</a>
                <a class="footer_pages__link" href="#">Project</a>
                <a class="footer_pages__link" href="#">Blog</a>
            </div>

            <div class="footer_contacts">
                <h1 class="footer_contacts__head">Contact</h1>
                <p class="footer_contacts__text">55 East Birchwood Ave. Brooklyn, New York 11201</p>
                <p class="footer_contacts__text">contact@interno.com</p>
                <p class="footer_contacts__text">(123) 456 - 7890</p>
            </div>
        </footer>
    </div>
</template>

<script>
import NewsList from './NewsList.vue';

export default {
    name: 'BlogPage',

    data() {
        return {
            news: [
                {
                    img: 'news1.png',
                    design: 'Kitchan Design',
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                },
                {
                    img: 'news2.png',
                    design: 'Living Design',
                    title: 'Low Cost Latest Invented Interior Designing Ideas',
                    date: '22 December,2022',
                },
                {
                    img: 'news3.png',
                    design: 'Interior Design',
                    title: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                },
                {
                    img: 'news4.png',
                    design: 'Kitchan Design',
                    title: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022',
                },
                {
                    img: 'news5.png',
                    design: 'Living Design',
                    title: 'Low Cost Latest Invented Interior Designing Ideas',
                    date: '22 December,2022',
                },
                {
                    img: 'news6.png',
                    design: 'Interior Design',
                    title: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022',
                },
            ],
        };
    },

    components: { 
        NewsList, 
    }
};
</script>

<style lang="sass" scoped>
.title
    display: flex
    align-items: flex-end
    justify-content: center
    height: 356px
    background-image: url(../assets/banner_photo2.png)
    background-repeat: no-repeat
    background-size: cover
    background-position: 25% 0

    &_name
        display: flex
        flex-direction: column
        align-items: center
        padding: 41px 78px
        border-radius: 37px 37px 0px 0px
        background-color: #FFF

        &__head
            color: #292F36
            font-family: DM Serif Display
            font-size: 50px
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

.latestPost
    padding-top: 200px

    &__title
        color: #292F36
        font-family: DM Serif Display
        font-size: 50px
        font-style: normal
        font-weight: 400
        line-height: 125%
        letter-spacing: 1px
        padding-bottom: 27px

    &_description
        display: flex
        gap: 65px
        padding: 22px
        margin-bottom: 150px
        border-radius: 62px
        border: 1px solid #E7E7E7
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25)

        &__img
            border-radius: 50px

        &_text
            display: flex
            flex-direction: column
            justify-content: center
            width: 469px

            &__head
                color: #292F36
                font-family: DM Serif Display
                font-size: 25px
                font-style: normal
                font-weight: 400
                line-height: 125%
                letter-spacing: 0.5px
                padding-bottom: 22px

            &__text
                color: #4D5053
                font-family: Jost
                font-size: 22px
                font-style: normal
                font-weight: 400
                line-height: 150%
                letter-spacing: 0.22px
                padding-bottom: 41px

            &_info
                display: flex
                justify-content: space-between
                align-items: center

                &__date
                    color: #4D5053
                    font-family: Jost
                    font-size: 16px
                    font-style: normal
                    font-weight: 400
                    line-height: 150%
                    letter-spacing: 0.16px
                    text-transform: capitalize

.news
    padding-bottom: 200px

    &_header
        align-items: flex-start
        padding-bottom: 30px

        &__title
            color: #292F36
            font-family: DM Serif Display
            font-size: 50px
            font-style: normal
            font-weight: 400
            line-height: 125%
            letter-spacing: 1px

    &_box
        display: grid
        grid-template-columns: repeat(3, 1fr)
        gap: 22px
        justify-items: center

    &_footer
        display: flex
        justify-content: center
        padding-top: 51px

        &_pages
            display: flex
            gap: 20px

            &__link
                position: relative

                &__page
                    position: absolute
                    left: 17px
                    top: 15px

                    color: #4D5053
                    font-family: Jost
                    font-size: 16px
                    font-style: normal
                    font-weight: 500
                    line-height: 150%
                    text-transform: capitalize

</style>