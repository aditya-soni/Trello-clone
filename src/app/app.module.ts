import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { DragulaModule } from "ng2-dragula";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BoardsComponent } from './boards/boards.component';
import { CreateBoardComponent } from './boards/create-board/create-board.component';
import { BoardDetailsComponent } from './boards/board-details/board-details.component';
import { BoardListComponent } from './boards/board-list/board-list.component';
import { BoardTodosComponent } from './boards/board-details/board-todos/board-todos.component';
import { BoardService } from './boards/boards.service';


const appRoutes:Routes =[
  { path: '', component: BoardsComponent },
  { path: 'b/:id', component: BoardDetailsComponent },
  { path: '**' ,redirectTo:''} 
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardsComponent,
    CreateBoardComponent,
    BoardDetailsComponent,
    BoardListComponent,
    BoardTodosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    DragulaModule
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
