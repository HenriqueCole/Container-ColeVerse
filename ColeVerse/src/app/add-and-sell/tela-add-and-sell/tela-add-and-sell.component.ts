import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-add-and-sell',
  templateUrl: './tela-add-and-sell.component.html',
  styleUrls: ['./tela-add-and-sell.component.css']
})
export class TelaAddAndSellComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
