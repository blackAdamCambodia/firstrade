<script>
export default {

    data() {
        return {
           
                listItems: [
                    { item: "research_tool_page.earnings_announcements" },
                    { item: "research_tool_page.dividends" },
                    { item: "research_tool_page.ratings_changes" },
                    { item: "research_tool_page.economic_indicators" },
                    { item: "research_tool_page.IPOs" },
                    { item: "research_tool_page.splits" },
                ]
           

        }
    },
    methods: {
        toggleFunction() {
            this.$emit('toggle-function');
        }
    }
};
</script>

<template>
    <div  @click="toggleFunction">

        <!-- Hero part start -->
        <div class="bg-[#f3f9ff] py-8">
            <div
                class=" container px-6 flex  items-center justify-between py-4 sm:max-w-none md:max-w-none lg:max-w-6xl lg:py-5 mx-auto">
                <div class="flex justify-between items-center">
                    <div class=" w-1/2 text-left">
                        <div class="text-left max-w-6xl">
                            <h2 class="text-primary font-bold font-sans text-4xl  mb-4 leading-snug">{{ $t('research_tool_page.your_strategy_starts_here') }}</h2>
                            <p class="text-secondary text-md max-w-xl mb-6">{{ $t('research_tool_page.we_offer_a_comprehensive_array_of_online_stock') }}</p>
                        </div>
                        <button class="!w-[136px] bg-warning hover:bg-[#e67021] p-3 py-2 text-center rounded-md">
                            <a class="text-white " href="#">{{ $t('button.open_account') }}</a>
                        </button>

                    </div>
                    <div class="w-1/2">
                        <img class="w-full" src="/images/research-tools-1.webp" alt="">
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
        <!-- Hero part end -->
        <!-- why choose firstrade section start -->
        <section>
            <div class="container px-8 flex flex-col  mt-8 py-4  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">

                <!-- Video Commentary part start here -->
                <div class="flex justify-between items-center gap-8 my-14">
                    <div class="w-1/2 text-left">
                        <h2 class="text-3xl font-bold font-sans mb-6 text-primary ">{{ $t('research_tool_page.video_commentary') }}</h2>
                        <p class="text-secondary text-md">{{ $t('research_tool_page.daily_weekly_and_quarterly_video_discussions') }}</p>
                    </div>
                    <div class="flex  justify-center w-1/2">
                        <img src="/images/research-tools-2.webp" alt="">
                    </div>
                </div>
                <!-- Video Commentary part end here -->
                <!-- Market Heatmap part start here -->
                <div class="flex justify-between gap-8 items-center my-14">
                    <div class="flex  justify-center w-1/2">
                        <img src="/images/research-tools-3.webp" alt="">
                    </div>
                    <div class="w-1/2 text-left">
                        <h2 class="text-3xl font-bold font-sans mb-6 text-primary ">{{ $t('research_tool_page.view_the_market_at_a_glance') }}</h2>
                        <p class="text-secondary text-md">{{ $t('research_tool_page.get_a_broad_view_of_the_market_with_a_visual') }}</p>
                    </div>
                </div>
                <!-- Market Heatmap End here -->
                <!-- Industries Stock part start here -->
                <div class="flex justify-between items-center gap-8 my-14 ">
                    <div class="w-1/2 text-left">
                        <h2 class="text-3xl font-bold font-sans mb-6 text-primary ">{{ $t('research_tool_page.find_your_investment_target_with') }}</h2>
                        <p class="text-secondary text-md">{{ $t('research_tool_page.chart_performance_data_by_drilling_down_from') }}</p>
                    </div>
                    <div class="flex  justify-center w-1/2">
                        <img src="/images/research-tools-4.webp" alt="">
                    </div>
                </div>
                <!-- Industries Stock part end here -->
                <!-- News ANd Event part start here -->
                <div class="flex justify-between gap-8  items-center my-14">
                    <div class="flex  justify-center w-1/2">
                        <img src="/images/research-tools-5.webp" alt="">
                    </div>
                    <div class="w-1/2 text-left">
                        <h2 class="text-3xl font-bold font-sans mb-6 text-primary ">{{ $t('research_tool_page.get_the_most_out_of_the_latest_News') }}</h2>
                        <p class="text-secondary text-md">{{ $t('research_tool_page.get_breaking_and_historical_news_overnight_and_before') }}</p>
                    </div>
                </div>
                <!-- News ANd Event End here -->
                <!--Ratings  part start here -->
                <div
                    class="flex mt-8 flex-col gap-8 bg-opacity-5 bg-contain bg-bottom bg-no-repeat sm:mb-8 sm:h-[400px]  bg-[url(/images/research-tools-6b.png)]">
                   
                    <div class=" w-1/2 text-left">
                        <div>                            
                            <img src="/images/research-tools-6a.webp" alt="">
                        </div>
                        <h2 class="text-3xl font-bold max-w-md font-sans mb-6 text-primary">{{ $t('research_tool_page.be_on_top_of_the_markets_with_Analyst') }}
                        </h2>
                        <div class="text-secondary max-w-sm text-md">{{ $t('research_tool_page.access_morningstar_star_ratings_and_comprehensive') }}</div>
                    </div>
                    <div class="w-1/2">

                    </div>
                </div>
                <!-- Ratings  part end here -->
                <!-- Advance Screener part start here -->
                <div class="flex justify-between gap-8 items-center mt-14">
                    <div class="flex  justify-center w-1/2">
                        <img src="/images/research-tools-7.webp" alt="">
                    </div>
                    <div class="w-1/2 text-left">
                        <h2 class="text-3xl font-bold font-sans mb-6 text-primary ">{{ $t('research_tool_page.newly_designed_and_advanced_screener') }}</h2>
                        <p class="text-secondary text-md">{{ $t('research_tool_page.narrow_down_your_investment_choices_with_predefined_screeners') }}</p>
                    </div>
                </div>
                <!-- Advance Screener End here -->
                <!-- Fundamental part start here -->
                <div class="flex justify-between gap-8 items-center my-14">
                    <div class="w-1/2">
                        <h2 class="text-3xl text-left font-bold text-primary ">{{ $t('research_tool_page.access_comprehensive') }}</h2>
                        <ul class=" list-disc list-inside mt-2" v-for="(item, index) in listItems" :key="index">
                            <li class=" text-left  text-lg  text-secondary">{{ $t(item.item) }}</li>
                    </ul>
                    
                </div>
                <div class="flex justify-center w-1/2">
                    <img class="" src="/images/research-tools-8.webp" alt="">
                </div>
            </div>
            <!-- Fundamental part End here -->
            <!-- Customer Support part start here -->
            <div class="flex justify-between gap-8 items-center my-14">
                <div class="flex justify-start w-1/2">
                    <img class="" src="/images/research-tools-9a.webp" alt="">
                </div>
                <div class="w-1/2">
                    <div>
                        <img src="/images/research-tools-9b.webp" alt="">
                    </div>
                    <h2 class="text-3xl text-left font-sans font-bold text-primary ">{{ $t('research_tool_page.never_miss_another_event_with') }}</h2>
                    <p class="mt-4 text-lg text-secondary text-left mb-4">{{ $t('research_tool_page.keep_track_of_upcoming_events_which_can_impact') }}</p>
                    <ul class=" list-disc list-inside mt-2" v-for="(item, index) in listItems" :key="index">
                        <li class=" text-left  text-lg  text-secondary">{{ $t(item.item) }}</li>
                    </ul>
                   
                </div>
            </div>
            <!-- Customer Support part End here -->
        </div>
    </section>
    <!-- why choose firstrade section End -->

</div>
</template>

<style scoped></style>
