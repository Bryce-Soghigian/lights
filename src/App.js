import React from 'react';
import LivingRoom from './Routes/Home/LivingRoom';
import {Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LivingRoom} />
    </div>
  );
}

export default App;
