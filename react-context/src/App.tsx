import { Parent } from './components/Parent'
import { Child } from './components/Child'
import { ChildTwo } from './components/ChildTwo'

function App() {

  return (
    <>
      <h2>React context</h2>

      <h3>Child in div in parent</h3>
      <Parent name='1. John'>
        <div>
          <Child />
        </div>
      </Parent>

      <h3>Context reactivity</h3>
      <Parent name="2. Amy">
        <>
          <Child />
          <ChildTwo />
        </>
      </Parent>

      <h3>Closest context wins</h3>
      <Parent name="3. Nested">
        <Parent name="3.1. Nessie">
          <Child />
        </Parent>
      </Parent>

      <h3>No parent shows default context value</h3>
      <Child />
    </>
  )
}

export default App
