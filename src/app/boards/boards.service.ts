import { Board } from "./board.model";
import { TODO } from "./board-details/board-todos/todo.model";
import { Subject } from "rxjs/Subject";

export class BoardService {

    boardChanged= new Subject<Board[]>();
    listChanged= new Subject<TODO[]>();

    boards:Board[]=[
        new Board(
          'Board 1',
          [
            new TODO(
              'Monday',
              [
                'Call hagrid',
                'Do this',
                'do that',
                'code works!'
              ]
            ),
            new TODO(
              'Tuesday',
              [
                'Collect laundry'
              ]
            ),
            new TODO(
              'This',
              [
                'Collect laundry'
              ]
            )
          ]
        ),
        new Board(
          'Board 2',
          [
            new TODO(
              'Monday',
              [
                'Call hagrid',
                'Do this'
              ]
            ),
            new TODO(
              'Tuesday',
              [
                'Collect laundry'
              ]
            )
          ]
        ),
        new Board(
          'Board 3',
          [
            new TODO(
              'Monday',
              [
                'Call hagrid',
                'Do this'
              ]
            ),
            new TODO(
              'Tuesday',
              [
                'Collect laundry'
              ]
            )
          ]
        ),
        new Board(
          'Board 4',
          [
            new TODO(
              'Monday',
              [
                'Call hagrid',
                'Do this'
              ]
            ),
            new TODO(
              'Tuesday',
              [
                'Collect laundry'
              ]
            )
          ]
        ),    
      ]
    addListToBoard(index,todo:TODO){
      // console.log(title);
      this.boards[index].todo.push(todo);
      // this.listChanged.next(this.boards[index].todo.slice());
    }
      
    getBoards(){
        return this.boards.slice();
    }
    addBoard(newBoard:Board){
        this.boards.push(newBoard);
        this.boardChanged.next(this.boards.slice());
    }
    getBoardById(id:number){
        return this.boards[id];
    }

    addTodo(todo:string,boardindex:number,todoindex:number){
      this.boards[boardindex].todo[todoindex].list.push(todo);
      this.listChanged.next(this.boards[boardindex].todo.slice());
    }
} 