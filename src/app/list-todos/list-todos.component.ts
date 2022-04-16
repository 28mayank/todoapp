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
      { id: 1, description: 'Learning Angular' },
      { id: 2, description: 'Learning Spring Boot' },
      { id: 3, description: 'Explore India' }
    ];
}

}
