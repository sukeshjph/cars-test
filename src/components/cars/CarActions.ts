import { createAction } from "@reduxjs/toolkit";
import { getAllCars, createCar, updateCar } from "../../helpers/http";
import { ICarType } from "./Cars.type";

export const setError = createAction<string>("setError");
export const removeError = createAction("removeError");

export const setAddSoundState = createAction<Record<string, any>>(
  "setAddSoundState"
);

export const setCarListLoading = createAction<boolean>("setCarListLoading");
export const setCarListLoaded = createAction<ICarType[]>("setCarListLoaded");

export const setCreateCarDialog = createAction<boolean>("setCreateCarDialog");
export const setUpdateCarDialog = createAction<boolean>("setUpdateCarDialog");

export const setCreatingCar = createAction<boolean>("setCreatingCar");
export const setUpdatingCar = createAction<boolean>("setUpdatingCar");

export const setSelectedCar = createAction<ICarType>("setSelectedCar");

// Thunk like action creator
export const getCarsList = () => {
  return async (dispatch) => {
    dispatch(setCarListLoading(true));

    const result = await getAllCars();
    dispatch(setCarListLoaded(result));

    dispatch(setCarListLoading(false));

    if (result.error) {
      dispatch(setError(result.error));
    }
  };
};

type createProps = {
  inputCar: Omit<ICarType, "id">;
  refreshCars: () => void;
  closeCreate: () => void;
};

export const createInputCar = (props: createProps) => {
  return async (dispatch) => {
    dispatch(setCreatingCar(true));

    const result = await createCar(props.inputCar);
    props.refreshCars();
    props.closeCreate();

    dispatch(setCreatingCar(false));

    if (result.error) {
      dispatch(setError(result.error));
    }
  };
};

type updateCarProps = {
  inputCar: ICarType;
  refreshCars: () => void;
  closeDialog: () => void;
};

export const updateSelectedCar = (props: updateCarProps) => {
  return async (dispatch) => {
    dispatch(setUpdatingCar(true));

    const result = await updateCar(props.inputCar);
    props.refreshCars();
    props.closeDialog();

    dispatch(setUpdatingCar(false));

    if (result.error) {
      dispatch(setError(result.error));
    }
  };
};
