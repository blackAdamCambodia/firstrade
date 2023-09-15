<script>
export default {

    data() {
        return {
            researchHero: {
                title: "Your strategy starts here",
                Subtitle: "We offer a comprehensive array of online stock research tools to help you make sound decisions in building an investment portfolio.",
                imageUrl: "/images/research-tools-1.webp",

            },

            videoCommentary: {
                title: "Video Commentary",
                description: "Daily, weekly and quarterly video discussions on a particular topic, asset class or security from trusted independent analysts. Best ideas are discussed based on the latest earnings reports and the biggest economic and market events of the moment.",
                imageUrl: "/images/research-tools-2.webp",
            },

            marketHeatMap: {
                title: "View the market at a glance with the new Market Heatmap",
                description: "Get a broad view of the market with a visual representation of bullish and bearish areas that represent each stock’s performance at a glance.",
                imageUrl: "/images/research-tools-3.webp",
            },
            industriesStock: {
                title: "Find your investment target with the Sectors & Industries Stock Research Tool",
                description: "Chart performance data by drilling down from sectors to individual companies all in one page, allowing you to make investment decisions based on current industry trends.",
                imageUrl: "/images/research-tools-4.webp",
            },
            newEvent: {
                title: "Get the most out of the latest News & Events",
                description: "Get breaking and historical news overnight and before the bell rings from some of the world’s most trusted investment news providers like Morningstar, Briefing.com, Zacks, Benzinga and PR Newswire.",
                imageUrl: "/images/research-tools-5.webp",
            },
            advanceScreener: {
                title: "A newly designed and Advanced Screener",
                description: "Narrow down your investment choices with predefined screeners that include: High Yielding Quality Stocks, Large Cap Growth Stocks, Bargain Basement Small Caps, and many more. Or customize your own screener by choosing from dozens of criteria. Detailed results are displayed automatically on the same page, helping you fine tune your selections more efficiently.",
                imageUrl: "/images/research-tools-7.webp",
            },
            rating: {
                Star: "/images/research-tools-6a.webp",
                title: "Be on top of the markets with Analyst Reports & Ratings",
                description: "Access Morningstar 5-star ratings and comprehensive research reports from objective and experienced analysts.",
                imageUrl: "/images/research-tools-6b.png",
            },
            Fundamental: {
                title: "Access comprehensive Fundamental Data all in one place",               
                imageUrl: "/images/research-tools-8.webp",
                listItems: [
                    { item: "Earnings Announcements" },
                    { item: "Dividends" },
                    { item: "Ratings Changes" },
                    { item: "Economic Indicators" },
                    { item: "IPOs" },
                    { item: "Splits" },
                ]
            },
            Calender: {
                calenderImgUrl: "/images/research-tools-9b.webp",
                title: "Never miss another event with our new Calendar",
                description: "Keep track of upcoming events which can impact your current or future investment activities. Events include:",
                imageUrl: "/images/research-tools-9a.webp",
                listItems: [
                { item: "Earnings Announcements" },
                    { item: "Dividends" },
                    { item: "Ratings Changes" },
                    { item: "Economic Indicators" },
                    { item: "IPOs" },
                    { item: "Splits" },
                ]
            },

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
                class=" container px-3 flex  items-center justify-between py-4 sm:max-w-none md:max-w-none lg:max-w-6xl lg:py-5 mx-auto">
                <div class="flex justify-between items-center">
                    <div class=" w-1/2 text-left">
                        <div class="text-left max-w-6xl">
                            <h2 class="text-primary font-bold font-sans text-4xl  mb-4 leading-snug">{{ researchHero.title
                            }}</h2>
                            <p class="text-secondary text-md max-w-xl mb-6">{{ researchHero.Subtitle }}</p>
                        </div>
                        <button class="!w-[136px] bg-warning hover:bg-[#e67021] p-3 py-2 text-center rounded-md">
                            <a class="text-white " href="#">Open Account</a>
                        </button>

                    </div>
                    <div class="w-1/2">
                        <img class="w-full" :src="researchHero.imageUrl" alt="">
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
        <!-- Hero part end -->
        <!-- why choose firstrade section start -->
        <section>
            <div class="container flex flex-col px-3 mt-8 py-4  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">

                <!-- Video Commentary part start here -->
                <div class="flex justify-between items-center gap-8 my-14">
                    <div class="w-1/2 text-left">
                        <h2 class="text-3xl font-bold font-sans mb-6 text-primary ">{{ videoCommentary.title }}</h2>
                        <p class="text-secondary text-md">{{ videoCommentary.description }}</p>
                    </div>
                    <div class="flex  justify-center w-1/2">
                        <img :src="videoCommentary.imageUrl" alt="">
                    </div>
                </div>
                <!-- Video Commentary part end here -->
                <!-- Market Heatmap part start here -->
                <div class="flex justify-between gap-8 items-center my-14">
                    <div class="flex  justify-center w-1/2">
                        <img :src="marketHeatMap.imageUrl" alt="">
                    </div>
                    <div class="w-1/2 text-left">
                        <h2 class="text-3xl font-bold font-sans mb-6 text-primary ">{{ marketHeatMap.title }}</h2>
                        <p class="text-secondary text-md">{{ marketHeatMap.description }}</p>
                    </div>
                </div>
                <!-- Market Heatmap End here -->
                <!-- Industries Stock part start here -->
                <div class="flex justify-between items-center gap-8 my-14 ">
                    <div class="w-1/2 text-left">
                        <h2 class="text-3xl font-bold font-sans mb-6 text-primary ">{{ industriesStock.title }}</h2>
                        <p class="text-secondary text-md">{{ industriesStock.description }}</p>
                    </div>
                    <div class="flex  justify-center w-1/2">
                        <img :src="industriesStock.imageUrl" alt="">
                    </div>
                </div>
                <!-- Industries Stock part end here -->
                <!-- News ANd Event part start here -->
                <div class="flex justify-between gap-8  items-center my-14">
                    <div class="flex  justify-center w-1/2">
                        <img :src="newEvent.imageUrl" alt="">
                    </div>
                    <div class="w-1/2 text-left">
                        <h2 class="text-3xl font-bold font-sans mb-6 text-primary ">{{ newEvent.title }}</h2>
                        <p class="text-secondary text-md">{{ newEvent.description }}</p>
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
                        <h2 class="text-3xl font-bold max-w-md font-sans mb-6 text-primary">Be on top of the markets with Analyst Reports &amp; Ratings
                        </h2>
                        <div class="text-secondary max-w-sm text-md">Access Morningstar 5-star ratings and comprehensive research reports from
                            objective and experienced analysts.</div>
                    </div>
                    <div class="w-1/2">

                    </div>
                </div>
                <!-- Ratings  part end here -->
                <!-- Advance Screener part start here -->
                <div class="flex justify-between gap-8 items-center mt-14">
                    <div class="flex  justify-center w-1/2">
                        <img :src="advanceScreener.imageUrl" alt="">
                    </div>
                    <div class="w-1/2 text-left">
                        <h2 class="text-3xl font-bold font-sans mb-6 text-primary ">{{ advanceScreener.title }}</h2>
                        <p class="text-secondary text-md">{{ advanceScreener.description }}</p>
                    </div>
                </div>
                <!-- Advance Screener End here -->
                <!-- Fundamental part start here -->
                <div class="flex justify-between gap-8 items-center my-14">

                    <div class="w-1/2">
                        <h2 class="text-3xl text-left font-bold text-primary ">{{ Fundamental.title }}</h2>
                        <p class="mt-4 text-lg text-secondary text-left mb-4">{{ Fundamental.description }}</p>
                        <ul class=" list-disc list-inside mt-2" v-for="(item, index) in Fundamental.listItems" :key="index">
                            <li class=" text-left  text-lg  text-secondary">{{ item.item }}</li>
                    </ul>
                    
                </div>
                <div class="flex justify-center w-1/2">
                    <img class="" :src="Fundamental.imageUrl" alt="">
                </div>
            </div>
            <!-- Fundamental part End here -->
            <!-- Customer Support part start here -->
            <div class="flex justify-between gap-8 items-center my-14">
                <div class="flex justify-start w-1/2">
                    <img class="" :src="Calender.imageUrl" alt="">
                </div>
                <div class="w-1/2">
                    <div>
                        <img :src="Calender.calenderImgUrl" alt="">
                    </div>
                    <h2 class="text-3xl text-left font-sans font-bold text-primary ">{{ Calender.title }}</h2>
                    <p class="mt-4 text-lg text-secondary text-left mb-4">{{ Calender.description }}</p>
                    <ul class=" list-disc list-inside mt-2" v-for="(item, index) in Calender.listItems" :key="index">
                        <li class=" text-left  text-lg  text-secondary">{{ item.item }}</li>
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
