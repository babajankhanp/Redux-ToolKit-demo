import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './CounterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div style={{display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <div>
            <h1>{count}</h1>
        </div>
        <div>
            <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          style={{marginLeft:"5rem"}}
        >
          Decrement
        </button>
        </div>
      </div>
    </div>
  )
}