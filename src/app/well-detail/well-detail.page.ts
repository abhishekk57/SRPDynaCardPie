import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-well-detail',
  templateUrl: './well-detail.page.html',
  styleUrls: ['./well-detail.page.scss'],
})
export class WellDetailPage implements OnInit {
  state = [];
  
  titleData: any = 'Well Info';
  data: any = [];
  CurrenPageTitle: string = 'Wells';
  constructor(private router: Router) {}
  selectedOption :any ="Well Info";

  ngOnInit() {
    this.state = history.state;
    // console.log("well detailpage --",this.router.getCurrentNavigation().extras.state);
    console.log('WellDetailPage --', this.state);
  }

  onChange(ev:any){
    console.log("well info ---",ev.target.value);
  this.selectedOption = ev.target.value
  }
  dyancard(ev:any){
    console.log("dynacard info ---",ev.target.value);
  }

}
