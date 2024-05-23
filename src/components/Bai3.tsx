import React, { useContext } from 'react'
import ThemeContext from './Bai1'

export default function Bai3() {
    
    const { color, toggleColor } = useContext(ThemeContext);
  return (
    <div>
        <h2>Bai3</h2>
        <button style={{ backgroundColor :color }} onClick={toggleColor}>
                Themed Button
        </button>
        <p>mau nen hien tai:{color}</p>
    </div>
  )
}
