import { Component, OnInit } from '@angular/core';
import { BoardService } from './boards.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css'],
  providers: []
})
export class BoardsComponent implements OnInit {
  creatingMode=false;
  constructor() { }

  ngOnInit() {
  }

}
