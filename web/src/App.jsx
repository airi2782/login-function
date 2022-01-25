import React from 'react';
import logo from './logo.svg';
import './App.css';
import LogIn from './temprates/Login';
import {useDispatch,useSelector} from 'react-redux';

// function App() {
//   return (
//     <div>
//       <LogIn/>
//       ログイン
//     </div>
//   );
// }

// export default App;

function App() {
  const dospatch = useDispatch()
  const selector = useSelector((state) => state)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <LogIn/>
        </div>
      </header>
    </div>
  );
}

export default App;
