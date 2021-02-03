import {useState} from 'react'
import './App.css';
import Display from './component/Display';
import Signin from './component/Signin';

function App() {
  const [login,setLogin] = useState(false);
  return (
    <div className="App">
      {(login)?(
        <Display/>
        ):(
        <Signin setLogin={setLogin}/>
        )
      }
    </div>
  );
}

export default App;
