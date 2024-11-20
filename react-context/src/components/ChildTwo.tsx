import { useContext, useState } from "react"
import { context } from "./context"
import { useInterval } from "./utils"

export const ChildTwo = () => {
  const contextValue = useContext(context)
  const [count, setCount] = useState(1)

  useInterval(() => {
    setCount(count + 1)
    // Note: count starts from `1`
    contextValue.setName(`2. Amy: ${count}`)
  }, 1000)
  return (<p>{contextValue.name}</p>)
}
