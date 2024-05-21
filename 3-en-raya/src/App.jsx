import { useState } from 'react'
import './App.css'

// Declarar los turnos existentes, que corresponde a cada jugador
const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected = false, updateBoard, index }) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index);
  }

  return (
    <div className={className} key={index} onClick={handleClick}>
      {children}
    </div>
  )
}

function App() {

  // Necesitamos un tablero que está conformado por 9 Casillas (Cuadrados - Square)
  // Simular un tablero: const boardFicticio = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'O']
  const [board, setBoard] = useState(Array(9).fill(null));

  // Vamos a crear una función que me permita cambiar el turno
  const updateBoard = (index) => {

    console.log(index);

    const newBoard = [...board];

    newBoard[index] = turn;

    setBoard(newBoard);

    const newTurn = (turn === TURNS.X) ? TURNS.O : TURNS.X;

    setTurn(newTurn);
  }

  // Vamos a declarar que el turno por defecto, de la partida, es la X
  const [turn, setTurn] = useState(TURNS.X);

  return (
    <main className='board'>
      <h1>Juega al 3 en raya</h1>

      <section className='game'>
        {board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          )
        })}
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  )
}

export default App
