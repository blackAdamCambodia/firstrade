<template>
    <div   @click="toggleFunction">
        <div class=" bg-[#d6e9ff] py-8">
            <div class="container px-3 flex items-center gap-8 justify-between py-4 sm:max-w-none md:max-w-none lg:max-w-7xl lg:py-5 mx-auto ">
                <div class="w-1/4">
                    <img :src="wireFund.imageUrl" alt="">
                </div>
                <div class="w-3/4 text-left" >
                    <h3 class="font-bold text-primary text-3xl font-sans lg:text-4xl mb-2">{{ wireFund.title  }}</h3>
                    <p class="text-secondary text-2xl">{{ wireFund.subtitle }}</p>
                </div>
            </div>
        </div> 
        <div class="container mx-auto px-3 mt-6 text-left text-[#4d6582] sm:max-w-none md:max-w-none lg:max-w-7xl lg:py-5">
                <div class="text-lg">
                    <p class="mb-2">
                        Wire Transfers are the fastest and most secure method for transferring funds to Firstrade, and are immediately available for trading upon receipt. When you wire $10,000 or more, we will rebate the wire fees charged up to $25/wire*.
                    </p>
                    <p class="mb-6">
                        Once the wire transfer funds arrive in your Firstrade account, submit a rebate request through our website and we’ll process your rebate and credit your account!  
                    </p>
                </div>
                <div class="mb-6">
                    <div class="text-2xl font-sans text-primary font-bold mb-3">
                        <h3>How to Get a Wire Fee Rebate:</h3>
                    </div>
                    <div>
                        <ul>
                            <li class=" flex items-center mb-2"><span class="text-primary font-bold text-5xl pr-3">1</span>Login to your Firstrade account.</li>
                            <li class=" flex items-center mb-2"><span class="text-primary font-bold text-5xl pr-3">2</span>Click on "Service" → "Promotions" → "Wire Transfer".</li>
                            <li class=" flex items-center mb-2"><span class="text-primary font-bold text-5xl pr-3">3</span>On the page, select your qualifying fund transfers and submit.</li>
                        </ul>
                    </div>
                </div>
                <div class="border"></div>
            </div>
            <div class="container mx-auto px-3 mt-6 text-left text-[#4d6582] sm:max-w-none md:max-w-none lg:max-w-7xl lg:py-5">
                <div>
                    <p class="mb-4">*To be eligible for this promotion, the minimum amount of your wire transfer must be $10,000 or more. This offer is applicable solely to individual and joint investment accounts. We will reimburse the expenses associated with transferring funds via wire from your financial institution to Firstrade, up to a maximum of $25 per wire transfer and a total of 3 rebates per month. Claims for rebates must be made through the online portal of your Firstrade account within 30 calendar days from the date of receiving the wired funds. Upon the submission of your claim, qualified credits will be processed promptly.</p>
                    <p  class="mb-6">These terms will take effect on 08/16/2023. Firstrade retains the right to amend or terminate this offer without prior notification. This offer is neither an invitation nor a solicitation in any jurisdiction where Firstrade is not authorized to carry out securities transactions. Certain other limitations may also be applicable.</p>
                </div>
            </div> 
    </div>
</template>
<script>
export default {
    data() {
        return{
            wireFund: {
                    title:"Wire funds in, fees on us",
                    subtitle:"Wire funds now and start trading right away.",
                    imageUrl:"/images/img_wirefee.webp"
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