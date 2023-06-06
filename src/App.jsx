import "./App.css";
import AppList from "./components/AppList/AppList";
import MovilDevList from "./components/MovilDevList/MovilDevList2";

const App = () => (
  // <CharacterList />
  <div className="appContainer">
    <MovilDevList />
    <div className="appContainerList"></div>
    <AppList />
  </div>
);

export default App;
