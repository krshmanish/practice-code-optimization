import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.less']
})
export class EmployeeListComponent implements OnInit {
  listData = [
    {
      name: 'Lorem',
      id: '1'
    },
    {
      name: 'Ipsum',
      id: '2'
    },
    {
      name: 'Dolor',
      id: '3'
    },
    {
      name: 'Hayat',
      id: '4'
    },
    {
      name: 'Manogos',
      id: '5'
    },
    {
      name: 'Malibu',
      id: '6'
    }
  ];

  selectedItem: any;
  constructor() {}

  ngOnInit() {}

  onNewValueEmitted(event) {
    const newObj = {
      name: event,
      id: Date.now().toString()
    };
    this.listData.push(newObj);
    console.log(event);
  }

  onDeleteClicked(event) {
    let seletedIndex: number;
    for (let i = 0; i < this.listData.length; i++) {
      if (this.listData[i].id === event.id) {
        seletedIndex = i;
        break;
      }
    }
    this.listData.splice(seletedIndex, 1);
  }

  onEditClicked(event) {
    console.log(event);
  }
}
