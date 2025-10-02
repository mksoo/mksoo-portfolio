import SectionTitle from '@/components/ui/SectionTitle';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <SectionTitle>CONTACT</SectionTitle>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          새로운 프로젝트나 협업 기회에 대해 언제든 연락주세요
        </p>

        <div className="flex justify-center gap-12 mb-12 flex-wrap">
          <ContactInfo
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75Zm2.1-.75a.75.75 0 0 0-.6.3l7.2 5.4a.75.75 0 0 0 .9 0l7.2-5.4a.75.75 0 0 0-.6-.3h-14.1Zm15.9 2.04-6.87 5.15a2.25 2.25 0 0 1-2.76 0L3.75 8.04v9.21c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V8.04Z" />
              </svg>
            }
            label="Email"
            value="mgs3067@gmail.com"
            href="mailto:mgs3067@gmail.com"
          />

          <ContactInfo
            icon="📍"
            label="Location"
            value="Hwasung, South Korea"
          />
        </div>

        <SocialLinks />
      </div>
    </section>
  );
}
