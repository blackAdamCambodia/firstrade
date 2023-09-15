<template>
    <div @click="toggleFunction">
        <div class="container  m-auto">
            <div class="mx-auto grid max-w-7xl grid-cols-12 gap-8 py-16 px-4">
                <div class="text-left col-span-12">
                    <h2 class="text-4xl font-bold text-primary mb-6">{{ contact.title }}</h2>
                    <p class=" text-md mb-6 text-secondary">{{ contact.description }}</p>
                </div>
                <div class="col-span-12 lg:col-span-9 border-t-4 border-[#dbdbdb] border-b-4">
                    <div class="flex flex-col">
                        <div class="flex py-8 justify-between items-center border-b" v-for=" item in HelpCenterItems " :key="item.id">
                        <div class="flex items-center justify-start">
                                <div class="text-left flex items-center justify-start gap-4">
                                    <img class="w-14 " :src="item.icon" alt="">
                                    <h5 class="font-bold text-secondary w-[150px]">{{ item.title }}</h5>
                                </div>
                                <div class="">
                                    <p class=" text-secondary">{{ item.desc }}</p>
                                </div>
                        </div>
                            <a href="#">{{ item.buttonText }}</a>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex py-9 justify-between items-center border-b" v-for=" item in contactNumbers " :key="item.id">
                        <div class="flex items-center justify-start">
                                <div class="text-left flex items-center justify-start gap-4">
                                    <img class="w-14 " :src="item.icon" alt="">
                                    <h5 class="font-bold text-secondary w-[150px]">{{ item.title }}</h5>
                                </div>
                                <div class="">
                                    <p class=" text-secondary">{{ item.desc }}</p>
                                </div>
                        </div>
                            <address v-html="item.contactNumber">

                            </address>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-3">
                    <div class="bg-[#eff2f7] py-4 px-6 text-left">
                        <h5 class="text-[#4d6582] font-bold text-xl mb-4">Important Link</h5>
                        <div class="mt-3">
                            <a href="# " class="text-blue-500 hover:text-primary">{{ importantLink.formLinkText }}</a>
                        </div>
                        <div class="mt-3">
                            <a href="# " class="text-blue-500 hover:text-primary">{{ importantLink.AccountLinkText }}</a>
                        </div>
                    </div>
                    <div class="bg-[#eff2f7] py-12 px-6 text-left mt-6">
                        <h5 class="text-[#4d6582] font-bold text-xl mb-4">NY Headquarters</h5>
                        <p class="text-md text-secondary">
                            30-50 Whitestone Expwy. <br>
                            Ste. A301 <br>
                            Flushing, NY 11354
                        </p>
                        <div class="mt-3">
                            <a href="# " class="text-blue-500 hover:text-primary">Get Started</a>
                        </div>
                        <p class="text-md text-secondary mt-6">
                            Office Hours. <br>
                            Monday - Friday, <br>
                            10am - 4pm ET
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>    
</template>
<script>
export default {
    data() {
        return {
            contact: {
                title: "Contact Us",
                description: "Welcome to the Firstrade Support Center. If you have any questions or concerns regarding our online trading services, we would be more than happy to answer them.",
            },
            HelpCenterItems: [
                    {
                        id: 1,
                        icon:"/images/icon_help.svg",
                        title:"Help Center",
                        desc: "Get answers to your most frequently asked questions.",
                        buttonText:"Go to Help Center",

                    },
                    {
                        id: 2,
                        icon:"/images/icon_email.svg",
                        title:"Email",
                        desc: "Our customer service agents are ready to help.",
                        buttonText:"Email Us",
                    },                    
                ],
                contactNumbers:[
                {
                        id: 3,
                        icon:"/images/icon_phone.svg",
                        title:"Phone",
                        desc: "Available Mon - Fri, 8:00am - 6:00pm ET",
                        contactNumber:`<div class="text-secondary"><p>U.S. Toll Free: <span class="text-blue-500 hover:text-primary pointer">1-800-869-8800</span></p><p>Outside the US: <span  class="text-blue-500 hover:text-primary pointer">1-718-961-6600</span></p></div>`,
                    },
                    {
                        id: 4,
                        icon:"/images/icon_fax.svg",
                        title:"Fax",
                        desc: "Send forms, agreements, and more",
                        contactNumber:`<p  class="text-blue-500 hover:text-primary pointer">1-718-961-3919</p>`,
                    }
                ],
            importantLink: {
                formLinkText: "Search For a Form",
                AccountLinkText: "Fund your Account",
                
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
