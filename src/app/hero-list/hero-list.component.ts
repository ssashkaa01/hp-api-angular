import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  constructor() { }

  @Input() listData: object[];

  ngOnInit(): void {
  }

}
