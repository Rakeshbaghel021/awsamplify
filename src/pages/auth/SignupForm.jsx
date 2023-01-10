import React, { useEffect, useState } from "react";
import { Button, Container, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import UserPool from "../../Userpool";
import { Amplify, Storage } from "aws-amplify";
// import { AmpStoriesOutlined } from "@material-ui/icons";

const useStyles = makeStyles({
  fieldContainer: {
    width: "100%",
    marginBottom: 10,
  },
  field: {
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: 10,
    padding: 10,
  },
  button: {
    width: "50%",
  },
});
const SignUpForm = () => {
  const classes = useStyles();
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    // Amplify.configure({
    //   Auth: {
    //     identityPoolId: "us-east-1:ca68e47b-00b6-4b0a-83ea-fb110f22f80f",
    //     region: "us-east-1",
    //   },

    //   Storage: {
    //     AWSS3: {
    //       bucket: "React test",
    //       region: "us-east-1",
    //     },
    //   },
    // });
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    // try {
    //   await Auth.signUp(user.name, user.email, user.password);
    //   console.log(user);
    // } catch (error) {
    //   console.log("error signing up:", error);
    // }
    // await UserPool.signUp(
    //   user.name,
    //   user.email,
    //   user.password,
    //   [],
    //   (err, data) => {
    //     if (err) {
    //       console.log(err);
    //     }
    //     console.log(data);
    //   }
    // );
    //
  };

  return (
    <Card>
      <CardContent>
        <Container>
          <Grid
            container
            alignContent="center"
            alignItems="center"
            justify="center"
          >
            <Grid>
              <h2>Sign up</h2>
            </Grid>

            <Grid
              item
              xs={12}
              alignContent="center"
              alignItems="center"
              justify="center"
            >
              <TextField
                className={classes.fieldContainer}
                name="name"
                value={user.name}
                onChange={onChangeInput}
                placeholder="username"
              />
            </Grid>
            <Grid
              item
              xs={12}
              alignContent="center"
              alignItems="center"
              justify="center"
            >
              <TextField
                className={classes.fieldContainer}
                name="email"
                value={user.email}
                onChange={onChangeInput}
                placeholder="email"
              />
            </Grid>
            <Grid
              item
              xs={12}
              alignContent="center"
              alignItems="center"
              justify="center"
            >
              <TextField
                className={classes.fieldContainer}
                name="password"
                type="password"
                value={user.password}
                onChange={onChangeInput}
                placeholder="password"
              />
            </Grid>

            <Grid
              item
              xs={12}
              alignContent="center"
              alignItems="center"
              justify="center"
            >
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={submitForm}
              >
                Sign up
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                // onClick={goToSignIn}
              >
                Sign in
              </Button>
            </Grid>
          </Grid>
        </Container>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;
