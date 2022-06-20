import {Cell} from './Cell'
import {useState} from 'react'
import {useEffect} from 'react'

export const Grid = () => {

  const [cells, setCells] = useState(["","","","","","","","",""])

  const [turn, setTurn] = useState()

  useEffect(() => {
    console.log(cells)
    turn === 'x'? setTurn('o') : setTurn('o')
  }, [cells])


  return (
    <div className = 'grid'>
      <Cell index = {0} setCells={setCells} turn={turn}/>
      <Cell index = {1} setCells={setCells} turn={turn}/>
      <Cell index = {2} setCells={setCells} turn={turn}/>
      <Cell index = {3} setCells={setCells} turn={turn}/>
      <Cell index = {4} setCells={setCells} turn={turn}/>
      <Cell index = {5} setCells={setCells} turn={turn}/>
      <Cell index = {6} setCells={setCells} turn={turn}/>
      <Cell index = {7} setCells={setCells} turn={turn}/>
      <Cell index = {8} setCells={setCells} turn={turn}/>
      <Cell index = {9} setCells={setCells} turn={turn}/>
    </div>
  )
}