import { useState } from 'react';
import { useSubmitContactForm } from '../hooks/useQueries';
import FormStatusBanner from '../components/content/FormStatusBanner';
import { usePageMeta } from '../seo/usePageMeta';

export default function ContactPage() {
  usePageMeta({
    title: 'Contact Us - Student Help Portal',
    description: 'Get in touch with Student Help Portal. Send us your questions, feedback, or suggestions. We are here to help students across India.',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const submitMutation = useSubmitContactForm();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(false);

    if (!validateForm()) {
      return;
    }

    try {
      await submitMutation.mutateAsync(formData);
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="container py-6 sm:py-8 md:py-12 max-w-4xl px-4">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Contact Us</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Have questions, feedback, or suggestions? We'd love to hear from you. Fill out the form below and 
          we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        <div>
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {showSuccess && (
              <FormStatusBanner
                type="success"
                message="Thank you for contacting us! We'll get back to you soon."
              />
            )}

            {submitMutation.isError && (
              <FormStatusBanner
                type="error"
                message="Failed to send message. Please try again later."
              />
            )}

            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                  errors.name ? 'border-destructive' : 'border-input'
                }`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-sm text-destructive mt-1">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email <span className="text-destructive">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                  errors.email ? 'border-destructive' : 'border-input'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message <span className="text-destructive">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none ${
                  errors.message ? 'border-destructive' : 'border-input'
                }`}
                placeholder="Tell us how we can help you..."
              />
              {errors.message && (
                <p className="text-sm text-destructive mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitMutation.isPending}
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitMutation.isPending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="space-y-5 sm:space-y-6">
          <div className="bg-card border rounded-lg p-5 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Response Time</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We typically respond to all inquiries within 24-48 hours during business days. 
              For urgent matters, please mention "Urgent" in your message subject.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-5 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">What We Can Help With</h2>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <li>• Questions about scholarships and schemes</li>
              <li>• Reporting incorrect or outdated information</li>
              <li>• Suggestions for new features or content</li>
              <li>• Technical issues with the website</li>
              <li>• General feedback and inquiries</li>
            </ul>
          </div>

          <div className="bg-accent/50 border border-primary/20 rounded-lg p-4 sm:p-5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Note:</strong> We are an information portal and cannot process scholarship applications 
              or provide official certificates. Please contact the relevant government authorities for such requests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
