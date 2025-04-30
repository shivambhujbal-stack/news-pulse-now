
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { NewsItem, NewsCategory } from '@/lib/types';
import { mockNewsData, generateBreakingNews } from '@/lib/mock-data';
import { toast } from '@/components/ui/use-toast';

interface NewsContextType {
  news: NewsItem[];
  loading: boolean;
  selectedCategories: NewsCategory[];
  toggleCategory: (category: NewsCategory) => void;
  selectAllCategories: () => void;
  clearCategories: () => void;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const useNews = () => {
  const context = useContext(NewsContext);
  if (context === undefined) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};

interface NewsProviderProps {
  children: ReactNode;
}

export const NewsProvider = ({ children }: NewsProviderProps) => {
  const [news, setNews] = useState<NewsItem[]>(mockNewsData);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<NewsCategory[]>([
    'tech', 'business', 'sports', 'entertainment', 'health', 'science', 'politics'
  ]);

  // Simulate initial data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Simulate real-time news updates
  useEffect(() => {
    const interval = setInterval(() => {
      const breakingNews = generateBreakingNews();
      setNews(prevNews => [breakingNews, ...prevNews.slice(0, 14)]);
      
      toast({
        title: "Breaking News",
        description: breakingNews.title,
        variant: "default",
      });
      
    }, 30000); // Every 30 seconds
    
    return () => clearInterval(interval);
  }, []);

  const toggleCategory = (category: NewsCategory) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const selectAllCategories = () => {
    setSelectedCategories(['tech', 'business', 'sports', 'entertainment', 'health', 'science', 'politics']);
  };

  const clearCategories = () => {
    setSelectedCategories([]);
  };

  return (
    <NewsContext.Provider value={{ 
      news, 
      loading, 
      selectedCategories,
      toggleCategory,
      selectAllCategories,
      clearCategories
    }}>
      {children}
    </NewsContext.Provider>
  );
};
