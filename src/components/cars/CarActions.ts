import { createAction } from "@reduxjs/toolkit";
import { getAllCars } from "../../helpers/http";
import { ICarType } from "./Cars.type";

export const setError = createAction<string>("setError");
export const removeError = createAction("removeError");

export const setAddSoundState = createAction<Record<string, any>>(
  "setAddSoundState"
);

export const setCarListLoading = createAction<boolean>("setCarListLoading");
export const setCarListLoaded = createAction<ICarType[]>("setCarListLoaded");

export const setCreateSoundDialog = createAction<boolean>(
  "setCreateSoundDialog"
);

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
