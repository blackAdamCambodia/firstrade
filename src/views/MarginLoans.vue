<template>
    <div  @click="toggleFunction">
        <!-- Margin Loans  Hero part start -->
        <div class="bg-[#D2E8FF]">
            <div>
                <div class="bg-[url(/images/marginloan-hero.png)] bg-cover bg-center">
                    <div class="md:flex flex-row max-w-7xl m-auto px-8">
                        <div class="w-4/5 py-24 md:w-1/2 xl:w-2/5 text-left">
                            <h1 class=" font-bold text-4xl lg:text-5xl pt-6 pb-3 text-primary">{{ marginLoans.title }}</h1>
                            <div class="text-xl my-4 mb-8 text-secondary">{{ marginLoans.Subtitle }}
                            </div>
                            <button
                                class="bg-warning hover:bg-[#e67021] text-white text-md p-3 rounded-md !w-45 mb-3 md:!w-[185px] xl:!w-[216px]">
                                <a href="https://signup.firstrade.com/apply/en-us">{{ marginLoans.buttonText }}</a>
                            </button>
                            <div class="mt-6">
                                <a class="text-blue-500 hover:text-primary text-sm" aria-label="Upgrade an existing account"
                                    href="https://invest.firstrade.com/cgi-bin/login?ft_locale=en-us&amp;redirect=/content/myaccount/profile/margin"
                                    rel="noopener noreferrer">Upgrade an existing account
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Margin Loans  Hero part start-->
        <!-- Advantages margin  section start -->
        <section>
            <div class="container px-3 py-6  sm:max-w-none md:max-w-none lg:max-w-7xl border-b-[1px]  mx-auto">
                <div class="py-4 center ">
                    <h2 class="text-4xl mb-3 text-primary font-bold">{{ advantageMargin.title }}</h2>
                </div>
                <div class="px-5 flex justify-between gap-4 text-center">
                    <div class="" v-for="marginItem in advantageMargin.marginItems" :key="marginItem.id">
                        <div class="flex flex-col items-center  p-6">
                            <img :src="marginItem.imageUrl" alt="product.title">
                            <div>
                                <h3 class="font-bold text-2xl mt-6 text-blue-500 mb-4  ">{{ marginItem.title }}</h3>
                                <p class="text-md text-secondary">{{ marginItem.description }}
                                </p>
                            </div>
                            <a class="text-md text-blue-500 hover:text-primary" href="#">{{ marginItem.buttonText }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Advantages margin  section end -->
        <!-- How Margin Loans work Section start -->
        <section class="">
            <div class="container px-3  py-14  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
                <div class="flex justify-between gap-4 items-start">
                    <div>
                        <div class="text-left">
                            <h2 class="text-4xl font-bold text-primary mb-6">{{ processMargin.title }}</h2>
                            <p class=" text-md text-secondary">{{ processMargin.description }}</p>
                        </div>

                    </div>
                    <div>
                        <div class="bg-[#eff2f7] w-60 p-6 text-left">
                            <h5 class="text-[#4d6582] font-bold text-xl mb-4">{{ marginGuide.title }}</h5>
                            <p class="text-md text-secondary" v-html="marginGuide.info"></p>
                        </div>
                    </div>
                </div>

                <div class="pt-8">
                    <div class="flex justify-between gap-8 md:gap-24 text-left">
                        <div class="text-left py-8">
                            <h4 class="text-primary text-xl mb-4">{{ processMargin.benefits.title }}</h4>
                            <p class=" text-md text-secondary mb-6">{{ processMargin.benefits.description }}</p>
                            <div class="py- text-md text-secondary">
                                <ul class="list-disc mt-2 list-inside" v-for="item in processMargin.benefits.listItemsLeft"
                                    :key="item.id">
                                    <li>{{ item.desc }}</li>
                                </ul>
                            </div>
                            <div class="mt-2">
                                <a class="text-blue-500 text-sm hover:text-primary mt-4" href="#">Learn more about
                                    benefits</a>
                            </div>
                        </div>
                        <div class="text-left py-8">
                            <h4 class="text-primary text-xl mb-4">{{ processMargin.risk.title }}</h4>
                            <p class=" text-md text-secondary mb-6">{{ processMargin.risk.description }}</p>
                            <div class=" text-md text-secondary">
                                <ul class="list-disc mt-2 list-inside" v-for="item in processMargin.risk.listItemsRight"
                                    :key="item.id">
                                    <li>{{ item.desc }}</li>
                                </ul>
                            </div>
                            <div class="mt-3">
                                <a class="text-blue-500 text-sm hover:text-primary" href="#">Learn more about Risks</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- How Margin Loans work Section end -->
        <!-- Margin Rates Start -->
        <section>
            <div class="bg-primaryLight">
                <div class="max-w-7xl m-auto px-8 pt-16 pb-12">
                    <h2 class="font-futura font-bold text-ft-blue mb-2 text-center">Margin Rates</h2>
                    <div class="text-xl text-center mb-6">Firstrade's margin rates are among the lowest available in the
                        industry.</div>
                    <div>
                        <div class="grid-rows-8 grid grid-cols-12">
                            <div
                                class="text-base font-bold text-left border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-4">
                                Dollar Range</div>
                            <div
                                class="text-base font-bold text-left border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-5">
                                Above/Below Base Rate</div>
                            <div
                                class="text-base font-bold text-left border-b-[3px] border-solid border-grayish-blue text-secondary py-3 col-span-3">
                                Effective Rate</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-4">
                                $1,000,000 +</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-5">
                                -
                                2.25%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                9.75%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-4">
                                $500,000 - $999,999</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-5">
                                -
                                1.65%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                10.35%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-4">
                                $250,000 - $499,999</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-5">
                                +
                                0.25%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                12.25%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-4">
                                $100,000 - $249,999</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-5">
                                +
                                0.50%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                12.50%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-4">
                                $50,000 - $99,999</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-5">
                                +
                                1.00%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                13.00%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-4">
                                $25,000 - $49,999</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-5">
                                +
                                1.50%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                13.50%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-4">
                                $0 - $24,999</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-5">
                                +
                                1.75%</div>
                            <div
                                class="text-base text-left text-secondary py-3 border-b border-solid border-grayish-blue col-span-3">
                                13.75%</div>
                        </div>
                        <div class="text-xs text-[#96a1b1] text-left my-4">As of <span
                                class="text-xs text-[#96a1b1] my-4">July 28, 2023</span>, the current base rate is
                            <span class="text-xs text-[#96a1b1] my-4">12</span>%. Subject to change without prior
                            notice.
                        </div>
                        <div class="text-xs text-[#96a1b1] my-4 text-left">When setting base rates, Firstrade considers
                            indicators like commercially recognized interest rates, industry conditions related to credit,
                            the availability of liquidity in the marketplace, and general market conditions.</div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Margin Rates End -->
        <!-- Get started with margin loans section start -->
        <div>
            <div class="max-w-7xl m-auto px-8 pt-16 pb-12 mb-10">
                <h3 class="text-primary font-bold text-3xl text-ft-blue mb-12 text-center">{{ applyMargin.title }}</h3>
                <div class="md:flex flex-row max-w-7xl m-auto">
                    <div class="w-full md:w-1/4 px-4 mb-6" v-for="item in applyMargin.myItems" :key="item.id">
                        <div class="text-center mb-2" >
                            <span
                                style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;">
                                <span
                                    style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;">
                                    <img alt="" aria-hidden="true"
                                        :src="item.imageUrl"
                                        style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;">
                                </span>                            
                            </span>
                        </div>
                        <div class="text-center text-secondary">{{ item.title }}</div>
                    </div>
                   
                </div>
                <div class="mt-2 flex items-center justify-center">
                    <a  class="bg-warning hover:bg-[#e67021] text-white text-md p-3 rounded-md !w-45 mb-3 md:!w-[185px] xl:!w-[216px]"
                        href="https://invest.firstrade.com/cgi-bin/login?ft_locale=en-us&amp;redirect=/content/myaccount/profile/margin">Apply
                        for Margin</a>
                </div>
            </div>
        </div>
        <!-- Get started with margin loans section End -->

    </div>
</template>
<script>
export default {

    data() {
        return {
            marginLoans: {
                title: "Margin Loans",
                Subtitle: "Get a flexible line of credit for short-term financing needs with a margin loan from Firstrade.",
                buttonText: "Open Account",


            },
            advantageMargin: {
                title: "The Advantages of Margin Loans",
                marginItems: [
                    {
                        id: 1,
                        imageUrl: "/images/margin1.webp",
                        title: "Increased buying power",
                        description: "Trading on margin allows you to buy more securities than you could on a cash-only basis"
                    },
                    {
                        id: 2,
                        imageUrl: "/images/margin2.webp",
                        title: "Flexible line of credit",
                        description: "Borrowing on margin gives you a flexible line of credit without additional paperwork or closing fees"
                    },
                    {
                        id: 3,
                        imageUrl: "/images/margin3.webp",
                        title: "Low margin rates",
                        description: "Firstrade's margin rates are among the lowest available in the industry",
                        buttonText: "View margin rates"
                    }
                ]
            },
            processMargin: {
                title: "How Margin Loans Work",
                description: "A margin loan is a flexible line of credit that allows you to borrow against the value of securities you already own. Whether you want to increase your borrowing power to purchase more securities or looking for a source of flexible borrowing for short-term financing needs, a margin loan from Firstrade can help you gain access to funds. When used correctly, a margin loan can help you execute your investment strategies. Before you begin, it is important to understand and weigh both the benefits and risks associated with margin trading.",
                benefits: {
                    title: "Benefits",
                    description: "Enjoy these benefits of margin trading accounts:",
                    listItemsLeft: [
                        {
                            id: 1,
                            desc: "The ability to leverage your investments",
                        },
                        {
                            id: 2,
                            desc: "The ability to short sell a stock and profit from price declines",
                        },
                        {
                            id: 3,
                            desc: "Increased returns when the value of your holdings moves in your favor",
                        },
                        {
                            id: 4,
                            desc: "Avoid cash account violations caused by unsettled funds",
                        },
                        {
                            id: 5,
                            desc: "Diversify your portfolio by using margin buying power",
                        },
                        {
                            id: 6,
                            desc: "Short-term financing option without any additional paperwork or fees",
                        },
                        {
                            id: 7,
                            desc: "Interest on margin loans may be tax deductible against your net investment income (consult with your tax advisor)",
                        }
                    ],
                },
                risk: {
                    title: "Risks",
                    description: "Understand the potential risks:",
                    listItemsRight: [
                        {
                            id: 1,
                            desc: "Potential margin calls",
                        },
                        {
                            id: 2,
                            desc: "Increased potential loss if your securities decline in value",
                        },
                        {
                            id: 3,
                            desc: "Possible greater losses than your original investment",
                        },
                        {
                            id: 4,
                            desc: "Rise in interest rates may increase the cost of your loan",
                        },
                        {
                            id: 5,
                            desc: "The firm can force the sale of securities or other assets in your account",
                        },
                        {
                            id: 6,
                            desc: "You are not entitled to choose which securities or other assets in your accounts are liquidated or sold to meet a margin call",
                        }
                    ]
                }

            },
            marginGuide: {
                title: "Guide to Margin",
                info: `<div>For more information about margin loans, refer to our <a class="text-blue-500 hover:text-primary" href="/resources/guides/margin">Margin Education</a> section.</div>`,
            },
            applyMargin:{
                title:"Get started with margin loans",
                myItems:[
                    {
                        id: 1,
                        imageUrl:"/images/margin4.webp",
                        title:"Make sure you understand the risks and benefits of using margin"
                    },
                    {
                        id: 1,
                        imageUrl:"/images/margin5.webp",
                        title:"Have at least $2,000 of assets in your account"
                    },
                    {
                        id: 1,
                        imageUrl:"/images/margin6.webp",
                        title:"Complete the Margin Application & Agreement online"
                    },
                    {
                        id: 1,
                        imageUrl:"/images/margin7.webp",
                        title:"Once approved, you can start enjoying the benefits and flexibility that margin offers"
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
<style scoped>
</style>