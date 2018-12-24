import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  @Input() item: any;
  @Output() deleteClicked: EventEmitter<any> = new EventEmitter();
  @Output() editClicked: EventEmitter<any> = new EventEmitter();

  isOptionsShow: boolean;
  constructor() {
    this.isOptionsShow = false;
  }

  ngOnInit() {
  }

  toggleOptions() {
    setTimeout(() => {
      this.isOptionsShow = !this.isOptionsShow;
    }, 100);
  }

  onClick(option: string, item: any) {
    this.isOptionsShow = false;
    switch (option) {
      case 'EDIT':
        this.editClicked.emit(item);
        break;
      case 'DELETE':
        this.deleteClicked.emit(item);
        break;
      default:
        break;
    }
  }
}
