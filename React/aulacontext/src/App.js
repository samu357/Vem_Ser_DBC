
import Couter from "./components/Couter";
import Mirror from "./components/Mirror";
import CountProvider from "./context/Count";
import NameProvider from "./context/Name";

function App() {
 return(
    <div className="App">
      <NameProvider>
      <CountProvider> 
      <Couter/>
      <hr/>
      <Mirror  />
      </CountProvider>
      </NameProvider>
    </div>
  );
}

export default App;
