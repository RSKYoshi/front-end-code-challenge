import './App.css';
import {Calendar} from './components/calendar/calendar';
import React, {useState} from 'react';

function App() {
  return (
      <>
          <div className="App">
              {/*<calendar />*/}
              <Calendar />
          </div>
      </>
  );
}

export default App;
