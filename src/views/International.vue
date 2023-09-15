<template>
    <div  @click="toggleFunction">
        <!-- International Account  Hero part start -->
        <div class="bg-[#D2E8FF] py-20">
            <div
                class=" container px-3 flex  items-center justify-between py-4 sm:max-w-none md:max-w-none lg:max-w-6xl lg:py-5 mx-auto">
                <div class="flex justify-between items-center">
                    <div class=" w-1/2 text-left">
                        <div class="text-left max-w-3xl">
                            <h2 class="text-primary font-[900] text-5xl  mb-4 leading-snug">{{ international.title }}</h2>
                            <p class="text-secondary text-xl max-w-md mb-6">{{ international.Subtitle }}</p>
                        </div>
                        <button class="!w-[136px] bg-warning hover:bg-[#e67021] p-3 py-2 text-center rounded-md">
                            <a class="text-white " href="#">Open Account</a>
                        </button>

                    </div>
                    <div class="w-1/2">
                        <img class="w-full" :src="international.imageUrl" alt="">
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
        <div class=" flex  justify-center items-center py-6 gap-3 bg-primaryLight">
            <p class="text-lg text-secondary">2 Easy Steps to Open an International Account Online</p>
            <button class="!w-[200px] bg-primary hover:bg-blue-500 p-3 py-2  rounded-[4px]">
                <a class=" text-center  text-white " href="#">Learn More</a>
            </button>
        </div>
        <!-- International Account  Hero part start-->
        <!-- Why choose Firstrade part start -->
        <div class="globals Benefits_container__sJSt_">
            <div class="m-auto max-w-7xl px-8  mt-8 ">
                <h2 class="py-10 text-3xl text-primary font-[800] text-center lg:text-left">{{ ChooseFirstrade.title }}</h2>
                <div class="flex flex-wrap justify-between text-left">
                    <div class="flex max-w-[47%] gap-6 justify-between mb-8" v-for="item in ChooseFirstrade.options"
                        :key="item.id">
                        <div class=" self-start w-1/5">
                            <img class="w-full object-contain" :alt="item.title" :src="item.imageUrl">
                        </div>
                        <div class="text-[#4d6582] w-4/5">
                            <h3 class="mb-4 text-xl font-[700]">{{ item.title }}</h3>
                            <div class="text-lg md:text-base">{{ item.description }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Why choose Firstrade part end -->
        <!-- Invest us market part start -->
        <div class="bg-primaryLight py-6">
            <div class="m-auto max-w-7xl px-8  mt-8 ">
                <h2 class="py-10 text-3xl text-primary font-[800] text-center lg:text-left">{{ usMarket.title }}</h2>
                <div class="flex flex-wrap justify-between text-left">
                    <div class="flex max-w-[47%] gap-6 justify-between mb-8" v-for="item in usMarket.options"
                        :key="item.id">
                        <div class="text-[#4d6582]">
                            <h3 class="mb-4 text-xl font-[700]">{{ item.title }}</h3>
                            <div class="text-lg md:text-base">{{ item.description }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Invest us market part end -->
        <!-- How to open international Account part start -->
        <div class="py-8 text-left">
            <div class="m-auto max-w-7xl mt-4 px-8">
                <h2 class="text-primary font-[800] text-3xl mb-10">How to open an international account</h2>
                <div class="flex justify-between gap-8 text-secondary">
                    <div class="HowToOpen_boxInner__9jDtr">
                        <h4 class="font-sans mb-4 font-semibold text-xl leading-tight">Do I qualify?</h4>
                        <p class="text-sm">You may sign up for an international account if you are not a U.S. citizen or permanent resident,
                            do not have a Social Security Number or Tax-ID Number.</p>
                        <div class="text-lg py-6 font-bold">Supported Regions</div>
                        <ul class="list-disc list-inside">
                            <li>China</li>
                            <li>Hong Kong</li>
                            <li>India</li>
                            <li>Israel</li>
                            <li>Japan</li>
                            <li>Korea, Republic of (South)</li>
                            <li>Macau</li>
                            <li>Malaysia</li>
                            <li>Mexico</li>
                            <li>New Zealand</li>
                            <li>Singapore</li>
                            <li>Taiwan</li>
                        </ul>
                        <button class="text-blue-500 py-4 font-bold" type="button">See full list of supported
                            regions</button>
                    </div>
                    <div class="HowToOpen_boxInner__9jDtr">
                        <h4 class="font-sans mb-4 font-semibold text-xl leading-tight">How to Apply</h4>
                        <div class="text-sm">Please follow the steps below to open an International Individual Account online:</div>
                        <ol class="mx-0 list-decimal">
                            <li>
                                <div class=" text-md font-bold">Complete the 
                                    <a class="text-blue-500" aria-label="Firstrade Online Application"
                                        rel="noopener noreferrer"
                                        href="https://signup.firstrade.com/create2/www/#/intro?lc=en-us">Firstrade Online
                                        Application</a>
                                </div>
                                <div class="text-sm">During the online application process, you will need to upload images of your passport.
                                    Once your online application is submitted, please allow 1-2 business days for us to
                                    review and process.</div>
                            </li><br>
                            <li>
                                <div class="text-md font-bold">Fund your account</div>
                                <div class="text-sm">Here are 2 simple methods for you to fund your Firstrade account:</div>
                                <ul class="list-disc list-inside text-sm py-4" >
                                    <li >
                                        Wire Transfer – It only takes 1-2 business days for your wire transfer to be
                                            deposited into your Firstrade account. It will be available for trading as soon
                                            as the funds are posted to your account. Please click <a
                                                href="/support/funding">here</a> for wire instructions.
                                    </li>
                                    <li>
                                        ACH Electronic Funds Transfer - If you have a U.S.-based bank account, you may
                                            link your bank account to your Firstrade account. Once you complete the setup,
                                            you’ll be able to transfer funds electronically without any fees. Here are two
                                            ways you can setup your ACH bank profile:
                                    </li>
                                </ul>
                                <div class="ml-4">
                                    <div class="font-bold  text-md">Firstrade App</div>
                                    <ol class="list-decimal mt-0 text-sm ml-4">
                                        <li><a class="text-blue-500 hover:text-primary" href="/resources/mobile">Download &amp; login</a> to your Firstrade Account
                                        </li>
                                        <li>Go to Account &gt; Deposit/Withdrawal</li>
                                        <li>Click Setup Now, and follow the onscreen instructions</li>
                                    </ol>
                                    <div class="py-4">
                                        <div class="font-bold  text-md">Firstrade Website</div>
                                        <ol class="list-decimal mt-0 text-sm ml-4">
                                            <li><a aria-label="Login"
                                                    href="https://invest.firstrade.com/cgi-bin/login?ft_locale=en-us"
                                                    rel="noopener noreferrer">Login</a> to your Firstrade account</li>
                                            <li>Go to My Account &gt; Deposit/Transfer &gt; Bank Profile &gt; Setup a Bank
                                                Profile</li>
                                            <li>Follow the onscreen direction instructions</li>
                                        </ol>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- How to open international Account part end -->
    </div>
</template>
<script>
export default {

    data() {
        return {
            international: {
                title: "International Accounts",
                Subtitle: "Take advantage of the great opportunities offered by the U.S. financial markets.",
                imageUrl: "/images/ban_med_intlaccts.webp",

            },

            ChooseFirstrade: {
                title: "Why Choose Firstrade",
                options: [
                    {
                        id: 1,
                        imageUrl: "/images/icon_fullsuite.svg",
                        title: "Full Suite of Investment Products",
                        description: "Our full suite of investment products include stocks, options, Exchange Traded Funds (ETFs), mutual funds, bonds and CDs."
                    },
                    {
                        id: 2,
                        imageUrl: "/images/icon_platforms.svg",
                        title: "Online & mobile trading platform and tools",
                        description: "You will have the convenience to access your account information, order status, option chains and most updated market news via online or mobile devices at anywhere, anytime. We also offer a variety of free professional tools such as the advanced screener, stock price alert, streaming watchlist to assist you in building your investment portfolio."
                    },
                    {
                        id: 3,
                        imageUrl: "/images/icon_38yrs.webp",
                        title: "38 years of experience",
                        description: "Founded in 1985, Firstrade has been a leading online investment firm offering a full line of investment products and tools designed to help investors take control of their financial future. Firstrade is also a member of FINRA and SIPC.",

                    },
                    {
                        id: 4,
                        imageUrl: "/images/sipc_logo.svg",
                        title: "Additional account insurance",
                        description: "Our clearing firm, Apex Clearing Corporation, has purchased an additional insurance policy through a group of London Underwriters (with Lloyd's of London Syndicates as the Lead Underwriter) to supplement SIPC protection. This additional insurance policy becomes available to customers in the event that SIPC limits are exhausted and provides protection for securities and cash up to an aggregate of $150 million.",

                    },
                    {
                        id: 5,
                        imageUrl: "/images/icon_service.webp",
                        title: "Exceptional Customer Service in English, Mandarin & Cantonese",
                        description: "To ensure a smooth and exceptional international stock trading experience at Firstrade, our highly trained customer service representatives are ready to help you in your language of preference. We currently provide our service in English, Mandarin and Cantonese. Our trading platform is also available in English, Traditional Chinese and Simplified Chinese versions."
                    },
                    {
                        id: 6,
                        imageUrl: "/images/morningstar_logo.svg",
                        title: "Comprehensive Research Tools from the world’s most trusted investment news providers such as Morningstar",
                        description: "Firstrade offers comprehensive array of online broker tools, market insights and stock analysis reports that help you make sound decision in building your investment portfolio. These reports are provided by the world's most authoritative financial company, such as Morningstar, Briefing.com, Zacks, Benzinga and PR newswire."
                    },
                    {
                        id: 7,
                        imageUrl: "/images/icon_paperless.svg",
                        title: "Easy Account Opening Process",
                        description: "Opening an account at Firstrade is easy. You just need to fill out the online forms and send us the documents via email or fax. At Firstrade, we save your trading records and financial documents for up to 7 years. You can easily check and print your statements, trading confirmations and tax documents at your convenience.",

                    },
                    {
                        id: 8,
                        imageUrl: "/images/icon_0comm .svg",
                        title: "Low commission",
                        description: "You can trade through online or mobile devices with our low commission of $0 per trade. No minimum stock trading deposit and account maintenance fee.",

                    }
                ]
            },
            usMarket: {
                title: "Why choose to invest in the US market?",
                options: [
                    {
                        id: 1,
                        title: "Product Variety",
                        description: "The U.S market offers a variety of investment products including stocks, options, ETFs mutual funds and bonds. The variety provides investors the flexibility to select the products of their choosing based on their financial needs. In addition, investors are also allowed to execute special orders depending on the market condition as well as the risk tolerance and trading style of each investor."
                    },
                    {
                        id: 2,
                        title: "U.S Tax Benefits",
                        description: "The U.S government encourages global investors to invest in the U.S. market. Therefore, most of the foreign investors can take advantage of certain tax benefits where they will not have to pay taxes on capital gain by filling out the W-8Ben form. In most cases, foreign investors can apply through Internal Revenue Service for the tax refund that was previously charged on the dividends earned."
                    },
                    {
                        id: 3,
                        title: "Strict U.S Regulatory System & Transparent Public Company Financial Records",
                        description: "All companies listed in the U.S stock market are highly regulated by the Securities and Exchange Commission. Most of the operating and financial documents are also available to the public. The U.S securities regulatory agencies include three main organizations: The Securities and Exchange Commission, Financial Industry Regulatory Authority and Securities Investor Protection Corporation.",

                    },
                    {
                        id: 4,
                        title: "Global Portfolio Diversification",
                        description: "Enterprises from different countries and industries often choose to be listed in the U.S. stock market, but not other stock markets of the globe. By investing in the U.S stock market, investors will have the ability to have a diversified international stock trading portfolio internationally. In addition to global diversification, by trading ETFs and mutual funds, it also provides investors the advantage of choosing their investments specifically targeted to a particular sector or industry.",

                    },
                    {
                        id: 5,
                        title: "Low Cost & No Minimum Trading Requirements",
                        description: "Costs are relatively low for self-directed online trades. There are no minimum stock trading requirements on the number of shares per trade. You can have as little as one share per trade."
                    },
                    {
                        id: 6,
                        title: "Account Protection",
                        description: "Costs are relatively low for self-directed online trades. There are no minimum stock trading requirements on the number of shares per trade. You can have as little as one share per trade."
                    },

                ]
            },

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