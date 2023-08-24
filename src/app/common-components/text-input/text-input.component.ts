import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent  implements OnInit {

  label: string ="Email" ;
  type:string = "email"
  value: string= "";
  username:string ="";

  constructor() { }

  ngOnInit() {
    // console.log("vlaue is ---",this.value);
  }

  onChange ($event:any){
  console.log("value change ---",$event.target.value)
}

}
