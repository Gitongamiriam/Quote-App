import { Component, OnInit, Input,Output ,EventEmitter} from '@angular/core';
import { Qoutes } from '../qoutes';

@Component({
  selector: 'app-qoutes-detail',
  templateUrl: './qoutes-detail.component.html',
  styleUrls: ['./qoutes-detail.component.css']
})
export class QoutesDetailComponent implements OnInit {

  @Input() qoute:Qoutes;
  @Output() isComplete = new EventEmitter<boolean>();

  qouteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }




  constructor() { }

  ngOnInit() {
  }

}

