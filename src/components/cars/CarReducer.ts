import { createReducer } from "@reduxjs/toolkit";
import * as CarActions from "./CarActions";
import { ICarType } from "./Cars.type";

export const initialCarState = {
  allCars: [] as ICarType[],
  error: "",
  carsLoading: false,
  showError: false,
  showCreateCar: false,
  creatingCar: false,
};

export const CarReducer = createReducer(initialCarState, (builder) =>
  builder
    .addCase(CarActions.setError, (state, action) => ({
      ...state,
      showError: true,
      error: action.payload,
    }))
    .addCase(CarActions.setCreateCarDialog, (state, action) => ({
      ...state,
      showCreateCar: action.payload,
    }))
    .addCase(CarActions.setCarListLoading, (state, action) => ({
      ...state,
      carsLoading: action.payload,
    }))
    .addCase(CarActions.setCarListLoaded, (state, action) => ({
      ...state,
      allCars: action.payload,
    }))
    .addCase(CarActions.removeError, (state) => ({
      ...state,
      showError: false,
      error: "",
    }))
);
