import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

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
  searchKey: string;
  pageNo: number;
  filterValue: string;
  pageLimit: number;
  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.searchKey = 'Manish';
    this.pageLimit = 20;
    this.pageNo = 1;
    this.filterValue = null;
    this.getData();
  }

  getData() {
    this.githubService
      .getData(this.searchKey, this.pageNo, this.filterValue, this.pageLimit)
      .subscribe(res => {
        this.listData = res['items'];
      });
  }

  onNewValueEmitted(searchedKey) {
    this.searchKey = searchedKey;
    this.getData();
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
