import "./App.css";

function Table() {
  const handleClick = (e) => {
    const type1Category = document.getElementsByClassName("type1");
    const type2Category = document.getElementsByClassName("type2");
    const type3Category = document.getElementsByClassName("type3");
    const type1Arr = [...type1Category];
    const type2Arr = [...type2Category];
    const type3Arr = [...type3Category];
    console.log(type1Arr);
    console.log(type2Arr);
    console.log(type3Arr);
    console.log(e.target.value);
    switch (e.target.value) {
      case "button 1":
        type1Arr.forEach((el) => {
          el.innerHTML = "1";
        });
        type2Arr.forEach((el) => {
          el.innerHTML = "0";
        });
        type3Arr.forEach((el) => {
          el.innerHTML = "0";
        });
        break;
      case "button 2":
        type1Arr.forEach((el) => {
          el.innerHTML = "0";
        });
        type2Arr.forEach((el) => {
          el.innerHTML = "2";
        });
        type3Arr.forEach((el) => {
          el.innerHTML = "0";
        });
        break;
      case "button 3":
        type1Arr.forEach((el) => {
          el.innerHTML = "0";
        });
        type2Arr.forEach((el) => {
          el.innerHTML = "0";
        });
        type3Arr.forEach((el) => {
          el.innerHTML = "3";
        });
        break;
      case "reset":
        type1Arr.forEach((el) => {
          el.innerHTML = "1";
        });
        type2Arr.forEach((el) => {
          el.innerHTML = "2";
        });
        type3Arr.forEach((el) => {
          el.innerHTML = "3";
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <h2>table</h2>
      <table border="1">
        <tr>
          <td>
            <input type="button" value="button 1" onClick={handleClick} />
          </td>
          <td className="type1">1</td>
          <td className="type1">1</td>
          <td className="type1">1</td>
          <td className="type3">3</td>
        </tr>

        <tr>
          <td>
            <input
              type="button"
              value="button 2"
              onClick={(e) => handleClick(e)}
            />
          </td>
          <td className="type1">1</td>
          <td className="type2">2</td>
          <td className="type2">2</td>
          <td className="type3">3</td>
        </tr>

        <tr>
          <td>
            <input type="button" value="button 3" onClick={handleClick} />
          </td>
          <td className="type3">3</td>
          <td className="type3">3</td>
          <td className="type1">1</td>
          <td className="type2">2</td>
        </tr>
        <tr>
          <td colSpan="5">
            <input
              type="button"
              value="reset"
              onClick={handleClick}
              style={{ width: "100%" }}
            />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
