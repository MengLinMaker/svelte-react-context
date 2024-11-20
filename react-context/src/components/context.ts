import { createContext } from "react";

export const context = createContext<{
  name: string,
  setName: (name: string) => void
}>({
  name: 'nothing',
  setName: () => { }
})
