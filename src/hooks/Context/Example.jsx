import { useCount } from './CountContext'

export function Context() {
  const { count, setCount } = useCount() 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}