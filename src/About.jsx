import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import portrait from './images/portrait.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '10vh',
  },
  main: {
    marginTop: theme.spacing(13),
    marginBottom: theme.spacing(5),
  },
  avatarLarge: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    alignSelf: 'center',
  },
}));

export default function About() {
  const { root, main, avatarLarge } = useStyles();

  return (
    <div className={root} id="about">
      <CssBaseline />
      <Container component="main" className={main} maxWidth="md">
        <Grid container direction="row" spacing={2} justify = "center">
          <Grid item xs="auto" sm={6}>
            <Avatar alt="William Xiao" src={portrait} className={avatarLarge} />
          </Grid>
          <Grid item xs="auto" sm={6}>
            <Typography variant="h5" component="h2" align="left" gutterBottom>
              <Box fontWeight="fontWeightBold">
                Welcome! I'm William Xiao.
              </Box>
            </Typography>
            <Typography variant="body1" align="left" gutterBottom fontSize={20}>
              I'm a recent graduate of Cornell University, where I majored in
              computer science and operations research. Now, I've moved to working
              at Amazon as a software development engineer on the Selection
              Monitoring team, where we support Amazon's vast catalog of products
              and brands.
            </Typography>
            <Typography variant="body1" align="left" gutterBottom>
              When I'm not programming for work, you'll often find me programming
              for fun. I'm always fascinated not only by the vast, expansive theory
              that is the intersection of applied math and computer science, but
              just learning for learning's sake. There's something ever so
              intriguing about broadening one's horizons and discovering more about
              how the world around us works.
            </Typography>
            <Typography variant="body1" align="left" gutterBottom>
              When I'm flat out not programming at all, you'll often find me
              playing the saxophone, rock climbing, cooking / baking complex and
              challenging recipes (often with mediocre results), and diving deep
              down whatever incredibly niche and specific rabbit hole has piqued
              my interest that day.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}