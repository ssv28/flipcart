// import React from 'react';
// import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

// function Cart({ cart, removeFromCart, handleBuyNow }) {
//   return (
//     <div style={{ padding: '20px' }}>
//       <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
//       {cart.length === 0 ? (
//         <Typography>No items in the cart</Typography>
//       ) : (
//         <Grid container spacing={3}>
//           {cart.map((item) => (
//             <Grid item xs={12} sm={6} md={4} key={item.id}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6">{item.name}</Typography>
//                   <Typography variant="body2">{item.description}</Typography>
//                   <Typography variant="h6">₹ {item.price}</Typography>
//                   <Button
//                     variant="outlined"
//                     color="secondary"
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     Remove
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//       {cart.length > 0 && (
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleBuyNow}
//           style={{ marginTop: '20px' }}
//         >
//           Buy Now
//         </Button>
//       )}
//     </div>
//   );
// }

// export default Cart;


// // import React from 'react';
// // import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

// // function Cart({ cart, removeFromCart, handleBuyNow }) {
// //     return (
// //         <div style={{ padding: '20px' }}>
// //             <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
// //             {cart.length === 0 ? (
// //                 <Typography>No items in the cart</Typography>
// //             ) : (
// //                 <Grid container spacing={3}>
// //                     {cart.map((item) => (
// //                         <Grid item xs={12} sm={6} md={6} key={item.id}>
// //                             <Card>
// //                                 <CardContent>
// //                                     <Typography variant="h6">{item.name}</Typography>
// //                                     <Typography variant="body2">{item.description}</Typography>
// //                                     <Typography variant="h6">₹ {item.price}</Typography>
// //                                     <Button
// //                                         variant="outlined"
// //                                         color="secondary"
// //                                         onClick={() => removeFromCart(item.id)}
// //                                     >
// //                                         Remove
// //                                     </Button>
// //                                 </CardContent>
// //                             </Card>
// //                         </Grid>
// //                     ))}
// //                 </Grid>
// //             )}
// //             {cart.length > 0 && (
// //                 <Button
// //                     variant="contained"
// //                     color="primary"
// //                     onClick={handleBuyNow}
// //                     style={{ marginTop: '20px' }}
// //                 >
// //                     Buy Now
// //                 </Button>
// //             )}
// //         </div>
// //     );
// // }

// // export default Cart;
import React from 'react';
import { Card, CardContent, Button, Grid, Typography } from '@mui/material';

function Cart({ cart, removeFromCart, handleBuyNow }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography>No items in the cart</Typography>
      ) : (
        <Grid container spacing={3}>
          {cart.map(item => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2">{item.description}</Typography>
                  <Typography variant="h6">₹{item.price}</Typography>
                  <Button onClick={() => removeFromCart(item.id)} variant="outlined" color="secondary">
                    Remove
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      {cart.length > 0 && (
        <Button variant="contained" onClick={handleBuyNow} style={{ marginTop: '20px' }}>
          Proceed to Checkout
        </Button>
      )}
    </div>
  );
}

export default Cart;
