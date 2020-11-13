import { Injectable, EventEmitter  } from '@angular/core';
import {HomeworkModel} from '../models/homework-model';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

  constructor() {}

  refreshDoneList = new EventEmitter<HomeworkModel[]>();
  refreshNotDoneList = new EventEmitter<HomeworkModel[]>();
  refreshCheckedList = new EventEmitter<HomeworkModel[]>();

  data: HomeworkModel[] = [
    new HomeworkModel(1, 'hw 1', '2020-10-01', 'Lorem ipsum bla bla bla'),
    new HomeworkModel(2, 'hw 2', '2020-10-11', 'Lorem ipsum bla bla bla', true, true, 10),
    new HomeworkModel(3, 'hw 3', '2020-11-09', 'Lorem ipsum bla bla bla', true),
    new HomeworkModel(4, 'hw 4', '2020-11-12', 'Lorem ipsum bla bla bla', true),
  ];

  getNotDoneAll(): HomeworkModel[] {
    return this.data.filter(item => item.isDone === false);
  }

  getDoneAll(): HomeworkModel[] {
    return this.data.filter(item => item.isDone === true && item.isChecked === false);
  }

  getCheckedAll(): HomeworkModel[] {
    return this.data.filter(item => item.isChecked === true);
  }

  getByIdx(idx: number): HomeworkModel {
    return this.data.slice(idx)[0];
  }

  getById(id: number): HomeworkModel {
    return this.data.find(item => item.id === id);
  }

  getNextId(): number {
    return this.data[this.data.length - 1].id + 1;
  }

  setDone(id: number): void {
    const item = this.getById(id);
    item.isDone = true;
    this.refreshNotDoneList.emit(this.getNotDoneAll());
    this.refreshCheckedList.emit(this.getCheckedAll());
    this.refreshDoneList.emit(this.getDoneAll());
  }

  setChecked(id: number, rating: number): void {
    const item = this.getById(id);
    item.isChecked = true;
    item.rating = rating;
    this.refreshCheckedList.emit(this.getCheckedAll());
    this.refreshDoneList.emit(this.getDoneAll());
  }

  addItem(newItem: HomeworkModel): void {
    this.data.push(newItem);
    this.refreshNotDoneList.emit(this.getNotDoneAll());
    this.refreshNotDoneList.emit(this.getNotDoneAll());
  }
}
