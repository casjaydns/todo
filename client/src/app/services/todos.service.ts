import { Injectable } from '@angular/core';
import { Todo } from "../interfaces/todo";
import { TodoStatus } from "../interfaces/todo-status";
import { HttpClient } from "@angular/common/http";
import { APIs } from "../../environments/apis";
import { StorageService } from "./storage.service";
import { Router } from "@angular/router";
import {User} from "../interfaces/user";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todo[] = [];
  tasksLeft = 0;

  constructor(
    private storage: StorageService,
    private http: HttpClient
  ) { }

  filterTodos(status: TodoStatus){
    switch (status) {
      case TodoStatus.All:
        return this.todos;
      case TodoStatus.Todo:
        return this.todos.filter(item => item.completed === false);
      case TodoStatus.Completed:
        return this.todos.filter(item => item.completed === true);
      default:
        return this.todos;
    }
  }

  fetchTodos() {
    return this.http.get<User>(APIs.user(this.storage.getUserId())).pipe(
      tap<User>(user => {
        this.todos = user.todos;
        this.tasksLeft = this.todos.filter(item => item.completed === false).length;
      })
    )
  }

  createTodo(title) {
    return this.http.post<Todo>(APIs.todos(this.storage.getUserId()), {title}).pipe(
      tap<Todo>(todo => {
        this.todos.unshift(todo)
        this.tasksLeft++;
      })
    )
  }

  deleteTodo(todo) {
    return this.http.delete(APIs.todo(this.storage.getUserId(), todo._id)).pipe(
      tap(() => {
        this.tasksLeft += (todo.completed ? 0 : -1);
        const deleteIdx = this.todos.findIndex(item => item._id === todo._id);
        this.todos.splice(deleteIdx, 1);
      })
    )
  }

  toggleTodo(todo) {
    return this.http.patch(APIs.todo(this.storage.getUserId(), todo._id), null).pipe(
      tap(() => {
        todo.completed = !todo.completed;
        this.tasksLeft += (todo.completed ? -1 : 1);
      })
    )
  }

  completeAllTodos() {
    return this.http.patch(APIs.todos(this.storage.getUserId()), null).pipe(
      tap(() => {
        this.todos.forEach(todo => todo.completed = true);
        this.tasksLeft = 0;
      })
    )
  }

  deleteCompletedTodos() {
    return this.http.delete(APIs.todos(this.storage.getUserId())).pipe(
      tap(() => {
        this.todos = this.todos.filter(todo => todo.completed === false);
      })
    )
  }
}
