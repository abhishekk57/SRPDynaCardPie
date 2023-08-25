

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { DataService } from 'src/app/api/data.service';
import { RestApiService } from 'src/app/api/restApi.service';


@Component({
    selector: 'app-well-list',
    templateUrl: './well-list.page.html',
    styleUrls: ['./well-list.page.scss'], 
  })

export class WellListPage implements OnInit {
  
  themeToggle = true;
  titleData: any = 'Well List';
  data: any = [];
  CurrenPageTitle: string = 'Wells';
  datetime = 'assets/svg/datetime.svg';
  displayElement_1 = false;
  displayElement_2 = false;
  displayElement_3 = false;

  displayElement_4 = false;

  isItemAvailable = false;
  itemss: string[] = [];

  @Input() itemsList: string[] = [];
  serviceTest: any;
  searchText: any;
  tempData: any = [];
  public results: any;
  constructor(
    private router: Router,
    private httpService: RestApiService,
    public dataService: DataService
  ) {}

  ngOnInit() {
    // this.httpService.callGet().subscribe(
    //   (response) => {
    //     this.data = response;
    //     console.log('well list response data --------', response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    this.generateItems();
    console.log('data length --', this.data.length, this.data[0].well_name);
    console.log('temp data -', this.dataService.well_list);
    this.tempData = this.dataService.well_list;
    this.results = [...this.tempData];
    console.log('temp data 11 -', this.tempData);
    // getInputValue();

    
    
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize the dark theme based on the initial
    // value of the prefers-color-scheme media query
    this.initializeDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkTheme(mediaQuery.matches));
  
  
  }
  navigateTo(item: any) {
    console.log(' wells page---', item);
    this.router.navigateByUrl('/wells/well-detail', {
      state: item,
    });
  }

  getColorStatus(index: any) {
    if (index === 0) {
      this.displayElement_1 = true;
      return '#eb445a';
    } else if (index === 1) {
      this.displayElement_2 = true;
      return '#135d54';
    } else if (index === 2) {
      this.displayElement_3 = true;
      return '#e0a41c';
    } else {
      this.displayElement_4 = true;
      return '#eb445a';
    }
  }

  private generateItems() {
    for (let i = 0; i < 15; i++) {
      let obj = {
        well_name: 'Well Name  ' + i,
        desc: 'Description will be seen here. Description will be seen here.',
        status: 'Status1',
        time: '2023:04:12 07:33:56 AM',
      };
      this.data.push(obj);
    }
  }

  onIonInfinite(event: any) {
    this.generateItems();
    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  // getItems(ev: { searchValue: string }) {
  //   // Reset items back to all of the items
  //   console.log('getItems');
  //   debugger;
  //   this.generateItems();
  //   // this.initializeItems();

  //   // set val to the value of the searchbar

  //   const val = ev.searchValue;
  //   // const val = ev.target.val;
  //   console.log('get child value in', val);
  //   // if the value is an empty string don't filter the items
  //   if (val && val.trim() !== '') {
  //     this.isItemAvailable = true;
  //     this.itemsList = this.itemsList.filter((item) => {
  //       return item.toLowerCase().indexOf(val.toLowerCase()) > -1;
  //     });
  //   } else {
  //     this.isItemAvailable = false;
  //   }
  // }

  handleInput(event: any) {
    debugger;
    console.log('handleInput =======');
    const query = event.target.value;
    this.results = this.tempData.filter(
      (d: any) => d.toLowerCase().indexOf(query) > -1
    );
  }

  getInputValue(event: any) {
    console.log('getInputValue --------');
    debugger;

    // const query = event.target.value.toLowerCase();
    // if(query.length > 0)
    // this.results = this.tempData.filter((d:any) => d.toLowerCase().indexOf(query) > -1);

    if (event.length > 0) {
      debugger;
      this.results = this.tempData.filter((item: any) =>
        item?.wellName?.toLowerCase().includes(event)
      );
    } else {
      debugger;
      this.results = this.tempData;
      console.log('filter length else --- ', this.results.length);
    }
  }
  
  // Check/uncheck the toggle and update the theme based on isDark
  initializeDarkTheme(isDark:any) {
    this.themeToggle = isDark;
    this.toggleDarkTheme(isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark theme
  toggleChange(ev:any) {
    this.toggleDarkTheme(ev.detail.checked);
  }

  // Add or remove the "dark" class on the document body
  toggleDarkTheme(shouldAdd:any) {
    document.body.classList.toggle('dark', shouldAdd);
  }
}
