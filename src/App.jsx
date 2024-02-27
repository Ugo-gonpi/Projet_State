import { useState } from 'react'
import './App.css'
import Gauche from './components/gauche/Gauche'
import Droite from './components/droite/Droite'

function App() {

  const [pageOn, setPageOn] = useState(1);
  
  return (
    <div className='App'>
      <div className='contain'>

        <Gauche pageOn={pageOn} setPageOn={setPageOn}/>

        <Droite pageOn={pageOn} setPageOn={setPageOn}/>
        
      </div>
    </div>
  )
}

export default App
