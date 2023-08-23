import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs, MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.scss'],
})
export class SideBarMenuComponent implements OnInit {
  CurrenPageTitle: string = 'side menu';
  navigator: any;
  // constructor() { }

  // ngOnInit() {}

  itemClick() {
    console.log('click item ----');
  }

  @ViewChild('myTabs') tabs!: IonTabs;
  activeTabName: any = 'home';
  constructor(private platform: Platform, private router: Router,private menuController:MenuController) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      // this.showFingerprintAuthDlg();
    });
  }

  navigateToHome() {    
    this.openCloseMenu();
    this.router.navigateByUrl('/home', {});
  }

  navigateToWells() {    
    this.openCloseMenu();
    this.router.navigateByUrl('/wells', {});
  }

  navigateToAlerts() {
    this.router.navigateByUrl('/alerts', {});
    this.openCloseMenu();
  }

  navigateToNotification() {
    this.router.navigateByUrl('/notification', {});
    this.openCloseMenu();
  }

  navigateToEvents() {
    this.router.navigateByUrl('/events', {});
    this.openCloseMenu();
  }
  
  navigateToCustomAdmin() {
    this.router.navigateByUrl('/customer-admin', {});
    this.openCloseMenu();
  }

  exitAPP() {
    // this.router.navigateByUrl('/customer-admin', {});
    // this.openCloseMenu();
    // this.navigator['app'].exitApp();
    console.log("exit app -")
  }

  getSelectedTab(event: any): void {
    this.activeTabName = event;
  }

  public showFingerprintAuthDlg() {}


  openCloseMenu(){
    this.menuController.close();
  }
}
