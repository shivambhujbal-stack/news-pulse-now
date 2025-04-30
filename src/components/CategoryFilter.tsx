
import React from 'react';
import { useNews } from '@/context/NewsContext';
import { Button } from '@/components/ui/button';
import { cn, getCategoryColor } from '@/lib/utils';
import { NewsCategory } from '@/lib/types';

const CategoryFilter = () => {
  const { selectedCategories, toggleCategory, selectAllCategories, clearCategories } = useNews();

  const categories: { id: NewsCategory; label: string }[] = [
    { id: 'tech', label: 'Technology' },
    { id: 'business', label: 'Business' },
    { id: 'sports', label: 'Sports' },
    { id: 'entertainment', label: 'Entertainment' },
    { id: 'health', label: 'Health' },
    { id: 'science', label: 'Science' },
    { id: 'politics', label: 'Politics' },
  ];

  return (
    <div className="py-4 overflow-x-auto">
      <div className="flex space-x-2 min-w-max">
        <Button 
          variant="outline" 
          size="sm"
          onClick={selectAllCategories}
          className="whitespace-nowrap"
        >
          All Categories
        </Button>
        
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="outline"
            size="sm"
            onClick={() => toggleCategory(category.id)}
            className={cn(
              "whitespace-nowrap",
              selectedCategories.includes(category.id) 
                ? `${getCategoryColor(category.id)} text-white border-0` 
                : "bg-transparent"
            )}
          >
            {category.label}
          </Button>
        ))}
        
        <Button 
          variant="outline" 
          size="sm"
          onClick={clearCategories}
          className="whitespace-nowrap"
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default CategoryFilter;
