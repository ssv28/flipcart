


import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box, Rating } from '@mui/material';

function ProductCard({ products }) {
  const handleCardClick = (product) => {
    const productData = encodeURIComponent(JSON.stringify(product));
    const productUrl = `/productDetails?data=${productData}`;
    window.open(productUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Grid container spacing={3} style={{ padding: '20px' }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={3} key={product.id}>
          <Card sx={{ width: '100%' }} onClick={() => handleCardClick(product)}>
            <CardMedia
              component="img"
              height="200"
              image={product.thumbnail}
              alt={product.title}
              style={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h6" component="div" noWrap>
                {product.title}
              </Typography>
              <Typography component="p" sx={{ color: 'red' }} noWrap>
                {product.discountPercentage}% OFF
              </Typography>
              <Box display="flex" alignItems="center" marginTop={1}>
                <Rating value={product.rating} precision={0.5} readOnly size="small" />
                <Typography variant="body2" color="textSecondary" marginLeft={1}>
                  {product.rating} ({product.stock} left)
                </Typography>
              </Box>
              <Typography variant="h6" color="primary" marginTop={2}>
                ₹ {product.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductCard;
