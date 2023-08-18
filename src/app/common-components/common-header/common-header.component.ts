import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
})
export class CommonHeaderComponent  implements OnInit {
  @Input() public title: string = "";
  constructor() { }

  ngOnInit() {}

  // onChange (ev:any){
  //   console.log("click selection opton ---")
  // }

  onChange(event:any): void {  // event will give you full breif of action
    debugger;
    const newVal = event.target.value;
    debugger;
    console.log("onchange event --",newVal);
  }
  
}
