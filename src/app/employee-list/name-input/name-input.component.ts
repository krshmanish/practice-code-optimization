import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.less']
})
export class NameInputComponent implements OnInit {
  @Output() newValue: EventEmitter<string> = new EventEmitter();
  private searchKey: Subject<string> = new Subject();

  constructor() {}

  ngOnInit() {
    this.searchKey.pipe(debounceTime(500)).subscribe(res => {
      if (res.trim()) {
        this.newValue.emit(res);
      }
    });
  }

  onKeyUp(event: any) {
    this.searchKey.next(event);
  }
}
