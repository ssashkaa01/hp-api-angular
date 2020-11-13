export class HomeworkModel {
  public id: number;
  public theme: string;
  public date: string;
  public textWork: string;
  public isDone: boolean;
  public isChecked: boolean;
  public rating: number;

  constructor(
    id: number = 0,
    theme: string = '',
    date: string = '2020-01-01',
    textWork: string = '',
    isDone: boolean = false,
    isChecked: boolean = false,
    rating: number = 0,
  ) {
    this.id = id;
    this.theme = theme;
    this.date = date;
    this.textWork = textWork;
    this.rating = rating;
    this.isChecked = isChecked;
    this.isDone = isDone;
  }
}
