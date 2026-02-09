import { usePageMeta } from '../seo/usePageMeta';

export default function PrivacyPolicyPage() {
  usePageMeta({
    title: 'Privacy Policy - Student Help Portal',
    description: 'Read our privacy policy to understand how we collect, use, and protect your information on Student Help Portal.',
  });

  return (
    <div className="container py-6 sm:py-8 md:py-12 max-w-4xl px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-6 sm:mb-8">Last updated: February 9, 2026</p>

      <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none space-y-6">
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            Student Help Portal ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
            explains how we collect, use, and safeguard information when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Information We Collect</h2>
          
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Information You Provide</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            When you use our contact form, we collect:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 leading-relaxed">
            <li>Your name</li>
            <li>Your email address</li>
            <li>The message content you submit</li>
          </ul>

          <h3 className="text-lg sm:text-xl font-semibold mb-3">Automatically Collected Information</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            When you visit our website, we may automatically collect certain technical information, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>IP address (anonymized)</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
            <li>Respond to your inquiries and provide customer support</li>
            <li>Improve our website content and user experience</li>
            <li>Analyze website usage patterns and trends</li>
            <li>Ensure the security and proper functioning of our website</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Data Storage and Security</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Contact form submissions are stored securely on the Internet Computer blockchain infrastructure. 
            We implement appropriate technical and organizational measures to protect your information against 
            unauthorized access, alteration, disclosure, or destruction.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            However, no method of transmission over the internet or electronic storage is 100% secure. While we 
            strive to protect your information, we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Data Retention</h2>
          <p className="text-muted-foreground leading-relaxed">
            We retain contact form submissions for as long as necessary to respond to your inquiry and for record-keeping 
            purposes. You may request deletion of your information by contacting us through our contact form.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Third-Party Services</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our website may contain links to external websites operated by government bodies, educational institutions, 
            or other third parties. We are not responsible for the privacy practices of these external sites. We encourage 
            you to review their privacy policies before providing any personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Cookies and Tracking</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may use cookies and similar tracking technologies to enhance your browsing experience and analyze website 
            traffic. You can control cookie settings through your browser preferences. Note that disabling cookies may 
            affect some website functionality.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Your Rights and Choices</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information (subject to legal obligations)</li>
            <li>Opt out of receiving communications from us</li>
            <li>Object to certain processing of your information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Children's Privacy</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our website is intended for students of all ages. We do not knowingly collect personal information from 
            children under 13 without parental consent. If you believe we have collected information from a child 
            under 13, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
            Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy 
            Policy periodically.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us through 
            our contact form. We will respond to your inquiry as soon as possible.
          </p>
        </section>

        <div className="mt-8 p-4 bg-muted/30 border rounded-lg">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>Disclaimer:</strong> This privacy policy is provided for informational purposes and does not 
            constitute legal advice. For specific legal questions, please consult with a qualified attorney.
          </p>
        </div>
      </div>
    </div>
  );
}
