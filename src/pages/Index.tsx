
import React from 'react';
import { NewsProvider } from '@/context/NewsContext';
import Navbar from '@/components/Navbar';
import CategoryFilter from '@/components/CategoryFilter';
import NewsFeed from '@/components/NewsFeed';
import TrendingNews from '@/components/TrendingNews';

const Index = () => {
  return (
    <NewsProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <main className="container py-6 px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Main content */}
            <div className="w-full md:w-3/4 space-y-6">
              <CategoryFilter />
              <NewsFeed />
            </div>
            
            {/* Sidebar */}
            <div className="w-full md:w-1/4 space-y-6">
              <TrendingNews />
            </div>
          </div>
        </main>
      </div>
    </NewsProvider>
  );
};

export default Index;
