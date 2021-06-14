import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import ButtonBase from '@material-ui/core/ButtonBase';

import banner from './images/banner.jpeg'

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
  lowOnInkBanner: {
    height: '100%',
    width: '100%'
  }
}));

export default function Projects() {
  const { root, main, lowOnInkBanner } = useStyles();

  return (
    <div className={root} id="projects" style={{backgroundColor: '#EAF1F6'}}>
      <CssBaseline />
      <Container component="main" className={main} maxWidth="md">
        <Box textAlign="left">
          <Typography variant="h3" component="h2" gutterBottom>
            Projects
          </Typography>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={"auto"} sm={6} >
              <ButtonBase className={lowOnInkBanner} >
                <img alt="complex" src={banner} className={lowOnInkBanner} />
              </ButtonBase>
            </Grid>
            <Grid item xs={"auto"} sm={6}>
              <Box pb={2} fontWeight="fontWeightBold" fontSize={24}>
                Low On Ink
              </Box>
              <Box pb={2} fontSize={16}>
                In Spring 2020, I collaborated on a team with 6 others to
                develop Low on Ink, a color-changing golf puzzle game.
              </Box>
              <Box pb={2} fontStyle="italic" fontSize={16}>
                Strategically plan your shots and launch them against ink
                cartridges to add and remove color, bouncing around various
                obstacles as you seek to unify the color scheme.
              </Box>
              <Box pb={1} fontSize={16}>
                <Link href="https://youtu.be/qV8b5xoVvuQ">
                  Here's our gameplay trailer.
                </Link>
              </Box>
              <Box pb={1} fontSize={16}>
                <Link href="https://github.coecis.cornell.edu/kjc244/low-on-ink">
                  Here's our Github repository.
                </Link>
              </Box>
              <Box pb={1} fontSize={16}>
                <Link href="https://github.coecis.cornell.edu/kjc244/low-on-ink/releases/tag/v1.4">
                  {"And here's the link to download the game. "}
                </Link>
                The game is available for both Windows and MacOS.
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}