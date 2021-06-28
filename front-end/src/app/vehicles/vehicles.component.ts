
import { Component, OnInit } from '@angular/core';
import { VehicleService } from './vehicle.service';

import { GetVehicle } from './vehicle.model';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  responseVehicle!: GetVehicle[];

  constructor(private vehicleService: VehicleService) { 
  }

  ngOnInit() {
    this.vehicleService.getVehicles()
      .subscribe(res => this.responseVehicle = res)
      
  }
 

}
