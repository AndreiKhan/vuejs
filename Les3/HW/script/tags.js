Vue.component('tags', {
    data() {
        return {
            //Существующие теги
            designs: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', 'Bathroom'],
            // выбранный тег
            tag: '',
        }
    },

    computed: {

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

    // class="blog_tags_filters__button"
    template: `
        <div class="blog_tags_filters">
            <button v-for="tag in designs" 
            @click="filteredTag(tag)" 
            :key="tag.id" 
            class="blog_tags_filters__button" 
            >{{ tag }}</button>
        </div>`,
});