import { useState, type ReactElement } from "react"
import { context } from "./context"

export const Parent = (props: { name: string, children: ReactElement }) => {
  // State needs to be set internally in parent
  const [name, setName] = useState(props.name)

  return (
    <context.Provider value={{ name, setName }}>
      {props.children}
    </context.Provider>
  )
}
