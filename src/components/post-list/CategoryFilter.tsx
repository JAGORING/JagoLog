'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

interface CategoryListProps {
  categoryList?: string[];
  currentCategory?: string;
}

const CategoryFilter = ({ categoryList = [], currentCategory }: CategoryListProps) => {
  const router = useRouter();

  const onCategoryChange = (value: string) => {
    if (value === 'All') {
      router.push('/blog');
    } else {
      router.push(`/blog/${value}`);
    }
  };

  return (
    <div className="mb-4 flex gap-2 overflow-x-auto">
      {categoryList.map((category) => (
        <Button
          key={category}
          size="sm"
          variant={currentCategory === category ? 'default' : 'ghost'}
          onClick={() => onCategoryChange(category)}
          className="text-xs sm:text-sm"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
