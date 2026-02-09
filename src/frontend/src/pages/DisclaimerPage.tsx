import { usePageMeta } from '../seo/usePageMeta';

export default function DisclaimerPage() {
  usePageMeta({
    title: 'Disclaimer - Student Help Portal',
    description: 'Read our disclaimer to understand the terms of use and limitations of information provided on Student Help Portal.',
  });

  return (
    <div className="container py-6 sm:py-8 md:py-12 max-w-4xl px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Disclaimer</h1>
      <p className="text-sm text-muted-foreground mb-6 sm:mb-8">Last updated: February 9, 2026</p>

      <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none space-y-6">
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">General Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            The information provided on Student Help Portal is for general informational and educational purposes only. 
            While we strive to keep the information accurate and up-to-date, we make no representations or warranties 
            of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability 
            of the information, products, services, or related graphics contained on the website.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">No Official Affiliation</h2>
          <p className="text-muted-foreground leading-relaxed">
            Student Help Portal is an independent information platform. We are not affiliated with, endorsed by, or 
            connected to any government body, educational board, examination authority, scholarship provider, or any 
            other official organization mentioned on this website. All trademarks, logos, and brand names mentioned 
            belong to their respective owners.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Verification Required</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            All information provided on this website is for guidance purposes only. Users are strongly advised to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
            <li>Verify all information on official government websites before taking any action</li>
            <li>Check official notifications and circulars for accurate details</li>
            <li>Confirm dates, eligibility criteria, and procedures from authoritative sources</li>
            <li>Contact the relevant authorities directly for specific queries</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">No Guarantees</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            We do not guarantee, represent, or warrant that:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 leading-relaxed">
            <li>You will be selected for any scholarship, scheme, or program</li>
            <li>Your application will be approved or accepted</li>
            <li>You will achieve any particular result in examinations</li>
            <li>The information provided will meet your specific requirements</li>
            <li>The website will be available at all times without interruption</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Success in scholarships, schemes, and examinations depends on various factors including eligibility, 
            merit, competition, and official selection processes, which are beyond our control.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            In no event shall Student Help Portal, its owners, operators, or contributors be liable for any direct, 
            indirect, incidental, consequential, or special damages arising out of or in connection with your use of 
            this website or reliance on any information provided, even if advised of the possibility of such damages. 
            This includes, but is not limited to, loss of data, loss of opportunity, or financial loss.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">External Links</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our website may contain links to external websites operated by government bodies, educational institutions, 
            or other third parties. These links are provided for your convenience and reference only. We do not control 
            these external sites and are not responsible for their content, accuracy, availability, or privacy practices. 
            The inclusion of any link does not imply endorsement by us.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Information Accuracy</h2>
          <p className="text-muted-foreground leading-relaxed">
            While we make every effort to ensure that the information on this website is accurate and current, 
            government policies, schemes, dates, and procedures can change without notice. We are not responsible 
            for any errors, omissions, or outdated information. Users should always verify information from official 
            sources before making any decisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">No Professional Advice</h2>
          <p className="text-muted-foreground leading-relaxed">
            The information on this website does not constitute professional, legal, financial, or educational advice. 
            For specific advice tailored to your situation, please consult with qualified professionals or contact the 
            relevant authorities directly.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">User Responsibility</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            By using this website, you acknowledge that:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
            <li>You are responsible for verifying all information before acting on it</li>
            <li>You use the website and its information at your own risk</li>
            <li>You will not hold us liable for any consequences arising from your use of this website</li>
            <li>You understand that we provide information only and do not process applications or make decisions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Changes to Content</h2>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right to modify, update, or remove any content on this website at any time without prior 
            notice. We are not obligated to update information or correct errors, although we strive to do so when 
            we become aware of them.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions about this disclaimer or notice any inaccurate information on our website, please 
            contact us through our contact form. We appreciate your feedback and will make reasonable efforts to 
            address legitimate concerns.
          </p>
        </section>

        <div className="mt-8 p-4 bg-accent/50 border border-primary/20 rounded-lg">
          <p className="text-sm font-semibold mb-2">Important Reminder</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Always verify information on official government websites before making any decisions or taking any action. 
            This website is a guide only and should not be your sole source of information.
          </p>
        </div>
      </div>
    </div>
  );
}
