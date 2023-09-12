<template>
    <div class="filter center">
        <div class="categories">
            
            <button v-for="cater in categories" 
                @click="filteredCategorie(cater)" 
                class="categories__button" 
                :class="{'clicked': cater.isActive}"
                :key="cater.id"
            >{{ cater.tag }}</button>

        </div>
    </div>
</template>

<script>
export default {
    name: 'CategoriesButtons',

    data() {
        return {
            categories: [
                {
                    tag: 'Bathroom',
                    isActive: false,
                },
                {
                    tag: 'Bed Room',
                    isActive: true,
                },
                {
                    tag: 'Kitchan',
                    isActive: false,
                },
                {
                    tag: 'Living Area',
                    isActive: false,
                },
            ],
            tag: 'Bed Room',
        };
    },

    methods: {
        filteredCategorie(cater) {
            this.$emit('filteredCategorie', cater.tag);
            this.tag = cater.tag;
            cater.isActive = true;
            
            this.categories.forEach(tag => {
                if (tag.tag !== this.tag) {
                    tag.isActive = false;
                }
            });
        },
    },
};
</script>

<style lang="sass" scoped>
    .filter
        display: flex
        justify-content: center
        padding-top: 200px
        padding-bottom: 61px
    .categories
        border: 1px solid #CDA274
        border-radius: 21px

        &__button
            padding: 26px 66px
            border: 0
            border-radius: 18px
            background: none

            color: #292F36
            text-align: center
            font-family: Jost
            font-size: 18px
            font-style: normal
            font-weight: 600
            line-height: 125%
            letter-spacing: 0.36px
            transition: all 0.3s

    .clicked
        color: #FFF
        background: #CDA274
</style>