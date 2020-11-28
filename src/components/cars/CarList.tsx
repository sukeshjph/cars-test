import React from "react";
import { nanoid } from "nanoid";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { CarColProps } from "./CarColumns";
import { useCarHook } from "./useCarHook";
import Button from "@material-ui/core/Button";
import { CarCreate } from "./CarCreate";
import { CarUpdate } from "./CarUpdate";
import styles from "./Cars.module.scss";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const CarsList = () => {
  const classes = useStyles();
  const {
    state,
    handleShowHideCreateDialog,
    handleCreateCar,
    handleShowHideUpdateDialog,
    handleTableRowClick,
    handleUpdateCar,
  } = useCarHook();
  const {
    allCars,
    carsLoading,
    showCreateCar,
    creatingCar,
    updatingCar,
    showUpdateCar,
    selectedCar,
  } = state;

  return (
    <div>
      <TableContainer component={Paper} style={{ width: "60%" }}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {CarColProps.map((col) => (
                <TableCell>{col.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {carsLoading && <div>Loading cars</div>}

            {!carsLoading &&
              allCars.map((row: any) => (
                <TableRow key={nanoid()} onClick={handleTableRowClick(row)}>
                  {CarColProps.map((col) => (
                    <TableCell scope="row">{row[col.key]}</TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showCreateCar && (
        <CarCreate
          closeDialog={() => handleShowHideCreateDialog(false)}
          handleCreateCar={handleCreateCar}
          creatingCar={creatingCar}
        />
      )}
      {showUpdateCar && (
        <CarUpdate
          closeDialog={() => handleShowHideUpdateDialog(false)}
          handleUpdateCar={handleUpdateCar}
          updatingCar={updatingCar}
          currentCar={selectedCar!}
        />
      )}
      <div className={styles.buttonPanel}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleShowHideCreateDialog(true)}
        >
          Create Car
        </Button>
      </div>
    </div>
  );
};
