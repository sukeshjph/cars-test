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
  refetch?: () => void;
  handleCreateCar?: () => void;
  creatingCar?: boolean;
};

export const CarCreate: React.FC<OwnProps> = ({
  closeDialog,
  refetch,
  handleCreateCar,
  creatingCar,
}) => {
  const [car, setCar] = useState<Omit<ICarType, "id">>({
    make: "",
    model: "",
    colour: "",
    year: 2020,
  });

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
        <CustomDialogTitle title="Create Car" closeDialog={closeDialog} />
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
                onClick={handleCreateCar}
                disabled={creatingCar}
              >
                {creatingCar ? "Creating Car" : "Submit"}
              </Button>
            </FormGroup>
          </div>
        </DialogContent>
      </Dialog>
    </Paper>
  );
};
