import { TODO } from "./board-details/board-todos/todo.model";

export class Board {
    constructor(public name:string, public todo:TODO[]) {        
    }
}