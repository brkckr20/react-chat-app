import ChatContent from "./components/ChatContent";
import Navigation from "./components/Navigation";
import Content from "./pages/Content";

import { useSelector } from 'react-redux';

function App() {

  const { darkMode } = useSelector(state => state.theme);

  return (
    <div className={`w-100 vh-100 d-flex ${darkMode && 'dark-mode-on'}`}>
      <Navigation />
      <Content />
      <ChatContent />
    </div>
  );
}

export default App;
