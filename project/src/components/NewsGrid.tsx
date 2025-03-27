// import  { useEffect, useState } from 'react';
// import { NewsCard } from './NewsCard';
// import axios from 'axios';

// export const NewsGrid: React.FC = () => {
//   const [articles,setArticles] = useState([]);

//   useEffect(()=>{
//     try {
//       axios.get("https://newsapi.org/v2/everything?q=cows+farming&apiKey=8b4c14d46085483e83303df6a6c1b7d7")
//       .then((res)=>{
//         setArticles(res.data.articles);
//       })
//     } catch (error) {
//       console.error(error);
//     }
//   },[]);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//         Indian Cow News
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {articles.map((article) => (
//           <NewsCard key={`$article.source.id`} article={article} />
//         ))}
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from 'react';
import { NewsCard } from './NewsCard';
import axios from 'axios';
import { motion } from 'framer-motion';
import '../css/NewsGrid.css';

interface Article {
  urlToImage?: string;
  title: string;
  source: {
    name: string;
  };
  publishedAt: string;
  description?: string;
  url: string;
}

export const NewsGrid: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=cows+farming&apiKey=8b4c14d46085483e83303df6a6c1b7d7"
        );
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch news. Please try again later.");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <motion.div
          className="loading-spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <p>Loading news...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <motion.div 
      className="news-grid"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </motion.div>
  );
};
