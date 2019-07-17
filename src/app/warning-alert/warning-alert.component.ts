import { AppComponent } from "./../app.component";
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.scss']
})
export class WarningAlertComponent implements OnInit {

  public warn: string;

  constructor() { }

  ngOnInit() {

    this.warn= "salvo sem sucesso"
  }

}
