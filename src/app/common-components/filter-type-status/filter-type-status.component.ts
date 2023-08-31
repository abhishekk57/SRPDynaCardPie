import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-type-status',
  templateUrl: './filter-type-status.component.html',
  styleUrls: ['./filter-type-status.component.scss'],
})
export class FilterTypeStatusComponent  implements OnInit {
  isModalOpen = true;
  typeVal = '';
  statusValue = '';
  @Input() trigger = "open-modal"

  constructor() { }

  ngOnInit() {}

  

  onChangeType(event: any): void {
    this.typeVal = event.target.value;
    console.log('onchange type --', this.typeVal);
  }

  onChangeStatus(event: any): void {
    this.statusValue = event.target.value;
    console.log('onchange status --', this.statusValue);
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

  filterBy() {
    console.log("filterBy ---")
    let filter = this.json.homes.filter(
      (d) =>
        // (d.price >= '1000') &&
        // (d.sqft >= '500') &&
        // (d.num_of_beds >= '2') &&
        // (d.num_of_baths >= '2.5')

        d.type == this.typeVal && d.status == this.statusValue
    );

    console.log(filter);
  }

}
