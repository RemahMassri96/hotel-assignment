import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HOTELS } from '../mock-hotels';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  hotels = HOTELS;
  selectedHotel = Hotel;
  ngOnInit() { }

  onSelect(hotel: Hotel): void {
    this.selectedHotel = hotel;
  }

}
