import { useEffect } from 'react'

// Refer to Dan Abramov's article - on of the maintainers of React
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export function useInterval(callback: () => void, delay: number) {
  useEffect(() => {
    const id = setInterval(callback, delay)
    // Interval is cleared as component is rerendered
    return () => clearInterval(id)
  }, [delay, callback])
}