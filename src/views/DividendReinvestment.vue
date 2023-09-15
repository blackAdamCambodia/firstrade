<template>
    <div  @click="toggleFunction" class="container  m-auto">
        <div class="mx-auto grid max-w-7xl grid-cols-12 gap-8 py-16 px-4">
                    <div class="col-span-12 lg:col-span-9">
                        <div class="text-left">
                            <h2 class="text-4xl font-bold text-primary mb-6">{{ reinvestment.title }}</h2>                           
                            <p class=" text-md mb-6 text-secondary">{{ reinvestment.description }}</p>
                        </div>
                        <div class="py-10">                            
                            <div class="text-left bg-[#eff2f7] py-8 px-6 text-[#4d6582]">
                                <h5 class="text-[#4d6582] font-bold text-lg mb-4 text-left">{{ planDetails.title }}</h5>
                                <ol class=" list-inside " v-for="item in planDetails.listItems" :key="item.id">
                                    <li class=" text-md mb-1">{{ item.desc }}</li>
                                </ol>
                            </div>
                        </div>
                        <div class="text-left text-[#4d6582]">
                            <div v-for="item in reinvestmentPlans" :key="item.id">
                                <div class="text-left text-[#4d6582] mb-6">
                                    <h3 class="text-lg mb-2 font-bold">{{ item.title }}</h3>
                                    <p class="text-sm">{{ item.desc }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-3">
                        <div class="bg-[#eff2f7] py-12 px-6 text-left">
                            <h5 class="text-[#4d6582] font-bold text-xl mb-4">{{ transferFee.title }}</h5>
                            <p class="text-md text-secondary" >{{ transferFee.details }}</p>
                            <div class="mt-3">
                                <a href="# " class="text-blue-500 hover:text-primary">Get Started</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
    </div>
</template>
<script>
export default{
    data(){
        return {
            reinvestment: {
                title:"Free Dividend Reinvestment Plan",
                description:"Sign up for Firstrade’s free Dividend Reinvestment Plan (DRIP) and automatically accumulate your positions every time you receive a dividend! You can enroll either a single eligible stock or all eligible stocks in your portfolio. Enjoy the benefits of compounding returns on your investment without having to place an order, pay a commission, or even purchase a round number of shares through DRIP programs.",             

            },
            transferFee:{
                title:"Transfer to Us for Free",
                details:"Get credit for the account transfer fee charged by other brokers, and start taking advantage of our premium products and online trading services when you transfer to Firstrade.",
                buttonText:"Get started",            
            },
            planDetails:{
                title:"PLAN DETAILS",
                listItems:[
                    {
                        id: 1,
                        desc: "1.All Marginable U.S. equities priced above $4.00 per share and selected foreign securities are eligible.",
                    },
                    {
                        id: 2,
                        desc: "2.If the dividend amount is insufficient for a share, fractional shares will be received.",
                    },
                    {
                        id: 3,
                        desc: "3.The reinvested shares will be purchased at the market price on the diviend payment date.",
                    },
                    {
                        id: 4,
                        desc: "4.Accounts can be set up for dividend reinvestment on the day the security is purchased, but in order to receive the reinvestment for an upcoming dividend, trades must settle by the record date.",
                    },
                ]            
            },
            reinvestmentPlans:[
                    {
                        id: 1,
                        title:"Accumulating additional shares with ease of mind",
                        desc: "When you receive dividends from a stock in your portfolio, our system will automatically purchase additional shares of the stock for you using the dividend amount. For example, if stock XYZ was trading at 10 dollars a share and you receive 25 dollars in dividends, 2.5 shares of XYZ will be added to your positions. DRIP investing allows you to accumulate shares for compounding returns without having to place an order or worry about commissions.",
                    },
                    {
                        id: 2,
                        title:"Enable/remove Dividend Reinvestment Plan (DRIP) in your account",
                        desc: "Access the Dividend Reinvestment page by clicking on “My Accounts -> Positions -> Dividend Reinvestment”. You can choose between one of two options: (Option 1) will enable or remove dividend reinvestment on all securities in your account, (Option 2 ) allows you to specify a security that you would like to enable or remove from the DRIP fund. DRIP investment enrollment requests will take effect the following business day.",
                    },
                    {
                        id: 3,
                        title:"Closing your position with Fractional Shares",
                        desc: "Closing your position with fractional shares can be done easily online. Simply sell all your whole shares and the fractional shares will be automatically sold by the settlement date.",
                    },
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
