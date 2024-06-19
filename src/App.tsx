import { useState } from "react"
import EnterValue from "./components/EnterValue"
import ShowValue from "./components/ShowValue"

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <h2>Lifting state</h2>
      
      <EnterValue setValue={setValue} />
      <ShowValue value={value} />
    </>
  )
}

export default App
