import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { BoardService } from '../boards.service';
import { TODO } from '../board-details/board-todos/todo.model';
import { Board } from '../board.model';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css']
})
export class CreateBoardComponent implements OnInit {
  createBoardForm:FormGroup;
  @Output() closeButtonClicked=new EventEmitter<null>();
  // @Output() fromSubmitted=new EventEmitter<null>();
  constructor(private boardService:BoardService) { }

  ngOnInit() {
    this.createBoardForm=new FormGroup({
      'title':new FormControl(null,Validators.required)
    })
  }

  addBoard(){
    const name=this.createBoardForm.value.title;
    const todo:TODO[]=[];
    const newBoard=new Board(
      name,
      todo
    )
    this.boardService.addBoard(newBoard);
    this.createBoardForm.reset();
    this.closeForm();
  }

  closeForm(){
    this.closeButtonClicked.emit();
  }
}
