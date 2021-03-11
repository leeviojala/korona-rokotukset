import "./App.css";
import Statistics from "./components/Statistics";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Head from "./components/Head";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Container style={{ height: "100%", paddingTop: "16px" }}>
          <Head></Head>
          <Statistics></Statistics>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
