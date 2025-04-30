
export type NewsCategory = 
  | 'tech' 
  | 'business' 
  | 'sports' 
  | 'entertainment' 
  | 'health' 
  | 'science' 
  | 'politics';

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  source: string;
  publishedAt: string;
  category: NewsCategory;
  imageUrl: string;
  isBreaking?: boolean;
}
