import { useState } from 'react'
import './App.css'
import { checkWinner } from './Logic/board'

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

  // Por defecto, el ganador es nadie (null)
  const [winner, setWinner] = useState(null);

  // Función reinicia el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  // Vamos a crear una función que me permita cambiar el turno
  const updateBoard = (index) => {

    if (board[index]) return;

    // Verificamos si el jugador actual ha ganado

    const newBoard = [...board];

    newBoard[index] = turn;

    setBoard(newBoard);

    const newTurn = (turn === TURNS.X) ? TURNS.O : TURNS.X;

    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      setWinner(newWinner)
    }

    // Verificar si el juego ha terminado por sin posibilidad de movimientos
    
  }

  // Vamos a declarar que el turno por defecto, de la partida, es la X
  const [turn, setTurn] = useState(TURNS.X);

  return (
    <main className='board'>
      <h1>Juega al 3 en raya</h1>
      <button onClick={resetGame}>Reiniciar el juego</button>

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

      {winner !== null && <section className='winner'>
        <div className='text'>
          <h2>{winner === false ? 'Empate' : 'Ganó '}</h2>

          <header className='win'>
            {winner && <Square>{winner}</Square>}
          </header>

          <footer>
            <button onClick={resetGame}>Empezar de nuevo</button>
          </footer>
        </div>
      </section>
      }
    </main>

  )
}

export default App
