import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent implements OnInit {
  @Input() public textTitle: string = '';
  @Input() public arrayList: [] = [];
  @Output() public searchText = new EventEmitter();

  public show: boolean = false;
  public buttonName: any = 'Show';

  itemsList: string[] = [];

  isItemAvailable = false;

  itemss: string[] = [];
  searchValue :string = "";

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
    debugger;
    console.log("search ---");
    const val = ev.target.value;    
    debugger;
    console.log("child search value --",val);
    this.searchText.emit(ev.target.value.toLowerCase());
  }

  getItems(ev: any) {
    console.log("search ---")
    // Reset items back to all of the items
    this.generateItems();
    // this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;
    console.log("search value --",val);
    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
        this.isItemAvailable = true;
        this.itemsList = this.itemsList.filter((item) => {
        console.log("search item-----",item)
            return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
    } else {
        this.isItemAvailable = false;
    }
}

// handleInput(event:any) {
//   const query = event.target.value.toLowerCase();
//   this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
// }

// handleInput(event: any) {
//   this.searchText.emit(event.target.value.toLowerCase());
// }

}
