import React, { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumber] = useState(false);
  const [characterAllowed, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+{}[]~`_";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  });

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, setPassword])

  function lengthHandler(e) {
    setLength(e.target.value);
  }

  function numberHandler() {
    setNumber(!numberAllowed);
  }

  function characterHandler() {
    setCharacter(!characterAllowed);
  }

  const passwordRef = useRef(null);
  const copyHandler = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <div className="App">
      <h1 className='Title'>Password Generator</h1>
      <div className='container'>
        <div className='inputbox'>
          <input type='text' value={password} placeholder='Your Password' readOnly ref={passwordRef} />
          <button onClick={copyHandler}>Copy</button>
        </div>
        <div className='input-type'>
          <div className='len'>
            <input type='range' min={6} max={50} value={length} onChange={lengthHandler} className='rangebar' />
            <label>Length: {length}</label>
          </div>
          <div className='num-allow'>
            <input type="checkbox" defaultChecked={numberAllowed} onChange={numberHandler} />
            <label>Numbers</label>
          </div>
          <div className='char-allow'>
            <input type="checkbox" defaultChecked={characterAllowed} onChange={characterHandler} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
