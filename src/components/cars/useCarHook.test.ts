import { useCarHook } from "./useCarHook";
import { renderHook } from "@testing-library/react-hooks";
import "whatwg-fetch";
import { act } from "react-test-renderer";

describe("useCarHook", () => {
  it("CarList loading", async () => {
    const { result } = renderHook(() => useCarHook());

    expect(result.current.state.carsLoading).toBeTruthy();
  });

  it("CarList loaded", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCarHook());

    await waitForNextUpdate();
    console.log(result.current.state);

    const { allCars, carsLoading } = result.current.state;
    expect(carsLoading).toBeFalsy();
    expect(allCars).toBeDefined();
  });
});
