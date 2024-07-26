## Connect-4 game with html-css-js:

- Live link : https://conn-4-js.netlify.app/

### Features

- Two-player game (Red and Yellow)
- Interactive game board with hover effects
- Visual indication of the current player's turn
- Automatic detection of a winning move
- Reset the game after a win

### How to Play

1. Open the game in your web browser.
2. The game randomly selects the starting player (Red or Yellow).
3. Players take turns clicking on the columns of the game board to drop their discs.
4. The first player to connect four discs in a row (horizontally, vertically, or diagonally) wins.
5. After a win, the game will automatically reset.

### How They Work Together

- Player Moves:
  When a player makes a move, their piece is added to the corresponding column, and the index of that piece (respective to all the circles) is added to their respective array (redMoves or yMoves).

- Check for Win:
  After each move, the gameOver function is called with the current player's move array and the player's turn.
  The gameOver function uses the checkWin function to check all possible winning directions.For each cell (each element in the array), it checks if the cells at arr[i] + step, arr[i] + 2*step, and arr[i] + 3*step are also in the array. These checks verify if there are three more consecutive pieces in the specified direction.

  If a win is detected, the appropriate win flag is set, and the game displays the winning message and reloads the page.

- Turn Management:
  If no win is detected, the turn is switched to the other player, and the game continues.
  By combining these functions, the game efficiently checks for wins after each move.
