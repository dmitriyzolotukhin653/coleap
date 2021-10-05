export interface VehicleRange {
  unit: string;
  distance: string;
}

export interface VehicleData {
  id: string;
  make: string;
  model: string;
  range: VehicleRange;
  colors: string[];
  price: string;
  photo: string;
}