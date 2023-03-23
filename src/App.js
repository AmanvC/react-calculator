import { useState } from "react";
import "./app.scss";

function App() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [operator, setOperator] = useState("");
  const [exp, setExp] = useState("0");

  const inputNumber = (num) => {
    if (exp === "0") {
      setExp("");
    }
    if (!first && num === "0") {
      return;
    }
    setExp((prev) => prev + num);
    if (!operator) {
      setFirst((prev) => prev + num);
    } else {
      setSecond((prev) => prev + num);
    }
  };

  const inputOperator = (op) => {
    if (!first && op === "-") {
      setFirst(op);
    } else {
      setOperator(op);
    }
    setExp((prev) => prev + " " + op + " ");
  };

  const evaluate = () => {
    if (!first || !second) {
      return;
    }
    const res = eval(
      `${parseFloat(first).toFixed(2)} ${operator} ${parseFloat(second).toFixed(
        2
      )}`
    ).toString();
    setExp(res);
    setFirst(res);
    setOperator("");
    setSecond("");
  };

  const clearAll = () => {
    setFirst("");
    setSecond("");
    setOperator("");
    setExp("0");
  };

  const deleteChar = () => {
    const newExp = exp.slice(0, exp.length - 1);
    const arr = newExp.split(" ");
    if (arr[0]) {
      setFirst(arr[0]);
    } else {
      setFirst("");
    }
    if (arr[1]) {
      setOperator(arr[1]);
    } else {
      setOperator("");
    }
    if (arr[2]) {
      setSecond(arr[2]);
    } else {
      setSecond("");
    }
    setExp(newExp || "0");
  };

  return (
    <div className="app">
      <div className="calculator">
        <div className="result">{exp}</div>
        <div className="options">
          <div className="number" onClick={deleteChar}>
            {" "}
            {"<--"}{" "}
          </div>
          <div className="number" onClick={clearAll}>
            CE
          </div>
          <div className="number" onClick={() => inputOperator("%")}>
            %
          </div>
          <div className="operator" onClick={() => inputOperator("/")}>
            /
          </div>

          <div className="number" onClick={() => inputNumber("7")}>
            7
          </div>
          <div className="number" onClick={() => inputNumber("8")}>
            8
          </div>
          <div className="number" onClick={() => inputNumber("9")}>
            9
          </div>
          <div className="operator" onClick={() => inputOperator("*")}>
            x
          </div>

          <div className="number" onClick={() => inputNumber("4")}>
            4
          </div>
          <div className="number" onClick={() => inputNumber("5")}>
            5
          </div>
          <div className="number" onClick={() => inputNumber("6")}>
            6
          </div>
          <div className="operator" onClick={() => inputOperator("-")}>
            -
          </div>

          <div className="number" onClick={() => inputNumber("1")}>
            1
          </div>
          <div className="number" onClick={() => inputNumber("2")}>
            2
          </div>
          <div className="number" onClick={() => inputNumber("3")}>
            3
          </div>
          <div className="operator" onClick={() => inputOperator("+")}>
            +
          </div>

          <div
            className="number"
            onClick={() => {
              const r = (parseFloat(exp) * -1).toString();
              setExp(r);
              setFirst(r);
            }}
          >
            +/-
          </div>
          <div className="number" onClick={() => inputNumber("0")}>
            0
          </div>
          <div className="number" onClick={() => inputNumber(".")}>
            .
          </div>
          <div className="operator" onClick={evaluate}>
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
