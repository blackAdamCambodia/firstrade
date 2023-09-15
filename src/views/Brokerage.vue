<template>
    <div  @click="toggleFunction">
        <!-- stock Hero part start -->
        <div class="bg-white py-20">
            <div class=" container max-w-7xl mx-auto">
                <div class="grid grid-cols-5 gap-y-10 lg:gap-x-10 lg:divide-x lg:divide-light-grayish-blue">
                    <div class="col-span-5 py-6 lg:col-span-3 text-left mb-10">
                        <h1 class="mb-4  text-3xl lg:text-4xl font-bold text-primary">Brokerage Accounts</h1>
                        <div class="text-lg text-secondary">Get closer to your financial goals with a Firstrade general
                            investing brokerage
                            account. Learn about the different account types and features available, then open an account
                            today.</div>
                    </div>
                    <div class="col-span-5 lg:col-span-2 lg:pl-10">
                        <p class="text-xl lg:text-3xl text-secondary mb-10">Ready to get started?</p>
                        <button class="bg-warning hover:bg-[#e67021] py-3 px-6 w-60 rounded-md text-white">
                            <a aria-label="Open Account" rel="noopener noreferrer"
                                href="https://signup.firstrade.com/apply/en-us">Open Account</a>
                        </button>
                    </div>
                </div>
                <!-- What is general investing account -->
                <div class="transition border-b-[1px]" v-for="(accordion, index) in brokarageAccount.accordions"
                    :key="index">
                    <!-- header -->
                    <div @click="accordion.isOpen = !accordion.isOpen"
                        class="accordion-header cursor-pointer transition flex justify-between text-lg lg:text-xl space-x-5 items-center h-16 text-[#4d6582]">
                        <h3>{{ accordion.heading }}</h3>
                        <div class="flex">
                            <svg v-if="accordion.isOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"></path>
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                            </svg>
                        </div>
                    </div>
                    <!-- Content -->
                    <div class="px-5 pt-0 text-left pb-5 text-[#4d6582]" v-show="true == accordion.isOpen">
                        <p class="leading-6 font-light  " v-html="accordion.content">
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- stock Hero part start-->


        <!-- Firstrade Advantage start -->
        <section class=" h-[700px] ">
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
                    <div class="grid grid-cols-3 justify-between gap-10 text-left border-b-[1px]   mt-8">

                        <div class="pb-8" v-for="item in firstradeAdvantage.advantageItems" :key="item.id">
                            <div class=" items-center mr-4 border-r-[1px] h-40  ">
                                <div class="px-4 ">
                                    <h3 class="font-[600] text-2xl mt-6 text-secondary mb-4  ">{{ item.title }}</h3>
                                    <p class="text-md text-secondary">{{ item.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="w-full h-[1px] bg-secondary -mt-[240px]">

                </div>
            </div>
        </section>
        <!-- Firstrade Advantage end -->
        <!-- Promotion section start -->
        <section>
            <div class="container px-3  pt-4 pb-16  sm:max-w-none md:max-w-none lg:max-w-7xl  mx-auto">
                <div class="py-5">
                    <p class="text-warning text-sm font-bold uppercase py-6">{{ promotion.headline }}</p>
                    <h2 class="text-3xl font-bold mb-4 text-primary">{{ promotion.title }}</h2>
                    <a href="#" class="text-blue-500 hover:text-[#03468e]">{{ promotion.buttonText }}</a>
                </div>
            </div>
        </section>
        <!-- Promotion winning section End -->
    </div>
</template>
<script>
import { ref, reactive } from "vue";
export default {
    data() {
        return {
            brokarageAccount: {
                title: "",
                description: "",
                activeIndex: ref(0),
                accordions: reactive([
                    {
                        heading: "What is a general investing account?",
                        content: "A general investing brokerage account is a flexible investment account that allows you to buy and sell a variety of investments, such as stocks, ETFs, options, mutual funds and other securities. The Firstrade brokerage account has no fees to open and maintain, so you’re in control. Whether you’re saving for retirement, or want to use funds for short-term goals, start building your personal investment portfolio today with a Firstrade brokerage account.",
                        isOpen: false,
                    },
                    {
                        heading: "What are the different types of account ownership?",
                        content: `<div class="pb-6 text-sm lg:text-base">
                                    <p>There are two types of brokerage account ownership: </p>
                                    <ul class="list-disc">
                                        <li class="mb-4">
                                            <h5 class="text-base font-bold ">Individual brokerage account</h5>An individual account is a standard brokerage account with only one owner.
                                        </li>
                                        <li class="mb-4"><h5 class="text-base font-bold ">Joint brokerage account</h5>A joint brokerage account is held by two or more owners, most commonly spouses, but can also be opened between family members or two individuals with mutual financial goals.
                                            <ol class="list-disc ml-4">
                                                <li ><strong class="font-bold">Joint Tenants with Rights of Survivorship (JTWROS):</strong> A joint account that has two or more account owners, with each person having an undivided interest in the entire    property.
                                                </li>
                                                <li ><strong class="font-bold">Tenants in Common:</strong> A joint account that has two or more account owners, with each person owning a specified percentage of the entire property.
                                                </li>
                                            </ol>
                                        </li>
                                    </ul>
                                </div>`,
                        isOpen: false,
                    },
                    {
                        heading: "What brokerage account features are available?",
                        content: `<div class="pb-6 text-sm lg:text-base ">
                                    <p>Once you open a brokerage account with Firstrade, you can deposit funds and start buying investments. Take advantage of the features you can add to your account, such as:</p>
                                    <ul class="list-disc">
                                        <li class="mb-4"><h5 class="text-base font-bold">Options Trading</h5>Apply for options trading to your brokerage account. Generate income on your stock/ETF portfolio, take directional views with leverage and     limited risk, and hedge your portfolio with risk-reduction strategies. Firstrade offers value investing with $0 commissions and $0 contract fees for options trades. Approval is required before you can take advantage of this account feature. 
                                            <a class="text-blue-500 hover:text-primary" href="/trading/options">Learn more about options trading</a>.
                                        </li>
                                        <li class="mb-4"><h5 class="text-base font-bold">Margin Trading</h5>A margin loan is a flexible line of credit that allows you to borrow against the value of securities you already own. Whether you want to increase your borrowing power to purchase more securities or looking for a source of flexible borrowing for short-term financing needs, a margin loan from Firstrade can help you gain access to funds. 
                                            <a class="text-blue-500 hover:text-primary" href="/trading/margin-loans">Learn more about margin loans</a>.
                                        </li>
                                        <li class="mb-4"><h5 class="text-base font-bold">Extended Hours Trading</h5>React to market news during pre-market and after-market-hours sessions with extended hours trading from 8am - 8pm EST. We offer stock market after-hours &amp; pre-market trading with securities listed on the NYSE, NASDAQ, or AMEX exchanges. 
                                            <a class="text-blue-500 hover:text-primary" href="/trading/extended-hours">Learn more about extended hours trading</a>.
                                        </li>
                                        <li class="mb-4"><h5 class="text-base font-bold">Dividend Reinvestment Plan</h5>Automatically accumulate your positions every time you receive a dividend with Firstrade’s free dividend reinvestment plan. You can enroll either a single eligible stock or all eligible stocks in your portfolio. Enjoy the benefits of compounding returns on your investment. 
                                            <a class="text-blue-500 hover:text-primary" href="/trading/dividend-reinvestment">Learn more about dividend reinvestment</a>.
                                        </li>
                                        <li class="mb-4"><h5 class="text-base font-bold">Securities Lending Income Program</h5>The Securities Lending Income Program provides you with the opportunity to earn extra income on fully-paid shares of stock held in your cash account. While your shares are on loan, you will be paid an income that is accrued daily and credited to your account on a monthly basis. 
                                            <a class="text-blue-500 hover:text-primary" href="/trading/securities-lending">Learn more about Securities Lending Income Program
                                            </a>.
                                        </li>
                                    </ul>
                                </div>`,                        
                        isOpen: false,
                    },
                ])

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
            promotion: {
                headline: "OPEN AN ACCOUNT TODAY",
                title: "Get Up to $250 in Transfer Fee Rebates",
                buttonText: "Promotions Details >",

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