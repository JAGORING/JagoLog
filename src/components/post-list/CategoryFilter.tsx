'use client';

import { useRouter } from 'next/navigation';

interface CategoryListProps {
  categoryList?: string[];
  currentCategory?: string;
}

const CategoryFilter = ({ categoryList = [], currentCategory }: CategoryListProps) => {
  const router = useRouter();

  const onCategoryChange = (value: string) => {
    if (value === 'all') {
      router.push('/blog');
    } else {
      router.push(`/blog/${value}`);
    }
  };

  return (
    <div className="mb-4 flex gap-2 rounded-xl bg-white/30 backdrop-blur-md dark:bg-black/30">
      {categoryList.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`text-sm px-2 py-1 rounded-lg transition-all duration-300 ${
            currentCategory === category
              ? 'bg-white/20 text-white'
              : 'text-gray-700 dark:text-gray-300 hover:bg-white/10 hover:text-white'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
