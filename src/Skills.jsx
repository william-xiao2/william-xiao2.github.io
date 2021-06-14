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
    <div className={root} id="skills">
      <CssBaseline />
      <Container component="main" className={main} maxWidth="md">
        <Box textAlign="left">
          <Typography variant="h3" component="h2" gutterBottom>
            Skills
          </Typography>
          <Grid container direction="row" spacing={1}>
            <Grid item xs={12} sm={2}>
              <Box fontWeight="fontWeightBold" fontSize={16}>
                Languages:
              </Box>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography variant="body1">
                Proficient in Python and Java.
              </Typography>
              <Typography variant="body1">
                Familiar with Scala, Gremlin, Javascript / Typescript, OCaml, and C.
              </Typography>
            </Grid>
            <Grid item xs={2} sm={false}/>
          </Grid>
          <Grid container direction="row" spacing={2}>
            <Grid item xs="auto" sm={2}>
              <Box fontWeight="fontWeightBold" fontSize={16} >
                Software:
              </Box>
            </Grid>
            <Grid item xs="auto" sm={10}>
              <Typography variant="body1">
                Git | AWS | Apache Spark | IntelliJ IDEA | PowerBI
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}