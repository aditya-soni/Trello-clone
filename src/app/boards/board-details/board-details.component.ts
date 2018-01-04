import { Component, OnInit, OnDestroy, ElementRef,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { BoardService } from '../boards.service';
import { Board } from '../board.model';
import { DragulaService } from 'ng2-dragula';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-board-details',
  templateUrl: './board-details.component.html',
  styleUrls: ['./board-details.component.css']
})
export class BoardDetailsComponent implements OnInit, OnDestroy {
  boardId:number;
  idSubs:Subscription;
  board:Board;
  // addTodoForm:FormGroup;
  // @ViewChild('task') task:ElementRef;

  constructor(
    public route:ActivatedRoute, 
    private boardService:BoardService,
    private dragService:DragulaService
  ) { 
    dragService.setOptions('nested-bag',{
      move:true
    });
  }

  ngOnInit() {
    // const taskCont= 'task';
    // this.addTodoForm= new FormGroup({
    //   taskCont:new FormControl(null)
    // });

    this.idSubs=this.route.params.subscribe((params)=>{
      this.boardId= +params.id;
    });

    this.board=this.boardService.getBoardById(this.boardId); 
    this.boardService.listChanged.subscribe((list)=>{
      this.board.todo=list;
    });  
  }


  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.idSubs.unsubscribe();
    this.dragService.destroy('nested-bag');
  }

  addTodo(index:number){
    var value =(<HTMLInputElement>document.getElementById("task"+index)).value;
    this.boardService.addTodo(value,this.boardId,index);;
    (<HTMLInputElement>document.getElementById("task"+index)).value="";
  }

}
