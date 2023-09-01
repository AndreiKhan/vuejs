<template>
    <div class="blog_tags_filters">
        <button v-for="tag in designs" 
        @click="filteredTag(tag)" 
        :key="tag.id" 
        class="blog_tags_filters__button" 
        >{{ tag }}</button>
    </div>
</template>

<script>
export default {
    name: 'VueJsTagsFilter',

    data() {
        return {
            //Существующие теги
            designs: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', 'Bathroom'],
            // выбранный тег
            tag: '',
        };
    },

    methods: {
        filteredTag(tag) {
            // если выбран тот же тег сбрасываем тег и показываем все блоги
            if(this.tag === tag) {
                this.$emit('filteredTag', '')
            } else {
                this.$emit('filteredTag', tag)
            }
            this.tag = tag;
        },
    },
};
</script>

<style lang="sass">

</style>