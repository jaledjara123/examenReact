import React, { useState } from 'react'
import Estatus from './components/Estatus';
import Posteos from './components/Posteos';
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

function App() {

  const [totalLikes, setTotalLikes] = useState(0)
  
  const aumentar = () => {
    setTotalLikes(totalLikes + 1)
  }

  return (
  <div className="App">
      <Estatus totalLikes = {totalLikes}/>
      <Posteos aumentar = {aumentar}/>
    </div>
  );
}

export default App;
