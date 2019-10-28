import { Component, OnInit } from '@angular/core';
import{Qoutes} from '../qoutes';

@Component({
  selector: 'app-qoutes',
  templateUrl: './qoutes.component.html',
  styleUrls: ['./qoutes.component.css']
})
export class QoutesComponent implements OnInit {
qoutes:Qoutes[]=[
  new Qoutes("Abraham lincoln", "Whatever you are be a good one", "explains how you should live in career wise",new Date(2019,12,1)),
  new Qoutes("Albert Einstein", "If you want to live a happy life,tie to a goal,not to people or objects","explains the way of living of people ",new Date(2013,11,)),
  new Qoutes("Ben Carson", "Uninformed people can be easily manipulated","explains how ignorance it taking you",new Date(2040,12,2)),
  new Qoutes("Gitonga Miriam","Work hard Untill your Bank Account balance looks like your mobile phone number","explains the way of living",new Date(2012,3,2)),
  new Qoutes("Nick Vijucic","If i fail ,i try again ,and again","explains life lesson",new Date(2012,12,1)),
  new Qoutes("Oprah Winfrey","Think like a Queen .A Queen is not afraid to fail to failure is another steppingstone to greatness","explains about failure",new Date(2019,12,8)),
  

];
displayDetails(index){
  this.qoutes[index].showQuotes = !this.qoutes[index].showQuotes;
}
completeQoute(isComplete, index){
  if (isComplete) {
    this.qoutes.splice(index,1);
  }
}


  

  constructor() { }

  ngOnInit() {
  }

}