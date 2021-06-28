import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CreateVehicleComponent } from './vehicles/create-vehicle/create-vehicle.component';
import { FormsModule } from '@angular/forms';
import { UpdateVehicleComponent } from './vehicles/update-vehicle/update-vehicle.component';
import { DeleteVehicleComponent } from './vehicles/delete-vehicle/delete-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    CreateVehicleComponent,
    UpdateVehicleComponent,
    DeleteVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
