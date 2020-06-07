import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-class',
  templateUrl: './diretiva-ng-class.component.html',
  styleUrls: ['./diretiva-ng-class.component.sass']
})
export class DiretivaNgClassComponent implements OnInit {

  myFavorite: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClickMyFavorite(){
    this.myFavorite = !this.myFavorite;
  }
}
