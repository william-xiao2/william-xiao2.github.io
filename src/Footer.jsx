import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '15vh',
  },
  icon: {
    marginLeft: "38px",
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: '#EEEEEE'
  },
}));

function Copyright() {
  const { icon } = useStyles();

  return (
    <Box paddingTop={1.5}>
      <Link color="inherit" href="https://www.linkedin.com/in/william-xiao-700544145/">
        <LinkedInIcon />
      </Link>
      <Link color="inherit" component="a" href="mailto:willxiao99@gmail.com">
        <EmailIcon className={icon}/>
      </Link>
      <Link color="inherit" href="https://github.com/william-xiao2">
        <GitHubIcon className={icon}/>
      </Link>
    </Box>
  );
}

//

/**
 * The footer component for the website.
 *
 * Heavily inspired from:
 * https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sticky-footer/StickyFooter.js
 */
export default function StickyFooter() {
  const { root, footer } = useStyles();

  return (
    <div className={root}>
      <CssBaseline />
      <footer className={footer}>
        <Container maxWidth="sm">
        <Typography variant="body1">Connect with me!</Typography>
        <Copyright />
        </Container>
      </footer>
    </div>
  );
}