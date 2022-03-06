import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightBookService } from '../flight-book.service';
import { Flight } from './flight';

@Component({
  selector: 'app-flightbook',
  templateUrl: './flightbook.component.html',
  styleUrls: ['./flightbook.component.css']
})
export class FlightbookComponent implements OnInit {

  flight!: Flight[];
  minDate!: Date;
  flightForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private flightService: FlightBookService
  ) { }

  ngOnInit(): void {
    this.flightForm = this.fb.group({
      fullName: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      type: ['', Validators.required],
      adults: ['', [Validators.required]],
      departure: ['', Validators.required],
      children: ['', [Validators.required]],
      infants: ['', [Validators.required]],
      arrival: ['', Validators.required],
    });
    this.minDate = new Date();
    this.getFlight();
  }

  getFlight() {
    this.flight = this.flightService.getFlight();
  }

  onSubmit(f: Flight): void {
    this.flightService.addFlight(f);
    this.flightForm.reset();
  }

}
