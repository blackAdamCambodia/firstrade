<template>
    <div @click="toggleFunction">
        <div class="container mx-auto text-left text-[#4d6582]">
            <div class="wrapper mx-2 my-6 lg:my-10">
                <h1 class="mb-4 text-4xl font-bold font-sans text-primary">{{$t('footer.accessibility_statement')}}</h1>
                <h3 class="text-2xl font-bold font-sans my-4">{{$t('accessibility_page.general')}}</h3>
                <p>{{$t('accessibility_page.access_to_any_company_website_can')}}
                    <a class="text-blue-500"
                        target="_blank" rel="noopener noreferrer"
                        href="http://www.AccessibilityStatements.com">www.AccessibilityStatements.com</a> and at 
                    <a class="text-blue-500"
                        target="_blank" rel="noopener noreferrer"
                        href="http://www.Karlinlaw.com/Accessibility-Statements-for-Websites.shtml">www.Karlinlaw.com/Accessibility-Statements-for-Websites.shtml</a>
                </p>
                <h3 class="text-2xl font-bold font-sans my-4">{{$t('accessibility_page.accessibility_on_this_website')}}</h3>
                <p>{{$t('accessibility_page.our_website_provides_several_methods')}}</p>
                <p class="my-4">{{$t('accessibility_page.there_are_also_various_aids_available')}}
                     <a target="_blank"
                     class="text-blue-500"
                        rel="noopener noreferrer"
                        href="http://www.AccessibilityStatements.com">www.AccessibilityStatements.com</a> and at 
                        <a class="text-blue-500"
                        target="_blank" rel="noopener noreferrer" href="http://www.Karlinlaw.com">www.Karlinlaw.com</a>.
                    </p>
            <p>{{$t('accessibility_page.if_you_are_having_difficulty_with_access')}}</p>
            <h3 class="text-2xl font-bold font-sans my-4">{{$t('accessibility_page.disclaimer')}}</h3>
            <p>{{$t('accessibility_page.we_anticipate_that_from_time_to_time')}}</p>
            <p>{{$t('accessibility_page.despite_the_efforts_we_may_have_made')}}</p>
            <h3 class="text-2xl font-bold font-sans my-4">{{$t('accessibility_page.third_party_applications')}}</h3>
            <p>{{$t('accessibility_page.our_website_may_use_third_party')}}</p>
            <h3 class="text-2xl font-bold font-sans my-4">{{$t('accessibility_page.we_are_here_for_you')}}</h3>
            <p>{{$t('accessibility_page.if_you_are_experiencing_difficulties')}}</p>
            <p class="py-4">{{$t('accessibility_page.the_following_telephone_number_is_only')}}</p>
            <p>{{$t('accessibility_page.You_can_also_send_an_email_explaining')}}</p>
            <p class="py-4">{{$t('accessibility_page.in_contacting_us_by_telephone_or_email')}}</p>
            <p>{{$t('accessibility_page.accessibility_features_of_popular')}} 
                <a class="text-blue-500" target="_blank" rel="noopener noreferrer"
                    href="http://www.Karlinlaw.com">www.Karlinlaw.com</a> and in particular 
                <a class="text-blue-500" target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.Karlinlaw.com/Accessibility-Statements-for-Websites.shtml">www.Karlinlaw.com/Accessibility-Statements-for-Websites.shtml</a>
            </p>
            <p class="py-4">{{$t('accessibility_page.Copyright')}}</p>
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