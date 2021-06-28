import { VehicleService } from './../vehicle.service';
import { CreateVehicle, GetVehicle } from './../vehicle.model';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {

  request: CreateVehicle = {
    placa: '',
    chassi: '',
    renavam: '',
    modelo: '',
    marca: '',
    ano: ''
  };

  response!: GetVehicle;


  constructor(private vehicleService: VehicleService, private location:Location) { }

  ngOnInit() {
  }

  create() {
    this.vehicleService.createVehicle(this.request)
      .subscribe(res => {
        this.response = res;
        alert("Veiculo criado com sucesso!");
      });
  };

  back(): void {
    this.location.back()
  }
}
