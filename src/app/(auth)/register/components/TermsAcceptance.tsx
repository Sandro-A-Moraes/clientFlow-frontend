type termsFields = 'terms' | 'privacy';

type termsConfig = {
  key: termsFields;
  title: string;
  content: string;
};

const terms: termsConfig[] = [
  {
    key: 'terms',
    title: 'Terms of Service ',
    content: `Terms of Service

Effective Date: [Insert Date]

Welcome to our platform. By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree, you must not use the service.

1. Use of the Service
You agree to use the service only for lawful purposes and in accordance with these terms. You must not misuse, disrupt, or attempt to gain unauthorized access to any part of the platform.

2. User Accounts
You are responsible for maintaining the confidentiality of your account credentials. Any activity that occurs under your account is your responsibility.

3. Intellectual Property
All content, features, and functionality are owned by the company and are protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without prior authorization.

4. Termination
We reserve the right to suspend or terminate your access at any time, without prior notice, if you violate these terms or engage in harmful behavior.

5. Disclaimer of Warranties
The service is provided "as is" and "as available" without warranties of any kind, either express or implied.

6. Limitation of Liability
To the fullest extent permitted by law, the company shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.

7. Changes to Terms
We may update these terms from time to time. Continued use of the service constitutes acceptance of the updated terms.

8. Contact
If you have any questions, please contact us at [Insert Contact Information].`,
  },
  {
    key: 'privacy',
    title: 'Privacy Policy ',
    content: `Privacy Policy

Effective Date: 02/05/2026

Welcome to our platform. This Privacy Policy describes how we collect, use, and protect your personal information when you use our services.

1. Information We Collect
We may collect various types of information, including personal data and usage information.

2. How We Use Your Information
We use the information we collect to provide and improve our services, communicate with you, and comply with legal obligations.

3. Information Sharing
We may share your information with trusted third parties who assist us in providing our services.

4. Data Security
We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.

5. Your Rights
You have the right to access, update, or delete your personal information at any time.

6. Changes to This Policy
We may update this privacy policy from time to time. Continued use of the service constitutes acceptance of the updated policy.

7. Contact
If you have any questions about this privacy policy, please contact us at [Insert Contact Information].`,
  },
];

const TermsAcceptance = () => {
  return (
    <div className='py-1 flex gap-3'>
      <input
        type='checkbox'
        className='appearance-none w-4 h-4 border border-neutral-600 rounded-sm'
      />
      <p className='text-xs flex flex-wrap gap-1 text-white'>
        I agree to the{' '}
        {terms.map((term, index) => (
          <span key={term.key} className='flex items-center gap-1'>
            {index < terms.length - 1 && <span> and </span>}
          </span>
        ))}
      </p>
    </div>
  );
};

export default TermsAcceptance;
