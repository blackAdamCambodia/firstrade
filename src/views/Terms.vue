<template>
    <div @click="toggleFunction">
        <div class="container mx-auto">
            <div class="wrapper mx-2 my-6 lg:my-10 text-secondary text-left px-4">
                <h1 class="mb-4 text-primary font-sans font-bold text-4xl ">{{ $t('footer.terms_conditions') }}</h1>
                <p>{{ $t('terms_page.the_investment_choices_and_services_on_the_firstrade') }}</p>
                <p class="py-4">{{ $t('terms_page.by_using_the_public_sections_of_the_website_you_are_indicating') }}</p>
                <p>{{ $t('terms_page.the_facts_and_information_were_believed_to_be_accurate_at_time') }}</p>
                <p class="py-4">{{ $t('terms_page.firstrade_does_not_prepare_edit_or_endorse_Content_from_Service_and_Information') }}</p>
                <p>{{ $t('terms_page.according_to_the_rules_and_regulations_application_to_exchanges') }}</p>
                <h3 class="font-[700] py-4 font-sans text-2xl ">{{ $t('terms_page.hyperlinks') }}</h3>
                <p>{{ $t('terms_page.firstrade_may_make_available_links_from_a_firstrade_web_site') }}</p>
            <h3 class="font-[700] py-4 font-sans text-2xl ">{{ $t('terms_page.system_reliability') }}</h3>
            <p>{{ $t('terms_page.system_response_and_access_times_may_vary_due') }}</p>
            <p class="py-2">{{ $t('terms_page.Firstrade_maintains_sophisticated_systems_and_employs_experienced_personnel') }}</p>
            <h3 class="font-[700] py-4 font-sans text-2xl ">{{ $t('terms_page.trademarks_and_copyrights') }}</h3>
            <p>{{ $t('terms_page.certain_names_graphics_logos_icons_designs') }}</p>
            <h3 class="font-[700] py-4 font-sans text-2xl ">{{ $t('terms_page.revisions_and_relation_to_other_agreements') }}</h3>
            <p>{{ $t('terms_page.firstrade_may_revise_the_terms_and_conditions_at_any_time') }}</p>
            <h3 class="font-[700] py-4 font-sans text-2xl ">{{ $t('terms_page.usage_license') }}</h3>
            <p>{{ $t('terms_page.firstrade_grants_you_a_single') }}</p>

            <h3 class="font-[700] py-4 font-sans text-2xl ">{{ $t('terms_page.market_information') }}</h3>
            <p>{{ $t('terms_page.firstrade_services_may_make_available_to_you_a_broad_range') }}</p>
            <p class="py-2">{{ $t('terms_page.you_may_not_copy_distribute') }}</p>

            <h3 class="font-[700] py-4 font-sans text-2xl ">{{ $t('terms_page.no_investment_advice_or_recommendations') }}</h3>
            <p>{{ $t('terms_page.the_firstrade_services_and_content') }}</p>
            <p class="py-2">{{ $t('terms_page.you_alone_assume_the_sole_responsibility') }}</p>

            <h3 class="font-[700] py-4 font-sans text-2xl ">{{ $t('terms_page.security_of_data_transmission_and_storage') }}</h3>
            <p>{{ $t('terms_page.electronic_communications_including_wired_and_wireless') }}.</p>

            <h3 class="font-[700] py-4 font-sans text-2xl ">{{ $t('terms_page.monitoring_by_firstrade') }}</h3>
            <p>{{ $t('terms_page.firstrade_its_affiliates_and_agents') }}</p>

            <h3 class="font-[700] py-4 font-sans text-2xl ">{{ $t('terms_page.restrictions_of_Use') }}</h3>            
            <p>{{ $t('terms_page.Except_as_otherwise_permitted_by_Firstrade') }}</p>

            <h3 class="font-[700] py-4 font-sans text-2xl ">{{ $t('terms_page.modification_suspension_and_termination') }}</h3>
            <p>{{ $t('terms_page.firstrade_reserves_the_right_to_modify') }}</p>

            <h3 class="font-[700] py-4 font-sans text-2xl ">{{ $t('terms_page.Mutual_funds') }}</h3>
            <p>{{ $t('terms_page.more_complete_information_about_a_fund') }}</p>

            <h3 class="font-[700] py-4 font-sans text-2xl ">{{ $t('terms_page.money_market_fund') }}</h3>
            <p>{{ $t('terms_page.the_money_market_funds_offered_by_firstrade') }}</p>

            <h3 class="font-[700] py-4 font-sans text-2xl ">{{ $t('terms_page.finra_brokercheck_hotline') }}</h3>
            <p>{{ $t('terms_page.the_financial_industry_regulatory_authority') }}</p>
            <p>{{ $t('terms_page.for_answers_to_other_questions_regarding') }}</p>
        </div>
    </div>
</div></template>
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