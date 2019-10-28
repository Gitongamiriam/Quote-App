import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import{Qoutes} from '../qoutes';


@Component({
  selector: 'app-qoute-form',
  templateUrl: './qoute-form.component.html',
  styleUrls: ['./qoute-form.component.css']
})
export class QouteFormComponent implements OnInit {
  newQoute = new Qoutes("","","",new Date());
  @Output() AddQoute = new EventEmitter<Qoutes>();
  submitQoute(){
    this.AddQoute.emit(this.newQoute);
   this.newQoute = new Qoutes("","","",new Date());
      }


  constructor() { }

  ngOnInit() {
  }

}
