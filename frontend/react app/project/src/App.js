import './App.css';
import { useState } from 'react';

function SuperHero(){
  const [hero, setHero] = useState(["superman", "spiderman", "ironman"]);
  const [name, setName] = useState(() => "");

  const onAddName = () => {
    setHero([...hero, name])
    setName("")
  }
  return(
    <div>
      <ul>
        {hero.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <input
      type='text'
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAddName}>
        add value
      </button>
    </div>
  )
}

function Counter(){
  let [count, setCount] = useState(1);
  function oneUp(){
    setCount(count + 1)
  }
  return(
    <>
    <h1>hello</h1>
    <button onClick={oneUp}>click : {count}</button>
    <SuperHero/>
    </>
  );
}


function App() {
  return (
    <>
    <Counter />
    </>
  );
}
export default App;