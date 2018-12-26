import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  @Input() item: any;
  @Output() deleteClicked: EventEmitter<any> = new EventEmitter();
  @Output() editClicked: EventEmitter<any> = new EventEmitter();

  itemDetails: any;
  isOptionsShow: boolean;
  isDetailsShow: boolean;
  isAvailable: boolean;
  constructor(private githubService: GithubService) {
    this.isOptionsShow = false;
    this.isDetailsShow = false;
  }


  ngOnInit() {
  }

  getData(url: string) {
    this.githubService.getSelectedData(url).subscribe(res => {
      this.itemDetails = res;
      this.isAvailable = this.itemDetails.length ? true : false;
      this.isDetailsShow = true;
      console.log(this.itemDetails);
    });
  }
  toggleOptions() {
    setTimeout(() => {
      this.isOptionsShow = !this.isOptionsShow;
    }, 100);
  }

  hideDetails() {
    setTimeout(() => {
      this.isDetailsShow = !this.isDetailsShow;
    }, 100);
  }

  onClick(option: string, item: any) {
    this.isOptionsShow = false;
    switch (option) {
      case 'EDIT':
        this.getData(item.repos_url);
        break;
      case 'DELETE':
        this.deleteClicked.emit(item);
        break;
      default:
        break;
    }
  }
}
