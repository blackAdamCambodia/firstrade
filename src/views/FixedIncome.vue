<template>
    <div  @click="toggleFunction">
        <!-- Fixed income  Hero part start -->
        <div class="bg-[#D2E8FF] py-20">
            <div
                class=" container px-3 flex items-center justify-between py-4 sm:max-w-none md:max-w-none lg:max-w-7xl lg:py-5 mx-auto">
                <div class="flex justify-between items-center">
                    <div class=" w-1/2">
                        <div class="text-left max-w-3xl">
                            <h2 class="text-primary font-[900] text-5xl  mb-4 leading-snug">{{ fixedIncome.title }}</h2>
                            <p class="text-secondary text-xl max-w-md mb-6">{{ fixedIncome.Subtitle }}</p>
                        </div>

                    </div>
                    <div class="w-1/2">
                        <img :src="fixedIncome.imageUrl" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- Fixed income  Hero part start-->

        <!-- Why Fixed Products Section start -->
        <section class="">
            <div class="container px-3  py-20  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
                <div class="flex justify-between gap-4 items-start">
                    <div>
                        <div class="text-left">
                            <h2 class="text-4xl font-bold text-primary mb-6">{{ fixedProduct.title }}</h2>
                            <p class=" text-md text-secondary">{{ fixedProduct.description }}</p>
                        </div>
                        <div class="text-left py-8">
                            <p class=" text-md text-secondary">{{ fixedProduct.shortDescription }}</p>
                            <div class="py-6 text-md text-secondary">
                                <ul class="list-disc mt-2 list-inside" v-for="item in fixedProduct.listItems" :key="item.id">
                                    <li>{{ item.desc }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="bg-[#eff2f7] w-80 py-12 px-6 text-left">
                            <h5 class="text-[#4d6582] font-bold text-xl mb-4">Available Products</h5>
                            <div class="text-lg text-secondary">
                                <ul class="list-disc mt-2 list-inside" v-for="listItem in fixedProduct.listProducts" :key="listItem.id">
                                    <li>{{ listItem.product }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="py-8">
                    <div class="flex justify-between gap-8 md:gap-24 text-left">
                        <div v-for="item in quickStatus" :key="item.id">
                            <h3 class="text-primary text-2xl mb-4 font-bold">{{ item.title  }}</h3>
                            <p class="text-lg text-[#4d6582] ">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Why Fixed Products Section end -->

    </div>
</template>
<script>
export default {

    data() {
        return {
            fixedIncome: {
                title: "Fixed Income",
                Subtitle: "Hedge your account with municipal and corporate bonds, CDs and Fixed Income Securities.",
                imageUrl: "/images/fixed-income-hero.webp",

            },
            fixedProduct: {
                title: "Why Fixed Products?",
                description: "Fixed income investments offer long-term stability while generating higher returns than a traditional savings account. This makes them ideal for retirement accounts, short-term savings and as a diversification tool in any portfolio.",
                shortDescription: "Fixed income investment products are an important part of many portfolios. Their opportunities for use are diverse and can help investors by:",
                listItems: [
                    {
                        id: 1,
                        desc: "Acting as a hedge against market volatility and downside risk.",
                    },
                    {
                        id: 2,
                        desc: "Creating a low-risk safe haven for those investors with a low tolerance for risk.",
                    },
                    {
                        id: 3,
                        desc: "Providing a method of portfolio diversification.",
                    },
                    {
                        id: 4,
                        desc: "Allowing for a guaranteed return for short-term savings.",
                    },
                    {
                        id: 5,
                        desc: "Delivering a means to preserve retirement assets once an investor reaches retirement age.",
                    }


                ],
                listProducts: [
                    {
                        id: 1,
                        product: "Secondary Market CDs",
                    },
                    {
                        id: 2,
                        product: "Treasury Bills, Notes & Bonds",
                    },
                    {
                        id: 3,
                        product: "Primary Market CDs",
                    },
                    {
                        id: 4,
                        product: "Municipal Bonds",
                    },
                    {
                        id: 5,
                        product: "Zeros & Strips",
                    },
                    {
                        id: 6,
                        product: "Agency Bonds and more",
                    }
                ]
            },
            quickStatus: [
                {
                    id: 1,
                    title: "Fixed Income Quick Search",
                    description: "Our quick and easy search feature so you can find the safe fixed income investment products that fit your goals allowing you to streamline the process of diversifying your account.",
                },
                {
                    id: 1,
                    title: "Quick View from the Account Dashboard",
                    description: "All of your fixed income positions will show up on your Account Dashboard so you can easily measure their affect on your account and determine whether they are delivering the safety and return that you were looking for.",
                }
            ]


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