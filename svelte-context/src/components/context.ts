// File does not contain `$state`, hence normal `.ts` file can be used
import { createSvelteContext } from "./utils"


export type Context = {
  name: string
}
export const context = createSvelteContext<Context>()
