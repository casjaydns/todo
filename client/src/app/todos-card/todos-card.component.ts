import {Component, OnInit} from '@angular/core';
import {Todo} from "../interfaces/todo";
import {TodoStatus} from "../interfaces/todo-status";
import {TodosService} from "../services/todos.service";
import {User} from "../interfaces/user";
import {SnackbarService} from "../services/snackbar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todos-card',
  templateUrl: './todos-card.component.html',
  styleUrls: ['./todos-card.component.scss']
})
export class TodosCardComponent implements OnInit {
  todos: Todo[] = [];
  user: User;
  status: TodoStatus = TodoStatus.All;

  constructor(
    public todosService: TodosService,
    private snackbar: SnackbarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchUser();
  }

  getTodos() {
    this.todos = this.todosService.filterTodos(this.status)
  }

  applyStatus(status: TodoStatus) {
    this.status = status;
    this.getTodos();
  }

  fetchUser() {
    this.todosService.fetchTodos().subscribe(
      response => this.getTodos(),
      error => {
        if (error.status === 401)
          this.router.navigate(['login']);
        else
          this.snackbar.open('We have run into a problem. Try again later');
      }
    )
  }

  createTodo($event) {
    const input = $event.target;
    if (!input.value.trim()) return this.snackbar.open('Set a todo title');

    this.todosService.createTodo(input.value).subscribe(
      todo => {
        input.value = '';
        this.getTodos();
      },
      error => {
        if (error.status === 401)
          this.router.navigate(['login'])
        else
          this.snackbar.open('We have run into a problem. Try again later');
      }
    )
  }

  completeAllTodos() {
    this.todosService.completeAllTodos().subscribe(
      () => this.getTodos(),
      error => {
        if (error.status === 401)
          this.router.navigate(['login'])
        else
          this.snackbar.open('We have run into a problem. Try again later');
      }
    )
  }

  deleteCompletedTodos() {
    this.todosService.deleteCompletedTodos().subscribe(
      () => this.getTodos(),
      error => {
        if (error.status === 401)
          this.router.navigate(['login'])
        else
          this.snackbar.open('We have run into a problem. Try again later');
      }
    )
  }


}
