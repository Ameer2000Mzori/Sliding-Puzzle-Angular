import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavUtilityComponent } from '../shared/nav-utility/nav-utility.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-puzzle',
  standalone: true,
  imports: [CommonModule, NavUtilityComponent, RouterLink],
  templateUrl: './puzzle.component.html',
  styleUrl: './puzzle.component.scss',
})
export class PuzzleComponent implements OnInit {
  board: number[][] = [];
  emptyRow: number = 0;
  emptyCol: number = 0;
  gameOver: boolean = false;
  move: number = 0;
  date = new Date();
  counter: number = 0;
  timerRef: any;

  ngOnInit(): void {
    this.shuffleBoard();
    console.log(this.date);
    this.timerRef = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  playAgain() {
    this.shuffleBoard();
    this.gameOver = false;
    this.move = 0;
    this.counter = 0;
  }

  shuffleBoard(): void {
    let numbers = Array.from({ length: 15 }, (_, i) => i + 1);
    this.board = [];
    for (let row = 0; row < 4; row++) {
      this.board[row] = [];
      for (let col = 0; col < 4; col++) {
        if (row === 3 && col === 3) {
          this.board[row][col] = 0;
          this.emptyRow = row;
          this.emptyCol = col;
        } else {
          const index = Math.floor(Math.random() * numbers.length);
          this.board[row][col] = numbers[index];
          numbers.splice(index, 1);
        }
      }
    }
  }

  moveTile(row: number, col: number): void {
    if (
      (Math.abs(row - this.emptyRow) === 1 && col === this.emptyCol) ||
      (Math.abs(col - this.emptyCol) === 1 && row === this.emptyRow)
    ) {
      this.move += 1;
      this.board[this.emptyRow][this.emptyCol] = this.board[row][col];
      this.board[row][col] = 0;
      this.emptyRow = row;
      this.emptyCol = col;
      console.log('moves', this.move);
      this.checkWin();
    }
  }

  checkWin(): void {
    let count = 1;
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (
          this.board[row][col] !== count &&
          !(row === this.emptyRow && col === this.emptyCol)
        ) {
          return;
        }
        count++;
      }
    }
    clearInterval(this.timerRef);
    this.gameOver = true;
  }
}
