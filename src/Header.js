import React from 'react';
import "./Header.css";
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';

const Header = ({cartItems,wishlistItems}) => {
    return (
        <React.Fragment>
            
            <AppBar position='sticky' style={{ color: "#364391" }} >
                <Toolbar >

                    <Typography variant='h5' style={{ color: "white", marginRight: "auto", marginLeft: '20px'  }} >
                        <Link to="/" className='logo'>E-COMMERCE APP</Link> </Typography>
                    
                    <IconButton >
                        <Link to="/wishlist" >
                        <FavoriteBorderIcon style={{ color: "white", fontSize: '30px' }} />
                        </Link>
                        <Typography style={{ color: "white", marginRight: "auto", marginTop: "-20px" }} >{wishlistItems.length}</Typography>
                    </IconButton>

                    <IconButton>
                        <Link to="/cart">
                            <AddShoppingCartIcon style={{ color: "white", fontSize: '30px' }} />
                        </Link>
                        <Typography style={{ color: "white", marginBottom: "20px" }}>{cartItems.length}</Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
            

        </React.Fragment>
    )
}

export default Header;