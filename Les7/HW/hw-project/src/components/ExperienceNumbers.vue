<template>
    <div class="experience center">
        <div class="experience_numbers">
            <div class="experience_numbers_unik">
                <h1 class="experience_numbers_unik__number">12</h1>
                <p class="experience_numbers_unik__text">Years Of Experiance</p>
            </div>

            <div class="experience_numbers_unik">
                <h1 class="experience_numbers_unik__number">85</h1>
                <p class="experience_numbers_unik__text">Success Project</p>
            </div>

            <div class="experience_numbers_unik">
                <h1 class="experience_numbers_unik__number">15</h1>
                <p class="experience_numbers_unik__text">Active Project</p>
            </div>

            <div class="experience_numbers_unik">
                <h1 class="experience_numbers_unik__number">95</h1>
                <p class="experience_numbers_unik__text">Happy CUstomers</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExperienceNumbers',

    data() {
        return {
            Numbers: [
                {
                    title: 'Years Of Experience',
                    number: 12,
                },
                {
                    title: 'Success Project',
                    number: 85,
                },
                {
                    title: 'Active Project',
                    number: 15,
                },
                {
                    title: 'Heppy Customers',
                    number: 95,
                },
            ],
        };
    },
};
</script>

<style lang="sass" scoped>
.experience
    display: flex
    justify-content: center
    background-color: #F4F0EC

    height: 457px
    margin-bottom: 96px

    &_numbers
        display: flex
        align-items: center
        gap: 76px

        &_unik:not(:last-child)
            border-right: 1px solid #CDA274

        &_unik
            display: flex
            flex-direction: column
            align-items: center
            padding-right: 54px

            &__number
                color: #CDA274
                font-family: DM Serif Display
                font-size: 85px
                font-style: normal
                font-weight: 400
                line-height: 125%
                letter-spacing: 1.7px

            &__text
                color: #4D5053
                font-family: Jost
                font-size: 22px
                font-style: normal
                font-weight: 400
                line-height: 150%
                letter-spacing: 0.22px
</style>