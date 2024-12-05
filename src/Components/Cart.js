// import React from 'react';
// import { Card, CardContent, Button, Grid, Typography, Grid2 } from '@mui/material';

// function Cart({ cart, removeFromCart, handleBuyNow }) {
//   return (
//     <div>
//       <Typography variant="h4" gutterBottom>
//         Shopping Cart
//       </Typography>
//       {cart.length === 0 ? (
//         <Typography>No items in the cart</Typography>
//       ) : (
//         <Grid container spacing={3}>
//           {cart.map(item => (
//             <Grid item xs={12} sm={6} md={4} key={item.id}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6">{item.thumbnail}</Typography>
//                   <Typography variant="h6">{item.title}</Typography>
//                   <Typography variant="h6">₹{item.price} </Typography>
//                   <Typography variant="body2">{item.discountPercentage}  %</Typography>
//                   <Button onClick={() => removeFromCart(item.id)} variant="outlined" color="secondary">
//                     Remove
//                   </Button>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={handleBuyNow}
//                     style={{ marginTop: '20px' }}
//                   >
//                     Buy Now
//                   </Button>


//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//       {/* {cart.length > 0 && (
//         <Button variant="contained" onClick={handleBuyNow} style={{ marginTop: '20px' }}>
//           Proceed to Checkout
//         </Button>
//       )} */}
//     </div>
//   );
// }

// export default Cart;

import React from 'react';
import { Card, CardContent, Button, Grid, Typography, Box, Divider } from '@mui/material';

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
          {cart.map(item => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  {/* Product Thumbnail with reduced size */}
                  <Box
                    component="img"
                    src={item.thumbnail}
                    alt={item.title}
                    sx={{
                      width: '150px',  // Set a fixed width
                      height: 'auto',  // Maintain aspect ratio
                      display: 'block',
                      margin: '0 auto',
                      borderRadius: 1
                    }}
                  />
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'green', fontWeight: 'bold' }}>
                    ₹{item.price}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'gray' }}>
                    Discount: {item.discountPercentage}% off
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
                          '&:hover': { backgroundColor: '#f4f4f4' }
                        }}
                      >
                        Remove
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
                          '&:hover': { backgroundColor: '#4CAF50' }
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
