<template>
    <div  @click="toggleFunction">
        <!-- Margin Loans  Hero part start -->
        <div class="bg-[#D2E8FF]">
            <div>
                <div class="bg-[url(/images/ban_medtall_cashmgt.jpg)] bg-cover bg-center py-10">
                    <div class="md:flex flex-row max-w-7xl m-auto">
                        <div class=" max-w-7xl  py-20 lg:px-10 lg:py-30 text-left">
                            <h1 class=" font-[700] mb-6 max-w-xl lg:max-w-6xl text-5xl text-primary">{{
                                cashManagement.title }}</h1>
                            <div class="max-w-xl text-xl font-bold lg:max-w-6xl lg:text-2xl  text-secondary">{{
                                cashManagement.Subtitle }}</div>
                            <p class="text-md mt-1 mb-4 max-w-lg lg:max-w-6xl lg:text-xl text-secondary">{{
                                cashManagement.description }}</p>
                            <button
                                class="bg-warning hover:bg-[#e67021] text-white text-md p-3 rounded-md !w-45 mb-3 md:!w-[185px] xl:!w-[216px]">
                                <a href="https://signup.firstrade.com/apply/en-us">{{ cashManagement.buttonText }}</a>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Margin Loans  Hero part start-->
        <!-- Account management part start -->
        <section>
            <div class="mb-10">
                <div class="m-auto max-w-7xl flex-row px-8 py-10 md:flex">
                    <div class="mr-10 w-full md:w-1/2 lg:w-3/5 text-left">
                        <div class="text-secondary text-md" v-html="cashManagement.content"></div>
                        <div class="mt-4">
                            <button type="button" class="mb-6 text-left text-lg text-blue-500 hover:text-primary">How to
                                open a
                                Firstrade Cash Management Account &gt;</button>
                        </div>
                    </div>
                    <div class="w-full rounded-lg bg-primary text-left p-6 text-white md:w-1/2 lg:w-2/5">
                        <div class="text-white">
                            <div class="text-xl text-white">{{ requirements.title }}</div>
                            <div class="border-b border-cerulean pt-1 pb-4 text-sm text-white">{{ requirements.description
                            }}</div>
                            <div class="flex flex-row border-b border-cerulean py-3">
                                <div class="w-2/3 text-lg text-white">{{ requirements.equity }}</div>
                                <div class="w-1/3 text-right text-lg text-white">{{ requirements.equityAmount }}</div>
                            </div>
                            <div class="flex flex-row border-b border-cerulean py-3">
                                <div class="w-2/3 text-lg text-white">{{ requirements.fee }}</div>
                                <div class="w-1/3 text-right text-lg text-white">{{ requirements.feeAmount }}</div>
                            </div>
                            <div class="pt-4 text-sm text-white opacity-50">{{ requirements.accountType }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Account management part end -->
        <!-- Account management benefits part start -->
        <div class="globals Benefits_container__sJSt_">
            <div class="m-auto max-w-7xl px-8">
                <h2 class="py-10 text-3xl text-ft-blue lg:text-center">Firstrade Cash Management Account Benefits</h2>
                <div class="grid grid-cols-2 justify-between gap-4 text-left">
                    <div class="flex gap-4 items-center" v-for="benefit in accountBenefits.benefits" :key="benefit.id">
                        <div class="w-80">                           
                                <img :alt="benefit.title" :src="benefit.imageUrl" >
                        </div>
                        <div class="text-[#4d6582]">
                            <h3 class="mb-4 text-xl font-[700]">{{benefit.title}}</h3>
                            <div class="text-lg md:text-base">{{ benefit.description }}</div>
                        </div>
                    </div>
                    
                </div>
                
                <div class="Benefits_modalBtn__tPGMp"><button type="button"
                        class="mt-4 mb-20 text-left text-lg text-blue-500 hover:text-primary">View Full List of Service Details &gt;</button>
                </div>
        </div>
    </div>
    <!-- Account management benefits part end -->



</div></template>
<script>
export default {

    data() {
        return {
            cashManagement: {
                title: "Firstrade Cash Management Account",
                Subtitle: "Manage, invest and spend your money all from one account",
                description: "No Setup Fee, No Annual Fee, Free ATM/Debit Card and Check Writing, Worldwide ATM Access",
                buttonText: "Apply Now",
                content: `<p class="text-lg lg:text-xl">In this fast-paced world, a Firstrade Cash Management Account provides
                            you the flexibility to trade, access and spend your money all in one account. It’s easy, fast
                            and hassle free.</p>
                        <p class="text-lg lg:text-xl">With our Cash Management Service, your cash will be in the same
                            account as your trading funds, so you won’t miss any market opportunities when it comes to
                            trading. Get started with your online money management account at Firstrade Securities today.
                        </p>`,


            },
            requirements: {
                title: "Account Opening Requirements",
                description: "For Check Writing* / ATM / Debit Card privileges",
                equity: "Account Equity Requirement",
                equityAmount: "25000$",
                fee: "Annual Fee",
                feeAmount: "0$",
                accountType: "*Check writing is only available for U.S domestic accounts",
            },

            accountBenefits: {
                title: "Firstrade Cash Management Account Benefits",
                benefits: [
                    {
                        id: 1,
                        imageUrl: "/images/icon_SM__cma_debit2.svg",
                        title: "Fast and Convenient",
                        description: "Our online cash management account with debit card makes it easier than ever when you can have the flexibility to trade, invest and spend in one account."
                    },
                    {
                        id: 2,
                        imageUrl: "/images/icon_SM__cma_travel.svg",
                        title: "Travel/Accident Insurance",
                        description: "There will be no additional cost when you charge transportation tickets on a licensed common carrier to your Visa debit card."
                    },
                    {
                        id: 3,
                        imageUrl: "/images/icon_0comm.svg",
                        title: "Zero Liability Policy",
                        description: "You will have no liability for unauthorized transactions if you promptly report the loss or theft of your card and report any unauthorized transactions.",
                        
                    },
                    {
                        id: 4,
                        imageUrl: "/images/icon_SM__cma_service.svg",
                        title: "Personalized Service",
                        description: "Speak with a Firstrade Cash Management Account specialist to learn how to set up your account, activate features and more.",
                        
                    }
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