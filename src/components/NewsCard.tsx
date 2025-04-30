
import React from 'react';
import { NewsItem } from '@/lib/types';
import { getCategoryColor, formatDate, truncateText } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface NewsCardProps {
  news: NewsItem;
  animationDelay?: number;
}

const NewsCard = ({ news, animationDelay = 0 }: NewsCardProps) => {
  return (
    <Card 
      className="news-card opacity-0 animate-fade-in" 
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={news.imageUrl} 
          alt={news.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          <span className={`news-category-pill ${getCategoryColor(news.category)}`}>
            {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
          </span>
          {news.isBreaking && (
            <Badge variant="destructive" className="animate-pulse-subtle">
              Breaking
            </Badge>
          )}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="news-headline">{news.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{truncateText(news.summary, 100)}</p>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>{news.source}</span>
          <span>{formatDate(news.publishedAt)}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
