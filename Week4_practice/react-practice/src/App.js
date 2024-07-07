import './App.css';
import uniquePersons from './data';

function App() {
  return (
    <div className="App">
      {uniquePersons.map((a, i) => {
        return (
          <div className='user'>
            <p>{(i + 1) + '. 이름 : ' + a.name + ', 나이 : ' + a.age + ', 성별 : ' + a.gender}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;