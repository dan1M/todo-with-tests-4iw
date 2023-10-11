class Item {

  name: string;
  content: string;
  creation_date: string;
  idTodoList: number;

  constructor(name: string, content: string, creation_date: string, idTodoList:number) {
    this.name = name;
    this.content = content;
    this.creation_date = creation_date;
    this.idTodoList = idTodoList;
  }
}
module.exports = Item;