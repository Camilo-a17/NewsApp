// En src/components/NewsList.jsx
import React, { useState, useEffect } from 'react';
import { getNews } from '../api';
import NewsItem from './NewsItem';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

const NewsList = () => {
  const [category, setCategory] = useState('general');
  const [news, setNews] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews('co', category);
        console.log('Noticias obtenidas:', data);
        setNews(data);
      } catch (error) {
        console.error('Error al obtener noticias:', error);
        setNews([]);
      }
    };

    fetchNews();
  }, [category]);

  const handleCategoryClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCategoryClose = (newCategory) => {
    setAnchorEl(null);
    setCategory(newCategory);
  };

  return (
    <div className="news-list-container">
      <div className="category-menu">
        <Button
          id="category-menu-button"
          aria-controls="category-menu"
          aria-haspopup="true"
          onClick={handleCategoryClick}
        >
          Categoría
        </Button>
        <Menu
          id="category-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleCategoryClose(category)}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={() => handleCategoryClose('general')}>General</MenuItem>
          <MenuItem onClick={() => handleCategoryClose('business')}>Negocios</MenuItem>
          <MenuItem onClick={() => handleCategoryClose('technology')}>Tecnología</MenuItem>
          <MenuItem onClick={() => handleCategoryClose('science')}>Ciencia</MenuItem>
          <MenuItem onClick={() => handleCategoryClose('health')}>Salud</MenuItem>
          <MenuItem onClick={() => handleCategoryClose('entertainment')}>Entretenimiento</MenuItem>
          <MenuItem onClick={() => handleCategoryClose('sports')}>Deportes</MenuItem>
        </Menu>
      </div>
      <div className="news-list">
        {news.length > 0 ? (
          news.map((article, index) => <NewsItem key={index} article={article} />)
        ) : (
          <p>Cargando noticias...</p>
        )}
      </div>
    </div>
  );
};

export default NewsList;
