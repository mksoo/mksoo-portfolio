interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/mksoo',
    label: 'Open GitHub profile',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 4.302 2.794 7.953 6.675 9.243.488.09.675-.212.675-.477 0-.236-.009-.864-.014-1.696-2.716.59-3.29-1.309-3.29-1.309-.444-1.127-1.085-1.427-1.085-1.427-.887-.606.067-.594.067-.594.982.069 1.498 1.008 1.498 1.008.872 1.495 2.289 1.063 2.846.813.088-.631.342-1.063.62-1.309-2.168-.247-4.448-1.084-4.448-4.827 0-1.066.38-1.938 1.004-2.622-.101-.247-.435-1.241.096-2.586 0 0 .82-.263 2.686 1.002.78-.217 1.617-.326 2.45-.33.833.004 1.67.113 2.45.33 1.867-1.265 2.686-1.002 2.686-1.002.532 1.345.198 2.339.097 2.586.625.684 1.004 1.556 1.004 2.622 0 3.752-2.284 4.578-4.46 4.821.352.303.665.902.665 1.818 0 1.313-.012 2.37-.012 2.692 0 .267.186.57.68.473 3.878-1.292 6.669-4.942 6.669-9.242 0-5.385-4.365-9.75-9.75-9.75Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/kwangsu-mun-%EB%AC%B8%EA%B4%91%EC%88%98-95681b229/',
    label: 'Open LinkedIn profile',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.351V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.37-1.85 3.606 0 4.272 2.374 4.272 5.46v6.281zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.56V9h3.554v11.452z" />
      </svg>
    ),
  },
  {
    href: 'https://sept-moon.tistory.com',
    label: 'Open Blog',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M19.5 3.75h-15A1.5 1.5 0 0 0 3 5.25v13.5A1.5 1.5 0 0 0 4.5 20.25h15a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5Zm-1.5 3v1.5H6V6.75h12Zm0 3.75v1.5H6V9.75h12Zm0 3.75v1.5H6v-1.5h12Z" />
      </svg>
    ),
  },
];

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-4">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-500 transform hover:-translate-y-1 transition-all duration-300"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
