import {EventEmitter, Injectable} from '@angular/core';
import {HomeworkModel} from '../models/homework-model';

@Injectable({
  providedIn: 'root'
})
export class HpService {

  constructor() { }

  data: object[];

  refreshList = new EventEmitter<object[]>();

  getAll(): object[] {
    return this.data.slice();
  }

  setData(data: object[]): void {
    this.data = data;
    this.refreshList.emit(this.getAll());
  }
}
