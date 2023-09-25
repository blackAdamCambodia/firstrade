<template>
    <div @click="toggleFunction">
        <div  class="bg-[#f3f9ff] pt-20">
            <div
                class="container px-6 flex items-center gap-8 justify-between py-4 sm:max-w-none md:max-w-none lg:max-w-7xl lg:py-5 mx-auto">
                <div class="flex flex-col gap-4 justify-center w-full items-center pb-6 ">
                    <img src="/images/icon_chevron_logo.webp" alt="">
                    <div class="text-primary text-4xl font-sans font-bold ">
                        <h2>{{ $t('about_page.our_mission') }}</h2>
                    </div>
                    <div class="text-lg text-secondary">
                        <p>{{ $t('about_page.firstrades_mission_is_to_empower_its_customers') }}</p>
                        <p class="py-4">{{ $t('about_page.at_firstrade_we_stand_by_our_core') }}</p>
                        <p class="text-primary">{{ $t('about_page.commission_free_investing_and_an_ongoing') }}</p>
                    </div>

                </div>
            </div>
            <div class="container mx-auto max-w-3xl px-6">
                <div class="flex justify-between text-[#4d6582]   "> 
                    <button class="border-b-2 border-b-[#4d6582] pb-2 ">
                        <router-link to="/about">{{ $t('footer.about') }}</router-link>
                    </button>
                    <button class="border-b-2 border-b-transparent pb-2">
                        <router-link to="/history">{{ $t('footer.history') }}</router-link>
                    </button>
                    <button  class="border-b-2 border-b-transparent pb-2">
                        <router-link to="/corporate-responsibility">{{ $t('footer.corporate_responsibility') }}</router-link>
                    </button>
                    <button  class="border-b-2 border-b-transparent pb-2">
                        <router-link to="/press">{{ $t('footer.press') }}</router-link>
                    </button>
                </div>        
            </div>
        </div>    
        <div class="container mx-auto max-w-7xl">
            <section id="about" aria-labelledby="details-title">
                        <div class="m-auto  px-8 py-20 lg:px-10 lg:py-20 text-[#4d6582]">
                            <div>
                                <h2 id="details-title" class="text-center font-bold py-4 text-2xl">{{ $t('about_page.proudly_serving_our_customers_since') }}
                                </h2>
                                <p class="text-left text-md">{{ $t('about_page.firstrade_is_a_leading_online_brokerage_firm_offering_a_full_line_of_investment') }}</p>
                                <p class="text-left text-md py-4">{{ $t('about_page.combining_proprietary_trading_technology') }}</p>
                                <div class="md:grid md:grid-cols-2 md:gap-4 text-left">
                                    <div>
                                        <h3 class="mb-4 font-sans text-xl font-semibold">{{ $t('about_page.what_we_do') }}</h3>
                                        <p>{{ $t('about_page.firstrade_provides_online_and_mobile_trading') }}</p>
                                    </div>
                                    <div>
                                        <h3 class="mb-4 font-sans text-xl font-semibold">{{ $t('about_page.our_commitment') }}</h3>
                                        <p>{{ $t('about_page.our_commitment_as_an_online_brokerage_firm') }}</p>
                                    </div>
                                <div>
                                    <h3 class="mb-4 font-sans text-xl font-semibold">{{ $t('about_page.accolades') }}</h3>
                                    <p>{{ $t('about_page.over_the_years_major_industry_publications') }}</p>
                                </div>
                                <div class="mb-4">
                                    <div class="relative mx-auto text-center">
                                        <img src="/images/hero-slider-one-left.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="my-8 border-b-2 border-grayish-blue"></div>
                        <div>
                            <h2 class="mb-4 text-center font-sans text-base font-bold">{{ $t('about_page.more_information') }}</h2>
                            <ul
                                class="m-0 flex list-none flex-col md:gap-4 text-center md:m-auto md:max-w-md md:flex-row md:justify-center md:gap-0">
                                <li><a href="/legal/business-continuity">{{ $t('footer.privacy_policy') }}</a></li>
                                <li><a href="/legal/privacy">{{ $t('footer.business_continuity') }}</a></li>                               
                            </ul>
                        </div>
                    </div>
            </section>
        </div>
    </div>
</template>
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