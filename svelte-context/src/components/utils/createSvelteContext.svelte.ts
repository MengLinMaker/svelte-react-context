// File name needs `.svelte.ts` extension to enable `$state` reactivity
import { getContext, setContext } from 'svelte'

/**
 * Propagates state type using generics to `getContext` - which return `unkown` by default
 * @returns `setContext` and `getContext` packaged together for bettwe DX
 */
export function createSvelteContext<T>() {
  const contextKey = `${Math.random()}${Date.now()}`

  return {
    setContext: (value: T) => {
      const contextValue = $state(value)
      return setContext(contextKey, contextValue)
    },
    getContext: () => getContext<T>(contextKey),
  }
}
