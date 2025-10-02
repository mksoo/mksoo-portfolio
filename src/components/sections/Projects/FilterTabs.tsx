import { FilterType } from '@/types';

interface FilterTabsProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FILTERS: { key: FilterType; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'tainai', label: 'TainAI' },
  { key: 'personal', label: 'Personal' },
];

export default function FilterTabs({ activeFilter, onFilterChange }: FilterTabsProps) {
  return (
    <div className="flex justify-center gap-4 mb-12">
      {FILTERS.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeFilter === filter.key
              ? 'bg-gradient-to-r from-gray-700 to-gray-500 text-white'
              : 'bg-white border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white'
          }`}
          aria-label={`${filter.label} 프로젝트 필터`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
