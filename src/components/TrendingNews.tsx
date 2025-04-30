
import React from 'react';
import { useNews } from '@/context/NewsContext';
import { NewsItem } from '@/lib/types';
import { formatDate, truncateText } from '@/lib/utils';
import LiveIndicator from './LiveIndicator';

const TrendingNews = () => {
  const { news, loading } = useNews();
  
  // Get the latest 5 news items
  const trendingNews = news.slice(0, 5);
  
  if (loading) {
    return (
      <div className="w-full bg-secondary p-4 rounded-lg animate-pulse">
        <div className="h-6 w-1/3 bg-muted rounded mb-4"></div>
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-muted"></div>
              <div className="h-4 bg-muted rounded w-full"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-secondary p-4 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg">Trending Now</h3>
        <LiveIndicator />
      </div>
      
      <div className="space-y-3">
        {trendingNews.map((item, index) => (
          <div key={item.id} className="flex gap-2 group cursor-pointer">
            <span className="font-bold text-primary mt-0.5 group-hover:text-primary/80 transition-colors">
              {index + 1}
            </span>
            <div>
              <h4 className="font-medium group-hover:text-primary transition-colors">
                {truncateText(item.title, 60)}
              </h4>
              <div className="text-xs text-muted-foreground mt-1 flex items-center gap-2">
                <span>{item.source}</span>
                <span>•</span>
                <span>{formatDate(item.publishedAt)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;
