// File does not contain `$state`, hence normal `.ts` file can be used
import { createContext } from "./utils.svelte"

/**
 * Define your context with state type
 */
export const context = createContext<{
  name: string
}>('tanstack-svelte-router')
