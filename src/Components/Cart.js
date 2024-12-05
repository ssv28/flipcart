import React from 'react';
import { Card, CardContent, Button, Grid, Typography, Box, Divider } from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

function Cart({ cart, removeFromCart, handleBuyNow }) {
  return (
    <div>
      <br></br>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Shopping Cart
      </Typography>
      <br></br>

      {cart.length === 0 ? (
        <Typography variant="h6" align="center" color="textSecondary">
          Your cart is empty.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {
          cart.map(item => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  {/* Product Thumbnail with reduced size */}
                  <Box
                    component="img"
                    src={item.thumbnail}
                    alt={item.title}
                    sx={{
                      width: '150px',  
                      height: 'auto',  
                      display: 'block',
                      margin: '0 auto',
                      borderRadius: 1
                    }}
                  />
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#000', fontWeight: 'bold' }}>
                    ₹{item.price}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'green' }}>
                    {item.discountPercentage}% off &nbsp;   {item.availabilityStatus}
                  </Typography>
                  <br></br>
                  <Typography variant="p" gutterBottom>
                    {item.returnPolicy}
                  </Typography>

                  <Divider sx={{ my: 1 }} />

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        onClick={() => removeFromCart(item.id)}
                        sx={{
                          background: "red",
                          color: "#fff",
                          textTransform: 'none',
                        }}
                      >
                      <RemoveShoppingCartIcon/>  Remove
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleBuyNow}
                        sx={{
                          background: "#4CAF50",
                          textTransform: 'none',
                        }}
                      >
                        PLACE ORDER
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}


    </div>
  );
}

export default Cart;
