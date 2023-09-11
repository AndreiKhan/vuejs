<template>
    <div>
        <HeaderTitle :title="'Our Project'" :page="'Home / Project'" :active="true"/>

        <CategoriesButtons @filteredCategorie="filteredCategorie"/>

        <div class="projects_box center">
            
            <ProjectList
                v-for="item in filteredList"
                :project="item"
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
    </div>
</template>

<script>
    import CategoriesButtons from './CategoriesButtons.vue'
    import HeaderTitle from './HeaderTitle.vue';
    import ProjectList from './ProjectList.vue'

    export default {
        name: 'OurProjects',

        data() {
            return {
                projects: [
                    {
                        id: 1,
                        img: 'project1.png',
                        categorie: 'Bed Room',
                        title: 'Minimal Bedroom',
                        type: 'Decor / Architecture',
                        tag: ['Bed Room'],
                        favorite: true,
                    },
                    {
                        id: 2,
                        img: 'project2.png',
                        categorie: 'Bed Room',
                        title: 'Minimal Bedroom',
                        type: 'Decor / Architecture',
                        tag: ['Bed Room'],
                        favorite: false,
                    },
                    {
                        id: 3,
                        img: 'project3.png',
                        categorie: 'Bed Room',
                        title: 'Minimal Bedroom',
                        type: 'Decor / Architecture',
                        tag: ['Bed Room'],
                        favorite: false,
                    },
                    {
                        id: 4,
                        img: 'project4.png',
                        categorie: 'Bed Room',
                        title: 'Minimal Bedroom',
                        type: 'Decor / Architecture',
                        tag: ['Bed Room'],
                        favorite: true,
                    },
                    {
                        id: 5,
                        img: 'project5.png',
                        categorie: 'Bed Room',
                        title: 'Minimal Bedroom',
                        type: 'Decor / Architecture',
                        tag: ['Bed Room'],
                        favorite: false,
                    },
                    {
                        id: 6,
                        img: 'project6.png',
                        categorie: 'Bed Room',
                        title: 'Minimal Bedroom',
                        type: 'Decor / Architecture',
                        tag: ['Bed Room'],
                        favorite: false,
                    },
                    {
                        id: 7,
                        img: 'project7.png',
                        categorie: 'Bed Room',
                        title: 'Minimal Bedroom',
                        type: 'Decor / Architecture',
                        tag: ['Bed Room'],
                        favorite: false,
                    },
                    {
                        id: 8,
                        img: 'project8.png',
                        categorie: 'Bed Room',
                        title: 'Minimal Bedroom',
                        type: 'Decor / Architecture',
                        tag: ['Bed Room'],
                        favorite: false,
                    },
                    {
                        id: 9,
                        img: 'project2.png',
                        categorie: 'Bathroom',
                        title: 'Bathroom',
                        type: 'Decor / Architecture',
                        tag: ['Bathroom'],
                        favorite: true,
                    },
                    {
                        id: 10,
                        img: 'project3.png',
                        categorie: 'Bathroom',
                        title: 'Bathroom',
                        type: 'Decor / Architecture',
                        tag: ['Bathroom'],
                        favorite: false,
                    },
                    {
                        id: 11,
                        img: 'project2.png',
                        categorie: 'Kitchan',
                        title: 'Kitchan',
                        type: 'Decor / Architecture',
                        tag: ['Kitchan'],
                        favorite: false,
                    },
                    {
                        id: 12,
                        img: 'project6.png',
                        categorie: 'Kitchan',
                        title: 'Kitchan',
                        type: 'Decor / Architecture',
                        tag: ['Kitchan'],
                        favorite: true,
                    },
                    {
                        id: 13,
                        img: 'project7.png',
                        categorie: 'Living Area',
                        title: 'living Area',
                        type: 'Decor / Architecture',
                        tag: ['Living Area'],
                        favorite: true,
                    },
                    {
                        id: 14,
                        img: 'project8.png',
                        categorie: 'Living Area',
                        title: 'Living Area',
                        type: 'Decor / Architecture',
                        tag: ['Living Area'],
                        favorite: true,
                    },
                ],
                filterTag: 'Bed Room',
            };
        },

        components: {
            CategoriesButtons,
            ProjectList,
            HeaderTitle
        },

        computed: {
            filteredList() {
                return this.projects.filter(item => item.tag.includes(this.filterTag))
            }
        },

        methods: {
            filteredCategorie(tag) {
                this.filterTag = tag;
            },
        
            detailes(id) {
                this.detailedBlog = id;
            }
        },
    };
</script>

<style lang="sass" scoped>
.projects_box
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 28px

.news_footer
    display: flex
    justify-content: center
    padding-top: 61px
    padding-bottom: 200px

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