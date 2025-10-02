interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

export default function ContactInfo({ icon, label, value, href }: ContactInfoProps) {
  const IconWrapper = href ? 'a' : 'div';
  const iconProps = href
    ? {
        href,
        'aria-label': `Send email to ${value}`,
        className:
          'w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-500 transform hover:-translate-y-1 transition-all duration-300',
      }
    : {
        className: 'w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl cursor-default',
      };

  return (
    <div className="flex items-center gap-4">
      <IconWrapper {...iconProps}>{icon}</IconWrapper>
      <div className="text-left">
        <div className="text-sm text-gray-400 mb-1">{label}</div>
        <div className="text-lg">{value}</div>
      </div>
    </div>
  );
}
