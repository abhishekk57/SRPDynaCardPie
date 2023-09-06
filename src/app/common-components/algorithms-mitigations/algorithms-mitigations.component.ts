import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-algorithms-mitigations',
  templateUrl: './algorithms-mitigations.component.html',
  styleUrls: ['./algorithms-mitigations.component.scss'],
})
export class AlgorithmsMitigationsComponent implements OnInit {
  typeVal = '';
  statusValue = '';

  @Output() public type = new EventEmitter();
  @Output() public status = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onControlerChange(event: any): void {
    this.typeVal = event.target.value;
    console.log('onControlerChange ', this.typeVal);
    this.type.emit(event.target.value.toLowerCase());
  }

  onTagChange(event: any): void {
    this.statusValue = event.target.value;
    console.log('onTagChange', this.statusValue);
    this.status.emit(event.target.value.toLowerCase());
  }

  onApplyClick() {
    console.log('onApplyClick');
  }

  onTagClick() {
    console.log('onTagClick');
  }

  onWifiClick() {
    console.log('onWifiClick');
  }

  onRefreshClick() {
    console.log('onRefreshClick');
  }

  onSyncClick() {
    console.log('onSyncClick');
  }

  onSaveClick() {
    console.log('onSaveClick');
  }
}
