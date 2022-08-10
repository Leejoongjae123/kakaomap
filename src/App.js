import './App.css';
import {useEffect} from 'react'
import KaKaoMapScript from '../src/components/KaKaoMapScript'

function App() {
  useEffect(() => {
    KaKaoMapScript();
  }, []); // 마운트 될때 사용할수 있도록 useEffect 사용


  return (
    <div className="App">
      <h2>Hello World!</h2>
      <div id='myMap' style={{
            width: '100vw',
            height: '100vh'
        }}></div>
    </div>
  );
}

export default App;
