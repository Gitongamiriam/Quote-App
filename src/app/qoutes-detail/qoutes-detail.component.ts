import { Component, OnInit, Input } from '@angular/core';
import { Qoutes } from '../qoutes';

@Component({
  selector: 'app-qoutes-detail',
  templateUrl: './qoutes-detail.component.html',
  styleUrls: ['./qoutes-detail.component.css']
})
export class QoutesDetailComponent implements OnInit {

  @Input() qoute:Qoutes;


  constructor() { }

  ngOnInit() {
  }

}
