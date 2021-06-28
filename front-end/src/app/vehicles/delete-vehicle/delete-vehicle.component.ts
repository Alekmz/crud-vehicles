import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  GetVehicle } from '../vehicle.model';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-delete-vehicle',
  templateUrl: './delete-vehicle.component.html',
  styleUrls: ['./delete-vehicle.component.css']
})
export class DeleteVehicleComponent implements OnInit {
 
  request!: GetVehicle;

  id!:string;

  constructor(private vehicleService: VehicleService, private route: ActivatedRoute, private location: Location) { }


  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.vehicleService.getVehicleId(this.id).subscribe(res => {
      this.request = {
        id:res.id,
        placa: res.placa,
        chassi: res.chassi,
        renavam: res.renavam,
        modelo: res.modelo,
        marca: res.marca,
        ano: res.ano
      }
    })
  };

  delete() {
    this.vehicleService.deleteVehicle(this.id).subscribe(res => {
      alert("Veiculo removido!")
    })
  }

  back(): void {
    this.location.back()
  };

}
