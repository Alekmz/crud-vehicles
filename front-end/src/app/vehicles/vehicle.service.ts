import { GetVehicle, CreateVehicle } from './vehicle.model';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private url = "http://localhost:3000/vehicles";
  // private url = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { };

  
  getVehicles(): Observable<GetVehicle[]> {
    return this.http.get<GetVehicle[]>(this.url);
  };

  createVehicle( request: CreateVehicle): Observable<GetVehicle> {
    let body = new URLSearchParams();
      body.set('placa', request.placa);
      body.set('chassi', request.chassi);
      body.set('renavam', request.renavam);
      body.set('modelo', request.modelo);
      body.set('marca', request.marca);
      body.set('ano', request.ano);
      let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    
      return this.http.post<GetVehicle>(this.url, body.toString(), options);
  };

  getVehicleId(id:string):Observable<GetVehicle> {
    const urlId = `${this.url}/${id}`;
    return this.http.get<GetVehicle>(urlId);
  };

  updateVehicle(id:string, request: CreateVehicle): Observable<GetVehicle> {
    const urlId = `${this.url}/${id}`;
    let body = new URLSearchParams();
      body.set('placa', request.placa);
      body.set('chassi', request.chassi);
      body.set('renavam', request.renavam);
      body.set('modelo', request.modelo);
      body.set('marca', request.marca);
      body.set('ano', request.ano);
      let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.put<GetVehicle>(urlId, body.toString(), options);
  };

  deleteVehicle(id: string): Observable<any> {
    const urlId = `${this.url}/${id}`;
    return this.http.delete<any>(urlId);
  }

}
