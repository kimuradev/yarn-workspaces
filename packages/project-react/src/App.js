import React from 'react';
import logo from './logo.svg';
import './App.css';

import { H1 } from 'shared-lib';

function App() {
  const checkextension = () => {
    var file = document.querySelector('#fUpload');
    if (/\.(pdf)$/i.test(file.files[0].name) === false) {
      alert('not an pdf!');
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <H1 title='SHARED H1 REACT' />
      </header>

      <input type='file' id='fUpload' onChange={checkextension} />
    </div>
  );
}

export default App;
