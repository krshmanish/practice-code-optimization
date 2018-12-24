import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { NameInputComponent } from './name-input/name-input.component';
import { EmployeeListComponent } from './employee-list.component';
import { ClickOutsideDirective } from '../directives/click-outside.directive';

@NgModule({
  declarations: [
    EmployeeListComponent,
    ListComponent,
    NameInputComponent,
    ClickOutsideDirective
  ],
  imports: [CommonModule],
  exports: [EmployeeListComponent]
})
export class EmployeeListModule {}
