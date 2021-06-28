//Get
export interface GetVehicle {
    id: number;
    placa: string;
    chassi: string;
    renavam: string;
    modelo: string;
    marca: string;
    ano: string;
}

//CREATE AND UPDATE AND DELETE
export interface CreateVehicle {
    placa: string;
    chassi: string;
    renavam: string;
    modelo: string;
    marca: string;
    ano: string;
}
