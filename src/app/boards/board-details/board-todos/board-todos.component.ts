import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BoardService } from '../../boards.service';
import { TODO } from './todo.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board-todos',
  templateUrl: './board-todos.component.html',
  styleUrls: ['./board-todos.component.css']
})
export class BoardTodosComponent implements OnInit {
  @ViewChild('listtitle') title:ElementRef; 
  boardId:number;

  constructor(
    private bService:BoardService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {

  }
  addNewTodo(){
    if(this.title.nativeElement.value===''){
      alert("enter a title")
    } else{
      this.route.params.subscribe((param)=>{
        this.boardId=param.id;
      });
      const title=this.title.nativeElement.value;
      const list='';
      const todoItem:TODO = {title,list};
      this.bService.addListToBoard(this.boardId,todoItem);
      this.title.nativeElement.value='';
    }
  }

}
