import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Box, CardMedia, Rating, Container, Chip, Button, Divider } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

function ProductDetails({ addToCart }) {
    const location = useLocation();
    const product = location.state?.product; // Receive product data via location.state

    if (!product) return <Typography>Product not found</Typography>;

    return (
        <Container sx={{ marginTop: 4 }}>
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

                    <Typography variant="h5" color="green" marginTop={2}>
                        Price: ₹ {product.price}
                    </Typography>
                    <Typography variant="body1" color="error" marginTop={1}>
                        Discount: {product.discountPercentage}%
                    </Typography>
                    <Typography variant="body2" marginTop={2}>
                        {product.description}
                    </Typography>

                    {/* Tags */}
                    <Box marginTop={2}>
                        <Typography variant="body2" gutterBottom>
                            <strong>Tags:</strong><br></br>
                        </Typography>
                        {product.tags.map((tag) => (
                            <Chip key={tag} label={tag} sx={{ marginRight: 1, marginBottom: 1 }} />
                        ))}
                    </Box>
                    <br></br><br></br>
                    {/* Add to Cart Button */}
                    <Button variant="contained" sx={{background:"#d26319"}}  onClick={() => addToCart(product)}>
                        <ShoppingCartIcon/>&nbsp;Add to Cart
                    </Button>&nbsp;&nbsp;
                    <Button variant="contained" color="success" sx={{ background: "orange" }}>
                        <FlashOnIcon/>&nbsp;Buy Now
                    </Button>
                    {/* <Typography variant="h6">Items in Cart: {cartCount}</Typography> */}
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

// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { Typography, Button, CardMedia } from '@mui/material';

// function ProductDetails({ addToCart }) {
//     const location = useLocation();
//     const product = location.state?.product; // Receive product data via location.state

//     if (!product) return <Typography>Product not found</Typography>;

//     return (
//         <div>
//             <CardMedia
//                 component="img"
//                 alt={product.title}
//                 height="300"
//                 image={product.thumbnail}
//             />
//             <Typography variant="h4">{product.title}</Typography>
//             <Typography variant="h6">Price: ₹{product.price}</Typography>
//             <Typography variant="body1">{product.description}</Typography>
//             <Button variant="contained" onClick={() => addToCart(product)}>
//                 Add to Cart
//             </Button>
//         </div>
//     );
// }

// export default ProductDetails;
