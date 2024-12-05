import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box, Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ProductCard({ products, addToCart }) {
    const navigate = useNavigate();

    const handleViewDetails = (product) => {
        navigate('/productDetails', { state: { product } });  // Pass product details using navigate
    };

    return (
        <Grid container spacing={3} style={{ padding: '20px' }}>
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={3} key={product.id}>
                    <Card sx={{ width: '100%' }} onClick={() => handleViewDetails(product)}>
                        {/* <Card sx={{ width: '100%' }}> */}

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
                            {/* <Button onClick={() => handleViewDetails(product)}>View Details</Button> */}

                            <br></br>
                            <Button onClick={() => addToCart(product)} variant="contained" color="success">
                                Add to Cart
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default ProductCard;
// import React from 'react';
// import { Card, CardContent, Button, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// function ProductCard({ products, addToCart }) {
//     const navigate = useNavigate();

//     const handleViewDetails = (product) => {
//         navigate('/productDetails', { state: { product } });  // Pass product details using navigate
//     };

//     return (
//         <div>
//             {products.map(product => (
//                 <Card key={product.id} style={{ marginBottom: '20px' }}>
//                     <CardContent>
//                         <Typography variant="h6">{product.title}</Typography>
//                         <Typography variant="body2">{product.description}</Typography>
//                         <Button onClick={() => handleViewDetails(product)}>View Details</Button>
//                         <Button onClick={() => addToCart(product)} style={{ marginLeft: '10px' }}>
//                             Add to Cart
//                         </Button>
//                     </CardContent>
//                 </Card>
//             ))}
//         </div>
//     );
// }

// export default ProductCard;
