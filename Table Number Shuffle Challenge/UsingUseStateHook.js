import "./App.css";
import { useState } from "react";
import Table from "./Table";

function App() {
  const [number, setNumber] = useState({
    type1: 1,
    type2: 2,
    type3: 3,
  });
  const handleClick = (e) => {
    const buttonType = e.target.value;
    switch (buttonType) {
      case "button 1":
        return setNumber((ps) => {
          return {
            ...ps,
            type2: 0,
            type3: 0,
            type1: 1,
          };
        });
      case "button 2":
        return setNumber((ps) => {
          return {
            ...ps,
            type1: 0,
            type3: 0,
            type2: 2,
          };
        });
      case "button 3":
        return setNumber((ps) => {
          return {
            ...ps,
            type1: 0,
            type3: 3,
            type2: 0,
          };
        });
      case "reset":
        return setNumber((ps) => {
          return {
            ...ps,
            type1: 1,
            type3: 3,
            type2: 2,
          };
        });
      default:
        break;
    }
  };
  return (
    <div className="App">
      <table border="1">
        <tr>
          <td>
            <input type="button" value="button 1" onClick={handleClick} />
          </td>

          <td>{number.type1}</td>
          <td>{number.type1}</td>
          <td>{number.type1}</td>
          <td>{number.type1}</td>
        </tr>

        <tr>
          <td>
            <input
              type="button"
              value="button 2"
              onClick={(e) => handleClick(e)}
            />
          </td>

          <td>{number.type1}</td>
          <td>{number.type2}</td>
          <td>{number.type2}</td>
          <td>{number.type2}</td>
        </tr>

        <tr>
          <td>
            <input type="button" value="button 3" onClick={handleClick} />
          </td>
          <td>{number.type1}</td>
          <td>{number.type3}</td>
          <td>{number.type2}</td>
          <td>{number.type3}</td>
        </tr>
        <tr>
          <input
            type="button"
            value="reset"
            onClick={handleClick}
            style={{ width: "185%" }}
          />
        </tr>
      </table>
      <Table />
    </div>
  );
}

export default App;
