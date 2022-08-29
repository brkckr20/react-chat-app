import ChatContent from "./components/ChatContent";
import Navigation from "./components/Navigation";
import Content from "./pages/Content";

function App() {
  return (
    <div className="w-100 vh-100 d-flex">
      <Navigation />
      <Content />
      <ChatContent />
    </div>
  );
}

export default App;
