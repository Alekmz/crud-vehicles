import { VehicleService } from './../vehicle.service';
import { Component, OnInit } from '@angular/core';
import { CreateVehicle } from '../vehicle.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {

  request: CreateVehicle = {
    placa: '',
    chassi: '',
    renavam: '',
    modelo: '',
    marca: '',
    ano: ''
  };

  id!:string;

  constructor(private vehicleService: VehicleService, private route: ActivatedRoute, private location:Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.vehicleService.getVehicleId(this.id).subscribe(res => {
      this.request = {
        placa: res.placa,
        chassi: res.chassi,
        renavam: res.renavam,
        modelo: res.modelo,
        marca: res.marca,
        ano: res.ano
      }
    })
  }

  update() {
    this.vehicleService.updateVehicle(this.id, this.request)
      .subscribe(res => {
        alert("Carro atualizado com sucesso!");
      })
  }

  back(): void {
    this.location.back()
  }
}
