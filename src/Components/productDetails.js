import React from 'react';
import { Typography, Box, CardMedia, Rating, Container, Chip, Grid, Divider } from '@mui/material';
import { useLocation } from 'react-router-dom';

function ProductDetails() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productData = queryParams.get('data');
  const product = productData ? JSON.parse(decodeURIComponent(productData)) : null;

  if (!product) {
    return <Typography variant="h5">No product details available.</Typography>;
  }

  return (
    <Container sx={{ marginTop: 4 }}>
      {/* Main Product Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: 'flex-start',
        }}
      >
        {/* Image Section */}
        <Box sx={{ flex: 1 }}>
          <CardMedia
            component="img"
            sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
            image={product.thumbnail}
            alt={product.title}
          />
        </Box>

        {/* Details Section */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            SKU: {product.sku}
          </Typography>
          <Box display="flex" alignItems="center" marginTop={2}>
            <Rating value={product.rating} precision={0.5} readOnly size="large" />
            <Typography variant="body1" color="textSecondary" marginLeft={2}>
              {product.rating} stars ({product.stock} left)
            </Typography>
          </Box>

          <Typography variant="h5" color="primary" marginTop={2}>
            Price: ₹ {product.price}
          </Typography>
          <Typography variant="body1" color="error" marginTop={1}>
            Discount: {product.discountPercentage}%
          </Typography>
          <Typography variant="body2" marginTop={2}>
            {product.description}
          </Typography>

          {/* Additional Information */}
          <Typography variant="body2" marginTop={2}>
            <strong>Category:</strong> {product.category}
          </Typography>
          <Typography variant="body2" marginTop={2}>
            <strong>Brand:</strong> {product.brand}
          </Typography>
          <Typography variant="body2" marginTop={2}>
            <strong>Warranty:</strong> {product.warrantyInformation}
          </Typography>
          <Typography variant="body2" marginTop={2}>
            <strong>Shipping:</strong> {product.shippingInformation}
          </Typography>
          <Typography variant="body2" marginTop={2}>
            <strong>Availability:</strong> {product.availabilityStatus}
          </Typography>
          <Typography variant="body2" marginTop={2}>
            <strong>Return Policy:</strong> {product.returnPolicy}
          </Typography>

          {/* Tags */}
          <Box marginTop={2}>
            <Typography variant="body2" gutterBottom>
              <strong>Tags:</strong>
            </Typography>
            {product.tags.map((tag) => (
              <Chip key={tag} label={tag} sx={{ marginRight: 1, marginBottom: 1 }} />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Reviews Section */}
      <Box marginTop={4}>
        <Typography variant="h5" gutterBottom>
          Reviews
        </Typography>
        {product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <Box key={index} marginBottom={3}>
              <Typography variant="subtitle1">
                <strong>{review.reviewerName}</strong> ({review.reviewerEmail})
              </Typography>
              <Rating value={review.rating} readOnly size="small" />
              <Typography variant="body2" marginTop={1}>
                {review.comment}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {new Date(review.date).toLocaleDateString()}
              </Typography>
              {index < product.reviews.length - 1 && <Divider sx={{ marginY: 2 }} />}
            </Box>
          ))
        ) : (
          <Typography variant="body2" color="textSecondary">
            No reviews available.
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default ProductDetails;
