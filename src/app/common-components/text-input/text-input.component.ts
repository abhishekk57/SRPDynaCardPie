import { Component, OnInit ,Input,Output} from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent  implements OnInit {

  @Input()  label: string ="" ;
  @Input() type:string = ""
  value: string= "";
  username:string ="";
  @Input() placeholder:string=""
  constructor() { }

  ngOnInit() {
    // console.log("vlaue is ---",this.value);
  }

  onChange ($event:any){
  console.log("value change ---",$event.target.value)
}

}
