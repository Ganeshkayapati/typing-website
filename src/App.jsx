import { GlobalStyle } from "./styles/global";
import TypingBox from "./components/TypingBox";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./context/ThemeContext";
function App() {
  const {theme}=useTheme();
  return (
    <ThemeProvider theme={theme}>
      <div className="canvas">
        <GlobalStyle />
        <div>Header</div>
        <TypingBox />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
