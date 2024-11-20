import { useContext } from "react"
import { context } from "./context"

export const Child = () => {
  const contextValue = useContext(context)
  return (<p>{contextValue.name}</p>)
}
