import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  setValue,
} from "../../features/counter/counterSlice";

function WelcomePage() {
  const val = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <h1 style={{ textAlign: "center" }}>Welcome Page</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          flex: 1,
        }}
      >
        <h1 style={{ margin: "1rem" }}>Current Value = {val}</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
          <Button
            color="primary"
            variant="outlined"
            onClick={() => dispatch(increment())}
          >
            Increment Value by 1
          </Button>
          <Button
            color="primary"
            variant="outlined"
            onClick={() => dispatch(decrement())}
          >
            Decrement by 1
          </Button>
          <Button
            color="primary"
            variant="outlined"
            onClick={() => dispatch(setValue(10))}
          >
            Increment Value by 10
          </Button>
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>Footer</h1>
    </div>
  );
}

export default WelcomePage;
