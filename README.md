# React Tic-Tac-Toe

  A clean and interactive implementation of the classic Tic-Tac-Toe game built with React 18 and Vite. Features customizable player
   names, turn-by-turn gameplay tracking, and automatic win/draw detection.

  ## Features

  - Two-player gameplay with customizable player names
  - Real-time game state management using React hooks
  - Turn-by-turn move history log
  - Automatic win condition detection across all possible combinations
  - Draw game detection
  - Game restart functionality
  - Responsive and intuitive UI
  - Fast development and build with Vite

  ## Tech Stack

  - **React 18** - Modern UI library with hooks
  - **Vite** - Next-generation frontend tooling
  - **ESLint** - Code quality and consistency

  ## Getting Started

  ### Installation

  ```bash
  npm install

  Development

  npm run dev

  Build

  npm run build

  Preview Production Build

  npm run preview

  Project Structure

  - /src/components - Reusable React components (Player, GameBoard, Log)
  - /src/App.jsx - Main game logic and state management
  - /src/winning-combinations.js - Win condition configurations

  How to Play

  1. Enter custom names for both players (optional)
  2. Players take turns clicking on empty squares
  3. First player to get three in a row (horizontally, vertically, or diagonally) wins
  4. If all squares are filled with no winner, the game ends in a draw
  5. Click "Rematch" to start a new game
