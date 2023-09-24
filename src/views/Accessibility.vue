<template>
    <div @click="toggleFunction">
        <div class="container mx-auto text-left text-[#4d6582]">
            <div class="wrapper mx-2 my-6 lg:my-10">
                <h1 class="mb-4 text-4xl font-bold font-sans text-primary">Accessibility Statement</h1>
                <h3 class="text-2xl font-bold font-sans my-4">General</h3>
                <p>Access to any company's website can be challenging for persons having certain disabilities. A person's
                    disability is often unique. What may work well for one person, may cause difficulties for another
                    person. Our company has made efforts to accommodate as many of our customers and potential customers as
                    is reasonable given our size, resources, and knowledge of our customers, and potential customer's needs.
                    To that end we have engaged the services of professionals to assist and advise us in these matters. More
                    general information about website access and website access statements can be found at 
                    <a class="text-blue-500"
                        target="_blank" rel="noopener noreferrer"
                        href="http://www.AccessibilityStatements.com">www.AccessibilityStatements.com</a> and at 
                    <a class="text-blue-500"
                        target="_blank" rel="noopener noreferrer"
                        href="http://www.Karlinlaw.com/Accessibility-Statements-for-Websites.shtml">www.Karlinlaw.com/Accessibility-Statements-for-Websites.shtml</a>
                </p>
                <h3 class="text-2xl font-bold font-sans my-4">Accessibility on this Website</h3>
                <p>Our website provides several methods, features, and policies that can help with access to our website
                    and/or to products or services provided or referred to on our website or by our business.</p>
                <p class="my-4">There are also various aids available by third parties and which are provided by most browsers. A general
                    discussion of these aids can be found on several websites, including
                     <a target="_blank"
                     class="text-blue-500"
                        rel="noopener noreferrer"
                        href="http://www.AccessibilityStatements.com">www.AccessibilityStatements.com</a> and at 
                        <a class="text-blue-500"
                        target="_blank" rel="noopener noreferrer" href="http://www.Karlinlaw.com">www.Karlinlaw.com</a>.
                    </p>
            <p>If you are having difficulty with access to our website even after utilizing any access features within
                this website and/or any third party or browser features, we invite you to contact us for further
                assistance. Contact information is set forth below.</p>
            <h3 class="text-2xl font-bold font-sans my-4">Disclaimer</h3>
            <p>We anticipate that from time to time, within our resources, we will be making modifications to parts of
                our website, and possibly modifications to accessibility of our website. Reasonable efforts toward
                improving seamless, accessible, and unhindered use of websites by customers and potential customers is
                generally a worthwhile goal. Moving closer to this goal will often depend on the knowledge the company
                has regarding any particular difficulties those using the website might encounter, as well as available
                resources and improvements with technology.</p>
            <p>Despite the efforts we may have made regarding accessibility, consistent with normal business practices
                for a company of our size and resources, some content, features, processes, or policies, may be
                improved, so we welcome your suggestions.</p>
            <h3 class="text-2xl font-bold font-sans my-4">Third Party Applications</h3>
            <p>Our website may use third-party add-ons or "plugins" for certain functions, such as Google Maps, social
                media feeds, etc. These may or may not work the same for every user and/or every type of disability. We
                do not have control over the structure of these plugins, and are unable to modify them at all or to the
                extent that would accommodate every user of our website, and are not responsible for those elements
                which we do not control.</p>
            <h3 class="text-2xl font-bold font-sans my-4">We are Here for You</h3>
            <p>If you are experiencing difficulties with any content on our website because of a disability, or if you
                require assistance with any part of our site because of your particular disability, please contact us
                and let us know. We will be happy to assist.</p>
            <p class="py-4">The following telephone number is only for assisting you if you require assistance with any part of our
                site because of your particular disability or because you are having difficulty in accessing or
                navigating any part of our website because of your particular disability. This number is not to be used
                for sales or product information, but is to be used for help using, understanding, and/or navigating our
                website and information set forth on the website. Other pages and/or links within our website may
                contain other telephone numbers to assist with sales, service, product information, accounts, or other
                aspects of our business. However, as noted above, if you have a disability that has caused or may likely
                cause you difficulty in accessing or navigating any part of our website because of your particular
                disability, you can call us toll free at: (800) 869-0196. This telephone number for assisting persons
                with disabilities, including but not limited to blind and visually impaired persons, is available 24
                hours / 7 days a week.</p>
            <p>You can also send an email, explaining in as much detail as possible, what type of difficulty you had, or
                may have had, or believe others may have. These types of emails should be sent to:
                 <a class="text-blue-500"
                    href="mailto:accessibility@firstrade.com">accessibility@firstrade.com</a> for forwarding to us.
                Note: if the email is sent to a third party website or mail server for forwarding to us, the third party
                website or mail servers does not itself read or respond to these emails, but will only forward such
                email to us without prior review.</p>
            <p class="py-4">In contacting us by telephone or email, your privacy will be strictly protected. This means that you will
                not be required to provide any personal information, including but not limited to your: Name, address,
                telephone number, the specific type of disability you may have, information about goods, products, or
                services you might be interested in, email address (unless you include it in an email you send to us or
                to our representatives).</p>
            <p>Accessibility features of popular browsers and third-party screen readers and other devices to assist
                with access to websites can be found at 
                <a class="text-blue-500" target="_blank" rel="noopener noreferrer"
                    href="http://www.Karlinlaw.com">www.Karlinlaw.com</a> and in particular 
                <a class="text-blue-500" target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.Karlinlaw.com/Accessibility-Statements-for-Websites.shtml">www.Karlinlaw.com/Accessibility-Statements-for-Websites.shtml</a>
            </p>
            <p class="py-4">Copyright © 2020 by The Karlin Law Firm LLP</p>
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