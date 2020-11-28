import { ICarType } from "../components/cars/Cars.type";

export const getToken = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    username: "notproductionready",
    password: "notproductionready",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  try {
    const response = await fetch(
      "http://localhost:3001/api/auth/token",
      requestOptions
    );
    const data = await response.json();
    return data.token;
  } catch (error) {
    return {
      error: `Failed to load cars: ${error.message}`,
      message: "",
    };
  }
};

export const getAllCars = async () => {
  const freshToken = await getToken();
  const carHeaders = new Headers();
  carHeaders.append("Authorization", `Bearer ${freshToken}`);

  var requestOptions = {
    method: "GET",
    headers: carHeaders,
  };

  let response;
  try {
    response = await fetch("http://localhost:3001/api/cars", requestOptions);
    const cars = await response.json();
    return cars;
  } catch (error) {
    return {
      error: `Failed to load cars: ${error.message}`,
      message: "",
    };
  }
};

export const createCar = async (inputCar: Omit<ICarType, "id">) => {
  const freshToken = await getToken();
  const carHeaders = new Headers();
  carHeaders.append("Authorization", `Bearer ${freshToken}`);
  carHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    headers: carHeaders,
    body: JSON.stringify(inputCar),
  };
  let response;

  try {
    response = await fetch("http://localhost:3001/api/cars", requestOptions);
    const carCreated = await response.json();
    return carCreated;
  } catch (error) {
    return {
      error: `Failed to create car: ${error.message}`,
      message: "",
    };
  }
};

export const updateCar = async (inputCar: ICarType) => {
  const freshToken = await getToken();
  const carHeaders = new Headers();
  carHeaders.append("Authorization", `Bearer ${freshToken}`);
  carHeaders.append("Content-Type", "application/json");

  const { id, ...otherCarProps } = inputCar;

  const requestOptions = {
    method: "PUT",
    headers: carHeaders,
    body: JSON.stringify(otherCarProps),
  };
  let response;

  try {
    response = await fetch(
      `http://localhost:3001/api/cars/${id}`,
      requestOptions
    );
    const carUpdated = await response.json();
    return carUpdated;
  } catch (error) {
    return {
      error: `Failed to update car: ${error.message}`,
      message: "",
    };
  }
};
