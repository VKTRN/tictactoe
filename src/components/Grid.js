import {Cell} from './Cell'
import {useState} from 'react'
import {useEffect} from 'react'

export const Grid = () => {

  const [cells, setCells] = useState(["","","","","","","","",""])

  const [turn, setTurn] = useState()

  useEffect(() => {
    console.log(cells)
    turn === 'x'? setTurn('o') : setTurn('x')
  }, [cells])


  return (
    <div className = 'grid'>
      <Cell index={0} cells={cells} setCells={setCells} turn={turn}/>
      <Cell index={1} cells={cells} setCells={setCells} turn={turn}/>
      <Cell index={2} cells={cells} setCells={setCells} turn={turn}/>
      <Cell index={3} cells={cells} setCells={setCells} turn={turn}/>
      <Cell index={4} cells={cells} setCells={setCells} turn={turn}/>
      <Cell index={5} cells={cells} setCells={setCells} turn={turn}/>
      <Cell index={6} cells={cells} setCells={setCells} turn={turn}/>
      <Cell index={7} cells={cells} setCells={setCells} turn={turn}/>
      <Cell index={8} cells={cells} setCells={setCells} turn={turn}/>
      <Cell index={9} cells={cells} setCells={setCells} turn={turn}/>
    </div>
  )
}