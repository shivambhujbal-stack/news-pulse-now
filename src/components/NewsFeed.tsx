
import React from 'react';
import { useNews } from '@/context/NewsContext';
import NewsCard from './NewsCard';
import { Skeleton } from '@/components/ui/skeleton';

const NewsFeed = () => {
  const { news, loading, selectedCategories } = useNews();
  
  const filteredNews = news.filter(item => 
    selectedCategories.includes(item.category)
  );

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="news-card">
            <Skeleton className="aspect-video w-full" />
            <div className="p-4">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6 mb-3" />
              <div className="flex justify-between">
                <Skeleton className="h-3 w-1/4" />
                <Skeleton className="h-3 w-1/4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (filteredNews.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="text-3xl font-bold text-gray-300 mb-2">No News Selected</div>
        <p className="text-gray-500">Select at least one news category to see articles</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredNews.map((item, index) => (
        <NewsCard 
          key={item.id} 
          news={item} 
          animationDelay={index * 100}
        />
      ))}
    </div>
  );
};

export default NewsFeed;
