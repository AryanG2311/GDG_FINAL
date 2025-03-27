import React from 'react';
import { NewsGrid } from '../components/NewsGrid';
import ScrollProgressBar from '../components/ScrollProgressBar';
import { ThemeProvider } from '../components/ThemeContext';
import '../css/News.css';

function News() {
  return (
    <ThemeProvider>
      <div className="news-container">
        <div className="news-header">
          {/* <h1 className="news-title">Latest News</h1> */}
          <p className="news-subtitle">Stay updated with the most recent stories</p>
        </div>
        
        <NewsGrid />
        <ScrollProgressBar />
      </div>
    </ThemeProvider>
  );
}

export default News;
