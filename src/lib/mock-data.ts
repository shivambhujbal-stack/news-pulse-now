
import { NewsItem } from "./types";

export const mockNewsData: NewsItem[] = [
  {
    id: "1",
    title: "Tech Giant Unveils Revolutionary AI Assistant",
    summary: "A new AI system claims to understand context better than any previous model",
    content: "In a groundbreaking announcement today, researchers unveiled a new artificial intelligence system that demonstrates unprecedented capabilities in understanding and responding to complex human queries.",
    author: "Alex Johnson",
    source: "Tech Today",
    publishedAt: "2025-04-30T09:30:00Z",
    category: "tech",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    isBreaking: true
  },
  {
    id: "2",
    title: "Global Markets React to New Economic Policy",
    summary: "Stock exchanges worldwide show volatility after major policy announcement",
    content: "Financial markets experienced significant fluctuations today as investors responded to a new economic policy framework announced by several major economies.",
    author: "Sarah Williams",
    source: "Financial Times",
    publishedAt: "2025-04-30T08:45:00Z",
    category: "business",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
  },
  {
    id: "3",
    title: "Championship Final Ends in Dramatic Fashion",
    summary: "Last-minute goal decides the winner in season finale",
    content: "Fans witnessed an incredible conclusion to this year's championship as an unexpected last-minute goal determined the ultimate victor in what analysts are calling one of the most exciting finals in recent history.",
    author: "Mike Roberts",
    source: "Sports Network",
    publishedAt: "2025-04-30T07:15:00Z",
    category: "sports",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018"
  },
  {
    id: "4",
    title: "Award-Winning Director Announces New Project",
    summary: "Renowned filmmaker reveals details about upcoming sci-fi trilogy",
    content: "The entertainment industry is buzzing with excitement following yesterday's announcement from the award-winning director about an ambitious new science fiction project that will span three films.",
    author: "Emily Chen",
    source: "Entertainment Weekly",
    publishedAt: "2025-04-29T22:10:00Z",
    category: "entertainment",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728"
  },
  {
    id: "5",
    title: "Breakthrough in Cancer Research Offers New Hope",
    summary: "Scientists develop promising treatment targeting specific cancer cells",
    content: "A team of international researchers has announced a significant breakthrough in cancer treatment that shows remarkable efficacy in targeting malignant cells while leaving healthy tissue unharmed.",
    author: "Dr. James Wilson",
    source: "Health Journal",
    publishedAt: "2025-04-29T18:20:00Z",
    category: "health",
    imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7",
    isBreaking: true
  },
  {
    id: "6",
    title: "Mission to Mars Discovers Evidence of Ancient Water Systems",
    summary: "Rover finds compelling signs of past flowing water on the red planet",
    content: "Scientists at the space agency are celebrating a major discovery after their Mars rover transmitted data showing clear evidence of ancient water systems on the planet's surface.",
    author: "Rachel Kim",
    source: "Science Today",
    publishedAt: "2025-04-29T14:45:00Z",
    category: "science",
    imageUrl: "https://images.unsplash.com/photo-1614728894747-a83421789f10"
  },
  {
    id: "7",
    title: "New Climate Agreement Reached at International Summit",
    summary: "World leaders commit to ambitious emission reduction targets",
    content: "After two weeks of intense negotiations, representatives from 195 countries have signed a landmark climate agreement that establishes new targets for reducing greenhouse gas emissions over the next decade.",
    author: "Thomas Wright",
    source: "Global News",
    publishedAt: "2025-04-29T11:30:00Z",
    category: "politics",
    imageUrl: "https://images.unsplash.com/photo-1618044733300-9472054094ee"
  },
  {
    id: "8",
    title: "Revolutionary Battery Technology Could Transform Electric Vehicles",
    summary: "Start-up claims new battery offers 50% more range and faster charging",
    content: "A technology start-up has unveiled a new battery design that promises to significantly extend the range of electric vehicles while also reducing charging times by more than half.",
    author: "Daniel Lee",
    source: "Tech Innovations",
    publishedAt: "2025-04-29T09:15:00Z",
    category: "tech",
    imageUrl: "https://images.unsplash.com/photo-1586766020546-8573d66419a6"
  },
  {
    id: "9",
    title: "Major Retailer Announces Expansion into New Markets",
    summary: "Company plans to open 200 new stores across three continents",
    content: "In a bold move that defies current retail trends, a major retail corporation has announced plans for significant global expansion, with hundreds of new physical locations planned over the next three years.",
    author: "Jennifer Lopez",
    source: "Business Weekly",
    publishedAt: "2025-04-28T21:40:00Z",
    category: "business",
    imageUrl: "https://images.unsplash.com/photo-1604719312566-8912e9667d17"
  },
  {
    id: "10",
    title: "Underdog Team Makes History with Championship Win",
    summary: "First title in franchise history comes after remarkable season",
    content: "Sports fans around the world are celebrating an inspiring story of perseverance as the underdog team claimed their first-ever championship title following a season that defied all expectations.",
    author: "Carlos Mendez",
    source: "Sports Center",
    publishedAt: "2025-04-28T19:20:00Z",
    category: "sports",
    imageUrl: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12"
  }
];

export const generateBreakingNews = (): NewsItem => {
  const categories: Array<NewsItem["category"]> = [
    "tech", "business", "sports", "entertainment", "health", "science", "politics"
  ];
  
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const id = `breaking-${Date.now()}`;
  
  const breakingNewsByCategory = {
    tech: {
      title: "Major Security Breach Affects Millions of Users",
      summary: "Tech companies scrambling to patch vulnerability after massive data leak",
      content: "Cybersecurity experts are advising users to immediately update their devices and change passwords following the discovery of a significant security vulnerability that has potentially exposed sensitive data of millions of users worldwide.",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3"
    },
    business: {
      title: "Unexpected Merger Creates New Market Giant",
      summary: "Surprise announcement sends shockwaves through the industry",
      content: "Business analysts are predicting major market shifts following today's unexpected announcement of a merger between two industry leaders, creating what will immediately become the largest company in the sector.",
      imageUrl: "https://images.unsplash.com/photo-1618044733300-9472054094ee"
    },
    sports: {
      title: "Star Player Announces Shocking Retirement",
      summary: "Fans and teammates stunned by the unexpected decision",
      content: "The sports world was left in shock today as one of the game's most celebrated athletes announced an immediate retirement, citing personal reasons and bringing an abrupt end to an illustrious career.",
      imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211"
    },
    entertainment: {
      title: "Beloved Film Franchise Announces Surprise Sequel",
      summary: "Original cast confirmed to return after decade-long hiatus",
      content: "Entertainment insiders report that production has secretly begun on a sequel to one of the most beloved film franchises of all time, with the original cast returning for what sources describe as a 'true continuation' of the story.",
      imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26"
    },
    health: {
      title: "New Study Challenges Decades of Nutritional Advice",
      summary: "Research suggests fundamental rethinking of dietary guidelines",
      content: "Health professionals are reviewing longstanding nutritional recommendations following the publication of a comprehensive new study that appears to contradict several decades of established dietary advice.",
      imageUrl: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71"
    },
    science: {
      title: "Astronomers Detect Unusual Signal from Nearby Star",
      summary: "Scientific community cautiously analyzing unexpected radio emissions",
      content: "Excitement is growing in the scientific community after several observatories independently confirmed the detection of unusual radio signals appearing to originate from a nearby star system, prompting intensive analysis and follow-up observations.",
      imageUrl: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3"
    },
    politics: {
      title: "Surprise Candidate Enters Presidential Race",
      summary: "Political landscape shifted by unexpected late entry",
      content: "Political analysts are scrambling to reassess election predictions following today's surprise announcement from a prominent figure who has declared their candidacy for the upcoming presidential election despite previous denials of interest.",
      imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9"
    }
  };
  
  const news = breakingNewsByCategory[randomCategory];
  
  return {
    id,
    title: news.title,
    summary: news.summary,
    content: news.content,
    author: "Breaking News Team",
    source: "News Pulse Now",
    publishedAt: new Date().toISOString(),
    category: randomCategory,
    imageUrl: news.imageUrl,
    isBreaking: true
  };
};
