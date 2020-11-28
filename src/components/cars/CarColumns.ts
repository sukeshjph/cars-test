interface IColType {
    key: string;
    label: string;
    show: boolean;
  }

export const CarColProps: IColType[] = [
    {
      key: "id",
      label: "ID",
      show: true,
    },
    {
      key: "make",
      label: "Make",
      show: true,
    },
    {
      key: "model",
      label: "Model",
      show: true,
    },
    {
      key: "colour",
      label: "Colour",
      show: true,
    },
    {
      key: "year",
      label: "Year",
      show: true,
    },
  ];