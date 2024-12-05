// import React, { useState } from 'react';
// import { Box, Grid, Typography, Card, CardContent, Button, Divider, Radio, RadioGroup, FormControlLabel, TextField } from '@mui/material';

// function CheckoutPage({ cartItems, addresses, onPlaceOrder }) {
//     const [selectedAddress, setSelectedAddress] = useState(addresses[0]?.id || '');
//     const [paymentMethod, setPaymentMethod] = useState('COD'); // Cash on Delivery by default

//     // Calculate Total Price
//     const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//     return (
//         <Box sx={{ padding: 4 }}>
//             <Typography variant="h4" gutterBottom>
//                 Checkout
//             </Typography>
//             <Grid container spacing={4}>
//                 {/* Left Section: Address & Payment */}
//                 <Grid item xs={12} md={8}>
//                     {/* Address Section */}
//                     <Card sx={{ marginBottom: 4 }}>
//                         <CardContent>
//                             <Typography variant="h6" gutterBottom>
//                                 Delivery Address
//                             </Typography>
//                             {addresses.length ? (
//                                 <RadioGroup
//                                     value={selectedAddress}
//                                     onChange={(e) => setSelectedAddress(e.target.value)}
//                                 >
//                                     {addresses.map((address) => (
//                                         <FormControlLabel
//                                             key={address.id}
//                                             value={address.id}
//                                             control={<Radio />}
//                                             label={`${address.name}, ${address.street}, ${address.city}, ${address.zip}`}
//                                         />
//                                     ))}
//                                 </RadioGroup>
//                             ) : (
//                                 <Typography>No saved addresses. Please add one.</Typography>
//                             )}
//                             <Button variant="outlined" sx={{ marginTop: 2 }}>
//                                 Add New Address
//                             </Button>
//                         </CardContent>
//                     </Card>

//                     {/* Payment Section */}
//                     <Card>
//                         <CardContent>
//                             <Typography variant="h6" gutterBottom>
//                                 Payment Method
//                             </Typography>
//                             <RadioGroup
//                                 value={paymentMethod}
//                                 onChange={(e) => setPaymentMethod(e.target.value)}
//                             >
//                                 <FormControlLabel
//                                     value="COD"
//                                     control={<Radio />}
//                                     label="Cash on Delivery"
//                                 />
//                                 <FormControlLabel
//                                     value="CreditCard"
//                                     control={<Radio />}
//                                     label="Credit/Debit Card"
//                                 />
//                                 <FormControlLabel
//                                     value="UPI"
//                                     control={<Radio />}
//                                     label="UPI Payment"
//                                 />
//                             </RadioGroup>
//                         </CardContent>
//                     </Card>
//                 </Grid>

//                 {/* Right Section: Order Summary */}
//                 <Grid item xs={12} md={4}>
//                     <Card>
//                         <CardContent>
//                             <Typography variant="h6" gutterBottom>
//                                 Order Summary
//                             </Typography>
//                             {cartItems.map((item) => (
//                                 <Box key={item.id} display="flex" justifyContent="space-between" marginBottom={2}>
//                                     <Typography>{item.title} (x{item.quantity})</Typography>
//                                     <Typography>₹{item.price * item.quantity}</Typography>
//                                 </Box>
//                             ))}
//                             <Divider sx={{ marginY: 2 }} />
//                             <Box display="flex" justifyContent="space-between">
//                                 <Typography variant="h6">Total</Typography>
//                                 <Typography variant="h6">₹{totalPrice}</Typography>
//                             </Box>
//                             <Button
//                                 variant="contained"
//                                 color="primary"
//                                 fullWidth
//                                 sx={{ marginTop: 3 }}
//                                 onClick={() => onPlaceOrder(selectedAddress, paymentMethod)}
//                             >
//                                 Place Order
//                             </Button>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// }

// export default CheckoutPage;

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function CheckoutPage({ cartItems, onPlaceOrder }) {
  const handleOrder = () => {
    const selectedAddress = "123 Main St, City, ZIP"; // Example address
    const paymentMethod = "COD"; // Example payment method
    onPlaceOrder(selectedAddress, paymentMethod);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      {cartItems.map((item) => (
        <Typography key={item.id}>{item.title} - ₹{item.price}</Typography>
      ))}
      <Button variant="contained" color="primary" onClick={handleOrder}>
        Place Order
      </Button>
    </Box>
  );
}

export default CheckoutPage;
