export class Note {
  // private id: any;
  public id: any;
  public title: any;
  public note: any;
  public date: any;
  public status: any;

  constructor(id?, title?, note?, date?, status?) {
    this.id = id;
    this.title = title;
    this.note = note;
    this.date = date;
    this.status = status;
  }
}
