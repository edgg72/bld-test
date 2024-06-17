import { useState } from "react";
import "./App.scss";
import { NavBar } from "./components/NavBar/NavBar";
import { SalesCard } from "./components/SalesCard/SalesCard";
import { ButtonGrid } from "./components/ButtonGrid/ButtonGrid";
import { SalesGrid } from "./components/SalesGrid/SalesGrid";
import SalesData from"./data/salesData.json"
import { isDateInRange, isDateSeptember } from "./utils/dateValidator";

const BUTTON_LIST = ["Hoy", "Esta semana", "Septiembre"];
const TODAY = "2024-09-16";

function App() {
  const [currentRangeSelection, setCurrentRangeSelection] = useState("");
  const [salesData, setSalesData] = useState(SalesData)

  const filteredSales = salesData.filter((sale, index) => {
    switch (currentRangeSelection) {
      case BUTTON_LIST[0]:
        return sale.date === TODAY;
        break;
      case BUTTON_LIST[1]:
        return isDateInRange(sale.date)
        break;
      case BUTTON_LIST[2]:
        return isDateSeptember(sale.date);
        break;
      default:
        return sale
        break;
    }
  })

  const onClickHandler = (range) => {
    console.log(range);
    setCurrentRangeSelection(range);
  };

  return (
    <div className="outer-container">
      <NavBar />
      <main className="main">
        <section className="upper-section">
          <SalesCard />
          <ButtonGrid
            buttonList={BUTTON_LIST}
            onClickHandler={onClickHandler}
            currentRangeSelection={currentRangeSelection}
          />
        </section>
        <SalesGrid
          salesData={filteredSales}
          range={currentRangeSelection}
        />
      </main>
    </div>
  );
}

export default App;
