import {Cell} from './Cell'

export const Grid = ({cells, setCells, turn}) => {

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
    </div>
  )
}