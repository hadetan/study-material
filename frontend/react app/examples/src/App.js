import './App.css';
import User from './components/User Details/User';
import Parent from './components/child to parent/Parent';
import Counter from './components/counter/Counter';
import Login from './components/login/Login';
import Note from './components/notes/Note';

function App() {
  return (
    <>
      <Note />
      <Parent />
      <Counter />
      <Login />
      <User />
    </>
  );
}

export default App;
