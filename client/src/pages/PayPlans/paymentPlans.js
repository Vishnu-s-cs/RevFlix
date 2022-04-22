import React from "react";
import axios from "axios";
import { useHistory,Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import "./paymentPlans.scss"
import { Cancel,Star,Subscriptions,PlayCircleFilledWhiteOutlined, ReplayOutlined} from "@material-ui/icons";
import {Radio} from "@material-ui/core"
import { TextField,makeStyles,ThemeProvider,createMuiTheme} from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";
import 'fontsource-roboto';
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { AppBar,IconButton } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Menu,Money} from "@material-ui/icons";
import { red } from "@material-ui/core/colors";
const Plan =()=>{
  const [email, setEmail] = useState("");
  const [priceId, setpriceId] = React.useState('price_1KZZI3SEIuQNw8aUY5njN6Lf');
  const history = useHistory();
 const useStyles = makeStyles({
   root:{
border: 0,
borderRadius:14,
background: 'linear-gradient(45deg,#EADDCA, #FFA500, 	#880808)',
color:'white',
marginBottom:15,
padding: '15px 30px'
   }
 })
const theme = createMuiTheme({
  typography:{
    h4:{
      fontSize:36,
    }
  },
  palette:{
    primary:{
      main:red[800]
    },
    secondary:{
      main: yellow[600]
    }
  }
})
function ButtonStyled(){
  const classes = useStyles();
  return <Button className={classes.root}>Test styled Button
  </Button>
}

  const handleChange = (event) => {
    setpriceId(event.target.value);
  };

  
  const [prices,SetPrices]= useState([])
    useEffect(() => {
      
      fetchPrices();
    
      
    }, [])
    const fetchPrices = async()=>{try{
      const{data: res} = await axios.get("subs/prices"
      //  {
      //   headers: {
      //     token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      //   },
      // }
      );
        SetPrices(res.data);} 
        catch(err){console.log(err);}
    }
    const createSession = async(email,priceId) =>{try {
      const {data: res}= await axios.post("subs/session",
       {
         email,
        priceId,
      //  { headers: {
      //     token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      //   },
      });
      
      window.location.href = res.url;
    }
      catch(err){
        console.log(err);
        alert("please register")
       }
      
      
    };const goBack = async()=>{
      await history.push("/register")
      await  window.location.reload(false);
    }
    return(
     <div className="outer">
      <ThemeProvider theme={theme}>
      <Container  align="center" className="container">
     <>
    {/* <AppBar>
       <Toolbar>
         <IconButton><Menu/>
         <Typography variant="h6">Hello</Typography></IconButton>
         
       </Toolbar>
     </AppBar> */}
     <img src="/RevFlix-logo.jpeg" alt="" className="logo"/>
     <Typography variant="h4" component="div">Welcome to RevFlix</Typography>
     <Typography variant="subtitle1">Make your Subscription</Typography>
     {/* <ButtonStyled /> */}
    <Grid container justify="center" className="items"> 
    {prices.map((price)=>{
      return <Paper key={Math.random()} className={price.nickname==="Premium"?"paper":"paper2"}>
      <div className="Title">{price.nickname}</div>
      <div className="price">₹{price.unit_amount/100}</div><hr />
      {price.unit_amount/100==1500&&<div className="paper-body"><ul><li>365 days of premium membership</li></ul></div>}
      {price.unit_amount/100==150&&<div className="paper-body"><ul><li>30 days of premium membership</li></ul></div>}
      </Paper>
    })}
     </Grid>
     
     <div className="main"> 
     <TextField variant="outlined" type="email" placeholder="email" color="secondary" className="textField"  onChange={(e) => setEmail(e.target.value)}></TextField> 
       <div>
       
       <><FormControlLabel control={ <Radio
       checked={priceId === 'price_1KZZI3SEIuQNw8aUY5njN6Lf'}
       onChange={handleChange}
       icon={<PlayCircleFilledWhiteOutlined color="primary"/>}
       checkedIcon={<Subscriptions/>}
       value="price_1KZZI3SEIuQNw8aUY5njN6Lf"
       name="radio-buttons"
       inputProps={{ 'aria-label': 'B' }}
     /> }label="Premium" /><FormControlLabel control={ <Radio
      checked={priceId === 'price_1KZZFtSEIuQNw8aUYXKyMkQ7'}
      onChange={handleChange}
      icon={<PlayCircleFilledWhiteOutlined color="primary"/>}
       checkedIcon={<Subscriptions/>}
      value="price_1KZZFtSEIuQNw8aUYXKyMkQ7"
      name="radio-buttons"
      inputProps={{ 'aria-label': 'B' }}
    /> }label="Standard" />
    </>
   </div>
   <br />
    <ButtonGroup className="button"  variant="contained">
    <Button
    startIcon={<Subscriptions/>}
           className="button1" onClick={()=>{createSession(email,priceId)}}>Subscribe</Button> 
       <Button
    startIcon={<Cancel/>}
        color="primary" onClick={()=>{goBack()}}>Cancel</Button>
       </ButtonGroup></div></></Container></ThemeProvider></div>)

}
export default Plan