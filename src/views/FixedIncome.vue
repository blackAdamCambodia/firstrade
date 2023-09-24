<template>
    <div  @click="toggleFunction">
        <!-- Fixed income  Hero part start -->
        <div class="bg-[#D2E8FF] py-20">
            <div
                class=" container px-3 flex items-center justify-between py-4 sm:max-w-none md:max-w-none lg:max-w-7xl lg:py-5 mx-auto">
                <div class="flex justify-between items-center">
                    <div class=" w-1/2">
                        <div class="text-left max-w-3xl">
                            <h2 class="text-primary font-[900] text-5xl  mb-4 leading-snug">{{ $t(fixedIncome.title) }}</h2>
                            <p class="text-secondary text-xl max-w-md mb-6">{{ $t(fixedIncome.Subtitle) }}</p>
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
                            <h2 class="text-4xl font-bold text-primary mb-6">{{ $t(fixedProduct.title) }}</h2>
                            <p class=" text-md text-secondary">{{ $t(fixedProduct.description) }}</p>
                        </div>
                        <div class="text-left py-8">
                            <p class=" text-md text-secondary">{{ $t(fixedProduct.shortDescription) }}</p>
                            <div class="py-6 text-md text-secondary">
                                <ul class="list-disc mt-2 list-inside" v-for="item in fixedProduct.listItems" :key="item.id">
                                    <li>{{ $t(item.desc) }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="bg-[#eff2f7] w-80 py-12 px-6 text-left">
                            <h5 class="text-[#4d6582] font-bold text-xl mb-4">{{$t("fixed_income_page.available_products")}}</h5>
                            <div class="text-lg text-secondary">
                                <ul class="list-disc mt-2 list-inside" v-for="listItem in fixedProduct.listProducts" :key="listItem.id">
                                    <li>{{ $t(listItem.product) }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="py-8">
                    <div class="flex justify-between gap-8 md:gap-24 text-left">
                        <div v-for="item in quickStatus" :key="item.id">
                            <h3 class="text-primary text-2xl mb-4 font-bold">{{ $t(item.title)  }}</h3>
                            <p class="text-lg text-[#4d6582] ">{{ $t(item.description) }}</p>
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
                title: "fixed_income_page.fixed_income",
                Subtitle: "fixed_income_page.hedge_your_account_with_municipal",
                imageUrl: "/images/fixed-income-hero.webp",

            },
            fixedProduct: {
                title: "fixed_income_page.why_fixed_products",
                description: "fixed_income_page.fixed_income_investments_offer_long_term_stability",
                shortDescription: "fixed_income_page.fixed_income_investment_products_are_an_important",
                listItems: [
                    {
                        id: 1,
                        desc: "fixed_income_page.acting_as_a_hedge_against_market",
                    },
                    {
                        id: 2,
                        desc: "fixed_income_page.creating_a_low_risk_safe_haven_for_those_investors",
                    },
                    {
                        id: 3,
                        desc: "fixed_income_page.providing_a_method_of_portfolio_diversification",
                    },
                    {
                        id: 4,
                        desc: "fixed_income_page.allowing_for_a_guaranteed_return",
                    },
                    {
                        id: 5,
                        desc: "fixed_income_page.delivering_a_means_to_preserve_retirement_assets",
                    }


                ],
                listProducts: [
                    {
                        id: 1,
                        product: "fixed_income_page.secondary_market_CDs",
                    },
                    {
                        id: 2,
                        product: "fixed_income_page.treasury_bills_notes_bonds",
                    },
                    {
                        id: 3,
                        product: "fixed_income_page.primary_market_CDs",
                    },
                    {
                        id: 4,
                        product: "fixed_income_page.municipal_bonds",
                    },
                    {
                        id: 5,
                        product: "fixed_income_page.zeros_strips",
                    },
                    {
                        id: 6,
                        product: "fixed_income_page.agency_bonds_and_more",
                    }
                ]
            },
            quickStatus: [
                {
                    id: 1,
                    title: "fixed_income_page.fixed_income_quick_search",
                    description: "fixed_income_page.our_quick_and_easy_search_feature_so_you_can_find_the_safe",
                },
                {
                    id: 1,
                    title: "fixed_income_page.quick_view_from_the_account_dashboard",
                    description: "fixed_income_page.all_of_your_fixed_income_positions_will_show",
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