import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {HpService} from '../../services/hp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private hp: HpService
  ) { }

  public list: object[];

  ngOnInit(): void {
    axios.get('http://hp-api.herokuapp.com/api/characters').then(result => {
      this.hp.setData(result.data);
    });

    this.hp.refreshList.subscribe((list: object[]) => {
      this.list = list;
    });
  }
}
