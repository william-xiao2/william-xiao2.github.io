import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '10vh',
  },
  main: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
}));

export default function Education() {
  const { root, main } = useStyles();
  return (
    <div id="education" className={root} style={{backgroundColor: '#FFF7F3'}}>
      <CssBaseline />
      <Container component="main" className={main} maxWidth="md">
        <Box textAlign="left">
          <Typography variant="h3" component="h2" gutterBottom>
            Education
          </Typography>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Cornell University | 2017 - 2020
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                BS in Computer Science and Operations Research
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box fontWeight="fontWeightBold" fontSize={16}>
                GPA:
              </Box>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography variant="body1" gutterBottom>
                {"4.0, "}
                <Box component="span" fontStyle="italic" fontSize={16}>
                  summa cum laude
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={"auto"} sm={2}>
              <Box fontWeight="fontWeightBold" fontSize={16}>
                Coursework:
              </Box>
            </Grid>
            <Grid item xs={"auto"} sm={10}>
              <Typography variant="body1">
                Computer Graphics |
                Computer Vision |
                Natural Language Processing |
                Computer Game Architecture |
                Analysis of Algorithms |
                Data Structures and Functional Programming |
                Computer System Organization and Programming |
                Probability and Statistics I & II |
                Optimization I & II |
                Engineering Stochastic Processes I |
                Game Theory |
                Learning with Big Messy Data
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}