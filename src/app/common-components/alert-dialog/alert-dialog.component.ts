
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
})
export class AlertDialogComponent  implements OnInit {
  // public alertButtons = ['OK'];
  @Input() header :string =""
  @Input() subheader :string =""
  @Input() message :string =""
  public btnText1:string ="Ok"

  handlerMessage = '';
  roleMessage = '';

  constructor() { }

  ngOnInit() {}

  isAlertOpen = false;
  // public alertButtons = ['OK'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log("Alert canceled --- ");
        this.handlerMessage = 'Alert canceled';
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {        
        console.log("Alert confirmed --- ");
        this.handlerMessage = 'Alert confirmed';
      },
    },
  ];

  setResult(ev:any) {
    this.roleMessage = `Dismissed with role: ${ev.detail.role}`;
  }

}

