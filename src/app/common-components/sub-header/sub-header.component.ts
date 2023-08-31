import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent implements OnInit {
  @Input() public textTitle: string = '';
  @Input() public arrayList: string[] = [];
  @Output() public searchText = new EventEmitter();
  
  @Output() public type = new EventEmitter();  
  @Output() public status = new EventEmitter();
  @Input() public filterData = [];

  @Output() public filterButton = new EventEmitter();

  public show: boolean = false;
  public buttonName: any = 'Show';

  itemsList: string[] = [];

  isItemAvailable = false;

  itemss: string[] = [];
  searchValue :string = "";

  filterStatus = false;
  openModel = "open-modal";

  isModalOpen = true;
  typeVal = '';  
  statusValue = '';

  constructor() {
    // console.log(' constructor arrayList --------', this.arrayList.length);
  }

  ngOnInit() {
    console.log('ngOnInit arrayList --------', this.arrayList.length);
    this.itemsList = this.arrayList;
    
    console.log('ngOnInit itemsList --------', this.itemsList.length);
  }

  toggle() {
    this.show = !this.show;

    // Change the name of the button.
    if (this.show) this.buttonName = 'Hide';
    else this.buttonName = 'Show';
  }
  

  initializeItems() {
    this.itemss = [
      'Ram',
      'gopi',
      'dravid',
      'nav',
      'kiru',
      'vir',
      'john',
      'pra',
      'aug',
      'gau',
      'vis',
    ];
  }
  private generateItems() {
    const count = this.itemsList.length + 1;
    for (let i = 0; i < 50; i++) {
      this.itemsList.push(`Item ${count + i}`);
    }
  }

  searchTxt(ev: any){
    // debugger;
    console.log("search ---");
    const val = ev.target.value;    
    // debugger;
    console.log("child search value --",val);
    this.searchText.emit(ev.target.value.toLowerCase());
  }

//   getItems(ev: any) {
//     console.log("search ---")
//     // Reset items back to all of the items
//     this.generateItems();
//     // this.initializeItems();

//     // set val to the value of the searchbar
//     const val = ev.target.value;
//     console.log("search value --",val);
//     // if the value is an empty string don't filter the items
//     if (val && val.trim() !== '') {
//         this.isItemAvailable = true;
//         this.itemsList = this.itemsList.filter((item) => {
//         console.log("search item-----",item)
//             return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
//         })
//     } else {
//         this.isItemAvailable = false;
//     }
// }

filterToggle(){
  console.log("filterToggle ------")
  return this.filterStatus = !this.filterStatus;
}

// handleInput(event:any) {
//   const query = event.target.value.toLowerCase();
//   this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
// }

// handleInput(event: any) {
//   this.searchText.emit(event.target.value.toLowerCase());
// }



onChangeType(event: any): void {
  this.typeVal = event.target.value;
  console.log('onchange type --', this.typeVal);
  this.type.emit(event.target.value.toLowerCase());
}

onChangeStatus(event: any): void {
  this.statusValue = event.target.value;
  console.log('onchange status --', this.statusValue);  
  this.status.emit(event.target.value.toLowerCase());
}

json = {
  homes: [
    {
      home_id: '1',
      price: '925',
      sqft: '1100',
      num_of_beds: '2',
      num_of_baths: '2.0',
      type: 'type 1',
      status: 'status 1',
    },
    {
      home_id: '2',
      price: '1425',
      sqft: '1900',
      num_of_beds: '4',
      num_of_baths: '2.5',
      type: 'type 2',
      status: 'status 2',
    },
  ],
};

// filterBy() {
//   console.log("filterBy ---")
  
//   if (this.typeVal && this.typeVal.trim() !== '' && this.statusValue && this.statusValue.trim() !== '') {
    
//   this.isItemAvailable = true;
//   let filter = this.json.homes.filter(
//     (d) =>
//       // (d.price >= '1000') &&
//       // (d.sqft >= '500') &&
//       // (d.num_of_beds >= '2') &&
//       // (d.num_of_baths >= '2.5')

//       d.type == this.typeVal && d.status == this.statusValue
//   );

  
//   this.arrayList = this.itemsList.filter((item) => {
//     console.log("search item-----",item)
//         return (item?.toString().toLowerCase().indexOf(this.typeVal?.toString().toLowerCase()) > -1);
//     })

//   console.log(filter);
//   }
//   else {
    
//   this.isItemAvailable = false;
//   }
// }

filterBy(ev:any) {
  console.log("filter by calling ")  ;
  this.filterButton.emit(ev.target.value?.toLowerCase());
}

}
