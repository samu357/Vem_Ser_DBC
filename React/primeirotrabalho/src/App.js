
import './App.css';

import ListMenu from './components/ListMenu';
import ItemHeader from './components/ItemHeader';
import ItemFooter from './components/ItemFooter';
import ItemMain from './components/ItemMain';


function App() {
  return (
    <div className="App">
      <ItemHeader />
      <ListMenu />
      <ItemMain />
      <ItemFooter />
    </div>
  );
}

export default App;
