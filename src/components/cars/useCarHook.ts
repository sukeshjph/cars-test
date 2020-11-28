/* eslint-disable react-hooks/exhaustive-deps */
import useThunkReducer from "react-hook-thunk-reducer";
import { useEffect } from "react";
import * as CarActions from "./CarActions";
import { ICarType } from "./Cars.type";

import { initialCarState, CarReducer } from "./CarReducer";

export const useCarHook = () => {
  const [state, dispatch] = useThunkReducer(CarReducer, initialCarState);

  useEffect(() => {
    fetchAllCars();
  }, []);

  const fetchAllCars = () => {
    dispatch(CarActions.getCarsList());
  };

  const handleRemoveError = () => dispatch(CarActions.removeError());

  const handleShowHideCreateDialog = (value) =>
    dispatch(CarActions.setCreateCarDialog(value));

  const handleCreateCar = (inputCar: Omit<ICarType, "id">) =>
    dispatch(
      CarActions.createInputCar({ inputCar, refreshCars: fetchAllCars })
    );

  return {
    state,
    handleRemoveError,
    handleShowHideCreateDialog,
    handleCreateCar,
  };
};
