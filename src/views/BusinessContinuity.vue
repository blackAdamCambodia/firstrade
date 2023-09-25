<template>
    <div @click="toggleFunction">
        <div class="container mx-auto text-left text-[#4d6582]">
            <div class="wrapper mx-2 my-6 lg:my-10">
                <h1 class="mb-4 text-primary font-bold font-sans text-4xl">{{$t('business_plan_page.business_continuity_plan')}}</h1>
                <p class="py-4">{{$t('business_plan_page.Certain_events_may_occur_which_impact_the_way_our')}}</p>
            <p><strong>{{$t('business_plan_page.contacting_us')}}</strong> —{{$t('business_plan_page.if_after_a_sbd_you_cannot_contact_us_as_you')}}</p>
            <p class="py-4"><strong>{{$t('business_plan_page.Our_Business_Continuity_Plan')}}</strong> —{{$t('business_plan_page.we_plan_to_quickly_recover_and_resume')}}</p>
            <p>{{$t('business_plan_page.our_business_continuity_plan_addresses')}}</p>
            <p class="py-4">{{$t('business_plan_page.our_clearing_firm_Apex_Clearing_backs_up_our_important')}}</p>
            <p>{{$t('business_plan_page.As_a_fully_disclosed_firm_we_rely_on_Apex_Clearing')}}</p>
            <p class="py-4"><strong>{{$t('business_plan_page.Varying_disruptions')}}</strong> — {{$t('business_plan_page.significant_business_disruptions_can_vary_in_their_scope')}}</p>
            <p><strong>{{$t('business_plan_page.for_more_information')}}</strong> — {{$t('business_plan_page.if_you_have_questions_about_our_business')}}</p>
        </div>   
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
          
        }
    },
    methods: {
        toggleFunction() {
            this.$emit('toggle-function');
        }
    }
}
</script>