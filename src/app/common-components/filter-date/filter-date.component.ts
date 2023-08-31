
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-filter-date',
  templateUrl: './filter-date.component.html',
  styleUrls: ['./filter-date.component.scss'],
})
export class FilterDateComponent implements OnInit {
  isModalOpen = true;
  typeVal = '';
  statusValue = '';

  constructor() {}

  ngOnInit() {}
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  onChange(event: any): void {
    const newVal = event.target.value;
    console.log('onchange event --', newVal);
  }

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

  getSelectedDate(ev:any){
    console.log("getSelectedDate -------",ev.target.value);
  }
}
