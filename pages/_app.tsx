import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { blue, purple, yellow } from "@material-ui/core/colors";
import "../styles/globals.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[700],
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default MyApp;
