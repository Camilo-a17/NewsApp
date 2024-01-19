import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <Card sx={{ minWidth: 275, maxWidth: 300, margin: '1rem' }}>
      {urlToImage && (
        <img
          src={urlToImage}
          alt={title}
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
      )}
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={url} target="_blank" rel="noopener noreferrer">
          Leer Más
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsItem;
