import { GlobalStyle } from "./styles/global";
import TypingBox from "./components/TypingBox";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const {theme}=useTheme();
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer/>
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
