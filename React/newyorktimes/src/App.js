import Router from "./Routers";
import { NewProvider } from "./context/NewContext";


function App() {
  return (
    <div className="App">
      <NewProvider>
      <Router/>
      </NewProvider>
    </div>
  );
}

export default App;
