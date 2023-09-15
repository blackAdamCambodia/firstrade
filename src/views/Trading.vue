<template>
    <div @click="toggleFunction">
        <!-- Trading Hero part start -->
        <div class="bg-primaryLight">
            <div
                class=" container px-3 flex items-center justify-between py-4 sm:max-w-none md:max-w-none lg:max-w-7xl lg:py-5 mx-auto">
                <div class="flex justify-between items-center">
                    <div class=" w-1/2">
                        <div class="text-left max-w-3xl">
                            <h2 class="text-primary font-[900] text-5xl  mb-4 leading-snug">{{ heroPart.title }}</h2>
                            <p class="text-secondary text-xl max-w-md mb-6">{{ heroPart.Subtitle }}</p>
                        </div>
                        <div class="flex gap-4 ">
                            <div v-for="(item, index) in heroPart.buttonItem" :key="index">
                                <img :src="item.imageUrl" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <img :src="heroPart.imageUrl" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- Trading Hero part start-->
        <!-- Investment Product section start -->
        <section>
            <div class="container px-3 mt-8 py-4  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
                <div class="py-6 text-left">
                    <h2 class="text-4xl mb-3 text-primary font-bold">{{ chooseInvestment.title }}</h2>
                    <p class="text-xl text-secondary ">{{ chooseInvestment.description }}</p>
                </div>
                <div class="px-5 mt-8 flex justify-between gap-4 text-left">
                    <div class="" v-for="product in investmentProducts" :key="product.id">
                        <div class="flex flex-col items-center  hover:bg-primaryLight p-6">
                            <img :src="product.imageUrl" alt="product.title">
                            <div>
                                <h3 class="font-bold text-2xl mt-6 text-blue-500 mb-4  ">{{ product.title }}</h3>
                                <p class="text-md text-secondary">{{ product.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Investment Product section end -->
        <!-- Portfolio Section start -->
        <section class="bg-primaryLight">
            <div class="container px-3  py-20  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
                <div class=" text-left  pb-8">
                    <h2 class="text-4xl  text-primary font-bold">{{ portfolio.title }}</h2>
                </div>
                <div class="  flex justify-between gap-4 text-left">
                    <div class="" v-for="item in portfolio.portfolioItems" :key="item.id">
                        <div class="flex flex-col items-center mr-4 ">
                            <div>
                                <h3 class="font-bold text-2xl mt-6 text-blue-500 mb-4  ">{{ item.headline }}</h3>
                                <p class="text-md text-secondary">{{ item.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Portfolio Section end -->
        <!-- Pricing part start here -->
        <div class="container  py-14  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
            <div class="flex justify-between items-center mt-14">
                <div class="flex justify-center w-1/2">
                    <img class="w-96" :src="pricing.imageUrl" alt="">
                </div>
                <div class="w-1/2">
                    <h2 class="text-3xl text-left text-primary font-bold">{{ pricing.title }}</h2>
                    <p class="text-lg text-secondary text-left py-5">{{ pricing.description }}</p>
                    <ul class="mt-2 list-disc list-inside" v-for="(item, index) in pricing.listItem" :key="index">
                        <li class="text-left mb-2 text-lg  text-secondary">{{ item.item }}</li>
                    </ul>
                    <div>
                        <a class="text-center p-2 px-4 rounded-[4px] block mt-4  w-[220px] text-white bg-warning text-lg"
                            href="#">Open Account </a>
                    </div>

                </div>
            </div>
        </div>
        <!-- Pricing part end here -->
    </div>
</template>
<script>
import axios from 'axios';
export default {

    data() {
        return {
            investmentProducts: [],
            heroPart: {
                title: "Trade Stocks, ETFs, and Options In One Portfolio",
                Subtitle: "Diversify your portfolio with a wide selection of investment products, all commission-free.",
                imageUrl: "/images/home_platform.webp",
                buttonItem: [
                    { imageUrl: "/images/app_android.c52f7d81.svg" },
                    { imageUrl: "/images/app_ios.1ed9e534.svg" },
                ]
            },
            chooseInvestment: {
                title: "Choose the investments that are right for you",
                description: "Build the portfolio you want with all the investment products you need. With $0 commission trades, $0 options contract fees and no minimums, you're in control.",

            },
            portfolio: {
                title: "Get more out of your portfolio",
                portfolioItems: [
                    {
                        id: 1,
                        headline: "Margin Loans",
                        description: "Leverage your investments with competitive margin rates.",
                    },
                    {
                        id: 2,
                        headline: "Dividend Reinvestment",
                        description: "Reinvest your dividends automatically and with no extra charge.",
                    },
                    {
                        id: 3,
                        headline: "Cash Management",
                        description: "Consolidate your banking and brokerage services all in to one account.",
                    }

                ]
            },
            pricing: {
                title: "Straightforward Pricing",
                description: "Put your money into your investments, not fees.",
                imageUrl: "/images/why_pricing.webp",
                listItem: [
                    { item: "$0 Commission Trades" },
                    { item: "$0 Options Contract Fees" },
                    { item: "No Minimums" },
                    { item: "No Inactivity Fees" }
                ]
            },
        }
    },
    mounted() {
        axios.get("/src/static/json/investmentProducts.json")
            .then((response) => {
                this.investmentProducts = response.data.products;
            })
            .catch((error) => {
                console.log(error);
            });

    },
    methods: {
        toggleFunction() {
            this.$emit('toggle-function');
        }
    }
}
</script>
<style scoped></style>