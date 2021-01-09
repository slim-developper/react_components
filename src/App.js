

import './App.css';
import Address from './Component/Profile/Address'
import ProfilPhoto from './Component/Profile/ProfilPhoto';
import FullName from './Component/Profile/FullName';


function App() {
  return (
    <div className="App">
     <FullName/> 
     <br/>
    <ProfilPhoto/>
    <br/>
    <Address/>
    </div>
  );
}

export default App;
