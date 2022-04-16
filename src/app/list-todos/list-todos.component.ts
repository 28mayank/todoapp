import { Component, OnInit } from '@angular/core';
import { Todos } from '../modals/todos';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  public todo: Todos[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todo = [
      new Todos(1, 'Learning Angular', new Date(), false),
      new Todos(2, 'Learning Spring Boot', new Date(), false),
      new Todos(3, 'Explore India', new Date(), false)
    ];
  }

}
