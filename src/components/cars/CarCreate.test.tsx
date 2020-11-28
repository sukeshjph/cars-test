import React from "react";
import { shallow } from "enzyme";
import { CarCreate } from "./CarCreate";

describe("Create Car", () => {
  const initialProps = {
    closeDialog: () => undefined,
    handleCreateCar: () => undefined,
    creatingCar: false,
  };

  const wrapper = shallow(<CarCreate {...initialProps} />);

  // let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((init) => [init, setState]);

  // beforeEach(() => {
  //   wrapper = shallow(<TestComponent />);
  // });

  // afterEach(() => {
  //   jest.clearAllMocks();
  // });

  it("Submit button exists", () => {
    expect(wrapper.find(".submitButton")).toBeDefined();
  });

  it("should create car", () => {
    const handleCreateCar = jest.fn();

    const newProps = {
      ...initialProps,
      handleCreateCar,
    };
    const newWrapper = shallow(<CarCreate {...newProps} />);

    newWrapper.find(".submitButton").simulate("click");
    expect(handleCreateCar).toHaveBeenCalled();
  });

  it("No create whne create is in progress", () => {
    const newProps = {
      ...initialProps,
      creatingCar: true,
    };
    const newWrapper = shallow(<CarCreate {...newProps} />);

    expect(newWrapper.find(".submitButton").props().disabled).toBeTruthy();
  });
});
