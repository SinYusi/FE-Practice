import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('반갑습니다.')
  const [click, setClick] = useState(true)
  let changeText = click === true ? function () {
    setText('안녕하세요.')
    setClick(false);
  } : function () {
    setText('반갑습니다.')
    setClick(true)
  }
  return (
    <div className="App">
      <h2>{text}</h2>
      <button onClick={() => {
        changeText()
      }} >바꾸기</button>
    </div>
  );
}

export default App;
