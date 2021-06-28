import { DeleteVehicleComponent } from './vehicles/delete-vehicle/delete-vehicle.component';
import { UpdateVehicleComponent } from './vehicles/update-vehicle/update-vehicle.component';
import { CreateVehicleComponent } from './vehicles/create-vehicle/create-vehicle.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'vehicles/create', component: CreateVehicleComponent },
  { path: 'vehicles/update/:id', component: UpdateVehicleComponent },
  { path: 'vehicles/delete/:id', component: DeleteVehicleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
