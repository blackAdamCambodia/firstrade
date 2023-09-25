<template>
    <div @click="toggleFunction" class="  border-b-[1px]">
        <div class="bg-[#f3f9ff] pt-4 ">
            <div class="container mx-auto max-w-3xl px-6">
                <div class="flex justify-between text-[#4d6582]   ">
                    <button class="border-b-2 border-b-transparent pb-2 ">
                        <a href="/about">{{ $t('footer.about') }}</a>
                    </button>
                    <button class="border-b-2 border-b-transparent pb-2">
                        <a href="/history">{{ $t('footer.history') }}</a>
                    </button>
                    <button class="border-b-2 border-b-[#4d6582] pb-2">
                        <a href="/corporate-responsibility">{{ $t('footer.corporate_responsibility') }}y</a>
                    </button>
                    <button class="border-b-2 border-b-transparent pb-2">
                        <a href="/press">{{ $t('footer.press') }}</a>
                    </button>
                </div>
            </div>
        </div>
        <div>
            <section aria-labelledby="community-title">
                <div class="m-auto max-w-5xl px-8 py-20 lg:px-10 text-left text-secondary lg:py-20">
                    <div>
                        <h1 id="community-title" class="mb-8 font-bold font-sans text-4xl text-primary text-center">{{ $t('corporate_responsibility_page.community_first_with_firstrade') }}</h1>
                        <p>{{ $t('corporate_responsibility_page.at_firstrade_we_believe_that_community_comes') }}</p>
                        <p class="font-bold py-4">{{ $t('corporate_responsibility_page.supporting_the_health_and_safety_of_our_global_community') }}</p>
                        <p>{{ $t('corporate_responsibility_page.company_true_culture_is_demonstrated_by_the_way') }}</p>
                    </div>
                    <div class="my-8 overflow-hidden rounded border border-grayish-blue">
                        <div class="h-24 bg-[url(/images/img_palettes.jpg)] bg-cover md:h-64 lg:h-80"></div>
                        <div class="mt-8 p-4">
                            <h2 class="text-2xl text-primary font-bold">{{ $t('corporate_responsibility_page.hurricane_ian_relief') }}</h2>
                            <p class="m-0 py-2 font-bold">{{ $t('corporate_responsibility_page.octobar_date') }}</p>
                            <div class="flex flex-col gap-8 lg:flex-row">
                                <div>
                                    <p>{{ $t('corporate_responsibility_page.orlando_florida_hurricane_ian_made') }}</p>
                                    <p class="py-3">{{ $t('corporate_responsibility_page.firstrade_worked_closely_with_the_area') }}</p>
                                    <p>{{ $t('corporate_responsibility_page.working_directly_with_the_local_community') }}</p>
                                    <p class="py-3">{{ $t('corporate_responsibility_page.the_cleanup_and_restoration_process_is_expected') }}.</p>
                                </div>
                                <div class="w-full text-center">
                                    <img src="/images/img_ian_relief.webp" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-8 overflow-hidden rounded border border-grayish-blue">
                        <div class="h-24 bg-[url(/images/csr_lg_makingstrides.jpg)] bg-cover md:h-64 lg:h-80">
                        </div>
                        <div class="mt-8 p-4">
                            <h2 class="text-2xl text-primary font-bold">{{ $t('corporate_responsibility_page.making_strides') }}</h2>
                            <p class="m-0 py-3 font-bold">{{ $t('corporate_responsibility_page.help_us_transform_the_world_by_taking_part') }}</p>
                            <div class="flex flex-col gap-8 lg:flex-row">
                                <div>
                                    <p>{{ $t('corporate_responsibility_page.we_are_excited_to_announce_that_on_October') }}</p>
                                    <p class="py-3">{{ $t('corporate_responsibility_page.in_addition_to_giving_away_selfie_sticks') }} <a
                                            href="https://www.facebook.com/events/888177214601034/" target="_blank"
                                            rel="noopener noreferrer">Facebook event page</a>.</p>
                                    <p>{{ $t('corporate_responsibility_page.breast_cancer_is_not_a_disease_we_can_cure') }}</p>
                                    <p class="py-3">{{ $t('corporate_responsibility_page.we_are_honored_to_make_a_difference_in_our_global') }}
                                    </p>
                                </div>
                                <div class="w-full text-center"><span
                                        style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
                                            style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
                                                alt="" aria-hidden="true"
                                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27300%27%20height=%27115%27/%3e"
                                                style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
                                            alt=""
                                            src="/_next/image?url=%2Fimages%2Flogo_makingstrides.png&amp;w=640&amp;q=75"
                                            decoding="async" data-nimg="intrinsic"
                                            srcset="/_next/image?url=%2Fimages%2Flogo_makingstrides.png&amp;w=384&amp;q=75 1x, /_next/image?url=%2Fimages%2Flogo_makingstrides.png&amp;w=640&amp;q=75 2x"
                                            style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"><noscript></noscript></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-8 md:flex-row">
                        <div class="flex-1 overflow-hidden rounded border border-grayish-blue">
                            <div class="h-24 bg-[url(/images/csr_sm_japan.jpg)] bg-cover md:h-64 lg:h-80"></div>
                            <div class="mt-8 p-4">
                                <div class="flex justify-between">
                                    <div>
                                        <h2 class="text-2xl text-primary  font-bold">Japan Tsunami Relief</h2>
                                        <p class="m-0 py-2 font-bold">March - April 2011</p>
                                    </div>
                                    <div>
                                        <img src="/images/logo_redcross.webp" alt="">
                                    </div>
                                </div>
                                <div>
                                    <p>On March 11, 2011 a 9.0 magnitude earthquake occurred off the coast of Japan. This
                                        triggered a tsunami with waves as high as 133 feet resulting in tens of thousands of
                                        deaths and injuries and hundreds of thousands displaced from their homes. After the
                                        disaster, Firstrade was there to help those in need get medical treatment, food,
                                        water and shelter.</p>
                                    <p class="py-3">We started our initiative by setting up a fund through the Red Cross and making a
                                        donation. Once word got out about our contribution, our amazing employees made it
                                        clear they wanted to take part and they began donating to the fund. In order to give
                                        our accountholders the opportunity to contribute, we also set up a link from our
                                        homepage to the Firstrade page on the Red Cross site.</p>
                                    <p>Finally, we offered free wire transfers allowing our accountholders to send money to
                                        banks in Japan for a month at no charge. This ensured that every dollar sent went
                                        right to those who needed it most.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 overflow-hidden rounded border border-grayish-blue">
                            <div class="h-24 bg-[url(/images/csr_sm_relay.jpg)] bg-cover md:h-64 lg:h-80"></div>
                            <div class="mt-8 p-4">
                                <div class="flex justify-between">
                                    <div>
                                        <h2 class="text-2xl text-primary font-bold">Right on Track</h2>
                                        <p class="m-0 py-2 font-bold">Relay for Life, Flushing NY | June 2010</p>
                                    </div>
                                    <div>
                                        <img src="/images/logo_acs.webp" alt="">
                                    </div>
                                </div>
                                <div>
                                    <p>The American Cancer Society held its annual Relay For Life event at the Bayside
                                        Athletic Field in Flushing, NY, for communities around the world to honor the lives
                                        of people who have fought hard against the destructive disease. Since 1985, Relay
                                        For Life has become an important yearly tradition wherein participants highlight the
                                        central theme - to celebrate the rebirth of the survivors, to remember the lives
                                        lost, and to fight back against cancer for a better future.</p>
                                    <p class="py-3">Firstrade Securities has maintained its own tradition of being a proud sponsor of the
                                        life-changing event for several years. In 2010, Firstrade was honored to be the
                                        major sponsor of Relay for Life. John Liu, CEO of Firstrade Securities, gave the
                                        keynote speech wherein he advocated the importance of prevention and treatment of
                                        cancer.</p>
                                    <p>All funds raised were contributed to the American Cancer Society.The Relay holds
                                        special inspirational events keeping in line with the theme of “Celebrate, Remember
                                        and Fight Back.”</p>
                                </div>
                            </div>
                        </div>
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