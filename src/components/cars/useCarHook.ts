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

  const handleTableRowClick = (row: ICarType) => () => {
    dispatch(CarActions.setSelectedCar(row));
    handleShowHideUpdateDialog(true);
  };

  const handleShowHideCreateDialog = (value) =>
    dispatch(CarActions.setCreateCarDialog(value));

  const handleShowHideUpdateDialog = (value) =>
    dispatch(CarActions.setUpdateCarDialog(value));

  const handleCreateCar = (inputCar: Omit<ICarType, "id">) =>
    dispatch(
      CarActions.createInputCar({
        inputCar,
        refreshCars: fetchAllCars,
        closeCreate: () => handleShowHideCreateDialog(false),
      })
    );

  const handleUpdateCar = (inputCar: ICarType) =>
    dispatch(
      CarActions.updateSelectedCar({
        inputCar,
        refreshCars: fetchAllCars,
        closeDialog: () => handleShowHideUpdateDialog(false),
      })
    );

  return {
    state,
    handleRemoveError,
    handleShowHideCreateDialog,
    handleShowHideUpdateDialog,
    handleCreateCar,
    handleTableRowClick,
    handleUpdateCar,
  };
};
