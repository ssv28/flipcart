import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Header({ cartLength }) {
  
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Flipkart Clone
          </Link>
        </Typography>
       
        <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
          <Badge badgeContent={cartLength} color="error">
            <Typography variant="body1"><ShoppingCartIcon/></Typography>
          </Badge>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

