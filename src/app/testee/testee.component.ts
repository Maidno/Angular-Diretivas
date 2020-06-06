import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testee',
  templateUrl: './testee.component.html',
  styleUrls: ['./testee.component.sass']
})
export class TesteeComponent implements OnInit {

  minhaVariavel: string;

  constructor() { }

  ngOnInit() {
  }

}
