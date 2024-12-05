import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box, Rating , TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ProductCard({ products, addToCart }) {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');


    // Filter products based on the search query
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleViewDetails = (product) => {
        navigate('/productDetails', { state: { product } });
    };

    return (
        <Box padding="20px">
             {/* Search Field */}
             <TextField
                label="Search Products"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            
            <Grid container spacing={3}>
                {filteredProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={3} key={product.id}>
                        <Card sx={{ width: '100%' }} onClick={() => handleViewDetails(product)}>
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
        </Box>
    );
}

export default ProductCard;
