import { Component, OnInit } from '@angular/core';
import { Board } from '../board.model';
import { TODO } from '../board-details/board-todos/todo.model';
import { BoardService } from '../boards.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  boards:Board[];
  boardChangeSubscription:Subscription;
  constructor( private boardService:BoardService) { }

  ngOnInit() {
    this.boards=this.boardService.getBoards();
    this.boardChangeSubscription=this.boardService.boardChanged.subscribe(
      (boards:Board[])=>{
        this.boards=boards
      }
    );
  }
  onClickBoard(index){
    console.log(index)
  }

}
