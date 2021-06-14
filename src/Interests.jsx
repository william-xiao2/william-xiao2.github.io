import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

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

  const hades = (
    <Link href="https://www.supergiantgames.com/games/hades/">
      Hades
    </Link>
  );

  const cuWinds = (
    <Link href="https://www.cuwinds.com">
      Cornell University Wind Symphony
    </Link>
  );

  const spotify = (
    <Link href="https://open.spotify.com/user/1217041507?si=091e4214ea5440be">
      here's my Spotify profile
    </Link>
  );

  return (
    <div className={root} id="interests">
      <CssBaseline />
      <Container component="main" className={main} maxWidth="md">
        <Box textAlign="left">
          <Typography variant="h3" component="h2" gutterBottom>
            Interests
          </Typography>
          <Box fontSize={16}>
            <ul>
              <li>I'm passionate about teaching and education, and was a TA
                  throughout most of my college career.</li>
              <li>My current video game of choice is {hades}.</li>
              <li>I was part of {cuWinds} throughout college, where I played saxophone.</li>
              <li>I love all types of music, and am always looking for new
                  recommendations. Feel free to send me a playlist ({spotify}).</li>
            </ul>
          </Box>
        </Box>
      </Container>
    </div>
  );
}