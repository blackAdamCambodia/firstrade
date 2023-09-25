<template>
    <div @click="toggleFunction">
        <div class="container  m-auto">
            <div class="mx-auto grid max-w-7xl grid-cols-12 gap-8 py-16 px-4">
                <div class="text-left col-span-12">
                    <h2 class="text-4xl font-bold text-primary mb-6">{{ $t('contact_page.contact_us') }}</h2>
                    <p class=" text-md mb-6 text-secondary">{{  $t('contact_page.welcome_to_the_firstrade_support_center') }}</p>
                </div>
                <div class="col-span-12 lg:col-span-9 border-t-4 border-[#dbdbdb] border-b-4">
                    <div class="flex flex-col">
                        <div class="flex py-8 justify-between items-center border-b" v-for=" item in HelpCenterItems " :key="item.id">
                        <div class="flex items-center justify-start">
                                <div class="text-left flex items-center justify-start gap-4">
                                    <img class="w-14 " :src="item.icon" alt="">
                                    <h5 class="font-bold text-secondary w-[150px]">{{ $t(item.title) }}</h5>
                                </div>
                                <div class="">
                                    <p class=" text-secondary text-sm">{{ $t(item.desc) }}</p>
                                </div>
                        </div>
                            <a class="bg-primary p-3 w-40 text-white rounded-md" href="#">{{ $t(item.buttonText) }}</a>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex py-9 justify-between items-center border-b" v-for=" item in contactNumbers " :key="item.id">
                        <div  class="flex items-center justify-start">
                                <div class="text-left flex items-center justify-start gap-4">
                                    <img class="w-14 " :src="item.icon" alt="">
                                    <h5 class="font-bold text-secondary w-[150px]">{{ $t(item.title) }}</h5>
                                </div>
                                <div class="">
                                    <p class=" text-secondary">{{ $t(item.desc) }}</p>
                                </div>
                        </div>
                            <address class="text-[#4d6582] " v-html="$t(item.contactNumber)">
                                
                            </address>
                            
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-3">
                    <div class="bg-[#eff2f7] py-4 px-6 text-left">
                        <h5 class="text-[#4d6582] font-bold text-xl mb-4">{{ $t('contact_page.important_link') }}</h5>
                        <div class="mt-3">
                            <a href="# " class="text-blue-500 hover:text-primary">{{ $t("contact_page.search_for_a_form") }}</a>
                        </div>
                        <div class="mt-3">
                            <a href="# " class="text-blue-500 hover:text-primary">{{ $t('contact_page.fund_your_account') }}</a>
                        </div>
                    </div>
                    <div class="bg-[#eff2f7] py-12 px-6 text-left mt-6">
                        <h5 class="text-[#4d6582] font-bold text-xl mb-4">{{ $t('contact_page.NY_Headquarters') }}</h5>
                        <p class="text-md text-secondary"  v-html="$t('contact_page.office_address')"></p>
                        <div class="mt-3">
                            <a href="# " class="text-blue-500 hover:text-primary">{{ $t('link.get_started') }}</a>
                        </div>
                        <p class="text-md text-secondary mt-6" v-html="$t('contact_page.office_hours')">
                           
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
                        title:"pricing_page.help_center",
                        desc: "contact_page.get_answers_to_your_most_frequently_asked",
                        buttonText:"button.go_to_help_center",

                    },
                    {
                        id: 2,
                        icon:"/images/icon_email.svg",
                        title:"contact_page.email",
                        desc: "contact_page.our_customer_service_agents_are_ready_to_help",
                        buttonText:"pricing_page.email_us",
                    }                   
                ],
                contactNumbers:[
                {
                        id: 1,
                        icon:"/images/icon_phone.svg",
                        title:"contact_page.phone",
                        desc: "contact_page.Available_Mon_Fri",
                        contactNumber:"contact_page.contact_phone",
                    }, 
                    {
                        id: 2,
                        icon:"/images/icon_wechat.svg",
                        title:"contact_page.we_chat",
                        desc: "contact_page.we_chat_description",
                        contactNumber:"contact_page.wechat_id",
                    },
                    {
                        id: 3,
                        icon:"/images/icon_fax.svg",
                        title:"contact_page.fax",
                        desc: "contact_page.send_forms_agreements_and_more",
                        contactNumber:`<p  class="text-blue-500 hover:text-primary pointer">1-718-961-3919</p>`,
                    }
                ],
          
            
        }
    },
    methods: {
        toggleFunction() {
            this.$emit('toggle-function');
        }
    }
}
</script>
