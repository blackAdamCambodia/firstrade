<template>
    <div @click="toggleFunction" class="  border-b-[1px]">
        <div class="bg-[#f3f9ff] pt-4 ">
            <div class="container mx-auto max-w-3xl px-6">
                <div class="flex justify-between text-[#4d6582]   ">
                    <button class="border-b-2 border-b-transparent pb-2 ">
                        <router-link to="/about">{{ $t('footer.about') }}</router-link>
                    </button>
                    <button class="border-b-2 border-b-[#4d6582] pb-2">
                        <router-link to="/history">{{ $t('footer.history') }}</router-link>
                    </button>
                    <button class="border-b-2 border-b-transparent pb-2">
                        <router-link to="/corporate-responsibility">{{ $t('footer.corporate_responsibility') }}</router-link>
                    </button>
                    <button class="border-b-2 border-b-transparent pb-2">
                        <router-link to="/press">{{ $t('footer.press') }}</router-link>
                    </button>
                </div>
            </div>
        </div>
        <div>
            <section aria-labelledby="history-title bg-[fff]">
                <div class="m-auto text-[#4d6582] text-left max-w-7xl px-8 py-20 lg:px-10 lg:py-20">
                    <h1 id="history-title" class="mb-8 text-4xl text-primary font-bold font-sans text-center">{{ $t('history_page.firstrade_history') }}</h1>
                    <p>{{ $t('history_page.the_remarkable_story_of_firstrade_began') }}</p>
                    <p class="py-4">{{ $t('history_page.firstrade_commitment_to_offer_the_most_for_the_least') }}</p>
                    <p>{{ $t('history_page.many_competitors_have_come_and_gone') }}</p>
                    <p class="pt-4 pb-8">{{ $t('history_page.the_firstrade_team') }}</p>
            </div>
        </section>
    </div>
</div></template>
<script>
import { ref } from 'vue'
export default {
    data() {
        return {

        }
    },
    methods: {
        toggleFunction() {
            this.$emit('toggle-function');
        }
    }
}
</script>
<style scoped></style>