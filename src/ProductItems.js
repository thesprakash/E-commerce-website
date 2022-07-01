import { Button, IconButton, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography, CardActionArea } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyle = makeStyles(theme => ({
    root: {
        
    },
    Media: {
        height: theme.spacing(22),
        width:'auto',
        margin:"auto",
        marginTop:"5px"
      },
    control: {
        padding: theme.spacing(2),
    },
    price: {
        marginLeft: "32%",
        marginTop: "20px",
        marginBottom: "-20px",
        marginTop:"auto"
    },
    


}));

const ProductItems = ({ productItems, handleAddProduct, handleAddtoWishlist }) => {
    const classes = useStyle();
    return (
        <Grid container  spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center">
                    {productItems.map((productItems) => (
                        <card classname={classes.root} style={{width:"300px", margin:"10px" , backgroundColor:"white"}}>
                            <CardActionArea>
                            <IconButton onClick={() => handleAddtoWishlist(productItems)} style={{marginBottom:"-40px", marginLeft:"250px"}}>
                                    <FavoriteBorderIcon />
                                </IconButton>
                                <CardMedia
                                className={classes.Media}
                                    component="img"
                                    alt="product image"
                                    height="300"
                                    style={{width:"100"}}
                                    image={productItems.image}
                                />
                                

                                <CardContent >
                                    <Typography variant="h5" className={classes.title}>{productItems.title}</Typography>
                                    <Typography variant="subtitle1" >{productItems.info}</Typography>
                                    <Typography variant="subtitle1" className={classes.price}>Rs: {productItems.price}</Typography>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button onClick={() => handleAddProduct(productItems)} variant="contained" color="secondary" style={{ marginLeft: "25%", marginBottom: "5px" }}>
                                    ADD TO CART
                                </Button> 
                            </CardActions>





                        </card>
                    ))}
                </Grid>
            </Grid>
        </Grid>


    )
}

export default ProductItems;