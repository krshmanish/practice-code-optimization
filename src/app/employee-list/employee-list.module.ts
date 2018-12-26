import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { NameInputComponent } from './name-input/name-input.component';
import { EmployeeListComponent } from './employee-list.component';
import { ClickOutsideDirective } from '../directives/click-outside.directive';
import { GithubService } from '../services/github.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    EmployeeListComponent,
    ListComponent,
    NameInputComponent,
    ClickOutsideDirective
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [EmployeeListComponent],
  providers: [GithubService]
})
export class EmployeeListModule {}
