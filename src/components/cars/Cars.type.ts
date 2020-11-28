export interface ICarType {
  id: number;
  make: string;
  model: string;
  colour: string;
  year: number;
}

export interface ICarReducer {
  allCars: ICarType[];
  error: string;
  carsLoading: boolean;
  showError: boolean;
  showCreateCar: boolean;
  showUpdateCar: boolean;
  creatingCar: boolean;
  updatingCar: boolean;
  selectedCar: ICarType | null;
}
