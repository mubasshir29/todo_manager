import React from 'react'

const mySelect = ({iterable}) => {
  return (
    <select>
        {iterable.map(item => <option value={item}>{item}</option>)}
    </select>
  )
}

export default mySelect