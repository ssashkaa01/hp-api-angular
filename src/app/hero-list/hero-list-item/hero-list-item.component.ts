import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero-list-item',
  templateUrl: './hero-list-item.component.html',
  styleUrls: ['./hero-list-item.component.scss']
})
export class HeroListItemComponent implements OnInit {

  constructor() { }

  @Input() data: object;

  ngOnInit(): void {
  }

}
