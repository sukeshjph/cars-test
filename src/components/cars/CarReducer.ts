import { createReducer } from "@reduxjs/toolkit";
import * as CarActions from "./CarActions";
import { ICarType, ICarReducer } from "./Cars.type";

export const initialCarState: ICarReducer = {
  allCars: [] as ICarType[],
  error: "",
  carsLoading: false,
  showError: false,
  showCreateCar: false,
  showUpdateCar: false,
  creatingCar: false,
  updatingCar: false,
  deletingCar: false,
  selectedCar: null,
};

export const CarReducer = createReducer(initialCarState, (builder) =>
  builder
    .addCase(CarActions.setError, (state, action) => ({
      ...state,
      showError: true,
      error: action.payload,
    }))
    .addCase(CarActions.setSelectedCar, (state, action) => ({
      ...state,
      selectedCar: action.payload,
    }))
    .addCase(CarActions.setCreateCarDialog, (state, action) => ({
      ...state,
      showCreateCar: action.payload,
    }))
    .addCase(CarActions.setCreatingCar, (state, action) => ({
      ...state,
      creatingCar: action.payload,
    }))
    .addCase(CarActions.setDeletingCar, (state, action) => ({
      ...state,
      deletingCar: action.payload,
    }))
    .addCase(CarActions.setUpdatingCar, (state, action) => ({
      ...state,
      updatingCar: action.payload,
    }))
    .addCase(CarActions.setUpdateCarDialog, (state, action) => ({
      ...state,
      showUpdateCar: action.payload,
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
