import React,{useState , useCallback} from 'react'
import ThemeContext from './Bai1'
import SomeComponent from './SomeComponent'
import Bai3 from './Bai3'

export default function Bai2() {
    const [color, setColor] = useState('blue');
    const toggleColor = useCallback(() => {
        setColor((prevColor) => (prevColor === 'blue' ? 'red' : 'blue'));
      }, []);
  return (
    <div>
        <h2>Bai2</h2>
        <ThemeContext.Provider value={{ color, toggleColor }}>
            <SomeComponent></SomeComponent>
            <Bai3></Bai3>
        </ThemeContext.Provider>
    </div>
  )
}
