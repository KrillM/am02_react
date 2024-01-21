import './App.css';
import ClassLifeCycle from './components/ClassLifeCycle';
import FuncLifeCycle from './components/Pr01';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);


  return (<>
    {/* <div className='App'> */}
      {/* {show && <ClassLifeCycle />} */}
      {/* <button onClick={() => { setShow(!show); }}>
        click
      </button>
    </div> */}

    <FuncLifeCycle />
  </>);
}

export default App;
