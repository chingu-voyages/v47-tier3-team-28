import React, { useState } from "react";
import { Grid, Paper, Typography, TextField, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import Checkbox from "@mui/material/Checkbox";
import Hidden from "@mui/material/Hidden";

import { useNavigate } from "react-router-dom";

import { signUpStudent, signUpInstructor } from "../../api/auth";

import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../state/user";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: undefined,
    profilePhoto: undefined,
    lastName: undefined,
    dob: undefined,
    email: undefined,
    password: undefined,
    major: undefined,
    role: "student",
    bio: undefined,
    years_of_experience: undefined,
    specialization: undefined,
  });

  const addToFormData = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (formData.role === "student") {
      signUpStudent(formData).then((student) => {
        dispatch(setUser(student));
        localStorage.setItem("userToken", student.token);
        localStorage.setItem("userId", student._id);
        navigate("/");
      });
    } else {
      signUpInstructor(formData).then((instructor) => {
        dispatch(setUser(instructor));
        localStorage.setItem("userToken", instructor.token);
        localStorage.setItem("userId", student._id);
        navigate("/");
      });
    }
  };

  const paperStyle = {
    padding: "30px 20px",
    width: "100%",
    maxWidth: 600,
    margin: "20px auto",
    color: "white",
  };
  const headerStyle = { margin: 10 };
  const marginTop = { marginTop: 15 };
  const inputPropsStyle = {
    height: 40,
    backgroundColor: "white",
  };
  const textareaPropsStyle = {
    backgroundColor: "white",
  };
  const radioStyle = { color: "white" };
  const checkboxStyle = { color: "white" };

  const inputLabelPropsStyle = {
    shrink: false,
    style: { color: "black", transform: "none" },
  };

  return (
    <div className="xl:mx-[80px] rounded-[22px] mx-[28px] overflow-hidden mb-[20px]">
      <Grid container style={{ backgroundColor: "#20876E" }}>
        <Grid item lg={6} md={12} xs={12}>
          <Paper
            elevation={0}
            style={{
              ...paperStyle,
              background: "transparent",
              boxShadow: "none",
            }}
          >
            <Grid align="center">
              <h2 style={headerStyle}>SIGN UP</h2>
              <Typography
                variant="caption"
                gutterBottom
                style={{ fontSize: "16px" }}
              >
                Please fill this form to create an account!
              </Typography>
            </Grid>
            <form onSubmit={submitForm}>
              <TextField
                type="text"
                fullWidth
                placeholder="Enter your first name"
                margin="normal"
                InputProps={{ style: inputPropsStyle }}
                InputLabelProps={{ ...inputLabelPropsStyle }}
                onChange={(e) => addToFormData("firstName", e.target.value)}
              />
              <TextField
                type="text"
                fullWidth
                placeholder="Enter your last name"
                margin="normal"
                InputProps={{ style: inputPropsStyle }}
                InputLabelProps={{ ...inputLabelPropsStyle }}
                onChange={(e) => addToFormData("lastName", e.target.value)}
              />

              <TextField
                type="email"
                fullWidth
                margin="normal"
                placeholder="Enter your email"
                InputProps={{ style: inputPropsStyle }}
                InputLabelProps={{ ...inputLabelPropsStyle }}
                onChange={(e) => addToFormData("email", e.target.value)}
              />
              <TextField
                type="password"
                fullWidth
                margin="normal"
                placeholder="Enter your password"
                InputProps={{ style: inputPropsStyle }}
                InputLabelProps={{ ...inputLabelPropsStyle }}
                onChange={(e) => addToFormData("password", e.target.value)}
              />

              <TextField
                type="date"
                fullWidth
                placeholder="Enter your date of birth"
                margin="normal"
                InputProps={{ style: inputPropsStyle }}
                InputLabelProps={{ ...inputLabelPropsStyle }}
                onChange={(e) => addToFormData("dob", e.target.value)}
              />

              {formData.role == "instructor" ? (
                <div>
                  <TextField
                    type="textarea"
                    multiline
                    rows={4}
                    fullWidth
                    placeholder="Enter your biography"
                    margin="normal"
                    InputProps={{ style: textareaPropsStyle }}
                    InputLabelProps={{ ...inputLabelPropsStyle }}
                    onChange={(e) => addToFormData("bio", e.target.value)}
                  />

                  <TextField
                    type="text"
                    fullWidth
                    placeholder="Specialization"
                    margin="normal"
                    InputProps={{ style: inputPropsStyle }}
                    InputLabelProps={{ ...inputLabelPropsStyle }}
                    onChange={(e) =>
                      addToFormData("specialization", e.target.value)
                    }
                  />

                  <TextField
                    type="number"
                    fullWidth
                    placeholder="Years of experience"
                    margin="normal"
                    InputProps={{ style: inputPropsStyle }}
                    InputLabelProps={{ ...inputLabelPropsStyle }}
                    onChange={(e) =>
                      addToFormData("years_of_experience", e.target.value)
                    }
                  />
                </div>
              ) : (
                ""
              )}

              <FormControl fullWidth component="fieldset" style={marginTop}>
                <RadioGroup
                  style={{ display: "initial" }}
                  value={formData.role}
                  defaultValue="student"
                  onChange={(e) => addToFormData("role", e.target.value)}
                >
                  <FormControlLabel
                    value="student"
                    control={<Radio style={radioStyle} />}
                    label="As student"
                  />
                  <FormControlLabel
                    value="instructor"
                    control={<Radio style={radioStyle} />}
                    label="As instructor"
                  />
                </RadioGroup>
              </FormControl>

              <FormControlLabel
                control={<Checkbox style={checkboxStyle} name="checkedA" />}
                label="I accept the terms and conditions."
              />
              <div>
                <Grid
                  container
                  spacing={2}
                  justifyContent={{ xs: "center", md: "flex-start" }}
                >
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
              <Grid
                container
                spacing={2}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                {/* <Grid item xs={8} lg={8} md={6}>
                  <p style={{ marginTop: "20px", textAlign: "center" }}>
                    Already have an account?
                  </p>
                </Grid> */}
                <Grid item xs={8} lg={6} md={6}>
                  <p
                    style={{
                      marginTop: "20px",
                      textAlign: "center",
                      marginBottom: "10px",
                    }}
                  >
                    Already have an account?
                  </p>
                  <Button
                    onClick={() => navigate("/login")}
                    type="button"
                    variant="contained"
                    style={{
                      width: "100%", // For mobile
                      backgroundColor: "white",
                      color: "#20876E",
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
          <Grid
            item
            lg={6}
            md={12}
            xs={12}
            container
            alignItems="center"
            justifyContent="center"
          >
            <img
              src={"/public/authimage1.svg"}
              alt="Your Image"
              style={{ width: "80%", height: "auto" }}
            />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default Signup;
