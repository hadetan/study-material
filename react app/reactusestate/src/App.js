import { useState, createContext } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'

export const myContext = createContext()

function App() {
    const [name, setName] = useState('')
    const [color, setColor] = useState('')

    const myName = (event) => {
        setName(event.target.value)
    }

    const myColor = (event) => {
        setColor(event.target.value)
    }

    return (
        <myContext.Provider value={{ name, color }}>
            <Navbar />
            <form>
                <input
                    type={'text'}
                    placeholder="enter username"
                    value={name}
                    onChange={myName}
                />
                <input
                    type={'text'}
                    placeholder="enter a color name"
                    value={color}
                    onChange={myColor}
                />
            </form>
            <Main />
        </myContext.Provider>
    )
}

export default App
