<template>
    <div @click="toggleFunction">
        <div class="container mx-auto text-left text-[#4d6582]">
            <div class="wrapper mx-2 my-6 lg:my-10">
                <h1 class="mb-4 text-primary font-bold font-sans text-4xl">Business Continuity Plan</h1>
                <p class="py-4">Certain events may occur which impact the way our company does business, making business continuity
                    planning essential for both you and us. When such an event has an effect that could potentially cause
                    delays or influence our normal course of business we refer to it as a "significant business disruption"
                    ("SBD"). Our goal as an online stock broker is to assure our continuing operation and ability to provide
                    our customers with complete and uninterrupted access to their funds and securities. We will immediately
                    assess each SBD and execute an appropriate plan designed to minimize the effect on our customers.
                    Obviously such events are unpredictable, however, we have thoroughly reviewed every aspect of our
                    current business including our physical and virtual locations, hardware, software, reliance on
                    utilities, telephone, and internet service providers, as well as additional services provided for our
                web site design, development, and maintenance and other trading platforms available to our customers.
            </p>
            <p><strong>Contacting Us</strong> —If after a SBD you cannot contact us as you usually do at 800-869-8800 or
                <a class="text-blue-500" href="mailto:service@firstrade.com">service@firstrade.com</a>, you should call our alternative number
                718-961-6600 or go to our website at 
                <a class="text-blue-500" href="http://www.firstrade.com">www.firstrade.com</a>. If you
                cannot access us through either of those means, you should contact our clearing firm, Apex Clearing
                Corporation (“Apex Clearing”) at 214-765-1001 or 
                <a class="text-blue-500"
                    href="mailto:helpdesk@apexclearing.com">helpdesk@apexclearing.com</a>, and you can go to 
                <a class="text-blue-500"
                    target="_blank" rel="noopener noreferrer"
                    href="http://www.apexclearing.com">www.apexclearing.com</a> for instructions on how to obtain prompt
                access to funds and securities, enter orders and process other trade- related, cash, and security
                transfer transactions.</p>
            <p class="py-4"><strong>Our Business Continuity Plan</strong> — We plan to quickly recover and resume business operations
                after a SBD and respond by safeguarding our employees and property, making a financial and operational
                assessment, protecting the firm’s books and records, and allowing our customers to transact business. In
                short, our business continuity plan is designed to permit our firm to resume operations as quickly as
                possible, given the scope and severity of the SBD.</p>
            <p>Our business continuity plan addresses: data back-up and recovery; all mission critical systems;
                financial and operational assessments; alternative communications with customers, employees, and
                regulators; alternate physical location of employees; critical supplier, contractor, bank and
                counter-party impact; regulatory reporting; and assuring our customers prompt access to their funds and
                securities if we are unable to continue our business. As an on-line broker-dealer, our technology
                systems are securely located at alternative data centers that are geographically separated and in
                different time zones. This infrastructure design ensures that if one of our data centers suffers a
                disruption in service, systems at an alternate region can be used to continue to provide service.</p>
            <p class="py-4">Our clearing firm, Apex Clearing, backs up our important records in a geographically separate area. While
                every emergency situation poses unique problems based on external factors, such as time of day and the
                severity of the disruption, we have been advised by our clearing firm that its objective is to restore
                its own operations and be able to complete existing transactions and accept new transactions and
                payments within the shortest time period possible. Your orders and requests for funds and securities
                could be delayed during this period.</p>
            <p>As a fully disclosed firm we rely on Apex Clearing to perform many of the services involved in your
                securities transactions. Your funds and securities are held by Apex Clearing and not by us. As such,
                Apex Clearing has its own Business Continuity Plan, a copy of which is located in Firstrade’s Disclosure
                Center. You can also find helpful information about Apex Clearing's Emergency Policies at 
                <a class="text-blue-500"
                    target="_blank" rel="noopener noreferrer"
                    href="https://www.apexclearing.com/emergency/">https://www.apexclearing.com/emergency/</a>.</p>
            <p class="py-4"><strong>Varying Disruptions</strong> — Significant business disruptions can vary in their scope, such as
                only our firm, a single building housing our firm, the business district where our firm is located, the
                city where we are located, or the whole region. Within each of these areas, the severity of the
                disruption can also vary from minimal to severe. In a disruption to only our firm or a building housing
                our firm, we will transfer our operations to a local site when needed and expect to recover and resume
                business as quickly as possible. In a disruption affecting our business district, city, or region, we
                will transfer our operations to a site outside of the affected area, and recover and resume business as
                quickly as possible. In either situation, we plan to continue in business, transfer operations to our
                clearing firm if necessary, and notify you through our website 
                <a class="text-blue-500"
                    href="/">www.firstrade.com</a> or our number 718-961-6600 on how to contact
                us. If the significant business disruption is so severe that it prevents us from remaining in business,
                we will assure our customer's prompt access to their funds and securities.</p>
            <p><strong>For more information</strong> — If you have questions about our business continuity planning, you
                can contact us at 800-869-8800 or <a class="text-blue-500" href="mailto:service@firstrade.com">service@firstrade.com</a>.</p>
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