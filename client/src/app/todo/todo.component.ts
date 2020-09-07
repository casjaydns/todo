import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Todo } from "../interfaces/todo";
import { TodoStatus } from "../interfaces/todo-status";
import {TodosService} from "../services/todos.service";
import {SnackbarService} from "../services/snackbar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private todosService: TodosService,
    private snackbar: SnackbarService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  deleteTodo(todo) {
    this.todosService.deleteTodo(todo).subscribe(
      response => {
        this.onChange.emit();
      },
      error => {
        if (error.status === 401)
          this.router.navigate(['login']);
        else
          this.snackbar.open('We have run into a problem. Try again later');
      }
    )
  }

  toggleTodo(todo) {
    this.todosService.toggleTodo(todo).subscribe(
      response => {
        this.onChange.emit();
      },
      error => {
        if (error.status === 401)
          this.router.navigate(['login']);
        else
          this.snackbar.open('We have run into a problem. Try again later');
      }
    )
  }

}
