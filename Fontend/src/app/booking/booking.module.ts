import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookSeatsComponent } from './bookseats/bookseats.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookSeatsComponent],
  imports: [CommonModule, BookingRoutingModule, ReactiveFormsModule],
})
export class BookingModule {}
