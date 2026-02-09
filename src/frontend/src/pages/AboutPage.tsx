import { usePageMeta } from '../seo/usePageMeta';

export default function AboutPage() {
  usePageMeta({
    title: 'About Us - Student Help Portal',
    description: 'Learn about Student Help Portal, our mission to provide accurate educational information, and how we help students across India access scholarships, schemes, and exam updates.',
  });

  return (
    <div className="container py-6 sm:py-8 md:py-12 max-w-4xl px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">About Us</h1>

      <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Student Help Portal is dedicated to providing accurate, timely, and comprehensive information about 
            educational opportunities across India. We aim to bridge the information gap and help students from 
            all backgrounds access scholarships, government schemes, exam results, and admit cards.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">What We Do</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            We aggregate and present information about:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 leading-relaxed">
            <li>National and state-level scholarship programs</li>
            <li>Government welfare schemes for students and families</li>
            <li>Board examination and competitive exam results</li>
            <li>Admit card releases and download procedures</li>
            <li>Important dates, eligibility criteria, and application processes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Our Commitment</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            We are committed to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 leading-relaxed">
            <li>Providing accurate and verified information from official sources</li>
            <li>Updating content regularly to reflect the latest announcements</li>
            <li>Presenting information in a clear, student-friendly manner</li>
            <li>Maintaining a fast, mobile-friendly website accessible to all</li>
            <li>Respecting user privacy and data protection</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Important Note</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Student Help Portal is an independent information platform. We are not affiliated with any government 
            body, educational board, or examination authority. All information provided on this website is for 
            guidance purposes only. Students are advised to verify all details on official government websites 
            before taking any action.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We do not guarantee selection, approval, or success in any scholarship, scheme, or examination. 
            Our role is limited to providing information and guidance to help students make informed decisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            Have questions or suggestions? We'd love to hear from you. Visit our{' '}
            <a href="/contact" className="text-primary hover:underline">Contact page</a> to get in touch.
          </p>
        </section>
      </div>
    </div>
  );
}
