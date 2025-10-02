import { NAV_ITEMS } from '@/constants';
import { scrollToSection } from '@/utils/scroll';

interface NavLinksProps {
  onItemClick?: () => void;
}

export default function NavLinks({ onItemClick }: NavLinksProps) {
  const handleClick = (href: string) => {
    scrollToSection(href);
    onItemClick?.();
  };

  return (
    <>
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <button
            onClick={() => handleClick(item.href)}
            className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-300 cursor-pointer"
          >
            {item.label}
          </button>
        </li>
      ))}
    </>
  );
}
