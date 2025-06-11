import { GlobalStyle } from "./styles/global";
import TypingBox from "./components/TypingBox";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
function App() {
  const {theme}=useTheme();
  return (
    <ThemeProvider theme={theme}>
      <div className="canvas">
        <GlobalStyle />
        <Header/>
        <TypingBox />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
