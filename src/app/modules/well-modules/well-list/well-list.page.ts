

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { DataService } from 'src/app/api/data.service';
import { RestApiService } from 'src/app/api/restApi.service';
import { PluginsService } from 'src/app/pluginServices/plugins.service';
import { Wswatch, Rswatch, Yswatch, Gswatch, ArrowUp, Mining, WifiOffline, WWifiOffline, WMining, ADown,ArrowDown } from '../../../../assets/index';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.page.html',
  styleUrls: ['./well-list.page.scss'],
})

export class WellListPage implements OnInit {

  Wswatch: any = Wswatch;
  Rswatch: any = Rswatch;
  Yswatch: any = Yswatch;
  Gswatch: any = Gswatch;
  ArrowUp: any = ArrowUp;
  ArrowDown: any = ArrowDown;
  Mining = Mining;
  WifiOffline: any = WifiOffline;
  WWifiOffline: any = WWifiOffline;
  WMining: any = WMining;
  ADown: any = ADown;

  OnClickSearch() {
    this.isSearch = !this.isSearch;
  }

  titleData: any = "Well List";
  data: any = []
  mWellList: any = []
  CurrenPageTitle: string = "Wells";
  datetime = 'assets/svg/datetime.svg';
  isSearch: boolean = false;
  inputValue: string = "";
  constructor(private router: Router) { }


  // data which is coming from child compo.
  getInputValue(event: any) {
    if (event.length > 0) {
      this.mWellList = this.data.filter((item: any) => item?.well_name.toLowerCase().includes(event));
    } else {
      this.mWellList = this.data;
    }
  }


  ngOnInit() {
    this.generateItems();
    // this.showLoading();
  }
  async showLoading() {
    // const loading = await this.loadingCtrl.create({
    //   message: 'Loading...',
    //   duration: 3000,
    //   cssClass: 'custom-loading'
    // });

    // loading.present();
    // loading.onDidDismiss()
    //   .then(() => {
    //     this.generateItems();
    //   })
  }
  navigateTo(item: any) {
    this.router.navigateByUrl('/wells/well-detail', {
      state: item
    });
  }


  private generateItems() {
    for (let i = 0; i < 3; i++) {
      let obj = {
        well_name: "Well" + i + 0,
        desc: "Description will be seen here. Description will be seen here.",
        status: 'Over Pumping',
        time: "2023:04:12 07:33:56 AM",
        isDetail: false,
        pumping:50
      }
      let obj1 = {
        well_name: "Well" + i + 1,
        desc: "Description will be seen here. Description will be seen here.",
        status: 'Optimum Pumping',
        time: "2023:03:12 06:20:46 AM",
        isDetail: false,
        pumping:60
      }
      let obj2 = {
        well_name: "Well" + i + 2,
        desc: "Description will be seen here. Description will be seen here.",
        status: 'Under Pumping',
        time: "2023:07:12 04:19:09 AM",
        isDetail: false,
        pumping:70
      }
      this.data.push(obj);
      this.data.push(obj1);
      this.data.push(obj2);
      if (this.data.length > 0) {
        this.mWellList = this.data;
      }
    }
  }
  onIonInfinite(event: any) {
    this.generateItems();
    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  openDetail(i: any) {
    const data = this.mWellList.map((it: any, index: any) => {
      if (i === index) {
        it.isDetail = !it.isDetail;
      } else {
        it.isDetail = false;
      }
      return it;
    });
    this.mWellList = data;
  }
}
