import { GlobalStyle } from "./styles/global";

import { ThemeProvider } from "styled-components";
import { useTheme } from "./context/ThemeContext";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/userPage";
function App() {
  const {theme}=useTheme();
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer/>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/user" element={<UserPage/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
