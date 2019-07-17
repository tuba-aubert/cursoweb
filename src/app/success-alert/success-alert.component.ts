import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent implements OnInit {

  public sucesso: string;
  constructor() { }

  ngOnInit() {

    this.sucesso= "salvo com sucesso"
  }

}
