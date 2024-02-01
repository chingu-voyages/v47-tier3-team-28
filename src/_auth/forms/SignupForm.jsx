import React from "react";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import Checkbox from "@mui/material/Checkbox";
import Hidden from '@mui/material/Hidden'

const Signup = () => {
  const paperStyle = { padding: "30px 20px", width: "100%", maxWidth: 600, margin: "20px auto", color: "white", };
  const headerStyle = { margin: 10 };
  const marginTop = { marginTop: 15 };
  const inputPropsStyle = {
    height: 40,
    backgroundColor: 'white', 
  };
  const radioStyle = { color: 'white' }; 
  const checkboxStyle = { color: 'white' }; 

  const inputLabelPropsStyle = { shrink: false, style: { color: 'black', transform: 'none' } };

  return (
    <Grid container style={{ backgroundColor: "#20876E" }}>
    
      <Grid item lg={6} md={12} xs={12}>
      <Paper elevation={0} style={{ ...paperStyle, background: "transparent", boxShadow: "none" }}>
          <Grid align="center">
            
            <h2 style={headerStyle}>SIGN UP</h2>
            <Typography variant="caption" gutterBottom style={{ fontSize: "16px" }}>
              Please fill this form to create an account!
            </Typography>
          </Grid>
          <form>
            <TextField fullWidth placeholder="Enter your name" margin="normal" InputProps={{ style: inputPropsStyle }} 
            InputLabelProps={{ ...inputLabelPropsStyle }}
            
            />
            <TextField fullWidth placeholder="Enter your email" margin="normal" InputProps={{ style: inputPropsStyle }} 
            InputLabelProps={{ ...inputLabelPropsStyle }}/>

<TextField
              fullWidth
              margin="normal"
              placeholder="Enter your username"
              InputProps={{ style: inputPropsStyle }} 
              InputLabelProps={{ ...inputLabelPropsStyle }}
            />
            <TextField
              fullWidth
              margin="normal"
              placeholder="Enter your password"
              InputProps={{ style: inputPropsStyle }} 
              InputLabelProps={{ ...inputLabelPropsStyle }}
            />

            <FormControl fullWidth component="fieldset" style={marginTop}>
              <RadioGroup
              
                style={{ display: "initial" }}
              >
                <FormControlLabel
                  value="user"
                  control={<Radio style={radioStyle} />}
                  label="As user"
                />
                <FormControlLabel
                  value="admin"
                  control={<Radio style={radioStyle} />}
                  label="As admin"
                />
              </RadioGroup>
            </FormControl>

            <FormControlLabel
             
              control={<Checkbox style={checkboxStyle} name="checkedA" />}
              label="I accept the terms and conditions."
            />
            <div>
            <Grid container spacing={2}  justifyContent={{ xs: 'center', md: 'flex-start' }}>
                <Grid item xs={8} lg={6} md={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      width: "100%", // For mobile
                      backgroundColor: "white",
                      color: "#20876E",
                      marginTop: "20px",
                    }}
                    margin="normal"
                  >
                    Sign up
                  </Button>
                </Grid>
            </Grid>
            </div>
            <Grid container spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                <Grid item xs={8} lg={6} md={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      width: "100%", // For mobile
                      backgroundColor: "white",
                      color: "#20876E",
                      marginTop: "20px",
                    }}
                    margin="normal"
                  >
                    Log in to your account
                  </Button>
                </Grid>
                </Grid>
          </form>
        </Paper>
      </Grid>

      
      <Hidden smDown xsDown mdDown>
        <Grid item lg={6} md={12} xs={12} container alignItems="center" justifyContent="center">
          <img src={'/public/authimage1.svg'} alt="Your Image" style={{ width: "80%", height: "auto" }} />
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default Signup;
