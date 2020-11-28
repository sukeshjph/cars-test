/* eslint-disable react-hooks/exhaustive-deps */
import useThunkReducer from "react-hook-thunk-reducer";
import { useEffect } from "react";
import * as CarActions from "./CarActions";

import { initialCarState, CarReducer } from "./CarReducer";

export const useCarHook = () => {
  const [state, dispatch] = useThunkReducer(CarReducer, initialCarState);

  const handleRemoveError = () => dispatch(CarActions.removeError());

  const handleShowHideCreateDialog = (value) =>
    dispatch(CarActions.setCreateSoundDialog(value));

  useEffect(() => {
    dispatch(CarActions.getCarsList());
  }, []);

  return {
    state,
    handleRemoveError,
    handleShowHideCreateDialog,
  };
};
