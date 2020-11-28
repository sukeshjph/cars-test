import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { CustomDialogTitle } from "../shared/CustomDialog/CustomDialogTitle";
import TextField from "@material-ui/core/TextField";
import { ICarType } from "./Cars.type";
import styles from "./Cars.module.scss";

type OwnProps = {
  closeDialog: () => void;
  handleUpdateCar: (c: ICarType) => void;
  updatingCar: boolean;
  currentCar: ICarType;
};

export const CarUpdate: React.FC<OwnProps> = ({
  closeDialog,
  handleUpdateCar,
  updatingCar,
  currentCar,
}) => {
  const { id, ...otherCar } = currentCar;

  const [car, setCar] = useState<Omit<ICarType, "id">>(otherCar);

  const updateField = (filedType: string) => (e) => {
    setCar({
      ...car,
      [filedType]: e.target.value,
    });
  };

  return (
    <Paper>
      <Dialog
        open
        onClose={closeDialog}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        maxWidth="md"
      >
        <CustomDialogTitle title="Update Car" closeDialog={closeDialog} />
        <DialogContent>
          <div>
            <FormGroup>
              <FormControl className={styles.formControl}>
                <TextField
                  id="standard-basic"
                  label="Make"
                  value={car.make}
                  onChange={updateField("make")}
                />
              </FormControl>

              <FormControl className={styles.formControl}>
                <TextField
                  id="standard-basic"
                  label="Model"
                  value={car.model}
                  onChange={updateField("model")}
                />
              </FormControl>
              <FormControl className={styles.formControl}>
                <TextField
                  id="standard-basic"
                  label="Colour"
                  value={car.colour}
                  onChange={updateField("colour")}
                />
              </FormControl>
              <FormControl className={styles.formControl}>
                <TextField
                  id="standard-basic"
                  label="Year"
                  value={car.year}
                  onChange={updateField("year")}
                />
              </FormControl>
              <Button
                size="medium"
                onClick={() => handleUpdateCar({ id, ...car })}
                disabled={updatingCar}
              >
                {updatingCar ? "Updating Car" : "Update"}
              </Button>
            </FormGroup>
          </div>
        </DialogContent>
      </Dialog>
    </Paper>
  );
};
