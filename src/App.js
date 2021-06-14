import './App.css';
import Header from './Header';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Interests from './Interests';
import Footer from './Footer'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      '-apple-system',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Interests />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;