import "./App.css";
import Album from "./pages/album/Album";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <Album />
    </div>
  );
}

export default App;
