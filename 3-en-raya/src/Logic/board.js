import { WINNER_COMBOS } from "../constants.js";

/**
 * Verifica si el jugador actual cumple con algún combo en específico (es ganador)
 * 
 * @param {Array} boardToCheck El tablero actual a analizar
 * @returns 
 */
export const checkWinner = (boardToCheck) => {

    for (const combo of WINNER_COMBOS) {

        const [a, b, c] = combo;

        if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
            return boardToCheck[a];
        }
    }

    return null;
}

/**
 * Verifica si existen movimientos posibles en el tablero199
 * 
 * @param {Array} boardToCheck El tabler a verificar
 * 
 * @returns {Boolean} True si ya no existen movimientos
 */
export const checkEndGame = (boardToCheck) => {
    return boardToCheck.every(square => square !== null);
}

export const checkWinner_2 = (boardToCheck) => {

    // Verificamos las filas (horizontales)
    for (let i = 0; i < 9; i += 3) {

        if (boardToCheck[i] && boardToCheck[i] === boardToCheck[i + 1] && boardToCheck[i] === boardToCheck[i + 2]) {
            return boardToCheck[i];
        }
    }

    // Comprobamos las columnas (verticales) 
    for (let i = 0; i < 3; i++) {

        if (boardToCheck[i] && boardToCheck[i] === boardToCheck[i + 3] && boardToCheck[i] === boardToCheck[i + 6]) {
            return boardToCheck[i];
        }
    }

    // Comprobar las diagonales: La diagonal de izquierda a derecha
    if (boardToCheck[0] && boardToCheck[0] === boardToCheck[4] && boardToCheck[i] === boardToCheck[8]) {
        return boardToCheck[i];
    }

    // Comprobar las diagonales: La diagonal de derecha a izquierda
    if (boardToCheck[2] && boardToCheck[2] === boardToCheck[4] && boardToCheck[i] === boardToCheck[6]) {
        return boardToCheck[i];
    }

}