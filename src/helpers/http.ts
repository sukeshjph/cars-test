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
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${freshToken}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
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
