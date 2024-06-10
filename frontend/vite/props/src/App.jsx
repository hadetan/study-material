import './App.css'
import { UserCard } from './UserCard'
import user from "./user.json"

function App() {
  return (
    <UserCard name={user.name} age={user.age} phoneNumber={user.phoneNumber} address={user.address}/>
  )
}

export default App
