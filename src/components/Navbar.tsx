
import React from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">
            NewsNow<span className="text-red-600">Live</span>
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button>Subscribe</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
