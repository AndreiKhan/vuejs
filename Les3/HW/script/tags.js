Vue.component('tags', {
    data() {
        return {
            designs: [
                {
                    tag: 'Kitchen',
                    isActive: false,
                },
                {
                    tag: 'Bedroom',
                    isActive: false,
                },
                {
                    tag: 'Building',
                    isActive: false,
                },
                {
                    tag: 'Architecture',
                    isActive: false,
                },
                {
                    tag: 'Kitchen Planning',
                    isActive: false,
                },
                {
                    tag: 'Bathroom',
                    isActive: false,
                },
            ],
            tag: '',
        }
    },

    methods: {
        filteredTag(design) {
            if(this.tag === design.tag) {
                this.$emit('filteredTag', '');
                this.tag = '';

            } else {
                this.$emit('filteredTag', design.tag);
                this.tag = design.tag;
            }
            
            this.designs.forEach(tag => {
                if (tag.tag === this.tag) {
                    tag.isActive = !tag.isActive
                } else {
                    tag.isActive = false
                }
            });
        },
    },

    template: `
        <div class="blog_tags">
            <h1 class="blog_tags__title">Tags</h1>

            <div class="blog_tags_filters">
                <button v-for="design in designs" 
                @click="filteredTag(design)" 
                class="blog_tags_filters__button" 
                :class="{'clicked': design.isActive}"
                >{{ design.tag }}</button>
            </div>
        </div>`,
});