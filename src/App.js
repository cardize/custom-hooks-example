import React from 'react'
import './App.css'
import { useInput } from './hooks/useInput'

export default function App() {
  const INITIAL_STATE = {
    type: '',
    genus: '',
    gender: '',
    age: '',
    name: '',
  }

  const [inputs, setInputs] = useInput('inputs', INITIAL_STATE)

  return (
    <div className="App">
      <h1>Custom Hooks Example</h1>
      <h2>Pets Local Storage</h2>
      <div className="form">
        <label htmlFor="type">
          Type: <input name="type" value={inputs.type} onChange={setInputs} />
        </label>
        <label htmlFor="genus">
          Genus:
          <input name="genus" value={inputs.genus} onChange={setInputs} />
        </label>
        <label htmlFor="gender">
          Gender:
          <input name="gender" value={inputs.gender} onChange={setInputs} />
        </label>
        <label htmlFor="age">
          Age: <input name="age" value={inputs.age} onChange={setInputs} />
        </label>
        <label htmlFor="name">
          Name: <input name="name" value={inputs.name} onChange={setInputs} />
        </label>
      </div>
    </div>
  )
}
