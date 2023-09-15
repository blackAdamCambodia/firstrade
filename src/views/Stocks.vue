<template>
    <div @click="toggleFunction">
        <!-- stock Hero part start -->
        <div class="bg-[#D2E8FF] py-10">
            <div
                class=" container px-3 flex items-center justify-between py-4 sm:max-w-none md:max-w-none lg:max-w-7xl lg:py-5 mx-auto">
                <div class="flex justify-between items-center">
                    <div class=" w-1/2">
                        <div class="text-left max-w-3xl">
                            <h2 class="text-primary font-[900] text-5xl  mb-4 leading-snug">{{ investStock.title }}</h2>
                            <p class="text-secondary text-xl max-w-md mb-6">{{ investStock.Subtitle }}</p>
                        </div>

                    </div>
                    <div class="w-1/2">
                        <img :src="investStock.imageUrl" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- stock Hero part start-->

        <!-- Portfolio Section start -->
        <section class="">
            <div class="container px-3  py-20  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
                <div class="  grid grid-cols-2 justify-between gap-4 text-left">
                    <div class="" v-for="item in portfolio.portfolioItems" :key="item.id">
                        <div class=" items-center mr-4 ">
                            <div>
                                <h3 class="font-[800] text-2xl mt-6 text-primary mb-4  ">{{ item.headline }}</h3>
                                <p class="text-md text-secondary">{{ item.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Portfolio Section end -->
        <!-- Firstrade Advantage start -->
        <section class="bg-primaryLight h-[700px] ">
            <div class="container px-3  py-14  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
                <div class="flex flex-col items-center">
                    <div class=" text-[#96a1b1] font-bold text-md pb-6">
                        <h4>{{ firstradeAdvantage.reason }}</h4>
                    </div>
                    <div>
                        <h3 class="text-primary font-bold text-2xl sm:text-3xl">{{ firstradeAdvantage.title }}</h3>
                        <h4 class="text-[#0066cc] text-xl py-3 ">{{ firstradeAdvantage.Subtitle }}</h4>
                    </div>
                    <div>
                        <p class="mt-2 text-lg text-secondary sm:mt-0 lg:text-xl">{{ firstradeAdvantage.description }}</p>
                    </div>
                </div>
                <div>
                    <div class="grid grid-cols-3 justify-between gap-10 text-left  mt-8">
                        <div class="" v-for="item in firstradeAdvantage.advantageItems" :key="item.id">
                            <div class=" items-center mr-4 border-r-[1px] h-40  ">
                                <div class="px-4 ">
                                    <h3 class="font-[600] text-2xl mt-6 text-secondary mb-4  ">{{ item.title }}</h3>
                                    <p class="text-md text-secondary">{{ item.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="w-full h-[1px] bg-secondary -mt-[200px]">
                </div>
            </div>
        </section>
        <!-- Firstrade Advantage end -->
        <!-- Award winning section start -->
        <section >
            <div class="container px-3  py-16  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
                <div class="py-5">
                    <h2 class="text-3xl font-[800] mb-4 text-secondary">{{ award.title }}</h2>
                    <p class="text-secondary text-xl">{{ award.description }}</p>
                </div>
                <div class="flex py-6">
                    <div v-for=" item in award.imageItems" :key="item.id">
                        <div  >
                            <img :src="item.imageUrl" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Award winning section End -->
    </div>
</template>
<script>
export default {

    data() {
        return {
            investStock: {
                title: "Invest in Stocks",
                Subtitle: "Trade stocks listed on the NYSE, AMEX, Nasdaq or the Over-the-Counter (OTC) markets.",
                imageUrl: "/images/stocks-hero.webp",

            },
            portfolio: {
                portfolioItems: [
                    {
                        id: 1,
                        headline: "Penny Stocks to Large Cap Stocks",
                        description: "Invest in large, mid, and small cap companies or penny stocks.",
                    },
                    {
                        id: 2,
                        headline: "Listed and OTC Stocks",
                        description: "Trade both listed and OTC trading stocks.",
                    },
                    {
                        id: 3,
                        headline: "Exchange Traded Funds (ETFs)",
                        description: "Replicate the performance of an index by investing in Exchange Traded Funds. Use screeners with over 30 different screening criteria options to help you find ETFs.",
                    },
                    {
                        id: 4,
                        headline: "Divided Reinvestment Programs",
                        description: "Enroll in our dividend reinvestment programs at no additional charge and keep those dividends working.",
                    },
                    {
                        id: 5,
                        headline: "Extended Hours Trading",
                        description: "Trade eligible stocks after hours during our extended hours trading between 8:00am - 9:25am and 4:05pm - 8:00pm Eastern time.",
                    },
                    {
                        id: 6,
                        headline: "Conditional Orders & Trailing Stops",
                        description: "Place conditional orders such as “One Cancels the Other” or “One Triggers the Other”. Take advantage of market momentum by creating Trailing Stops to execute a stop-loss order set around a percentage of market price.",

                    },


                ]
            },
            firstradeAdvantage: {
                reason: "WHY OPEN AN ACCOUNT AT FIRSTRADE?",
                title: "The Firstrade Advantage",
                Subtitle: "$0 Commission Online Trades, $0 Options Contract Fees",
                description: "No Deposit Minimum, No Inactivity Fees",
                advantageItems: [
                    {
                        id: 1,
                        title: "Full Suite of Investment Products",
                        description: "Stocks/ETFs, Options, Fixed Income & 11,000+ Mutual Funds. Earn extra income from our",
                        linkTextOne: "DRIP",
                        linkUrlOne: "",
                        linkTextTwo: "Securities Lending Program",
                        linkUrlTwo: "",
                    },
                    {
                        id: 2,
                        title: "Powerful Apps",
                        description: "Seize opportunity no matter where you are with our intuitive desktop, Android, iPhone and iPad Apps.",
                        linkTextOne: "",
                        linkUrlOne: "",
                        linkTextTwo: "",
                        linkUrlTwo: "",
                    },
                    {
                        id: 3,
                        title: "Trade Ideas",
                        description: "Discover potential trade ideas with free access to premium research provided by Morningstar, Briefing.com, Zacks & Benzinga.",
                        linkTextOne: "",
                        linkUrlOne: "",
                        linkTextTwo: "",
                        linkUrlTwo: "",
                    },
                    {
                        id: 4,
                        title: "Account Protection",
                        description: "We secure your accounts with strong encryption, firewalls, and two-factor authentication.",
                        linkTextOne: "",
                        linkUrlOne: "",
                        linkTextTwo: "",
                        linkUrlTwo: "",
                    },
                    {
                        id: 5,
                        title: "Education Resources",
                        description: "Free education resources & live webinars for investors of varying levels of experience.",
                        linkTextOne: "",
                        linkUrlOne: "",
                        linkTextTwo: "",
                        linkUrlTwo: "",
                    },
                    {
                        id: 6,
                        title: "Extended-Hours Trading",
                        description: "React to market news during pre-market and after-market-hours sessions with extended hours trading from 8am - 8pm EST.",
                        linkTextOne: "",
                        linkUrlOne: "",
                        linkTextTwo: "",
                        linkUrlTwo: "",
                    }

                ]
            },
            award: {
                title: "Award-Winning Broker",
                description: "Firstrade was established in New York in 1985 and is a pioneer in the online brokerage industry.",
                imageItems: [
                    {
                        id: 1,
                        imageUrl: "/images/accolade-1.webp"
                    },
                    {
                        id: 2,
                        imageUrl: "/images/accolade-2.webp"
                    }
                ]
            }

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