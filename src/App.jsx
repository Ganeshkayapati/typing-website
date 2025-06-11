import { GlobalStyle } from "./styles/global";
import TypingBox from "./components/TypingBox";
function App() {
  return (
    <div className="canvas">
      <GlobalStyle />
      <div>Header</div>
      <TypingBox />
      <div>Footer</div>
    </div>
  );
}

export default App;
