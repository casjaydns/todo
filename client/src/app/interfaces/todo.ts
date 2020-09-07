export class Todo {
  _id: number;
  title: string;
  completed: boolean;

  constructor(_id, title, completed) {
    this._id = _id;
    this.title = title;
    this.completed = completed;
  }
}
